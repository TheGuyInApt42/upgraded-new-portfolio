import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { saveLead } from '$lib/server/leads.js';
import { gradeSite, buildReport, GraderError } from '$lib/grader/checks.js';
import { cleanRef } from '$lib/utils/leadSource.js';
import { allowRequest } from '$lib/server/rateLimit.js';

// Form actions can't be prerendered.
export const prerender = false;

// Optional Cloudflare env vars (Settings → Environment variables):
//   PAGESPEED_API_KEY   same Google key the lead scanner uses (without it, speed often shows "–")
//   GRADER_NOTIFY_EMAIL where new grader leads get sent to you
//   GRADER_FROM_EMAIL   sender for both emails; must be a verified sender in Brevo
const OWNER_EMAIL = 'jarrod@gorhamwebconsulting.com';
const SITE = 'https://gorhamwebconsulting.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const esc = (s) =>
	String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export const actions = {
	// Step 1: grade the site. The grade and category letters show for free.
	grade: async (event) => {
		const { request } = event;
		const data = await request.formData();
		if (data.get('website')) return { stage: 'graded', bot: true }; // honeypot
		const url = clean(data.get('url'), 300);
		const ref = cleanRef(data.get('ref'));

		// Each grade costs a PageSpeed call plus fetches; cap per IP so it can't be hammered.
		if (!(await allowRequest(event, 'grade', { limit: 10 }))) {
			return fail(429, {
				stage: 'error',
				url,
				error: "You've run the maximum number of reports for this hour. Try again later, or email me and I'll run it for you."
			});
		}

		try {
			const findings = await gradeSite(url, { pagespeedKey: env.PAGESPEED_API_KEY });
			return { stage: 'graded', findings, ref };
		} catch (err) {
			const message =
				err instanceof GraderError ? err.message : 'Something went wrong checking that site. Please try again.';
			if (!(err instanceof GraderError)) console.error('Grader error:', err);
			return fail(400, { stage: 'error', url, error: message });
		}
	},

	// Step 2: email unlocks the full fix list, and I get notified to follow up.
	report: async (event) => {
		const { request, platform } = event;
		const data = await request.formData();
		if (data.get('website')) return { stage: 'report', bot: true }; // honeypot

		// This action sends emails, so it gets a tighter cap than grading.
		if (!(await allowRequest(event, 'report', { limit: 5 }))) {
			return fail(429, {
				stage: 'error',
				error: "Too many requests from your connection. Please try again in an hour, or email me directly."
			});
		}

		const name = clean(data.get('name'), 100);
		const email = clean(data.get('email'), 200).toLowerCase();
		const business = clean(data.get('business'), 150);
		const ref = cleanRef(data.get('ref'));

		let report;
		try {
			report = buildReport(JSON.parse(String(data.get('findings') || '')));
		} catch {
			return fail(400, { stage: 'error', error: 'Your results expired. Please grade your site again.' });
		}

		if (!name || !EMAIL_RE.test(email)) {
			return fail(400, {
				stage: 'graded',
				findings: report.findings,
				name,
				email,
				business,
				error: 'Please enter your first name and a valid email.'
			});
		}

		const topIssues = report.issues.slice(0, 3).map((i) => i.title);
		const summary = `Site grader: ${report.url} scored ${report.grade} (${report.score ?? '–'}/100). ${
			report.issues.length
		} issues. Top: ${topIssues.join('; ') || 'none'}`;

		// Same D1 leads table as the contact form.
		await saveLead(platform, {
			form_type: 'site-grader',
			source: ref,
			name,
			email,
			company: business || report.host,
			website: report.url,
			grade: report.grade,
			score: report.score,
			message: summary,
			details: report.findings
		});

		const results = await Promise.allSettled([
			addContactToBrevo({ name, email, company: business || report.host }),
			sendEmail({
				to: env.GRADER_NOTIFY_EMAIL || OWNER_EMAIL,
				subject: `New grader lead: ${report.host} (${report.grade})`,
				html: ownerEmailHtml({ name, email, business, report, ref }),
				replyTo: { email, name }
			}),
			sendEmail({
				to: email,
				toName: name,
				subject: `Your website report card: ${report.grade} for ${report.host}`,
				html: prospectEmailHtml({ name, report }),
				replyTo: { email: env.GRADER_NOTIFY_EMAIL || OWNER_EMAIL, name: 'Jarrod' }
			})
		]);
		results.forEach((r) => r.status === 'rejected' && console.error('Grader follow-up failed:', r.reason));

		// The page shows the full report either way; a lost email shouldn't cost them the results.
		return { stage: 'report', findings: report.findings, name };
	}
};

