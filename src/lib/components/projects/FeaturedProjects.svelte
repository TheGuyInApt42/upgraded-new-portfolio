<script>
	import HomeProjectCard from '@components/home-project-card/HomeProjectCard.svelte';
	import { getFeaturedProjects } from '$lib/config';

	const featuredProjects = getFeaturedProjects();
</script>

<!-- Featured Projects -->
<section
	class="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black md:py-24"
>
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<!-- Heading and description -->
		<div class="mb-12 text-center">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
			>
				Portfolio
			</span>
			<h2
				class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
			>
				Featured Projects
			</h2>
			<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70 md:text-lg">
				See how we've helped small businesses grow with professional websites that drive results.
			</p>
		</div>

		<!-- Featured Projects Grid -->
		<div>
			<section class="projects justify-between lg:grid lg:grid-cols-3 flex flex-col items-center">
				{#if featuredProjects.length > 0}
					{#each featuredProjects as project}
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
			</section>
		</div>

		<!-- See All Button -->
		<div class="mt-12 text-center">
			<a
				href="/projects"
				class="inline-flex items-center justify-center rounded-full bg-turquoise-accent px-8 py-3 text-base font-semibold uppercase text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
			>
				See All My Work
			</a>
		</div>
	</div>
</section>
