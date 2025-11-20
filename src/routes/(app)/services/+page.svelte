<script>
	// Start: Svelte Imports
	// End: Svelte Imports

	// Start: Local Imports

	// Core services

	// Utils

	// Components

	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import MiniBanner from '@components/mini-banner/MiniBanner.svelte';

	import ServicePackages from './components/service-packages/ServicePackages.svelte';

	// End: Local Imports

	// Exports
	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: `Services`,
		description: 'Gorham Web Consulting Description of services provided',
		keywords: [
			'Gorham Web Consulting',
			'services',
			'design',
			'SEO',
			'web development',
			'social media marketing',
			'email marketing'
		]
	};

	const headline = 'Your Website Should Make You Money, Not Cost You Money';
	const subHeadline =
		"I don't just build websites; I build systems to get you customers. I offer two clear paths, whether you need to fix your current site or build a new one from scratch.into what will make you successful.";
	const services = [
		{
			heading: 'Design',
			tagline:
				'Grow your audience with attractive custom designs that look beautiful on desktop and mobile with great responsive designs.',
			text: 'I can create your web site from any design that you desire and it will look great on both mobile phones as well on a desktop. ',
			imageAlt: 'Notebook with design',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855349/GWC/services/design_uhxstl.webp',
			alignment: 'left',
			interesting:
				'Up to 70% of traffic comes from mobile, I can create an efficient mobile-first design to capture that audience'
		},
		{
			heading: 'SEO',
			tagline: 'Expand your audience with optimized search results.',
			text: 'I will try to raise your search profile so that you appear on top of search results. ',
			imageAlt: 'Looking at website traffic report',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855349/GWC/services/digital-marketing_davhg1.webp',
			alignment: 'right',
			interesting: 'Improve your Google/Bing/etc. ranking'
		},

		{
			heading: 'Development',
			tagline:
				'Grow your audience on the with a fast website with minimal loading and great user experience (UX).',
			text: 'I can build whatever features and functionality that you want with your website.',
			imageAlt: 'Laptop showing code',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646857337/GWC/services/437226-JavaScript-code-web_development-748x421_ikcoeo.webp',
			alignment: 'left',
			interesting: 'Blazing fast site with custom features of your desire can be built for you!'
		}
	];

	// End: Local component properties

	// Start: Local component methods

	// End: Local component methods
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<main>
	<!-- Main landing section -->
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

		<div class="relative mx-auto max-w-4xl px-6 pt-28 md:px-8 lg:pt-32">
			<div class="text-center">
				<span
					class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
				>
					Our Services
				</span>
				<h1
					class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
				>
					{headline}
				</h1>

				<p
					class="mt-6 text-base leading-relaxed text-slate-600 dark:text-white/70 md:text-lg lg:text-xl"
				>
					{subHeadline}
				</p>
			</div>
		</div>
	</section>

	<!-- Services Container -->
	<section
		class="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black md:py-24"
	>
		<div class="mx-auto max-w-7xl px-6 md:px-8">
			<ServicePackages />
		</div>
	</section>

	<MiniBanner />
</main>
