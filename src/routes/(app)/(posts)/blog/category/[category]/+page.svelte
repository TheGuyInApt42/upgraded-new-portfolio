<!-- Renders any page at /blog/category/* -->
<!-- Renders posts listed by category -->
<script>
	import PostsList from '@components/posts-list/PostsList.svelte';
	import Pagination from '@components/pagination/Pagination.svelte';
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import { postsPerPage } from '$lib/config';

	export let data;

	//const { page, category, totalPosts, posts } = data;

	const { page, posts, category, totalPosts } = data;
	console.log('totalPosts: ', totalPosts);

	console.log('posts: ', posts);

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: `Blog Category: ${category} | GWC`,
		description:
			'Welcome to the Gorham Web Consulting blog, your go-to resource for web design tips, small business strategies, and digital marketing insights. Discover expert advice on creating an impactful online presence, optimizing your website for search engines, and leveraging the latest design trends to attract and engage customers. Join our community of small business owners and stay updated with valuable content that empowers you to succeed in the digital landscape.',
		url: `/blog/category/${category}`,
		keywords: [`${category} blog `, `${category}`],
		searchUrl: `/blog/category/${category}`
	};
	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<section
	class="flex flex-col md:justify-center items-start max-w-2xl mx-auto md:mb-16 md:p-8 p-8 relative top-28 lg:top-[120px] justify-between mb-12"
>
	{#if posts && posts.length}
		<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white">
			Category: {category}
			<br />
			<small>Posts {lowerBound}–{upperBound} of {totalPosts}</small>
		</h1>

		<Pagination
			currentPage={page}
			{totalPosts}
			baseUrl={`/blog/category/${category}`}
			urlParam="page"
		/>

		<PostsList {posts} />

		<Pagination
			currentPage={page}
			{totalPosts}
			baseUrl={`/blog/category/${category}`}
			urlParam="page"
		/>
	{:else}
		<h1>Oops!</h1>

		<p>Sorry, no posts to show in the {category} category.</p>

		<a href="/blog">Back to blog</a>
	{/if}
</section>

<!-- <section
	class="flex flex-col md:justify-center items-start max-w-2xl mx-auto md:mb-16 md:p-8 p-8 relative top-28 lg:top-[120px] justify-between mb-12"
>
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white">#{category}</h1>

	{#if posts.length}
		<PostsList {posts} />
		<Pagination currentPage={page} totalPosts={total} path="/blog/category/{category}/page" />
	{:else}
		<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

		<p><a href="/blog">Back to blog</a></p>
	{/if}
</section> -->
