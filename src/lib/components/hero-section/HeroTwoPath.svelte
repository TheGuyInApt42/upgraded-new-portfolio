<script>
	const heading = 'Is your website working for you, or against you?';
	const subheading =
		'We help local businesses fix underperforming sites and build new ones that actually attract clients.';
	const question = 'Are You Ready to Grow?';
	const description =
		'We are an expert in developing custom websites for individuals and small businesses. Our goal is to grow your idea or your business.';
	const cta = 'Hire Me';
	const image =
		'https://res.cloudinary.com/blackgandalf/image/upload/v1646855416/GWC/me4_suwmyd.webp';
	const alt = 'Ecstatic hero client';
</script>

<!-- Main landing section -->
<section
	class="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white"
>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -top-40 right-8 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl sm:right-16 lg:right-32 dark:bg-emerald-500/20"
		></div>
		<div
			class="absolute bottom-[-140px] left-1/3 h-96 w-96 -translate-x-1/3 rounded-full bg-cyan-200/40 blur-3xl lg:left-1/2 dark:bg-cyan-500/10"
		></div>
	</div>

	<div
		class="mx-auto flex max-w-5xl flex-col items-center gap-16 px-6 pb-16 pt-28 text-center sm:px-8 sm:pb-24 sm:pt-32"
	>
		<div class="w-full max-w-3xl">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm sm:text-xs dark:border-white/20 dark:bg-white/10 dark:text-white/80"
			>
				Built for local businesses
			</span>
			<h1
				class="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
			>
				{heading}
			</h1>
			<p class="mt-6 text-base text-slate-700 sm:text-lg lg:text-xl dark:text-white/70">
				{subheading}
			</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="inline-flex items-center justify-center rounded-full bg-turquoise-accent px-8 py-3 text-base font-semibold uppercase text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
				>
					{cta}
				</a>
				<a
					href="/projects"
					class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-8 py-3 text-base font-semibold uppercase text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15 dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
				>
					View Work
					<svg
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.75"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="m5 12 14-8v16L5 12Z" />
					</svg>
				</a>
			</div>

			<div class="mt-12 grid w-full gap-6 sm:grid-cols-2">
				<div
					class="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-xl shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-emerald-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40 dark:hover:border-emerald-400/60"
				>
					<div>
						<h2 class="text-xl font-semibold text-slate-900 sm:text-2xl dark:text-white">
							"My website is broken or outdated."
						</h2>
						<p class="mt-4 text-sm text-slate-600 sm:text-base dark:text-white/70">
							You're likely losing customers to bad design, slow speeds, or broken forms. Let's find <em
								>exactly</em
							> where the leaks are so you can stop losing money.
						</p>
					</div>
					<a
						href="/website-audit"
						class="mt-6 inline-flex items-center justify-center rounded-full bg-teal-500/90 px-6 py-3 text-sm font-semibold uppercase text-slate-900 shadow-md transition hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-teal-400/80 dark:hover:bg-teal-300 dark:focus-visible:ring-emerald-200 dark:focus-visible:ring-offset-slate-900"
					>
						Start My $299 Website Audit
					</a>
				</div>
				<div
					class="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-xl shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-amber-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40 dark:hover:border-amber-300/60"
				>
					<div>
						<h2 class="text-xl font-semibold text-slate-900 sm:text-2xl dark:text-white">
							"I need a brand-new website."
						</h2>
						<p class="mt-4 text-sm text-slate-600 sm:text-base dark:text-white/70">
							You're ready to build a professional, high-performing site from scratch that makes you
							proud and grows your business.
						</p>
					</div>
					<a
						href="/contact"
						class="mt-6 inline-flex items-center justify-center rounded-full border border-amber-300/60 bg-amber-200/90 px-6 py-3 text-sm font-semibold uppercase text-slate-900 shadow-md transition hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-amber-400/70 dark:bg-amber-300/80 dark:text-slate-900 dark:hover:bg-amber-300 dark:focus-visible:ring-amber-200 dark:focus-visible:ring-offset-slate-900"
					>
						Get a Free Consultation
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
