<script>
	import { onMount } from 'svelte';
	import BlogPostCard from './BlogPostCard.svelte';

	let posts = [];
	let loading = true;
	let error = null;

	onMount(async () => {
		try {
			const response = await fetch('/api/posts.json');
			if (!response.ok) throw new Error('Failed to fetch posts');
			const allPosts = await response.json();
			// Get only the latest 3 posts and format the data
			posts = allPosts.slice(0, 3).map((post) => ({
				...post,
				formattedDate: new Date(post.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				}),
				imageUrl: post.coverImage || '/placeholder.jpg'
			}));
		} catch (e) {
			error = e.message;
		} finally {
			loading = false;
		}
	});
</script>

<section class="bg-white py-24 dark:bg-black">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
				Latest from the Blog
			</h2>
			<p class="mt-4 text-xl text-gray-600 dark:text-gray-400">
				Stay updated with our latest articles and insights
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#if loading}
				<div class="col-span-3 text-center">
					<p class="text-gray-600 dark:text-gray-400">Loading posts...</p>
				</div>
			{:else if error}
				<div class="col-span-3 text-center">
					<p class="text-red-600 dark:text-red-400">Error: {error}</p>
				</div>
			{:else if posts.length === 0}
				<div class="col-span-3 text-center">
					<p class="text-gray-600 dark:text-gray-400">No posts found.</p>
				</div>
			{:else}
				{#each posts as post}
					<BlogPostCard
						title={post.title}
						excerpt={post.excerpt}
						date={post.formattedDate}
						imageUrl={post.imageUrl}
						slug={post.slug}
					/>
				{/each}
			{/if}
		</div>

		<div class="mt-12 text-center">
			<a
				href="/blog"
				data-sveltekit-preload-data
				class="inline-flex items-center rounded-full bg-teal-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-teal-700 dark:bg-amber-500 dark:hover:bg-amber-600"
			>
				View All Posts
				<svg
					class="ml-2 h-5 w-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</section>
