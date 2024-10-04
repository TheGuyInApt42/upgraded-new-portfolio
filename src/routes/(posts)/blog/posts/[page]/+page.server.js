import { redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ fetch, params }) => {
	const page = parseInt(params.page) || 1;

	// Redirect to main blog page if page is 1 or less
	if (page <= 1) {
		throw redirect(301, '/blog');
	}

	let offset = page * postsPerPage - postsPerPage;

	const [totalPostsRes, { posts }] = await Promise.all([
		fetch('/api/posts/count'),
		fetchPosts({ offset, page })
	]);

	const total = await totalPostsRes.json();

	return {
		posts,
		page,
		totalPosts: total
	};
};
