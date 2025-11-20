<script>
	import { postsPerPage } from '$lib/config';

	export let currentPage;
	export let totalPosts;
	export let baseUrl;
	export let urlParam = 'page';
	//export let path = '/blog/page'

	$: totalPages = Math.ceil(totalPosts / postsPerPage);

	function getPageUrl(pageNum) {
		if (pageNum <= 1) return baseUrl;
		return `${baseUrl}?${urlParam}=${pageNum}`;
	}

	let pagesAvailable;
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage);

	const isCurrentPage = (page) => page == currentPage;
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
<!-- {#key currentPage}
	{#if pagesAvailable > 1}
		<nav aria-label="Pagination navigation" class="pagination">
			<ul>
				{#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
					<li>
						<a href="{path}/{page}" aria-current="{isCurrentPage(page)}">
							<span class="sr-only">
								{#if isCurrentPage(page)}
									Current page: 
								{:else}
									Go to page 
								{/if}
							</span>
							{page}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
{/key} -->

<nav class="flex items-center justify-center gap-4" aria-label="Pagination">
	{#if currentPage > 1}
		<a
			href={getPageUrl(currentPage - 1)}
			class="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15"
		>
			<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M19 12H5M12 19l-7-7 7-7" />
			</svg>
			Previous
		</a>
	{/if}

	<span class="text-sm font-medium text-slate-600 dark:text-white/70">
		Page <span class="font-semibold text-slate-900 dark:text-white">{currentPage}</span> of
		<span class="font-semibold text-slate-900 dark:text-white">{totalPages}</span>
	</span>

	{#if currentPage < totalPages}
		<a
			href={getPageUrl(currentPage + 1)}
			class="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15"
		>
			Next
			<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</a>
	{/if}
</nav>
