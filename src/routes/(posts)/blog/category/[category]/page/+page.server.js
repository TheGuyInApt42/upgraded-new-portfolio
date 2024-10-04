import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const categories = await fetch('/api/categories'); // Adjust to your actual API endpoint
	const categoryList = await categories.json();

	if (url.pathname === '/blog' || url.pathname === '/blog/page') {
		if (categoryList.length > 0) {
			throw redirect(301, `/blog/category/${categoryList[0].name}`);
		} else {
			return { status: 404, body: { message: 'No categories available' } };
		}
	} else {
		// For other routes under /blog, just return the category list
		return { categoryList };
	}
};
