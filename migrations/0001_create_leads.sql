-- Every form on the site (contact, question, interest, site grader) saves here.
CREATE TABLE IF NOT EXISTS leads (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	created_at TEXT NOT NULL DEFAULT (datetime('now')),
	form_type TEXT NOT NULL,
	name TEXT,
	email TEXT,
	phone TEXT,
	company TEXT,
	website TEXT,
	selected_plan TEXT,
	message TEXT,
	grade TEXT,
	score INTEGER,
	details TEXT -- JSON (grader findings)
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
