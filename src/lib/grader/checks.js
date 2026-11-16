/**
 * Site grader: runs on Cloudflare's edge (no Node APIs, no headless browser).
 *
 * Two halves, on purpose:
 *   gradeSite(url)        → network work (fetch the homepage + PageSpeed). Returns compact
 *                           "findings": which checks passed, plus a few metrics.
 *   buildReport(findings) → pure. Turns findings into grades, category rows and a
 *                           prioritized fix list. Used by the server AND the page.
 *
 * Only findings travel between the two form steps (as a hidden field). All the wording
 * a prospect or I see is rebuilt from the CHECKS table below, so nothing typed into
 * that hidden field can end up in an email.
 */

export class GraderError extends Error {}

const FETCH_TIMEOUT_MS = 12000;
const PAGESPEED_TIMEOUT_MS = 45000;
const MAX_HTML_CHARS = 1_500_000;
const USER_AGENT =
	'Mozilla/5.0 (compatible; GorhamWebConsulting-SiteGrader/1.0; +https://gorhamwebconsulting.com/grade)';

// ─────────────────────────────────────────────
// Categories and checks (the wording lives here)
// ─────────────────────────────────────────────

export const CATEGORIES = [
	{ key: 'speed', label: 'Mobile speed', weight: 25 },
	{ key: 'mobile', label: 'Mobile-friendly', weight: 20 },
	{ key: 'google', label: 'Google basics', weight: 20 },
	{ key: 'contact', label: 'Easy to contact', weight: 20 },
	{ key: 'booking', label: 'Booking or quote path', weight: 15 }
];

/**
 * weight   → share of its category's score
 * priority → order in the fix list (higher = fix first)
 */
