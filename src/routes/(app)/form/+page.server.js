import { fail } from '@sveltejs/kit';
import { GOOGLE_APPS_SCRIPT_URL } from '$env/static/private';

export const actions = {
	sendForm: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData); // Converts FormData to { name: '...', email: '...' }

		try {
			const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
				method: 'POST',
				body: JSON.stringify(data), // Sending as JSON
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
