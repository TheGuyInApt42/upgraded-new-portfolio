<script>
	// Start: Local Imports
	import { onMount } from 'svelte';

	// Start: External Imports

	// End: External Imports
	import '../styles/tailwind.postcss';

	// Core services
	// Store Imports
	import { theme } from '@stores';

	// Components
	import Header from '@components/header/Header.svelte';
	import MobileNav from '@components/nav/MobileNav.svelte';
	import DesktopNav from '@components/nav/DesktopNav.svelte';
	import FtmFooter from '@components/footer/FTMFooter.svelte';
	import Footer from '@components/footer/Footer.svelte';
	import RouteTransition from '@components/route-transition/RouteTransition.svelte';
	import CompiledStyles from '@components/compiled-styles/CompiledStyles.svelte';
	import Analytics from '@components/analytics/Analytics.svelte';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';


	// End: Local Imports

	// Start: Local component properties
	export let path = '';


	const navLinks = [
		{
			path: '/',
			label: 'Home',
		},
		{
			path: '/about',
			label: 'About',
		},
		{
			path: '/#projects',
			label: 'Projects',
		},

		{
			path: '/services',
			label: 'Services',
		},
		{
			path: '/contact',
			label: 'Contact',
		},
	];

	const stylesList = [
		{
			url: '/tailwind.css',
		},
	];
	// End: Local component properties
	onMount(async () => {
		let html = document.getElementsByTagName('html').item(0);
		html.className = $theme;
	});

	// Start: Local component methods

	const toggleThemeMode = (event) => {
		const htmlTag = document.getElementsByTagName('html').item(0);
		htmlTag.className = event.detail.dark ? 'dark' : 'light';
	};

	// End: Local component methods
</script>

<GoogleAnalytics properties="{['G-VRMPNCPJGE', 'G-D0X54E5THK']}" />

<!-- <Analytics /> -->

<CompiledStyles cssFiles="{stylesList}" />

<div class="bg-white dark:bg-black">
	<!-- Start: Header Navigation -->

	<Header
		on:toggleTheme="{(e) => toggleThemeMode(e)}"
		navLinks="{navLinks}"
		logoImage="{'https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logowhite_yxvnpv.png'}"
		title="{''}"
		useThemeModeButton="{true}"
		useTitleAndLogo="{true}"
	/>

	<MobileNav />
	<!--
    <DesktopNav/>
    -->

	<!-- End: Header Navigation -->
	<main id="skip" class="flex flex-col justify-center bg-white dark:bg-black p-4 md:p-0">
		<!-- Start: Defaull layout slot -->
		<RouteTransition referesh="{path}">
			<slot />
		</RouteTransition>
		<!-- End: Defaull layout slot -->
		<!-- Start: Footer -->
		
		<!-- End: Footer -->
	</main>
	<FtmFooter />
</div>

<style>
	main{
		max-width: 100vw;
	}
</style>
