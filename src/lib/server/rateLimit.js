/**
 * Per-IP rate limiting backed by Cloudflare D1 (binding name: DB, table: rate_limits).
 * Complements the Cloudflare dashboard rule, which only catches bursts: this caps
 * slow, steady use over an hour.
 *
 * IPs are stored as SHA-256 hashes, never raw. Rows older than 24h are pruned on each check.
 * Fails open (allows the request) if D1 is missing or errors, same as saveLead(), so a
 * storage hiccup never takes the form down.
 *
 * Returns true if the request is allowed, false if the caller is over the limit.
 */
export async function allowRequest(event, action, { limit, windowMs = 60 * 60 * 1000 }) {
	const db = event.platform?.env?.DB;
	if (!db) return true;

	try {
		const ip =
			event.request.headers.get('cf-connecting-ip') ||
			(() => {
				try {
					return event.getClientAddress();
				} catch {
					return 'unknown';
				}
			})();

		const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
		const ipHash = [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

		const now = Date.now();
		const row = await db
			.prepare('SELECT COUNT(*) AS n FROM rate_limits WHERE action = ? AND ip_hash = ? AND ts > ?')
			.bind(action, ipHash, now - windowMs)
			.first();

		if ((row?.n ?? 0) >= limit) return false;

		await db.prepare('INSERT INTO rate_limits (action, ip_hash, ts) VALUES (?, ?, ?)').bind(action, ipHash, now).run();
		await db.prepare('DELETE FROM rate_limits WHERE ts < ?').bind(now - 24 * 60 * 60 * 1000).run();
		return true;
	} catch (err) {
		console.error('allowRequest failed (allowing request):', err?.message || err);
		return true;
	}
}
