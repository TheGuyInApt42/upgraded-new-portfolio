<script>
	// Sevelte Imports
	// Utils

	// Components
	import HeadTags from '@components/head-tags/HeadTags.svelte';

	import UpdatedContactForm from './components/UpdatedContactForm.svelte';
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
		searchUrl: '/contact'
	};
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<!-- Contact form section -->
<section
	class="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 py-20 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white md:py-24 lg:py-32"
>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -top-24 left-12 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20"
		></div>
		<div
			class="absolute bottom-[-140px] right-1/4 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/15"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-6 pt-28 md:px-8 lg:pt-32">
		<UpdatedContactForm />
	</div>
</section>
