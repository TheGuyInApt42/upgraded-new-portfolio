<script>
	import HeadTags from '@components/head-tags/HeadTags.svelte';

	export let data;
	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;

	// Format dates for display
	$: formattedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	$: formattedUpdated = updated
		? new Date(updated).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		: null;

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: `${title} | GWC Blog`,
		description: excerpt,
		keywords: categories || [],
		url: `/blog/${data.meta.slug}`
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	{#if coverImage}
		<meta property="og:image" content={coverImage} />
	{/if}
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
</svelte:head>

<HeadTags {metaData} />

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
			<!-- Back Link -->
			<a
				href="/blog"
				class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-white/90 dark:hover:text-white"
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
				Back to Blog
			</a>

			<!-- Article Header -->
			<header class="mb-12">
				{#if categories?.length}
					<div class="mb-4 flex flex-wrap gap-2">
						{#each categories as category}
							<a
								href="/blog/category/{category}"
								class="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
							>
								{category}
							</a>
						{/each}
					</div>
				{/if}

				<h1
					class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
				>
					{title}
				</h1>

				<div
					class="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-white/90"
				>
					<time datetime={date} class="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-4 w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-4 0A2.25 2.25 0 0017.25 21H6.75a2.25 2.25 0 01-2.25-2.25m-1.5 0V9.375a2.25 2.25 0 012.25-2.25h13.5a2.25 2.25 0 012.25 2.25v9.375m-1.5 0A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25"
							/>
						</svg>
						Published: {formattedDate}
					</time>
					{#if updated && updated !== date}
						<time datetime={updated} class="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-4 w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
							Updated: {formattedUpdated}
						</time>
					{/if}
				</div>
			</header>
		</div>
	</section>

	<!-- Cover Image -->
	{#if coverImage}
		<section
			class="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-8 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black"
		>
			<div class="mx-auto max-w-5xl px-6 md:px-8">
				<div
					class="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30"
				>
					<img
						class="w-full object-cover"
						src={coverImage}
						alt="Cover image for {title}"
						style="aspect-ratio: {coverWidth} / {coverHeight};"
						width={coverWidth}
						height={coverHeight}
						loading="eager"
					/>
				</div>
			</div>
		</section>
	{/if}

	<!-- Article Content -->
	<article
		class="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black md:py-24"
	>
		<div class="mx-auto max-w-4xl px-6 md:px-8">
			<div
				class="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-white/95 prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-white prose-code:text-emerald-600 dark:prose-code:text-emerald-400 prose-li:text-slate-700 dark:prose-li:text-white/95 prose-blockquote:text-slate-700 dark:prose-blockquote:text-white/95"
			>
				<svelte:component this={PostContent} />
			</div>

			<!-- Categories Footer -->
			{#if categories?.length}
				<footer
					class="mt-16 rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30"
				>
					<h2 class="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Posted in:</h2>
					<div class="flex flex-wrap gap-3">
						{#each categories as category}
							<a
								href="/blog/category/{category}"
								class="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 dark:border-white/30 dark:bg-white/10 dark:text-white/95 dark:hover:border-emerald-400/60 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-100"
							>
								{category}
							</a>
						{/each}
					</div>
				</footer>
			{/if}
		</div>
	</article>
</main>
