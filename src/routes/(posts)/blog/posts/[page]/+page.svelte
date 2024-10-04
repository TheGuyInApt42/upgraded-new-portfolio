<!-- src/routes/(posts)/blog/posts/[page]/+page.svelte -->
<script>
	import PostsList from '@components/posts-list/PostsList.svelte';
	import Pagination from '@components/pagination/Pagination.svelte';
	import { siteDescription, postsPerPage } from '$lib/config';

	export let data;

	$: ({ page, totalPosts, posts } = data);
	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>Blog Posts - Page {page}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

{#if posts.length}
	<h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1>

	<Pagination currentPage={page} {totalPosts} baseUrl="/blog/posts" firstPageUrl="/blog" />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} baseUrl="/blog/posts" firstPageUrl="/blog" />
{:else}
	<h1>Oops!</h1>
	<p>Sorry, no posts to show here.</p>
	<a href="/blog">Back to blog</a>
{/if}
