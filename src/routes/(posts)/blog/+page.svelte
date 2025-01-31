<script>
	import PostsList from '@components/posts-list/PostsList.svelte';
	import Pagination from '@components/pagination/Pagination.svelte';
	import HeadTags from '@components/head-tags/HeadTags.svelte';

	export let data;

	const metaData = {
		title: 'Blog | GWC',
		description:
			'Welcome to the Gorham Web Consulting blog, your go-to resource for web design tips, small business strategies, and digital marketing insights. Discover expert advice on creating an impactful online presence, optimizing your website for search engines, and leveraging the latest design trends to attract and engage customers. Join our community of small business owners and stay updated with valuable content that empowers you to succeed in the digital landscape.',
		url: '/blog',
		keywords: ['blog', 'gorham web consulting blog'],
		searchUrl: '/blog'
	};
</script>

<HeadTags {metaData} />

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative top-28 lg:top-[120px]">
		<div class="max-w-4xl mx-auto">
			<header class="flex justify-between items-center mb-8">
				<h1 class="font-bold text-3xl md:text-5xl tracking-tight dark:text-white">Blog</h1>
				<a
					href="/blog/category/"
					class="dark:text-white font-semibold text-true-blue hover:underline"
					id="keywords"
				>
					Keywords
				</a>
			</header>

			<PostsList posts={data.posts} />
			<Pagination currentPage={1} totalPosts={data.total} />
		</div>
	</div>
</div>
