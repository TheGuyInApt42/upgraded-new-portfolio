<script>
	// Svelte Imports
	import { onMount } from 'svelte';

	// Store Imports
	import { theme } from '@stores';

	import ExternalLink from '@components/external-link/ExternalLink.svelte';

	let iconColor;

	$: if ($theme == 'dark') iconColor = 'white';
	else iconColor = 'black';

	// Nav Toggle Button Control (Mobile)
	// Purpose: Hide and show mobile navigation menu
	//
	// 1. Assign the navigation toggle button to "navToggle" variable
	// 2. Assign the navigation content div to "navContent" variable
	// 3. "toggle" function to hide/show the navigation content
	// 4. Add click listener to navToggle to call toggle() on navContent when navToggle is clicked

	onMount(async () => {
		function buttonControlInit() {
			const navOpen = document.querySelector('#nav_open');
			const navClose = document.querySelector('#nav_close');
			const navContent = document.querySelector('#nav_content');

			// Toggles menu depending on id of event target ("nav_open" or "nav_close")
			function toggleNav(e) {
				if (e.target.id === 'nav_open') {
					navContent.classList.add('right-0');
					navContent.classList.remove('right-full');
				} else {
					navContent.classList.remove('right-0');
					navContent.classList.add('right-full');
				}
			}

			[navOpen, navClose].map((button) => button.addEventListener('click', toggleNav));
		}
		buttonControlInit();

		function hideOnLoad() {
			const navContent = document.querySelector('#nav_content');
			navContent.classList.remove('right-0');
			navContent.classList.add('right-full');
		}
		let links = document.querySelectorAll('a');
		links.forEach((link) => link.addEventListener('click', hideOnLoad));
	});
</script>

<!-- Navbar (mobile) -->

<nav
	class="sticky flex justify-between items-center top-0 px-4 bg-white z-40
    border-b border-gray-5 border-opacity-5 shadow-sm md:hidden py-3
    h-28 dark:bg-black"
>
	<!-- Hidden element for alignment -->
	<div class="invisible fake-element">
		<button class="p-2">
			<svg
				class="pointer-events-none stroke-current dark:text-white"
				width="19"
				height="15"
				viewBox="0 0 19 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Open Menu</title>
				<path
					d="M1.97498 1.97498H17.975"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					d="M1.97498 7.97498H17.975"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					d="M1.97498 13.975H17.975"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</button>
	</div>
	<!-- Logo -->
	<div class="overflow-hidden h-16">
		<a href="/" class="relative bottom-16">
			{#if $theme == 'dark'}
				<img
					src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logoblack_c9ft73.webp"
					alt="Logo"
					class="mr-2"
				/>
			{:else}
				<img
					class="logo"
					src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logowhite_yxvnpv.webp"
					alt="Logo"
				/>
			{/if}
		</a>
	</div>

	<!-- Toggle Button -->
	<button class="p-2" id="nav_open">
		<svg
			class="pointer-events-none stroke-current dark:text-white"
			width="19"
			height="15"
			viewBox="0 0 19 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Open Menu</title>
			<path
				d="M1.97498 1.97498H17.975"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
			<path
				d="M1.97498 7.97498H17.975"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
			<path
				d="M1.97498 13.975H17.975"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
	</button>

	<!-- Mobile Toggle Navbar -->
	<ul
		id="nav_content"
		class="absolute top-0 h-screen w-full right-full transition-all duration-500
        bg-white dark:bg-black overflow-hidden"
	>
		<div class="absolute grid grid-cols-3 w-full place-items-center">
			<!-- Logo -->
			<div class=" col-start-2 col-end-3 logo-wrapper">
				<a href="/" class="inline-block">
					{#if $theme == 'dark'}
						<img
							src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logoblack_c9ft73.webp"
							alt="Logo"
							class="mr-2"
						/>
					{:else}
						<img
							class="logo"
							src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logowhite_yxvnpv.webp"
							alt="Logo"
						/>
					{/if}
				</a>
			</div>

			<!-- Toggle Button -->
			<button
				class="col-start-3 col-end-4 opacity-50 ml-8 p-2 border border-accent2 rounded-md"
				id="nav_close"
				><svg
					class="pointer-events-none"
					width=" 12"
					height="12"
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 15L1 1M1 15L15 1L1 15Z"
						stroke="#e0082d"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</svg>
			</button>
		</div>

		<!-- Menu Items + Social -->
		<div class="text-4xl font-thin text-center h-full">
			<div class="flex flex-col items-center justify-center gap-y-12 mt-40">
				<!-- Menu Item -->
				<div class="inline-block relative">
					<li class="relative z-10 text-4xl font-light dark:text-white">
						<a href="/about" class="inline-block h-full w-full">About</a>
					</li>
					<div class="absolute bottom-0 h-2 w-full bg-accent dark:bg-orange-accent"></div>
				</div>
				<!-- Menu Item -->
				<div class="inline-block relative">
					<li class="relative z-10 text-4xl font-light dark:text-white">
						<a href="/projects" class="inline-block h-full w-full">Projects</a>
					</li>
					<div class="absolute bottom-0 h-2 w-full bg-accent dark:bg-orange-accent"></div>
				</div>

				<!-- Menu Item -->
				<div class="inline-block relative">
					<li class="relative z-10 text-4xl font-light dark:text-white">
						<a href="/services" class="inline-block h-full w-full">Services</a>
					</li>
					<div class="absolute bottom-0 h-2 w-full bg-accent dark:bg-orange-accent"></div>
				</div>

				<!-- Menu Item -->
				<div class="inline-block relative">
					<li class="relative z-10 text-4xl font-light dark:text-white">
						<a href="/contact" class="inline-block h-full w-full">Contact</a>
					</li>
					<div class="absolute bottom-0 h-2 w-full bg-accent dark:bg-orange-accent"></div>
				</div>

				<!-- Menu Item -->
				<div class="inline-block relative">
					<li class="relative z-10 text-4xl font-light dark:text-white">
						<a href="/blog" class="inline-block h-full w-full">Blog</a>
					</li>
					<div class="absolute bottom-0 h-2 w-full bg-accent dark:bg-orange-accent"></div>
				</div>
			</div>

			<!-- Social Icons + Bubble -->
			<div class="relative mt-24">
				<!-- Icons -->
				<div class="relative opacity-75 pt-8 z-10">
					<!-- Mail Icon -->
					<ExternalLink
						href="mailto:ralphjgorham@gmail.com"
						cssClasses="p-2 mx-2 pl-0 inline-block"
						ariaLabel={'Footer Email link'}
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
								fill={iconColor}
							></path>
						</svg></ExternalLink
					>

					<!-- Twitter Icon -->
					<ExternalLink
						href="https://www.twitter.com/jarrodtank"
						cssClasses="p-2 mx-2 inline-block"
						ariaLabel={'Footer Twitter link'}
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
								fill={iconColor}
							></path>
						</svg></ExternalLink
					>

					<!-- Facebook Icon -->
					<ExternalLink
						href="https://www.facebook.com/jarrod.gorham"
						cssClasses="p-2 mx-2 inline-block"
						ariaLabel={'Footer Facebook link'}
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
								fill={iconColor}
							></path>
						</svg></ExternalLink
					>
				</div>
			</div>
		</div>
	</ul>
</nav>

<style>
	.logo-wrapper {
		width: 200px;
	}
	.logo {
		width: 200px;
		height: 200px;
	}

	@media screen and (max-width: 350px) {
		nav {
			width: 100vw;
		}

		.fake-element {
			display: none;
		}
	}
</style>
