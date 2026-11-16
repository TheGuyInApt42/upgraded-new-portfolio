-- Per-IP hit log used by $lib/server/rateLimit.js (site grader). IPs are stored hashed, rows older than 24h are pruned on each check.
CREATE TABLE IF NOT EXISTS rate_limits (
	action TEXT NOT NULL,
	ip_hash TEXT NOT NULL,
	ts INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_rate_limits_lookup ON rate_limits (action, ip_hash, ts);
