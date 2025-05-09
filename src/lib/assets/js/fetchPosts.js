//lib/assets/js/fetchPosts.js
import { postsPerPage } from '$lib/config';

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			try {
				const { metadata } = await resolver();
				const slug = path.split('/').pop().slice(0, -3);
				return { ...metadata, slug };
			} catch (error) {
				console.error(`Error loading post at ${path}:`, error);
				return null; // Skip this post on error
			}
		})
	).then((results) => results.filter(Boolean)); // Filter out null posts

	let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories?.includes(category));
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	if (limit && limit < sortedPosts.length && limit !== -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		coverWidth: post.coverWidth,
		coverHeight: post.coverHeight,
		date: post.date,
		categories: post.categories
	}));

	return {
		posts: sortedPosts
	};
};

export default fetchPosts;
