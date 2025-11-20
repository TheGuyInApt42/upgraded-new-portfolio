<script>
	// Start: Local Imports
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import ExternalLink from '@components/external-link/ExternalLink.svelte';
	// End: Local Imports

	/** @type {import('./$types').PageData} */
	export let data;

	const { project } = data;

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: `${project.title} Case Study | GWC`,
		description: `Case study: ${project.description}`,
		keywords: ['case study', project.title.toLowerCase(), 'web development', 'portfolio']
	};
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

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

	<div class="mx-auto max-w-6xl px-6 pb-20 pt-28 md:px-8 lg:pt-32">
		<!-- Back Link -->
		<a
			href="/projects"
			class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-4 w-4"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
			Back to Projects
		</a>

		<!-- Project Header -->
		<div class="mb-12">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
			>
				{project.type}
			</span>
			<h1
				class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
			>
				{project.title}
			</h1>
			<p class="mt-4 text-lg leading-relaxed text-slate-600 dark:text-white/70 lg:text-xl">
				{project.description}
			</p>
		</div>

		<!-- Project Image -->
		<div
			class="mb-16 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30"
		>
			<picture>
				<source srcset={project.img.webp} type="image/webp" />
				<source srcset={project.img.jpg} type="image/jpeg" />
				<img
					src={project.img.default}
					alt="{project.title} website screenshot"
					class="w-full object-cover"
					loading="eager"
				/>
			</picture>
		</div>

		<!-- Case Study Content -->
		<div class="grid gap-12 md:grid-cols-3 lg:gap-16">
			<!-- Problem -->
			<div class="md:col-span-1">
				<div
					class="rounded-3xl border-l-4 border-red-400 bg-red-50/80 p-6 shadow-lg shadow-slate-200/40 dark:border-red-500 dark:bg-red-500/10 dark:shadow-black/30"
				>
					<h2 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
						The Problem
					</h2>
					<p class="text-base leading-relaxed text-slate-700 dark:text-white/80">
						{project.problem}
					</p>
				</div>
			</div>

			<!-- Solution -->
			<div class="md:col-span-1">
				<div
					class="rounded-3xl border-l-4 border-emerald-400 bg-emerald-50/80 p-6 shadow-lg shadow-slate-200/40 dark:border-emerald-500 dark:bg-emerald-500/10 dark:shadow-black/30"
				>
					<h2 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
						The Solution
					</h2>
					<p class="text-base leading-relaxed text-slate-700 dark:text-white/80">
						{project.solution}
					</p>
				</div>
			</div>

			<!-- Result -->
			<div class="md:col-span-1">
				<div
					class="rounded-3xl border-l-4 border-amber-400 bg-amber-50/80 p-6 shadow-lg shadow-slate-200/40 dark:border-amber-500 dark:bg-amber-500/10 dark:shadow-black/30"
				>
					<h2 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
						The Result
					</h2>
					<p class="text-base leading-relaxed text-slate-700 dark:text-white/80">
						{project.result}
					</p>
				</div>
			</div>
		</div>

		<!-- Project Details -->
		<div class="mt-16 grid gap-8 md:grid-cols-2">
			<div
				class="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30"
			>
				<h3 class="mb-4 text-xl font-bold text-slate-900 dark:text-white">Technologies Used</h3>
				<p class="text-base text-slate-600 dark:text-white/70">{project.tools}</p>
			</div>

			<div
				class="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30"
			>
				<h3 class="mb-4 text-xl font-bold text-slate-900 dark:text-white">Services Provided</h3>
				<p class="text-base text-slate-600 dark:text-white/70">{project.work}</p>
			</div>
		</div>

		<!-- CTA -->
		<div
			class="mt-16 rounded-3xl border-l-4 border-emerald-400 bg-white/80 p-8 shadow-lg shadow-slate-200/40 dark:border-emerald-500 dark:bg-white/5 dark:shadow-black/30"
		>
			<p class="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
				Ready to see similar results for your business?
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href="/contact"
					class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold uppercase text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
				>
					Get Started
				</a>
				{#if project.url}
					<ExternalLink
						href={project.url}
						class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-base font-semibold uppercase text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15 dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
					>
						Visit Live Site
					</ExternalLink>
				{/if}
			</div>
		</div>
	</div>
</section>
