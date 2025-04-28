<script>
	import HeroSection from './components/HeroSection.svelte';
	import ContactSection from './components/ContactSection.svelte';
	import PricingSection from './components/PricingSection.svelte';
	import FeaturesSection from './components/FeaturesSection.svelte';
	import TestimonialSection from './components/TestimonialSection.svelte';
	import WhySection from './components/WhySection.svelte';
	import HeadTags from '@components/head-tags/HeadTags.svelte';

	import FAQSection from './components/FAQSection.svelte';

	import { info } from '$lib/config';

	/* SEO */
	const metaData = {
		title: 'Landscaping Websites by Gorham Web Consulting',
		description:
			'We build stunning websites for landscaping companies — starting at just $100/month.',
		keywords: [
			'landscaping websites',
			'landscaping web design',
			'landscaping SEO',
			'landscaping marketing',
			'landscaping business growth'
		]
	};

	function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<HeadTags {metaData} />

<div class="min-h-screen bg-green-50">
	<!-- Navigation -->
	<nav class="sticky top-0 z-50 bg-white px-6 py-4 shadow-sm">
		<div class="mx-auto flex max-w-6xl items-center justify-between">
			<div class="text-xl font-bold text-green-800">{info.niche}</div>
			<div class="hidden space-x-6 md:flex">
				<a href="#features" class="text-green-700 hover:text-green-900">Features</a>
				<a href="#pricing" class="text-green-700 hover:text-green-900">Pricing</a>
				<!-- <a href="#portfolio" class="text-green-700 hover:text-green-900">Portfolio</a> -->
				<a href="#testimonials" class="text-green-700 hover:text-green-900">Testimonials</a>
				<a href="#faq" class="text-green-700 hover:text-green-900">FAQ</a>
			</div>
			<button
				on:click={() => scrollToSection('contact')}
				class="rounded-full bg-green-700 px-4 py-2 text-sm text-white transition duration-300 hover:bg-green-800"
			>
				Contact Us
			</button>
		</div>
	</nav>

	<!-- Main content -->
	<main>
		<HeroSection />
		<WhySection />
		<FeaturesSection />
		<PricingSection />

		<TestimonialSection />
		<FAQSection />
		<ContactSection />
	</main>
</div>

<style>
	:global(body) {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		scroll-behavior: smooth;
	}

	:global(section) {
		scroll-margin-top: 80px;
	}
</style>
