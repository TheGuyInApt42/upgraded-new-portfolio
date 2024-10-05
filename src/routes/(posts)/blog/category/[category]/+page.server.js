import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ params }) => {
	const category = params.category;
	const page = params.page || 1;
	const options = { category, limit: -1 };
	const { posts } = await fetchPosts(options);

	return {
		posts,
		category,
		page,
		total: posts.length
	};
};

/* from other page.server.js that gemini suggested
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
*/

/* from other page.server.js
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ url, params, fetch }) => {
	const page = parseInt(params.page) || 1;
	const { category } = params;

	// Prevents duplication of page 1 as the index page
	if (page <= 1) {
		throw redirect(301, `/blog/category/${category}`);
	}

	let offset = page * postsPerPage - postsPerPage;

	const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
	if (!totalPostsRes.ok) {
		throw new Error('Failed to fetch total posts count');
	}
	const total = await totalPostsRes.json();
	const { posts } = await fetchPosts({ offset, page });
	if (!posts) {
		throw new Error('Failed to fetch posts');
	}

	return {
		posts,
		page,
		category,
		totalPosts: total
	};
}; */