export const CHECKS = {
	speedFast: {
		category: 'speed',
		weight: 1,
		priority: 9,
		pass: 'Loads quickly on phones',
		title: 'Your site loads slowly on phones',
		why: 'Most visitors are on a phone, and many leave if a page takes more than a few seconds.',
		fix: 'Compress and resize images, remove unused plugins and scripts, and use faster hosting.'
	},
	viewport: {
		category: 'mobile',
		weight: 3,
		priority: 10,
		pass: 'Set up to fit phone screens',
		title: "Your site isn't set up for phone screens",
		why: 'Without a mobile viewport, phones show a shrunken desktop page that people have to pinch and zoom.',
		fix: 'Use a responsive layout with a proper viewport tag, or rebuild the site mobile-first.'
	},
	legibleText: {
		category: 'mobile',
		weight: 1,
		priority: 5,
		pass: 'Text is readable on phones',
		title: 'Some text is too small to read on a phone',
		why: 'If people have to zoom to read, most of them just leave.',
		fix: 'Use a base font size of at least 16px and avoid tiny text in menus and footers.'
	},
	https: {
		category: 'google',
		weight: 3,
		priority: 10,
		pass: 'Secure (HTTPS)',
		title: 'Browsers mark your site "Not secure"',
		why: 'Chrome warns visitors on sites without HTTPS, and Google favors secure sites.',
		fix: 'Turn on an SSL certificate (often free through your host) and redirect every page to https://.'
	},
	title: {
		category: 'google',
		weight: 2,
		priority: 6,
		pass: 'Has a clear page title for Google',
		title: "Your homepage title doesn't tell Google much",
		why: 'The page title is the blue link people see on Google. Missing or vague titles get fewer clicks.',
		fix: 'Use something like "Your Business | What You Do in Your Town", under 60 characters.'
	},
	metaDescription: {
		category: 'google',
		weight: 1,
		priority: 4,
		pass: 'Has a Google search description',
		title: 'No description for Google search results',
		why: 'Without one, Google picks random text from your page to show under your link.',
		fix: 'Add a 1–2 sentence meta description that says what you do, where, and how to reach you.'
	},
	h1: {
		category: 'google',
		weight: 1,
		priority: 3,
		pass: 'Has a main headline',
		title: 'Your homepage has no main headline',
		why: 'A clear headline tells visitors and Google what the page is about in one glance.',
		fix: 'Add one main heading near the top that says what you do and where.'
	},
	seoScore: {
		category: 'google',
		weight: 2,
		priority: 5,
		pass: 'Passes basic search checks',
		title: 'Your site misses some basic search checks',
		why: 'The search check found problems that can hold your site back in Google results.',
		fix: 'Fix the flagged items: link text, image descriptions, crawlable links and similar basics.'
	},
	localSchema: {
		category: 'google',
		weight: 1,
		priority: 4,
		pass: 'Tells Google your business details',
		title: "Your site doesn't give Google your business details",
		why: 'Structured business info helps Google show your hours, address and phone right in search.',
		fix: 'Add LocalBusiness structured data with your name, address, phone and hours.'
	},
	freshCopyright: {
		category: 'google',
		weight: 1,
		priority: 2,
		pass: 'Looks recently updated',
		title: 'Your site looks like it was last updated years ago',
		why: 'An old copyright year makes people wonder if you are still in business.',
		fix: "Update the footer year (or make it automatic) and refresh any outdated info."
	},
	tapToCall: {
		category: 'contact',
		weight: 3,
		priority: 9,
		pass: 'Phone number is tap-to-call',
		title: "Your phone number isn't tap-to-call",
		why: "On a phone, people expect to tap your number. If they can't, many won't bother copying it.",
		fix: 'Make every phone number a tap-to-call link, and put one at the top of the page.'
	},
	contactForm: {
		category: 'contact',
		weight: 2,
		priority: 7,
		pass: 'Has a contact form or contact page',
		title: 'No easy way to message you from the site',
		why: 'Some customers would rather send a message than call, especially after hours.',
		fix: 'Add a short contact form (name, phone or email, message) that goes straight to your inbox.'
	},
	hoursOrAddress: {
		category: 'contact',
		weight: 1,
		priority: 5,
		pass: 'Shows hours or location',
		title: "Your hours and location aren't on the homepage",
		why: 'People want to know if you are open and nearby before they call.',
		fix: 'List your hours and service area (or address) on the homepage and in the footer.'
	},
	bookingCta: {
		category: 'booking',
		weight: 2,
		priority: 8,
		pass: 'Has a clear "book" or "get a quote" button',
		title: 'No clear "book now" or "get a quote" button',
		why: "If the next step isn't obvious, visitors leave to find a business that makes it easy.",
		fix: 'Add one clear button near the top: "Book an appointment" or "Get a free estimate."'
	},
	bookingTool: {
		category: 'booking',
		weight: 1,
		priority: 6,
		pass: 'Customers can book or request a quote online',
		title: "Customers can't book or request a quote online",
		why: 'Online booking and quote forms catch customers after hours, when you cannot answer the phone.',
		fix: 'Add online booking or a quote-request form that texts or emails you each new request.'
	}
};

// ─────────────────────────────────────────────
// URL handling
// ─────────────────────────────────────────────

export function normalizeUrl(input) {
	let raw = String(input || '').trim();
	if (!raw) throw new GraderError('Enter your website address.');
	if (raw.length > 300) throw new GraderError('That address looks too long. Try just your homepage.');
	const hadProtocol = /^https?:\/\//i.test(raw);
	if (!hadProtocol) raw = `https://${raw}`;

	let url;
	try {
		url = new URL(raw);
	} catch {
		throw new GraderError("That doesn't look like a website address. Try something like yourbusiness.com.");
	}
	if (!['http:', 'https:'].includes(url.protocol)) {
		throw new GraderError('Enter a regular website address that starts with http or https.');
	}
	const host = url.hostname.toLowerCase();
	const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.includes(':');
	if (
		!host.includes('.') ||
		isIp ||
		host === 'localhost' ||
		/\.(local|internal|localhost|lan|home|corp)$/.test(host)
	) {
		throw new GraderError("That doesn't look like a public website address.");
	}
	url.hash = '';
	return { url: url.toString(), hadProtocol };
}

async function fetchWithTimeout(url, ms, init = {}, fetchImpl = fetch) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), ms);
	try {
		return await fetchImpl(url, { ...init, signal: controller.signal });
	} finally {
		clearTimeout(timer);
	}
}

