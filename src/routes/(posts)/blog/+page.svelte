<script>
	import PostsList from '@components/posts-list/PostsList.svelte';
	import Pagination from '@components/pagination/Pagination.svelte';
	import HeadTags from '@components/head-tags/HeadTags.svelte';

	export let data;

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'Blog | GWC',
		description:
			'Welcome to the Gorham Web Consulting blog, your go-to resource for web design tips, small business strategies, and digital marketing insights. Discover expert advice on creating an impactful online presence, optimizing your website for search engines, and leveraging the latest design trends to attract and engage customers. Join our community of small business owners and stay updated with valuable content that empowers you to succeed in the digital landscape.',
		url: '/blog',
		keywords: ['blog', 'gorham web consulting blog'],
		searchUrl: '/blog'
	};
	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<section
	class="flex flex-col md:justify-center items-start max-w-2xl mx-auto md:mb-16 md:p-8 p-8 relative top-28 lg:top-[120px] justify-between mb-12"
>
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white">Blog</h1>
	<a href="/blog/category/" class="dark:text-white font-semibold text-true-blue" id="keywords"
		>Keywords</a
	>
	<PostsList posts={data.posts} />

	<Pagination currentPage={1} totalPosts={data.total} />
</section>
