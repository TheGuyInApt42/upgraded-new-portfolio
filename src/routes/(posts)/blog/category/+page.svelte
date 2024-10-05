<script>
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	export let data;
	const { uniqueCategories } = data;

	const maxFontSizeForTag = 4;

	function setFontSize(category, highestValue) {
		const numberOfPosts = category.count;
		const name = category.title;
		const link = `/blog/category/${name}`;

		let fontSize = (numberOfPosts / highestValue) * maxFontSizeForTag;
		fontSize = +fontSize.toFixed(2);

		fontSize = fontSize <= 1 ? 1 : fontSize; // Set the font size to 1 if it is less than or equal to 1, otherwise keep it as it is

		const fontSizeProperty = `${fontSize}em`;
		return fontSizeProperty;
	}

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'Blog Keywords | GWC',
		description:
			'Welcome to the Gorham Web Consulting blog, your go-to resource for web design tips, small business strategies, and digital marketing insights. Discover expert advice on creating an impactful online presence, optimizing your website for search engines, and leveraging the latest design trends to attract and engage customers. Join our community of small business owners and stay updated with valuable content that empowers you to succeed in the digital landscape.',
		url: '/blog/categories',
		keywords: ['blog keywords', 'gorham web consulting blog keywords', 'blog categories'],
		searchUrl: '/blog/categories'
	};
	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<section
	class="flex flex-col md:justify-center items-start max-w-2xl mx-auto md:mb-16 md:p-8 p-8 relative top-28 lg:top-[120px] justify-between mb-12"
>
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white">Blog Keywords</h1>
	<ul>
		{#each uniqueCategories as category}
			<li class="dark:text-white" style="font-size: {setFontSize(category, 5)}">
				<a href="/blog/category/{category.title}">
					{category.title}
				</a>
				({category.count})
			</li>
		{/each}
	</ul>
</section>
