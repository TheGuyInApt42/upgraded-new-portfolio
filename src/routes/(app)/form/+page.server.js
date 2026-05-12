import { fail } from '@sveltejs/kit';
import { GOOGLE_APPS_SCRIPT_URL } from '$env/static/private';

export const actions = {
	sendForm: async ({ request }) => {
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

		try {
			const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
				method: 'POST',
				body: JSON.stringify(payload), // Sending as JSON
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const result = await response.json();
			return { success: true, result };
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Failed to send.', error });
		}
	}
};
