<script>
	// Start: Svelte Imports
	import { fade } from 'svelte/transition';
	// End: Svelte Imports

	// Start: Local Imports
	import { Modals, closeModal } from 'svelte-modals';

	// Core services

	// Utils

	// Components
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import ObjectiveSection from '@components/objective-section/ObjectiveSection.svelte';
	import Prefooter from '@components/prefooter/Prefooter.svelte';
	import FeaturedProjects from '@components/projects/FeaturedProjects.svelte';
	import BlogSection from '@components/blog/BlogSection.svelte';
	import HeroTwoPath from '@components/hero-section/HeroTwoPath.svelte';

	// End: Local Imports

	// Exports
	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: `Gorham Web Consulting`,
		description:
			'Boost your small business with our expert web design services! At Gorham Web Consulting, we specialize in creating stunning, user-friendly websites tailored to meet the unique needs of small businesses. From eye-catching designs to seamless functionality, we help you establish a strong online presence, attract more customers, and grow your brand. Let us transform your vision into a powerful digital experience that drives results. Get started today!',
		keywords: [
			'Ralph Gorham',
			'website development',
			'small business website development',
			'custom websites',
			'website design'
		]
	};

	const testimonials = [
		{
			title: 'Sveltekit Starter',
			mobile:
				'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application.',
			feedback: 'https://github.com/navneetsharmaui/sveltekit-starter',
			icon: ''
		},
		{
			title: 'Sveltekit Blog',
			mobile:
				'Sveltekit Blog starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application and blog.',
			feedback: 'https://github.com/navneetsharmaui/sveltekit-blog',
			icon: ''
		},
		{
			title: 'Sveltekit Blog',
			mobile:
				'Sveltekit Blog starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application and blog.',
			feedback: 'lOrem adkfjipsi dpaisdfsadrum ipsum dorem da kfasdlkf',
			icon: ''
		}
	];

	// End: Local component properties

	// Start: Local component methods

	// End: Local component methods
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<!-- Start: Home Page container -->
<HeroTwoPath />
<ObjectiveSection />

<!-- Featured Projects -->
<FeaturedProjects />

<!-- Start: Testiomonail -->
<!--
    {#if testimonials.length > 0}
		{#each testimonials as testimonial}
			<Testimonial testimonial="{testimonial}" />
		{/each}
	{/if}
    -->
<!-- End: Testimonials -->

<BlogSection />

<Prefooter />

<!-- needed to render modals -->
<Modals>
	<div slot="backdrop" class="backdrop" transition:fade|global on:click={closeModal}></div>
</Modals>

<!-- End: Home Page container -->

<style>
	.projects {
		gap: 4em;
		width: 100%;
	}

	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}

	.active {
		background-color: #4bc6b9;
	}

	:global(.dark) .active {
		background-color: #ffc243;
	}

	:global(target):before {
		content: '';
		display: block;
		height: 200px;
		margin: -200px 0 0;
	}
</style>
