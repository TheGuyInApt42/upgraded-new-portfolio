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

<nav>
	{#if currentPage > 1}
		<a href={getPageUrl(currentPage - 1)}>Previous</a>
	{/if}

	<span>Page {currentPage} of {totalPages}</span>

	{#if currentPage < totalPages}
		<a href={getPageUrl(currentPage + 1)}>Next</a>
	{/if}
</nav>
