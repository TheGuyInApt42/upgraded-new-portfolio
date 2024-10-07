export const getTotalPostsCountByCategory = async (category, baseUrl) => {
	// Use the provided base URL or default to an absolute URL
	const url = baseUrl ? `${baseUrl}/api/posts.json` : '/api/posts.json';

	const res = await fetch(url);

	if (!res.ok) {
		console.error('Failed to fetch posts:', res.status);
		throw new Error('Error fetching posts');
	}
	const posts = await res.json();

	return posts.filter((post) => post.categories.includes(category)).length;
};
