export const prerender = true;
export const GET = async ({ fetch, url }) => {
	try {
		const res = await fetch(`${url.origin}/api/posts.json`);

		if (!res.ok) {
			return new Response('Failed to fetch posts', { status: 500 });
		}

		const posts = await res.json();
		const uniqueCategories = {};

		posts.forEach((post) => {
			post.categories.forEach((category) => {
				if (uniqueCategories.hasOwnProperty(category)) {
					uniqueCategories[category].count += 1;
				} else {
					uniqueCategories[category] = {
						title: category,
						count: 1
					};
				}
			});
		});

		const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) =>
			a.title.localeCompare(b.title)
		);

		return new Response(JSON.stringify(sortedUniqueCategories), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.error(error);
		return new Response('Internal Server Error', { status: 500 });
	}
};
