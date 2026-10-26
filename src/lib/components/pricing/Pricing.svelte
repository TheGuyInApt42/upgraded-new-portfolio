<script>
	// Svelte 4/5 compatible (no runes). Styled to match the homepage hero (slate + turquoise/emerald).
	export let heading = 'Simple monthly plans';
	export let subheading =
		'No big upfront bill. Your site is designed, built, hosted, and maintained by me for one monthly price.';
	export let ctaHref = '/contact';
	// Matches the padding on your homepage sections. Inside a blog post (already padded), pass sectionClass="py-12".
	export let sectionClass = 'px-4 py-20 sm:px-6 lg:py-28';

	// Founding-client pricing: shows the founding price with the standard price struck through.
	// Lower this as spots fill; at 0 every card switches to standard pricing automatically.
	export let foundingSpots = 3;

	export let packages = [
		{
			name: 'Starter Site',
			description: 'A fast, professional home base for your business.',
			price: 175,
			foundingPrice: 150,
			features: [
				'Up to 4 pages (home, services, about, contact)',
				'Click-to-call and Google Maps',
				'Contact form sent straight to your inbox',
				'On-page SEO basics and Google Business Profile link'
			],
			cta: 'Get started'
		},
		{
			name: 'Booking Site',
			description: 'Turn visitors into appointments and estimate requests.',
			price: 275,
			foundingPrice: 225,
			featured: true,
			features: [
				'Everything in Starter',
				'Online booking or estimate-request form',
				'Automated appointment reminders',
				'Reviews and testimonials section'
			],
			cta: 'Book a free call'
		},
		{
			name: 'Custom Build',
			description: 'Online stores, portals, and workflows built around how you run.',
			prefix: 'From',
			price: 375,
			foundingPrice: 325,
			features: [
				'Online store with products and checkout',
				'Customer or client portals',
				'Custom workflows and integrations',
				'Quoted per project after a scoping call'
			],
			cta: 'Request a quote'
		}
	];

	export let includedHeading = 'Every plan includes';
	export let included = [
		'Hosting, SSL, backups, and security updates',
		'Small edits each month (hours, prices, photos, text)',
		'A monthly performance report',
		'A direct line to me, not a support ticket'
	];

	export let footnotes = [
		'12-month minimum. You always own your domain and content, and the site is fully yours after 24 months — or buy it out anytime.',
		'The $299 site audit is credited toward your first month.',
		'Prefer to pay upfront? Ask me about one-time pricing.'
	];

	const fmt = (n) => n.toLocaleString('en-US');
	$: founding = foundingSpots > 0;

	const focusRing =
		'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900';
	const btnBase =
		'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase no-underline transition hover:no-underline ' +
		focusRing;
	const btnPrimary =
		'bg-turquoise-accent text-slate-900 shadow-lg hover:-translate-y-0.5 hover:bg-emerald-300';
	const btnSecondary =
		'border border-slate-300/70 bg-white/80 text-slate-700 hover:border-slate-400 hover:bg-white dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15';
</script>

<section class={sectionClass} aria-labelledby="pricing-heading">
	<div class="mx-auto max-w-6xl">
		{#if heading}
			<div class="mx-auto mb-12 max-w-2xl text-center">
				{#if founding}
					<span
						class="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm sm:text-xs dark:border-white/20 dark:bg-white/10 dark:text-white/80"
					>
						Founding rates · {foundingSpots}
						{foundingSpots === 1 ? 'spot' : 'spots'} left
					</span>
				{/if}
				<h2
					id="pricing-heading"
					class="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl dark:text-white"
				>
					{heading}
				</h2>
				{#if subheading}
					<p class="mt-4 text-base text-slate-700 sm:text-lg dark:text-white/70">{subheading}</p>
				{/if}
				{#if founding}
					<p class="mt-2 text-sm text-slate-500 dark:text-white/50">
						Founding rates are locked in for as long as you stay.
					</p>
				{/if}
			</div>
		{/if}

		<div class="grid gap-6 md:grid-cols-3 md:items-stretch">
			{#each packages as pkg (pkg.name)}
				<article
					class="relative flex flex-col rounded-3xl border bg-white/80 p-6 text-left shadow-xl transition duration-300 hover:-translate-y-1 dark:bg-white/5 dark:shadow-black/40 {pkg.featured
						? 'border-emerald-300 shadow-emerald-200/60 ring-1 ring-emerald-300 md:-translate-y-2 md:hover:-translate-y-3 dark:border-emerald-400/60 dark:ring-emerald-400/40'
						: 'border-slate-200 shadow-slate-200/50 hover:border-emerald-300 hover:shadow-emerald-200/60 dark:border-white/10 dark:hover:border-emerald-400/60'}"
				>
					{#if pkg.featured}
						<span
							class="absolute -top-3 left-6 rounded-full bg-turquoise-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-sm"
						>
							Most popular
						</span>
					{/if}

					<h3 class="text-xl font-semibold text-slate-900 dark:text-white">{pkg.name}</h3>
					<p class="mt-2 text-sm text-slate-600 dark:text-white/70">{pkg.description}</p>

					<div class="mt-6">
						<p class="flex items-baseline gap-1.5">
							{#if pkg.prefix}
								<span class="text-sm text-slate-500 dark:text-white/50">{pkg.prefix}</span>
							{/if}
							<span class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
								${fmt(founding && pkg.foundingPrice ? pkg.foundingPrice : pkg.price)}
							</span>
							<span class="text-sm text-slate-500 dark:text-white/50">/mo</span>
						</p>
						{#if founding && pkg.foundingPrice}
							<p class="mt-1 text-sm text-slate-500 dark:text-white/50">
								<span class="sr-only">Standard price</span>
								<s>${fmt(pkg.price)}/mo</s>
								<span class="ml-1">founding rate</span>
							</p>
						{/if}
					</div>

					<ul class="mt-6 flex-1 space-y-3 text-sm text-slate-600 sm:text-base dark:text-white/70">
						{#each pkg.features as feature}
							<li class="flex gap-2.5">
								<svg
									class="mt-1 h-4 w-4 flex-none text-emerald-500 dark:text-emerald-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z"
										clip-rule="evenodd"
									/>
								</svg>
								<span>{feature}</span>
							</li>
						{/each}
					</ul>

					<a
						href={pkg.ctaHref ?? ctaHref}
						class="{btnBase} {pkg.featured ? btnPrimary : btnSecondary}"
						aria-label="{pkg.cta} — {pkg.name}"
					>
						{pkg.cta}
					</a>
				</article>
			{/each}
		</div>

		{#if included?.length}
			<div
				class="mt-10 rounded-3xl border border-slate-200 bg-white/60 p-6 dark:border-white/10 dark:bg-white/5"
			>
				<h3
					class="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 sm:text-xs dark:text-white/80"
				>
					{includedHeading}
				</h3>
				<ul
					class="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4 dark:text-white/70"
				>
					{#each included as item}
						<li class="flex gap-2.5">
							<svg
								class="mt-0.5 h-4 w-4 flex-none text-emerald-500 dark:text-emerald-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		{#if footnotes?.length}
			<ul class="mt-8 space-y-1 text-center text-sm text-slate-500 dark:text-white/50">
				{#each footnotes as note}
					<li>{note}</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
