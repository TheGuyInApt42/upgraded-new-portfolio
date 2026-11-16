import { env } from '$env/dynamic/private';

/** Brevo list IDs */
export const BREVO_LISTS = {
	general: 15, // general leads: main site contact form + site grader
	landscaping: 5 // landscaping page forms
};

/** Adds or updates a contact. Throws with Brevo's message on failure. */
export async function addContactToBrevo({ email, attributes = {}, listIds }) {
	const clean = Object.fromEntries(Object.entries(attributes).filter(([, v]) => v !== undefined && v !== null && v !== ''));
	const res = await fetch('https://api.brevo.com/v3/contacts', {
		method: 'POST',
		headers: { 'api-key': env.BREVO_API_KEY, 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, attributes: clean, listIds, updateEnabled: true })
	});
	if (!res.ok) throw new Error(`Brevo contact ${res.status}: ${await res.text()}`);
}