// ─────────────────────────────────────────────
// Brevo
// ─────────────────────────────────────────────

async function addContactToBrevo({ name, email, company }) {
	const res = await fetch('https://api.brevo.com/v3/contacts', {
		method: 'POST',
		headers: { 'api-key': env.BREVO_API_KEY, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email,
			attributes: { FIRSTNAME: name, COMPANY: company, FORM_TYPE: 'site-grader' },
			listIds: [15], // general leads list
			updateEnabled: true
		})
	});
	if (!res.ok) throw new Error(`Brevo contact ${res.status}: ${await res.text()}`);
}

async function sendEmail({ to, toName, subject, html, replyTo }) {
	const res = await fetch('https://api.brevo.com/v3/smtp/email', {
		method: 'POST',
		headers: { 'api-key': env.BREVO_API_KEY, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			sender: { email: env.GRADER_FROM_EMAIL || OWNER_EMAIL, name: 'Jarrod at Gorham Web Consulting' },
			to: [{ email: to, ...(toName ? { name: toName } : {}) }],
			replyTo,
			subject,
			htmlContent: html
		})
	});
	if (!res.ok) throw new Error(`Brevo email ${res.status}: ${await res.text()}`);
}

// ─────────────────────────────────────────────
// Email bodies (plain, readable in any inbox)
// ─────────────────────────────────────────────

function categoryRows(report) {
	return report.categories
		.map(
			(c) =>
				`<tr><td style="padding:6px 12px 6px 0">${esc(c.label)}</td><td style="padding:6px 0;font-weight:700">${esc(
					c.grade
				)}</td></tr>`
		)
		.join('');
}

function issueList(report) {
	if (!report.issues.length) return '<p>No major problems found. Nice work.</p>';
	return `<ol style="padding-left:20px">${report.issues
		.map(
			(i) =>
				`<li style="margin-bottom:14px"><strong>${esc(i.title)}</strong><br>${esc(i.why)}<br><em>Fix:</em> ${esc(
					i.fix
				)}</li>`
		)
		.join('')}</ol>`;
}

function prospectEmailHtml({ name, report }) {
	return `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1e293b;max-width:600px">
<p>Hi ${esc(name)},</p>
<p>Here's the report card for <strong>${esc(report.host)}</strong>. Overall grade: <strong style="font-size:20px">${esc(
		report.grade
	)}</strong>${report.score != null ? ` (${report.score}/100)` : ''}.</p>
<table style="border-collapse:collapse;margin:8px 0 16px">${categoryRows(report)}</table>
<h3 style="margin:24px 0 8px">What to fix first</h3>
${issueList(report)}
<p>This was the automated check. I'll also take a quick look at your site myself and follow up within 24 hours with what I'd fix first. If you have a question before then, just reply to this email.</p>
<p>If you want the full picture, my <a href="${SITE}/website-audit">$299 website audit</a> is me going through your site by hand: a phone walkthrough, a form and booking test, and how you compare to your top local competitor. If we work together, the full $299 is credited to your account.</p>
<p>Jarrod<br>Gorham Web Consulting · Mount Vernon, NY</p>
</div>`;
}

function ownerEmailHtml({ name, email, business, report, ref }) {
	return `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1e293b;max-width:600px">
<p><strong>${esc(name)}</strong> (${esc(email)})${business ? `, ${esc(business)}` : ''} just graded
<a href="${esc(report.finalUrl)}">${esc(report.host)}</a>: <strong>${esc(report.grade)}</strong>${
		report.score != null ? ` (${report.score}/100)` : ''
	}.</p>
<p>Source: <strong>${esc(ref || 'direct / unknown')}</strong></p>
<p>They were promised a personal follow-up within 24 hours. Reply to this email to answer them directly.</p>
<table style="border-collapse:collapse;margin:8px 0 16px">${categoryRows(report)}</table>
${issueList(report)}
<p style="color:#64748b;font-size:13px">PageSpeed mobile: ${report.metrics.performance ?? 'n/a'} · SEO: ${
		report.metrics.seo ?? 'n/a'
	} · LCP: ${report.metrics.lcp ?? 'n/a'}s</p>
</div>`;
}
