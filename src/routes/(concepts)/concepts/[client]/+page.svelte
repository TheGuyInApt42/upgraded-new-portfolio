<script>
	/**
	 * +page.svelte — Landscaping business one-page site
	 *
	 * To reuse for a new client:
	 *   1. Duplicate this SvelteKit route (or just update siteConfig.js if it's the same route)
	 *   2. Update concepts/siteConfig.js with the new client's details
	 *   3. Deploy — done.
	 *
	 * Font setup (add to app.html <head> once per project):
	 *   <link rel="preconnect" href="https://fonts.googleapis.com" />
	 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	 *   <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap" rel="stylesheet" />
	 */

	export let data;
	const { config } = data;

	import Header from '../components/Header.svelte';
	import Hero from '../components/Hero.svelte';
	import Services from '../components/Services.svelte';
	import WorkShowcase from '../components/WorkShowcase.svelte';
	import Trust from '../components/Trust.svelte';
	import ServiceArea from '../components/ServiceArea.svelte';
	import CTA from '../components/CTA.svelte';
	import Footer from '../components/Footer.svelte';
	import FloatingCTA from '../components/FloatingCTA.svelte';
</script>

<svelte:head>
	<title>{config.businessName} | {config.city}</title>
	<meta
		name="description"
		content="{config.tagline}. {config.trustLine}. Call {config.phone} for a free estimate."
	/>
	<!-- Open Graph — helps if they ever share the link -->
	<meta property="og:title" content={config.businessName} />
	<meta property="og:description" content={config.tagline} />
	<meta property="og:type" content="website" />
</svelte:head>

<!--
  CSS custom properties are injected here from the config object.
  Every component references var(--accent), var(--cta), etc.
  Changing colors in siteConfig.colors updates the entire site.
-->
<div
	class="site-root"
	style="
    --accent:       {config.colors.accent};
    --accent-dark:  {config.colors.accentDark};
    --accent-light: {config.colors.accentLight};
    --cta:          {config.colors.cta};
    --cta-hover:    {config.colors.ctaHover};
  "
>
	<Header {config} />
	<Hero {config} />
	<Services {config} />
	<WorkShowcase {config} />
	<Trust {config} />
	<ServiceArea {config} />
	<CTA {config} />
	<Footer {config} />
	<FloatingCTA {config} />
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Barlow', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	/* Add bottom padding to all sections on mobile to account for floating CTA */
	@media (max-width: 900px) {
		:global(section:last-of-type) {
			padding-bottom: 5rem;
		}
	}

	.site-root {
		min-height: 100vh;
	}
</style>
