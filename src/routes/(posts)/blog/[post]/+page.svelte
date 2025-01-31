<script>
	export let data;
	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative top-28 lg:top-[120px]">
		<article class="max-w-4xl mx-auto mb-12 md:mb-16">
			<header class="mb-8">
				<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-6 dark:text-white">{title}</h1>
				<img
					class="w-full rounded-lg shadow-lg"
					src={coverImage}
					alt="Cover image for {title}"
					style="aspect-ratio: {coverWidth} / {coverHeight};"
					width={coverWidth}
					height={coverHeight}
				/>
				<div class="mt-6 text-gray-600 dark:text-gray-400">
					<time datetime={date}>Published: {date}</time>
					{#if updated !== date}
						<time datetime={updated} class="block mt-1">Updated: {updated}</time>
					{/if}
				</div>
			</header>

			<div class="prose dark:prose-invert max-w-none">
				<svelte:component this={PostContent} />
			</div>

			{#if categories?.length}
				<footer class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
					<h2 class="text-lg font-semibold mb-3">Posted in:</h2>
					<ul class="flex flex-wrap gap-3">
						{#each categories as category}
							<li>
								<a
									href="/blog/category/{category}/"
									class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
								>
									{category}
								</a>
							</li>
						{/each}
					</ul>
				</footer>
			{/if}
		</article>
	</div>
</div>
