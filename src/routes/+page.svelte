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

	@keyframes -global-from-left {
		0% {
			transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}

	@keyframes -global-roll-in-blurred-left {
		0% {
			transform: translateX(-1000px) rotate(-720deg);
			filter: blur(50px);
			opacity: 0;
		}
		100% {
			transform: translateX(0) rotate(0deg);
			filter: blur(0);
			opacity: 1;
		}
	}
</style>

<script>
	// Start: External Imports
	import Saos from 'saos';
	// End: External Imports

	// Start: Svelte Imports
	import { fade } from 'svelte/transition';
	// End: Svelte Imports

	// Start: Local Imports
	import { Modals, closeModal } from 'svelte-modals';

	// Core services

	// Utils

	// Components
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import Testimonial from '@components/testimonial/Testimonial.svelte';
	import HeroSection from '@components/hero-section/HeroSection.svelte';
	import ObjectiveSection from '@components/objective-section/ObjectiveSection.svelte';
	import HomeContact from '@components/home-contact/HomeContact.svelte';
	import HomeProjectCard from '@components/home-project-card/HomeProjectCard.svelte';
	import MiniBanner from '@components/mini-banner/MiniBanner.svelte';

	
	// End: Local Imports

	// Exports
	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: `Gorham Web Consulting`,
		description:
			'Gorham Web Consulting is your stop for custom website design and development as well as your web needs.',
		keywords: ['Ralph Gorham', 'website development', 'small business website development', 'custom websites', 'website design'],
	};

	const projects = [
		{
			title: 'Ralph J Gorham',
			description:
				'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application.',
			tools: 'Svelte/ Strapi CMS',
			url: 'https://ralphjgorham.com',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/ralphjgorham.com_ay13rt.png',
			work: 'Web Design + Web Development + Hosting',
			type: 'Personal',
		},
		{
			title: 'Droplet Fuel',
			description:
				'Sveltekit Blog starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application and blog.',
			tools: 'HTML / CSS / jQuery/ PHP/ MySQL',
			url: 'https://www.dropletfuel.com',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/dropletfuel.com_wnpg5n.png',
			work: 'Web Development',
			type: 'Small Business',
		},

		{
			title: 'Touro University Nevada Homepage',
			description:
				'Sveltekit Blog starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application and blog.',
			tools: 'HTML / CSS / JavaScript / PHP/ CMS',
			url: 'https://tun.touro.edu',
			imageSrc: 'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/tun_hr2awx.png',
			work: 'Web Development',
			type: 'Education',
		},
		{
			title: 'White Rock Center',
			description:
				'Sveltekit Blog starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application and blog.',
			tools: 'Svelte / Express',
			url: 'https://whiterocknc.com',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/whiterocknc.com_czlma8.png',
			work: 'Web Design + Web Development + Hosting',
			type: 'Small Business',
		},
		{
			title: 'Demo Restaurant',
			description:
				'Sample Restaurant Website',
			tools: 'SvelteKit',
			url: 'https://demo-restaurant-basic-gzdm7lqu4-jarrodgorham.vercel.app/',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1682645863/Screenshot_2023-04-27_at_21-35-15_Good_Food_Home_makxet.png',
			work: 'Web Design + Web Development + Hosting',
			type: 'Small Business',
		},
	];

	const testimonials = [
		{
			title: 'Sveltekit Starter',
			mobile:
				'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application.',
			feedback: 'https://github.com/navneetsharmaui/sveltekit-starter',
			icon: '',
		},
		{
			title: 'Sveltekit Blog',
			mobile:
				'Sveltekit Blog starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application and blog.',
			feedback: 'https://github.com/navneetsharmaui/sveltekit-blog',
			icon: '',
		},
		{
			title: 'Sveltekit Blog',
			mobile:
				'Sveltekit Blog starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application and blog.',
			feedback: 'lOrem adkfjipsi dpaisdfsadrum ipsum dorem da kfasdlkf',
			icon: '',
		},
	];

	let clickedType = 'All';
	let filteredProjects = projects;
	let projectFilterBtnStyle =
		'filter  md:w-full md:px-4 md:py-2 mb-8 font-medium text-black uppercase shadow-md dark:text-white w-[40%] h-14';

	// End: Local component properties

	// Start: Local component methods
	const filterProjects = (evt) => {
		clickedType = evt.target.textContent;
		filteredProjects = clickedType != 'All' ? projects.filter((project) => project.type == clickedType) : projects;
	};

	// End: Local component methods
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: Home Page container -->
<HeroSection />
<ObjectiveSection />

<!-- Proof of experience -->
<Saos animation="animation={'roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both'}">
	<section id="projects" class="pt-20 pb-24 bg-gray-100 dark:bg-black">
		<!-- Container -->
		<div class="relative py-8 md:py-16 xl:max-w-screen-xl xl:mx-auto dark:bg-black">
			<!-- Heading and description -->
			<div class="relative px-2 text-center">
				<h2 class="relative text-3xl font-bold tracking-tight md:text-5xl dark:text-white"> Projects</h2>

				<div class="mt-6 flex justify-center gap-3 flex-row flex-wrap md:flex-nowrap">
					<button
						class="{projectFilterBtnStyle}"
						class:active="{clickedType === 'All'}"
						on:click="{filterProjects}"
					>
						<span class="text-lg opacity-75"> All </span>
					</button>
					<button
						class="{projectFilterBtnStyle}"
						class:active="{clickedType === 'Personal'}"
						on:click="{filterProjects}"
					>
						<span class="text-lg opacity-75"> Personal </span>
					</button>
					<button
						class="{projectFilterBtnStyle}"
						class:active="{clickedType === 'Small Business'}"
						on:click="{filterProjects}"
					>
						<span class="text-lg opacity-75"> Small Business </span>
					</button>
					<button
						class="{projectFilterBtnStyle}"
						class:active="{clickedType === 'Education'}"
						on:click="{filterProjects}"
					>
						<span class="text-lg opacity-75"> Education </span>
					</button>
				</div>
			</div>

			<!-- Projects -->
			<div>
				<section class="projects justify-between lg:grid lg:grid-cols-3 flex flex-col items-center">
					{#if projects.length > 0}
						{#each filteredProjects as project}
							<HomeProjectCard
								heading="{project.title}"
								tools="{project.tools}"
								text="{project.description}"
								url="{project.url}"
								img="{project.imageSrc}"
								skills="{project.work}"
								type="{project.type}"
							/>
						{/each}
					{/if}
				</section>
			</div>
		</div>
	</section>
</Saos>

<!-- Start: Testiomonail -->
<!--
    {#if testimonials.length > 0}
		{#each testimonials as testimonial}
			<Testimonial testimonial="{testimonial}" />
		{/each}
	{/if}
    -->
<!-- End: Testimonials -->

<MiniBanner />

<!-- needed to render modals -->
<Modals>
	<div slot="backdrop" class="backdrop" transition:fade on:click="{closeModal}"> </div>
</Modals>
<!-- End: Home Page container -->
