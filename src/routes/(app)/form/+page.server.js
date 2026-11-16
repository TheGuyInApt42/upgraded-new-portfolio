import { fail } from '@sveltejs/kit';
import { GOOGLE_APPS_SCRIPT_URL } from '$env/static/private';
import { saveLead } from '$lib/server/leads.js';
import { addContactToBrevo, BREVO_LISTS } from '$lib/server/brevo.js';

// Main site contact form (/contact page and the homepage contact section).
// Sends to the Google Sheet as before, and now also to D1 and the Brevo general-leads list.
export const actions = {
	sendForm: async ({ request, platform }) => {
		const formData = await request.formData();
		const payload = {
			name: formData.get('name'),
			email: formData.get('email'),
			question: formData.get('question'),
			service_interest: formData.get('service_interest'),
			budget_range: formData.get('budget_range'),
			website: formData.get('website') || '',
			timeline: formData.get('timeline') || ''
		};

		const [sheet, saved, brevo] = await Promise.allSettled([
			fetch(GOOGLE_APPS_SCRIPT_URL, {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: { 'Content-Type': 'application/json' }
			}).then((r) => r.json()),
			saveLead(platform, {
				form_type: 'contact',
				name: payload.name,
				email: payload.email,
				website: payload.website,
				selected_plan: payload.service_interest,
				message: payload.question,
				details: { budget_range: payload.budget_range, timeline: payload.timeline }
			}),
			payload.email
				? addContactToBrevo({
						email: String(payload.email).trim().toLowerCase(),
						attributes: { FIRSTNAME: payload.name, FORM_TYPE: 'contact' },
						listIds: [BREVO_LISTS.general]
					})
				: Promise.reject(new Error('no email'))
		]);

		if (sheet.status === 'rejected') console.error('Google Sheet error:', sheet.reason);
		if (brevo.status === 'rejected') console.error('Brevo error:', brevo.reason);

		const delivered = sheet.status === 'fulfilled' || saved.value === true || brevo.status === 'fulfilled';
		if (!delivered) return fail(500, { message: 'Failed to send.' });
		return { success: true, result: sheet.status === 'fulfilled' ? sheet.value : null };
	}
};
