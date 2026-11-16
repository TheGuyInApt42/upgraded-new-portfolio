/**
 * Where a visitor came from, for lead tracking.
 * Links you share carry ?ref=facebook, ?ref=gbp, ?ref=outreach, etc. (utm_source also works).
 * The first ref seen in a visit is kept for the rest of that visit, so someone who lands on a
 * blog post from Facebook and then clicks over to /grade still counts as "facebook".
 */
const KEY = 'gwc_ref';
const VALID = /^[a-z0-9_-]{1,40}$/i;

export function cleanRef(value) {
	const v = String(value ?? '').trim().toLowerCase();
	return VALID.test(v) ? v : '';
}

/** Call on every page load (browser only). Saves the first ref of the visit. */
export function captureLeadSource(url) {
	try {
		const fromUrl = cleanRef(url.searchParams.get('ref') || url.searchParams.get('utm_source'));
		if (fromUrl && !sessionStorage.getItem(KEY)) sessionStorage.setItem(KEY, fromUrl);
	} catch {
		/* storage blocked: tracking is optional */
	}
}

/** The ref for this visit: the current URL's, else the first one saved this visit. */
export function getLeadSource(url) {
	const fromUrl = cleanRef(url?.searchParams.get('ref') || url?.searchParams.get('utm_source'));
	if (fromUrl) return fromUrl;
	try {
		return cleanRef(sessionStorage.getItem(KEY));
	} catch {
		return '';
	}
}
