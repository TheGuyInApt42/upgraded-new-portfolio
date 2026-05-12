export const actions = {
	sendForm: async ({ request }) => {
		const formData = await request.formData();

		try {
			const response = await fetch('https://forminit.com/f/66705066-7c22-49c2-9059-0f2a80bc9789', {
				method: 'POST',
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			});

			if (!response.ok) {
				return fail(response.status, { message: 'Network response was not ok' });
			}

			// Optional: return success to the UI
			return { success: true };
		} catch (error) {
			console.error('Form submission error:', error);
			return fail(500, { message: 'Could not send form.' });
		}
	}
};