async function fetchHomepage(url, hadProtocol, fetchImpl) {
	const attempt = async (target) => {
		const res = await fetchWithTimeout(
			target,
			FETCH_TIMEOUT_MS,
			{ redirect: 'follow', headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,*/*' } },
			fetchImpl
		);
		const type = res.headers.get('content-type') || '';
		if (!res.ok) throw new GraderError(`blocked:${res.status}`);
		if (type && !type.includes('html')) throw new GraderError('not-html');
		const html = (await res.text()).slice(0, MAX_HTML_CHARS);
		return { html, finalUrl: res.url || target };
	};

	try {
		return await attempt(url);
	} catch (err) {
		// Typed "example.com" and HTTPS isn't set up at all? Try plain HTTP before giving up.
		if (!hadProtocol && url.startsWith('https://')) {
			try {
				return await attempt(url.replace(/^https:/, 'http:'));
			} catch {
				/* fall through to the friendly error below */
			}
		}
		if (err instanceof GraderError && err.message === 'not-html') {
			throw new GraderError("That address didn't return a web page. Try your homepage address.");
		}
		throw new GraderError(
			"I couldn't load that site. It may be down, or blocking automated checks. Double-check the address, or send it to me and I'll look by hand."
		);
	}
}

async function fetchPageSpeed(url, apiKey, fetchImpl) {
	const params = new URLSearchParams({ url, strategy: 'mobile' });
	params.append('category', 'performance');
	params.append('category', 'seo');
	if (apiKey) params.set('key', apiKey);
	try {
		const res = await fetchWithTimeout(
			`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`,
			PAGESPEED_TIMEOUT_MS,
			{},
			fetchImpl
		);
		if (!res.ok) return null;
		const data = await res.json();
		const lh = data?.lighthouseResult;
		if (!lh) return null;
		const pct = (v) => (typeof v === 'number' ? Math.round(v * 100) : null);
		const lcpMs = lh.audits?.['largest-contentful-paint']?.numericValue;
		const fontAudit = lh.audits?.['font-size'];
		return {
			performance: pct(lh.categories?.performance?.score),
			seo: pct(lh.categories?.seo?.score),
			lcp: typeof lcpMs === 'number' ? Math.round(lcpMs / 100) / 10 : null,
			legibleText:
				fontAudit && typeof fontAudit.score === 'number' && fontAudit.scoreDisplayMode !== 'notApplicable'
					? fontAudit.score >= 0.9
					: null
		};
	} catch {
		return null; // speed just shows as "couldn't measure"
	}
}

// ─────────────────────────────────────────────
// HTML checks (regex over raw HTML: no rendered DOM on the edge)
// ─────────────────────────────────────────────

const BOOKING_DOMAINS = [
	'calendly.com', 'acuityscheduling.com', 'squareup.com/appointments', 'square.site', 'book.squareup.com',
	'booksy.com', 'vagaro.com', 'schedulicity.com', 'setmore.com', 'styleseat.com', 'fresha.com',
	'mindbodyonline.com', 'glossgenius.com', 'opentable.com', 'resy.com', 'toasttab.com',
	'housecallpro.com', 'getjobber.com', 'clienthub.getjobber.com', 'servicetitan.com',
	'simplybook.me', 'youcanbook.me', 'zocdoc.com', 'tidycal.com', 'appointy.com', 'booking.com',
	'yelp.com/reservations', 'tockhq.com', 'exploretock.com', 'doordash.com', 'ubereats.com', 'grubhub.com',
	'chownow.com', 'slicelife.com'
];

const BOOKING_CTA =
	/\b(book (now|online|today|an? (appointment|visit|service|consultation|table))|schedule (now|online|an? (appointment|visit|service|consultation|estimate)|today)|request (an? )?(appointment|quote|estimate|service|consultation)|get (an? |your )?(free )?(quote|estimate|consultation)|free (quote|estimate)|order (online|now)|reserve (now|a table|online)|make (an? )?(appointment|reservation))\b/i;

