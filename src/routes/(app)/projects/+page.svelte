<script>
	// Start: Svelte Imports
	// End: Svelte Imports

	// Start: Local Imports
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import HomeProjectCard from '@components/home-project-card/HomeProjectCard.svelte';
	import { projects } from '$lib/config';
	// End: Local Imports

	// Exports
	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'Projects | GWC',
		description: 'View all web development projects by Gorham Web Consulting',
		keywords: ['projects', 'portfolio', 'web development', 'case studies']
	};

	let clickedType = 'All';
	let filteredProjects = projects;
	let projectFilterBtnStyle =
		'filter md:w-full md:px-4 md:py-2 mb-8 font-medium text-black uppercase shadow-md dark:text-white w-[40%] h-14';

	// End: Local component properties

	// Start: Local component methods
	const filterProjects = (evt) => {
		clickedType = evt.target.textContent.trim();
		filteredProjects =
			clickedType != 'All' ? projects.filter((project) => project.type == clickedType) : projects;
	};

	// End: Local component methods
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<main>
	<!-- Hero Section -->
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

		<div class="relative mx-auto max-w-4xl px-6 pt-28 text-center md:px-8 lg:pt-32">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
			>
				Portfolio
			</span>
			<h1
				class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
			>
				My Work
			</h1>
			<p
				class="mt-6 text-base leading-relaxed text-slate-600 dark:text-white/70 md:text-lg lg:text-xl"
			>
				Explore case studies of websites I've built that drive real results for small businesses.
			</p>
		</div>
	</section>

	<!-- Projects Gallery -->
	<section
		class="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black md:py-24"
	>
		<div class="mx-auto max-w-7xl px-6 md:px-8">
			<!-- Filter Buttons -->
			<div class="mb-12 flex justify-center gap-3 flex-row flex-wrap md:flex-nowrap">
				<button
					class={projectFilterBtnStyle}
					class:active={clickedType === 'All'}
					on:click={filterProjects}
				>
					<span class="text-lg opacity-75"> All </span>
				</button>
				<button
					class={projectFilterBtnStyle}
					class:active={clickedType === 'Personal'}
					on:click={filterProjects}
				>
					<span class="text-lg opacity-75"> Personal </span>
				</button>
				<button
					class={projectFilterBtnStyle}
					class:active={clickedType === 'Small Business'}
					on:click={filterProjects}
				>
					<span class="text-lg opacity-75"> Small Business </span>
				</button>
			</div>

			<!-- Projects Grid -->
			<div class="projects justify-between lg:grid lg:grid-cols-3 flex flex-col items-center">
				{#if projects.length > 0}
					{#each filteredProjects as project}
						<HomeProjectCard
							heading={project.title}
							tools={project.tools}
							text={project.description}
							url={project.url}
							img={project.img}
							skills={project.work}
							type={project.type}
							slug={project.slug}
						/>
					{/each}
				{/if}
			</div>
		</div>
	</section>
</main>

<style>
	.projects {
		gap: 4em;
		width: 100%;
	}

	.active {
		background-color: #4bc6b9;
	}

	:global(.dark) .active {
		background-color: #ffc243;
	}
</style>
