import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async () => {
	// Fetch ALL posts (no limit) to get accurate category counts
	const { posts } = await fetchPosts({ limit: -1 });

	let uniqueCategories = {};

	posts.forEach((post) => {
		// Ensure categories is an array
		const categories = Array.isArray(post.categories) ? post.categories : [];

		categories.forEach((category) => {
			// Ensure category is a string and not empty
			if (category && typeof category === 'string') {
				if (uniqueCategories.hasOwnProperty(category)) {
					uniqueCategories[category].count += 1;
				} else {
					uniqueCategories[category] = {
						title: category,
						count: 1
					};
				}
			}
		});
	});

	const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) =>
		a.title.localeCompare(b.title)
	);

	return {
		uniqueCategories: sortedUniqueCategories
	};
};
