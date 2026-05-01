<script>
	const reviewUrl = 'https://g.page/r/CYvMfglnO220EAE/review';

	const prompts = [
		'What it was like working together',
		'How your website turned out',
		'Anything that made the process easier',
		'Why you would recommend Gorham Web Consulting'
	];
</script>

<svelte:head>
	<title>Leave a Review | Gorham Web Consulting</title>
	<meta name="description" content="Leave a Google review for Gorham Web Consulting." />
</svelte:head>

<section
	class="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 pt-[65px] text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white"
>
	<!-- Decorative background blurs (absolute, so they don't affect flow) -->
	<div
		class="pointer-events-none absolute top-20 right-8 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl sm:right-16 lg:right-32 dark:bg-emerald-500/20"
	></div>
	<div
		class="pointer-events-none absolute bottom-[-140px] left-1/3 h-96 w-96 -translate-x-1/3 rounded-full bg-cyan-200/40 blur-3xl lg:left-1/2 dark:bg-cyan-500/10"
	></div>

	<div
		class="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-24 text-center sm:px-8 sm:pt-32 sm:pb-32"
	>
		<span
			class="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm sm:text-xs dark:border-white/20 dark:bg-white/10 dark:text-white/80"
		>
			Thank you for working with me
		</span>

		<h1
			class="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
		>
			Would you leave a quick Google review?
		</h1>

		<p class="mt-6 text-base text-slate-700 sm:text-lg lg:text-xl dark:text-white/70">
			Your feedback helps Gorham Web Consulting grow and helps future clients feel confident
			choosing me.
		</p>

		<div
			class="mt-10 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40"
		>
			<h2 class="text-xl font-semibold text-slate-900 sm:text-2xl dark:text-white">
				If helpful, you can mention:
			</h2>

			<ul class="mt-5 space-y-3 text-sm text-slate-600 sm:text-base dark:text-white/70">
				{#each prompts as prompt}
					<li class="flex gap-3">
						<span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500 dark:bg-teal-300"></span>
						<span>{prompt}</span>
					</li>
				{/each}
			</ul>

			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href={reviewUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center rounded-full bg-turquoise-accent px-8 py-3 text-base font-semibold uppercase text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
				>
					Leave a Review
				</a>

				<a
					href="/"
					class="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/80 px-8 py-3 text-base font-semibold uppercase text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15 dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
				>
					Back Home
				</a>
			</div>
		</div>

		<p class="mt-6 text-sm text-slate-500 dark:text-white/50">
			The review button opens Google in a new tab.
		</p>
	</div>
</section>
