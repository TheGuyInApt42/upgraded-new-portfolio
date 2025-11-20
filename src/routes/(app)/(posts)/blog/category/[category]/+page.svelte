<!-- Renders any page at /blog/category/* -->
<!-- Renders posts listed by category -->
<script>
	import PostsList from '@components/posts-list/PostsList.svelte';
	import Pagination from '@components/pagination/Pagination.svelte';
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import { postsPerPage } from '$lib/config';

	export let data;

	const { page, posts, category, totalPosts } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);

	// Format category name for display (capitalize first letter of each word)
	$: formattedCategory = category
		? category
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ')
		: '';

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	$: metaData = {
		title: `Blog Category: ${formattedCategory || category || 'Category'} | GWC`,
		description: `Browse all blog posts in the ${formattedCategory || category || 'this'} category. Find expert advice and insights.`,
		url: `/blog/category/${category || ''}`,
		keywords: category ? [`${category} blog`, `${category}`, 'blog posts'] : ['blog posts'],
		searchUrl: `/blog/category/${category || ''}`
	};
	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<main>
	<!-- Hero Section -->
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

		<div class="relative mx-auto max-w-4xl px-6 pt-28 md:px-8 lg:pt-32">
			<div class="text-center">
				<!-- Back Link -->
				<a
					href="/blog/category"
					class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-4 w-4"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
					Back to Categories
				</a>

				<span
					class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
				>
					Category
				</span>
				<h1
					class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
				>
					{formattedCategory}
				</h1>
				{#if posts && posts.length}
					<p
						class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70 md:text-lg lg:text-xl"
					>
						Showing posts {lowerBound}–{upperBound} of {totalPosts}
					</p>
				{/if}
			</div>
		</div>
	</section>

	<!-- Posts Section -->
	{#if posts && posts.length}
		<section
			class="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black md:py-24"
		>
			<div class="mx-auto max-w-7xl px-6 md:px-8">
				<!-- Top Pagination -->
				<div class="mb-8">
					<Pagination
						currentPage={page}
						{totalPosts}
						baseUrl={`/blog/category/${category}`}
						urlParam="page"
					/>
				</div>

				<!-- Posts List -->
				<PostsList {posts} />

				<!-- Bottom Pagination -->
				<div class="mt-12">
					<Pagination
						currentPage={page}
						{totalPosts}
						baseUrl={`/blog/category/${category}`}
						urlParam="page"
					/>
				</div>
			</div>
		</section>
	{:else}
		<!-- Empty State -->
		<section
			class="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black md:py-24"
		>
			<div class="mx-auto max-w-4xl px-6 text-center md:px-8">
				<div
					class="rounded-3xl border border-slate-200/80 bg-white/85 p-12 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30"
				>
					<h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
						No Posts Found
					</h2>
					<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
						Sorry, there are no posts in the <strong
							class="font-semibold text-slate-900 dark:text-white">{formattedCategory}</strong
						> category yet.
					</p>
					<div class="mt-8 flex flex-wrap justify-center gap-4">
						<a
							href="/blog"
							class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold uppercase text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
						>
							View All Posts
						</a>
						<a
							href="/blog/category"
							class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-base font-semibold uppercase text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15 dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
						>
							Browse Categories
						</a>
					</div>
				</div>
			</div>
		</section>
	{/if}
</main>
