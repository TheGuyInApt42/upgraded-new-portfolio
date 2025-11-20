import fetchPosts from '$lib/assets/js/fetchPosts';
import { postsPerPage } from '$lib/config';

export const load = async ({ url, fetch }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const offset = page * postsPerPage - postsPerPage;

	const [totalRes, postsData] = await Promise.all([
		fetch(`${url.origin}/api/posts/count`),
		fetchPosts({ offset, limit: postsPerPage })
	]);

	const total = await totalRes.json();
	const { posts } = postsData;

	return { posts, total, page };
};
