import { fail, redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY);

const GOOGLE_APPS_SCRIPT_URL =
	'https://script.google.com/macros/s/AKfycbwoPk85ladSNis7GhgBXONQGwHTQRa5RwWL0OEFB_iuZkDtRJw5fJTN4ppTZRZPDkbK/exec';

// Load customer info when page loads
export async function load({ url }) {
	const sessionId = url.searchParams.get('session_id');

	if (!sessionId) {
		return { customer: null };
	}

	try {
		const session = await stripe.checkout.sessions.retrieve(sessionId, {
			expand: ['customer_details']
		});

		return {
			customer: {
				name: session.customer_details?.name || '',
				email: session.customer_details?.email || '',
				sessionId
			}
		};
	} catch (error) {
		console.error('Error fetching Stripe session:', error);
		return { customer: null };
	}
}

export const actions = {
	default: async ({ request }) => {
		console.log('Using URL:', GOOGLE_APPS_SCRIPT_URL);
		const formData = await request.formData();
		const payload = {
			name: formData.get('name'),
			email: formData.get('email'),
			website: formData.get('website'),
			frustration: formData.get('frustration'),
			competitors: formData.get('competitors'),
			stripeSessionId: formData.get('sessionId') || ''
		};

		console.log('Sending to Google Sheets:', payload);

		try {
			const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				redirect: 'follow',
				body: JSON.stringify(payload)
			});

			return { success: true, message: 'Form submitted successfully!' };
		} catch (error) {
			console.error('Error submitting form:', error);
			return fail(500, { success: false, message: 'Failed to submit form.' });
		}
	}
};