/** Strip scripts/styles/tags so text checks don't match code. */
function visibleText(html) {
	return html
		.replace(/<script[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style[\s\S]*?<\/style>/gi, ' ')
		.replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;|&#160;/gi, ' ')
		.replace(/&amp;/gi, '&')
		.replace(/\s+/g, ' ')
		.trim();
}

export function runHtmlChecks(html, finalUrl, now = new Date()) {
	const text = visibleText(html);
	const lower = html.toLowerCase();

	const viewportTag = html.match(/<meta[^>]+name=["']?viewport["']?[^>]*>/i)?.[0] || '';
	const titleText = visibleText(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
	const metaDesc =
		html.match(/<meta[^>]+name=["']?description["']?[^>]*content=["']([^"']*)["']/i)?.[1] ||
		html.match(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']?description["']?/i)?.[1] ||
		'';

	// Copyright: the newest year mentioned next to ©/copyright. No year at all = don't judge.
	const copyrightYears = [...text.matchAll(/(?:©|&copy;|copyright)\s*(?:\d{4}\s*[-–]\s*)?(\d{4})/gi)].map((m) =>
		Number(m[1])
	);
	const newestYear = copyrightYears.length ? Math.max(...copyrightYears) : null;

	const hasHours =
		/\b(mon|tue|wed|thu|fri|sat|sun)[a-z]*\.?\s*(-|–|to|through|&|,)?\s*.{0,25}?\d{1,2}(:\d{2})?\s*(am|pm|a\.m\.|p\.m\.)/i.test(
			text
		) || /\b(hours|open 24\/7|open daily|business hours)\b/i.test(text);
	const hasAddress =
		/\b\d{1,5}\s+[a-z0-9.\s]{2,30}\b(st|street|ave|avenue|rd|road|blvd|boulevard|ln|lane|dr|drive|pl|place|pkwy|parkway|hwy|highway|ct|court|way)\b/i.test(
			text
		) || /\b(serving|service area|located in)\b/i.test(text);

	const hasForm = /<form[\s\S]*?(type=["']?(email|tel)["']?|<textarea)[\s\S]*?<\/form>/i.test(html);
	const hasContactLink = /<a[^>]+href=["'][^"']*contact[^"']*["']/i.test(html);
	const hasBookingDomain = BOOKING_DOMAINS.some((d) => lower.includes(d));
	const hasBookingCta = BOOKING_CTA.test(text) || /<(a|button)[^>]*>\s*(book|schedule|get a quote|get quote|estimate)\b/i.test(html);
	const hasQuoteForm = hasForm && /(quote|estimate|appointment|booking|service needed|preferred date)/i.test(html);
	// A "Get an estimate" button that leads to its own page almost always has the form there.
	const hasBookingLink = /<a[^>]+href=["'][^"']*(book|schedul|appointment|quote|estimate|reserv|order-online|order\/)[^"']*["']/i.test(
		html
	);

	return {
		viewport: /width\s*=\s*device-width/i.test(viewportTag),
		https: finalUrl.startsWith('https://'),
		title: titleText.length >= 10 && titleText.length <= 70,
		metaDescription: metaDesc.trim().length >= 50,
		h1: /<h1[\s>][\s\S]*?\S[\s\S]*?<\/h1>/i.test(html),
		localSchema: /"@type"\s*:\s*\[?\s*"[a-z]*(LocalBusiness|Store|Restaurant|Dentist|Physician|AutoRepair|HairSalon|BeautySalon|Plumber|Electrician|RoofingContractor|HomeAndConstructionBusiness|GeneralContractor|ProfessionalService|LegalService|AutomotiveBusiness|FoodEstablishment|HealthAndBeautyBusiness|MedicalBusiness)"/i.test(
			html
		),
		freshCopyright: newestYear === null ? null : newestYear >= now.getFullYear() - 1,
		tapToCall: /href=["']?tel:/i.test(html),
		contactForm: hasForm || hasContactLink,
		hoursOrAddress: hasHours || hasAddress,
		bookingCta: hasBookingCta || hasBookingDomain,
		bookingTool: hasBookingDomain || hasQuoteForm || hasBookingLink
	};
}

// ─────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────

export async function gradeSite(input, { pagespeedKey, fetchImpl = fetch, now = new Date() } = {}) {
	const { url, hadProtocol } = normalizeUrl(input);

	const [page, ps] = await Promise.all([
		fetchHomepage(url, hadProtocol, fetchImpl),
		fetchPageSpeed(url, pagespeedKey, fetchImpl)
	]);

	const results = runHtmlChecks(page.html, page.finalUrl, now);
	results.speedFast = ps?.performance == null ? null : ps.performance >= 50;
	results.legibleText = ps?.legibleText ?? null;
	results.seoScore = ps?.seo == null ? null : ps.seo >= 90;

	return {
		url,
		finalUrl: page.finalUrl,
		checkedAt: now.toISOString(),
		results,
		metrics: {
			performance: ps?.performance ?? null,
			seo: ps?.seo ?? null,
			lcp: ps?.lcp ?? null
		}
	};
}

export function letterFor(score) {
	if (score == null) return '–';
	if (score >= 90) return 'A';
	if (score >= 80) return 'B';
	if (score >= 70) return 'C';
	if (score >= 60) return 'D';
	return 'F';
}

const num = (v, min, max) => (typeof v === 'number' && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : null);

/** Accepts findings from gradeSite() or from the hidden form field. Throws on junk. */
export function sanitizeFindings(f) {
	if (!f || typeof f !== 'object') throw new GraderError('Missing results. Please grade your site again.');
	const url = typeof f.url === 'string' && f.url.length <= 300 ? f.url : null;
	if (!url) throw new GraderError('Missing results. Please grade your site again.');
	const { url: safeUrl } = normalizeUrl(url);
	const finalUrl = typeof f.finalUrl === 'string' && /^https?:\/\//.test(f.finalUrl) ? f.finalUrl.slice(0, 300) : safeUrl;

	const results = {};
	for (const id of Object.keys(CHECKS)) {
		const v = f.results?.[id];
		results[id] = v === true || v === false ? v : null;
	}
	return {
		url: safeUrl,
		finalUrl,
		checkedAt: typeof f.checkedAt === 'string' ? f.checkedAt.slice(0, 40) : '',
		results,
		metrics: {
			performance: num(f.metrics?.performance, 0, 100),
			seo: num(f.metrics?.seo, 0, 100),
			lcp: num(f.metrics?.lcp, 0, 120)
		}
	};
}

export function buildReport(rawFindings) {
	const findings = sanitizeFindings(rawFindings);
	const { results, metrics } = findings;

	const categories = CATEGORIES.map((cat) => {
		const ids = Object.keys(CHECKS).filter((id) => CHECKS[id].category === cat.key);
		const measured = ids.filter((id) => results[id] !== null);
		let score = null;
		if (cat.key === 'speed') {
			// Use the real PageSpeed number rather than pass/fail, so 45 and 5 don't look the same.
			score = metrics.performance;
		} else if (measured.length) {
			const total = measured.reduce((s, id) => s + CHECKS[id].weight, 0);
			const got = measured.filter((id) => results[id]).reduce((s, id) => s + CHECKS[id].weight, 0);
			score = Math.round((got / total) * 100);
		}
		return {
			...cat,
			score,
			grade: letterFor(score),
			checks: ids.map((id) => ({ id, label: CHECKS[id].pass, pass: results[id] }))
		};
	});

	const scored = categories.filter((c) => c.score !== null);
	const weightSum = scored.reduce((s, c) => s + c.weight, 0);
	const overall = weightSum ? Math.round(scored.reduce((s, c) => s + c.score * c.weight, 0) / weightSum) : null;

	const issues = Object.entries(CHECKS)
		.filter(([id]) => results[id] === false)
		.map(([id, c]) => {
			let why = c.why;
			if (id === 'speedFast' && metrics.performance != null) {
				why = `Your site scored ${metrics.performance} out of 100 for mobile speed${
					metrics.lcp ? `, and the main content takes about ${metrics.lcp} seconds to show up` : ''
				}. ${c.why}`;
			}
			return { id, category: c.category, title: c.title, why, fix: c.fix, priority: c.priority };
		})
		.sort((a, b) => b.priority - a.priority);

	return {
		url: findings.url,
		finalUrl: findings.finalUrl,
		host: new URL(findings.finalUrl).hostname.replace(/^www\./, ''),
		score: overall,
		grade: letterFor(overall),
		categories,
		issues,
		metrics,
		findings
	};
}
