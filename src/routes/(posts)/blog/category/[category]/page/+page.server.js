import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const categories = await fetch('/api/categories'); // Adjust to your actual API endpoint
	const categoryList = await categories.json();

	if (categoryList.length > 0) {
		// Redirect to the first available category
		redirect(301, `/blog/category/${categoryList[0].name}`);
	} else {
		// Handle no categories available
		return { status: 404, body: { message: 'No categories available' } };
	}
};
