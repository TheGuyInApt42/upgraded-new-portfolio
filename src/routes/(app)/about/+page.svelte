<script>
	// Start: Local Imports
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import ExternalLink from '@components/external-link/ExternalLink.svelte';
	// End: Local Imports

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'About Ralph Gorham | GWC',
		description: 'Meet the developer behind Gorham Web Consulting',
		url: '/about',
		keywords: ['about', 'bio', 'gorham web consulting', 'web developer mount vernon'],
		searchUrl: '/about'
	};

	// Placeholder image path - replace with your actual photo path
	const myPhoto =
		'https://res.cloudinary.com/blackgandalf/image/upload/v1646855416/GWC/me4_suwmyd.webp';
</script>

<HeadTags {metaData} />

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
		<div class="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
			<div class="flex flex-col items-start">
				<span
					class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
				>
					About GWC
				</span>
				<h1
					class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
				>
					Big Agency Quality.<br />Small Business Focus.
				</h1>

				<div
					class="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-white/70 lg:text-lg"
				>
					<p>
						Hi, I am <strong class="font-semibold text-slate-900 dark:text-white"
							>Ralph Gorham</strong
						>. I am a professional web developer based right here in Mount Vernon, New York.
					</p>
					<p>
						My philosophy is simple: <strong class="font-semibold text-slate-900 dark:text-white"
							>Small businesses deserve professional-grade technology.</strong
						>
					</p>
					<p>
						By day, I work as a Front End Developer at <strong
							class="font-semibold text-slate-900 dark:text-white">Touro University</strong
						>, building complex digital systems for thousands of users. By night and weekend, I
						bring that same level of technical discipline and design precision to local businesses
						and entrepreneurs.
					</p>
					<p>
						Unlike generic agencies that outsource your work, when you hire GWC, you work directly
						with me. I don't just build "pretty" websites; I build tools that solve business
						problems.
					</p>
					<p class="text-sm text-slate-500 dark:text-white/50">
						(Want to see the nerdy stuff? Check out my
						<ExternalLink href="https://ralphjgorham.com">personal portfolio.</ExternalLink>)
					</p>
				</div>

				<div
					class="mt-8 rounded-3xl border-l-4 border-emerald-400 bg-white/80 p-6 shadow-lg shadow-slate-200/40 dark:border-emerald-500 dark:bg-white/5 dark:shadow-black/30"
				>
					<p class="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
						Ready to fix your online presence?
					</p>
					<div class="flex flex-wrap gap-4">
						<a
							href="/contact"
							class="inline-flex items-center justify-center rounded-full bg-turquoise-accent px-6 py-3 text-base font-semibold uppercase text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
						>
							Contact Me
						</a>
						<a
							href="/website-audit"
							class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-base font-semibold uppercase text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15 dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
						>
							View My Audit Process
						</a>
					</div>
				</div>
			</div>

			<div class="relative mx-auto w-full max-w-md md:max-w-full">
				<div
					class="absolute inset-0 -z-10 rounded-[48px] border border-slate-200 bg-gradient-to-br from-white via-slate-100 to-white blur-3xl dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-black"
				></div>
				<div
					class="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-4 shadow-2xl shadow-slate-200/70 transition dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-black dark:shadow-black/50"
				>
					<div
						class="absolute inset-0 rounded-[32px] border border-white/40 opacity-40 dark:border-white/10"
					></div>
					<div class="relative overflow-hidden rounded-[32px] bg-slate-900/10 dark:bg-slate-900/40">
						<img
							src={myPhoto}
							alt="Ralph Gorham"
							class="aspect-[3/4] h-full w-full object-cover transition duration-500 hover:scale-105"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
