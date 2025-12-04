<script>
	// This is the checkmark icon we'll use for the lists.
	const checkIconPath = 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z';

	const auditDeliverables = [
		'Mobile & Desktop "Frustration" Test',
		'"Lost Lead" Form & Button Check',
		'A 30-Minute 1-on-1 Action Plan Call'
	];

	// --- UPDATED SECTION ---
	// We're now using an array of objects to hold the richer,
	// more descriptive text for the "Custom Build" package.
	const buildInclusions = [
		{
			title: 'Custom Responsive Design',
			description: 'A unique site that looks perfect on all devices.'
		},
		{
			title: 'Local Visibility Pack',
			description: "We'll optimize your site to get found by local customers on Google."
		},
		{
			title: 'Professional Development',
			description: 'A blazing-fast, secure site built with modern tech.'
		}
	];
	// --- END UPDATED SECTION ---
</script>

<div class="mx-auto max-w-6xl">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		<div
			class="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-xl shadow-slate-200/50 transition dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30 md:p-10"
		>
			<div
				class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-50/50 via-white to-white opacity-50 dark:from-emerald-500/5 dark:via-slate-900 dark:to-slate-900"
			></div>
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
			>
				Recommended First Step
			</span>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
				The $299 Website Health Audit
			</h2>
			<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
				<strong class="font-semibold text-slate-900 dark:text-white">Best for:</strong> Business owners
				who aren't sure why their current site isn't working or where to start.
			</p>
			<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
				Stop guessing. I'll find exactly where your site is losing you money. This is the perfect
				low-risk step to a smarter online presence.
			</p>

			<div class="flex-grow"></div>

			<ul class="mt-8 space-y-4">
				{#each auditDeliverables as item}
					<li class="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d={checkIconPath} />
						</svg>
						<span class="text-slate-700 dark:text-white/80">{item}</span>
					</li>
				{/each}
			</ul>

			<a
				href="/website-audit"
				class="mt-10 inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-center text-base font-semibold uppercase text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
			>
				Learn More & Start My Audit
			</a>
		</div>

		<div
			class="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-xl shadow-slate-200/50 transition dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30 md:p-10"
		>
			<div
				class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-50/50 via-white to-white opacity-50 dark:from-amber-500/5 dark:via-slate-900 dark:to-slate-900"
			></div>
			<span
				class="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700 shadow-sm sm:text-xs dark:border-amber-400/40 dark:bg-amber-500/20 dark:text-amber-100"
			>
				Full Build
			</span>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
				The Custom Website Build
			</h2>
			<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
				<strong class="font-semibold text-slate-900 dark:text-white">Best for:</strong> New businesses,
				rebrands, or anyone ready for a professional, high-performance site.
			</p>
			<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
				Let's build a fast, beautiful, and effective website from the ground up. I'll handle
				everything you need to turn visitors into customers.
			</p>

			<div class="flex-grow"></div>

			<ul class="mt-8 space-y-4">
				{#each buildInclusions as item}
					<li class="flex items-start gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d={checkIconPath} />
						</svg>
						<div>
							<span class="font-semibold text-slate-800 dark:text-white/90">{item.title}</span>
							<p class="text-sm text-slate-600 dark:text-white/70">{item.description}</p>
						</div>
					</li>
				{/each}
			</ul>
			<a
				href="/contact"
				class="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-8 py-3 text-center text-base font-semibold uppercase text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15 dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
			>
				Book a Free Consultation
			</a>
		</div>
	</div>
</div>
