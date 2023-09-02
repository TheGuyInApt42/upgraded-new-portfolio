<script>
	// Start: Local Imports
	// Components
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import ExternalLink from '@components/external-link/ExternalLink.svelte';

	// End: Local Imports

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'About | GWC',
		description: 'About page of Gorham Web Consulting',
		url: '/about',
		keywords: ['about', 'bio', 'gorham web consulting about', 'ralph jarrod gorham'],
		searchUrl: '/about',
	};
	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: About page section -->
<section class="flex flex-col md:justify-center items-start max-w-2xl mx-auto md:mb-16 md:p-8 p-8 relative top-28 lg:top-[120px]">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white"> About GWC </h1>
	<div class="md:mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
		<p>
			Hi, I am Ralph Gorham. I'm a web developer based in Mount Vernon, New York. You can learn more about me and
			my interests on my
			<ExternalLink href="https://ralphjgorham.com">personal site.</ExternalLink>
		</p>
		<p>
			I currently work as a Front End Developer at Touro University as well as being open to working on freelance
			contracts. I have years of experience in developing well-designed websites as well as general experience in
			the tech industry.
		</p>

		<p
			>If you are interested in creating a website or optimizing and redesigning your website, get in touch with
			me.
		</p>
	</div>
</section>
<!-- End: About page section -->
