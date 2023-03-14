<script>
	// Sevelte Imports
	// Utils

	// Components
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import ContactForm from '@components/contact-form/ContactForm.svelte';

	// End: Local Imports

	// Start: Exported properties

	// End: Exported properties

	// Start: Local component properties

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'Contact | GWC',
		description: 'Contact page of Gorham Web Consulting',
		url: '/contacts',
		keywords: ['contact', 'contact ralph gorham', 'message gorham web consulting'],
		searchUrl: '/contact',
	};
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Contact form section -->
<section class="bg-gray-100 sm:pt-16 md:py-16 md:pt-20 md:pb-24 md:px-8 lg:px-40 dark:bg-black">
	<ContactForm />
</section>
