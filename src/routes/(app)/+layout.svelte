<script>
	// Start: Local Imports
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	// Start: External Imports

	// End: External Imports
	import '../../styles/tailwind.postcss';

	// Core services
	// Store Imports
	import { theme } from '@stores';

	// Components
	import Headroom from '@components/header/Headroom.svelte';
	import Header from '@components/header/Header.svelte';
	import MobileNav from '@components/nav/MobileNav.svelte';
	import FtmFooter from '@components/footer/FTMFooter.svelte';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';

	// End: Local Imports

	// Start: Local component properties

	const navLinks = [
		{
			path: '/',
			label: 'Home'
		},
		{
			path: '/about',
			label: 'About'
		},
		{
			path: '/projects',
			label: 'Projects'
		},

		{
			path: '/services',
			label: 'Services'
		},
		{
			path: '/contact',
			label: 'Contact'
		},
		{
			path: '/blog',
			label: 'Blog'
		}
	];

	// End: Local component properties

	// View Transitions - only on client
	if (browser) {
		onNavigate((navigation) => {
			if (!document.startViewTransition) return;

			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
			});
		});
	}

	// Theme reactivity
	$: if (browser) {
		document.documentElement.className = $theme;
	}

	const toggleThemeMode = (event) => {
		theme.set(event.detail.dark ? 'dark' : 'light');
	};

	// End: Local component methods
</script>

<GoogleAnalytics properties={['G-VRMPNCPJGE', 'G-D0X54E5THK']} />

<div class="bg-white dark:bg-black flex flex-col min-h-screen">
	<!-- Start: Header Navigation -->

	<Headroom>
		<Header
			on:toggleTheme={toggleThemeMode}
			{navLinks}
			logoImage={'https://res.cloudinary.com/blackgandalf/image/upload/v1763051082/GWC/logos/ChatGPT_Logo_Redesign_Nov_13_2025_vqcb2q.webp'}
			title={''}
			useThemeModeButton={false}
			useTitleAndLogo={true}
		/>
	</Headroom>

	<MobileNav />

	<!--
    <DesktopNav/>
    -->

	<!-- End: Header Navigation -->
	<main id="skip" class="flex flex-1 flex-col md:justify-center bg-white dark:bg-black md:p-0">
		<!-- Start: Defaull layout slot -->

		<slot />

		<!-- End: Defaull layout slot -->
		<!-- Start: Footer -->

		<!-- End: Footer -->
	</main>
	<FtmFooter />
</div>

<style>
	:global(::view-transition-old(root)),
	:global(::view-transition-new(root)) {
		animation-duration: 0.3s;
	}
	main {
		max-width: 100vw;
	}
</style>
