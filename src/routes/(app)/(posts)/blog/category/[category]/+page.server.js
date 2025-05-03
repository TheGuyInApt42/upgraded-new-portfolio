import fetchPosts from '$lib/assets/js/fetchPosts';
import { postsPerPage } from '$lib/config';
import { browser } from '$app/environment';

const getCacheKey = (category, page) => `posts-${category}-page-${page}`;
const cacheDuration = 1000 * 60 * 5; // 5 minutes

export const load = async ({ fetch, params, url }) => {
	const { category } = params;
	const page = parseInt(url.searchParams.get('page') || '1');
	const offset = page * postsPerPage - postsPerPage;
	const cacheKey = getCacheKey(category, page);

	console.log('Loading category:', category, 'page:', page, 'offset:', offset);

	let cachedData;

	// Check if running in the browser
	if (browser) {
		cachedData = localStorage.getItem(cacheKey);
	}

	if (cachedData) {
		const cacheData = JSON.parse(cachedData);

		if (cacheData && Date.now() - cacheData.timestamp < cacheDuration) {
			console.log(`Serving cached posts for category: ${category}`);
			return cacheData;
		}
	}

	try {
		// Logging API endpoints
		console.log(`Fetching count from: /api/posts/category/${category}/count`);
		console.log('Fetching posts with:', { category, offset, page });

		const [totalPostsRes, postsData] = await Promise.all([
			fetch(`/api/posts/category/${category}/count`),
			fetchPosts({ category, offset, limit: postsPerPage })
		]);

		// Log the responses
		const total = await totalPostsRes.json();
		console.log('Total posts response:', total);
		console.log('Posts data:', postsData);

		// Validate total
		if (typeof total !== 'number') {
			console.error('Total posts count is not a number:', total);
			throw new Error('Invalid total posts count');
		}

		if (!postsData?.posts) {
			console.error('Invalid posts data returned:', postsData);
			throw new Error('Invalid posts data structure');
		}

		const { posts } = postsData;

		if (!Array.isArray(posts)) {
			console.error('Expected posts to be an array but got:', posts);
			throw new Error('Expected posts to be an array');
		}

		const result = {
			posts: postsData.posts,
			page,
			category,
			totalPosts: total,
			timestamp: Date.now() // Add timestamp for cache expiry
		};

		// Cache the result in local storage
		if (browser) {
			localStorage.setItem(cacheKey, JSON.stringify(result));
		}
		return result;
	} catch (error) {
		console.error('Error loading posts for category:', category, error);
		return {
			posts: [],
			page,
			category,
			totalPosts: 0,
			error: error instanceof Error ? error.message : 'Unknown error occurred'
		};
	}
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
