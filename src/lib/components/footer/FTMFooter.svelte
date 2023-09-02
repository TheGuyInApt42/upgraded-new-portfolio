<script>
	// Svelte Imports
	import { onMount } from 'svelte';

	import ExternalLink from '@components/external-link/ExternalLink.svelte';

	// Store Imports
	import { theme } from '@stores';

	let iconColor;
	let mobile = false;
	let tablet = false;

	$: if ($theme == 'dark') iconColor = 'white';
	else iconColor = 'black';

	const linkClass = 'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500 transition';

	onMount(async () => {
		// Define the query https://css-tricks.com/working-with-javascript-media-queries/
		const mobileDevice = window.matchMedia('(max-width: 768px)');
		const tabletDevice = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');

		mobileDevice.addEventListener('change', handleDeviceChange);
		tabletDevice.addEventListener('change', handleTabletChange);

		function handleDeviceChange(e) {
			if (e.matches) mobile = true;
			else mobile = false;
		}

		function handleTabletChange(e) {
			if (e.matches) tablet = true;
			else tablet = false;
		}

		// Run it initially
		handleDeviceChange(mobileDevice);
		handleTabletChange(tabletDevice);
	});
</script>

<footer
	class="relative z-20 flex flex-col items-center justify-between px-4 bg-white lg:bg-gray-100 lg:shadow-inner dark:bg-black pb-8 md:pb-2 max-w-[100vw] top-28 lg:top-[120px]"
>

	<!-- Nav Links container -->
	<!-- Menu Items -->
	<div
		class="md:text-sm list-none w-full max-w-screen-xl md:flex md:flex-row md:justify-between md:items-center  gap-x-8 opacity-75 lg:gap-x-16"
	>
		<!-- Logo -->
		<div class="md:block justify-center hidden">
			<a href="/">
				{#if $theme == 'dark'}
					<img
						class="logo"
						src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logoblack_c9ft73.png"
						alt="Logo"
					/>
				{:else if mobile && $theme == 'light'}
					<img
						class="logo"
						src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logowhite_yxvnpv.png"
						alt="Logo"
					/>

				{:else if tablet && $theme == 'light'}
					<img
						class="logo"
						src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logowhite_yxvnpv.png"
						alt="Logo"
					/>

				{:else}
					<img
						class="logo"
						src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logofooter_gmoop3.png"
						alt=""
					/>
				{/if}
			</a>
		</div>

		<!-- Menu items -->
		<div class="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:gap-x-12 mb-5 md:mb-0">
			<!-- Menu Item -->
			<div class="inline-block relative footer-link">
				<li class="relative z-10 text-lg md:text-sm font-medium lg:text-base lg:font-normal lg:hover:underline"
					><a href="/#projects" class="inline-block h-full w-full dark:text-white">Projects</a>
				</li>
				<div class="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
			</div>

			<!-- Menu Item -->
			<div class="inline-block relative footer-link">
				<li class="relative z-10 text-lg md:text-sm font-medium lg:text-base lg:font-normal lg:hover:underline"
					><a href="/services" class="inline-block h-full w-full dark:text-white">Services</a>
				</li>
				<div class="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
			</div>

			<!-- Menu Item -->
			<div class="inline-block relative footer-link">
				<li class="relative z-10 text-lg md:text-sm font-medium lg:text-base lg:font-normal lg:hover:underline"
					><a href="/contact" class="inline-block h-full w-full dark:text-white">Contact</a>
				</li>
				<div class="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
			</div>
		</div>

		<!-- Social Links -->

		<!-- Icons -->
		<div class="flex opacity-75 mt-2 mb-2 justify-center md:justify-end md:gap-x-2 md:mt-0 md:mb-0">
			<!-- Mail Icon -->
			<ExternalLink
				href="mailto:info@gorhamwebconsulting.com"
				cssClasses="p-2 pl-0 inline-block md:pb-0"
				ariaLabel="{'Footer Email link'}"
				><svg
					
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Email</title>
					<path
						d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
						fill="{iconColor}"></path>
				</svg></ExternalLink
			>

			<!-- Twitter Icon -->
			<ExternalLink
				href="https://www.twitter.com/jarrodtank"
				cssClasses="p-2 inline-block md:pb-0"
				ariaLabel="{'Footer Twitter link'}"
				><svg
					
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Twitter</title>
					<path
						d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
						fill="{iconColor}"></path>
				</svg></ExternalLink
			>

			<!-- Facebook Icon -->
			<ExternalLink
				href="https://www.facebook.com/jarrod.gorham"
				cssClasses="p-2 inline-block md:pb-0 md:pr-0"
				ariaLabel="{'Footer Facebook link'}"
				><svg
					
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Facebook</title>
					<path
						d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
						fill="{iconColor}"></path>
				</svg></ExternalLink
			>

			<!-- Instagram Icon -->
			<!--
			<ExternalLink
				href="https://www.instagram.com/gorhamjarrod"
				cssClasses="p-2 inline-block md:pb-0 md:pr-0"
				ariaLabel="{'Footer Instagram link'}"><svg
					class="w-4"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Instagram</title>
					<path
						d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
						fill="{iconColor}"></path>
				</svg></ExternalLink
			>
            -->
		</div>
	</div>

	<!-- Disclaimers -->
	<div class="flex flex-col items-center opacity-50 md:mb-2 lg:mb-6 dark:text-white">
		<div class="font-medium mb-1">&copy GWC 2023</div>
	</div>

	<!-- Copyright + Privacy Policy -->
</footer>


<style>
	@media screen and (max-width: 1023px){
		.footer-link{
			display: flex;
			justify-content: center;
		}
	}

	@media screen and (max-width: 767px){
		.logo{
			margin-left: 32px;
		}
	}
</style>
