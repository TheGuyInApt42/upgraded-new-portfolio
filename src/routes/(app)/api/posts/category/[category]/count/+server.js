import { getTotalPostsCountByCategory } from '$lib/assets/js/getTotalPostsCountByCategory';

export const GET = async ({ params, url }) => {
	const { category } = params;

	try {
		const count = await getTotalPostsCountByCategory(category, url.origin);
		return new Response(JSON.stringify(count), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.error('Error fetching count:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};
