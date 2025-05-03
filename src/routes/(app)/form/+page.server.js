import { fail } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit';

export const actions = {
    sendForm: async ({ request }) => {
        const formData = await request.formData()
        console.log(formData);

        fetch(
            "https://getform.io/f/66705066-7c22-49c2-9059-0f2a80bc9789", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json",
                },
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error(`An error occurred: ${response.statusText}`);
            }
            console.log(response);
            
        })
        .catch(error => {
            console.log(error);
        });
    }
}