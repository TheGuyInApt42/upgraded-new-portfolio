/**
 * Lead storage in Cloudflare D1 (binding name: DB).
 * Replaces the old Supabase `leads` table, which kept pausing on the free plan.
 *
 * Never throws: a storage hiccup shouldn't break a form. Returns true if saved.
 */
const COLUMNS = [
	'form_type',
	'name',
	'email',
	'phone',
	'company',
	'website',
	'selected_plan',
	'message',
	'grade',
	'score',
	'details'
];

export async function saveLead(platform, lead) {
	const db = platform?.env?.DB;
	if (!db) {
		console.error('saveLead: no D1 binding named DB. Check wrangler.toml (local) or Pages → Settings → Bindings (live).');
		return false;
	}

	const cols = COLUMNS.filter((c) => lead[c] !== undefined && lead[c] !== null && lead[c] !== '');
	const values = cols.map((c) => {
		const v = lead[c];
		if (c === 'details' && typeof v !== 'string') return JSON.stringify(v);
		if (c === 'score') return Number.isFinite(Number(v)) ? Number(v) : null;
		return String(v).slice(0, 5000);
	});

	try {
		await db
			.prepare(`INSERT INTO leads (${cols.join(', ')}) VALUES (${cols.map(() => '?').join(', ')})`)
			.bind(...values)
			.run();
		return true;
	} catch (err) {
		console.error('saveLead failed:', err?.message || err);
		return false;
	}
}
