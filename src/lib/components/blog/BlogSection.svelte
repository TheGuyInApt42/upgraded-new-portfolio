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

<section
	class="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 py-20 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white md:py-24 lg:py-32"
>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -top-24 left-12 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20"
		></div>
		<div
			class="absolute bottom-[-140px] right-1/4 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/15"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-6 pt-28 md:px-8 lg:pt-32">
		<div class="mb-16 text-center">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
			>
				Blog
			</span>
			<h2
				class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
			>
				Latest from the Blog
			</h2>
			<p
				class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70 md:text-lg lg:text-xl"
			>
				Stay updated with our latest articles and insights
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#if loading}
				<div class="col-span-3 text-center">
					<p class="text-slate-600 dark:text-white/70">Loading posts...</p>
				</div>
			{:else if error}
				<div class="col-span-3 text-center">
					<p class="text-red-600 dark:text-red-400">Error: {error}</p>
				</div>
			{:else if posts.length === 0}
				<div class="col-span-3 text-center">
					<p class="text-slate-600 dark:text-white/70">No posts found.</p>
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
				class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold uppercase text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
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
