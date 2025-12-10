import { fail, redirect } from '@sveltejs/kit';

const GOOGLE_APPS_SCRIPT_URL =
	'https://script.google.com/macros/s/AKfycbxI_PabpT9iBuIHKAAcpZqUsq86-KTXl6s_JY-Nyye_YZ1vioKyezaZPNqtdtMM0Vtc/exec';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const payload = Object.fromEntries(formData);

		try {
			const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				redirect: 'follow', // Apps Script does a redirect
				body: JSON.stringify(payload)
			});

			const result = await response.json();
			console.log('Apps Script response:', result);

			return { success: true, message: 'Form submitted successfully!' };
		} catch (error) {
			console.error('Error submitting form:', error);
			return fail(500, { success: false, message: 'Failed to submit form.' });
		}
	}
};
