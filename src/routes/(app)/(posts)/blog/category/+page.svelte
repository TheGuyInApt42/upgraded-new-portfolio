<script>
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	export let data;
	const { uniqueCategories } = data;

	// Find the highest count for relative sizing
	$: highestCount = Math.max(...uniqueCategories.map((cat) => cat.count), 1);

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'Blog Categories | GWC',
		description:
			'Browse blog posts by category. Find articles on web design, small business strategies, digital marketing, and more.',
		url: '/blog/category',
		keywords: ['blog categories', 'gorham web consulting blog categories', 'blog topics'],
		searchUrl: '/blog/category'
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

		<div class="relative mx-auto max-w-4xl px-6 pt-28 text-center md:px-8 lg:pt-32">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
			>
				Browse Topics
			</span>
			<h1
				class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
			>
				Blog Categories
			</h1>
			<p
				class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70 md:text-lg lg:text-xl"
			>
				Explore articles organized by topic to find exactly what you're looking for.
			</p>
		</div>
	</section>

	<!-- Categories Section -->
	<section
		class="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black md:py-24"
	>
		<div class="mx-auto max-w-7xl px-6 md:px-8">
			{#if uniqueCategories && uniqueCategories.length > 0}
				<div class="flex flex-wrap gap-4 justify-center">
					{#each uniqueCategories as category}
						{@const sizeMultiplier = Math.max(0.75, category.count / highestCount)}
						{@const fontSize = `${0.875 + sizeMultiplier * 0.5}rem`}
						<a
							href="/blog/category/{category.title}"
							class="group relative inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-md transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-emerald-400/60 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-100 dark:focus-visible:ring-offset-slate-900"
							style="font-size: {fontSize}"
						>
							<span>{category.title}</span>
							<span
								class="inline-flex items-center justify-center rounded-full bg-slate-200/80 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-white/20 dark:text-white/70"
							>
								{category.count}
							</span>
						</a>
					{/each}
				</div>
			{:else}
				<div class="text-center py-12">
					<p class="text-slate-600 dark:text-white/70">No categories found.</p>
				</div>
			{/if}
		</div>
	</section>
</main>
