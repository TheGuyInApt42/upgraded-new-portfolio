<script>
	import PostsList from '$lib/components/posts-list/PostsList.svelte'
	import Pagination from '$lib/components/pagination/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<div class="flex justify-between mb-12">
	<h1> Blog </h1>

	<a href="/blog/category/" class="dark:text-white font-semibold">Keywords</a>
</div>




<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />