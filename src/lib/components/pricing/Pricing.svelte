<script>
	// Svelte 4/5 compatible (no runes). Drop in $lib/components/ and edit the props or defaults below.
	export let heading = 'Straightforward pricing';
	export let subheading =
		'Every site is mobile-first, and yours to keep. Final quotes depend on scope — these are real starting points.';
	export let ctaHref = '/contact';
	// Matches the padding on your homepage sections. Inside a blog post (already padded), pass sectionClass="py-12".
	export let sectionClass = 'px-4 py-20 sm:px-6 lg:py-28';

	export let packages = [
		{
			name: 'Starter Site',
			description: 'A fast, professional home base for your business.',
			prefix: 'From',
			price: 550,
			features: [
				'Up to 4 pages (home, services, about, contact)',
				'Mobile-first, fast-loading build',
				'Click-to-call and Google Maps',
				'Contact form sent straight to your inbox',
				'On-page SEO basics and Google Business Profile link'
			],
			cta: 'Get started'
		},
		{
			name: 'Booking Site',
			description: 'Turn visitors into appointments and estimate requests.',
			prefix: 'From',
			price: 974,
			featured: true,
			features: [
				'Everything in Starter',
				'Online booking or estimate-request form',
				'Automated SMS or email reminders',
				'Reviews and testimonials section',
				'Analytics so you can see what is working'
			],
			cta: 'Book a free call'
		},
		{
			name: 'Custom Build',
			description: 'Online stores, portals, and workflows built around how you run.',
			prefix: 'From',
			price: 1350,
			features: [
				'Online store with products and checkout',
				'Customer or client portals',
				'Custom workflows and integrations',
				'Quoted per project after a scoping call'
			],
			cta: 'Request a quote'
		}
	];

	export let footnotes = [
		'Monthly care (hosting, updates, small changes): $50–$150/month.',
		'The $299 site audit is credited toward your build if you hire me.'
	];

	const fmt = (n) => n.toLocaleString('en-US');
</script>

<section class={sectionClass} aria-labelledby="pricing-heading">
	<div class="mx-auto max-w-6xl">
		{#if heading}
			<div class="mx-auto mb-10 max-w-2xl text-center">
				<h2
					id="pricing-heading"
					class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					{heading}
				</h2>
				{#if subheading}
					<p class="mt-3 text-gray-600 dark:text-gray-300">{subheading}</p>
				{/if}
			</div>
		{/if}

		<div class="grid gap-6 md:grid-cols-3 md:items-stretch">
			{#each packages as pkg (pkg.name)}
				<article
					class="relative flex flex-col rounded-2xl border bg-white p-6 dark:bg-gray-900 {pkg.featured
						? 'border-red-600 shadow-lg md:-translate-y-2 dark:border-orange-accent'
						: 'border-gray-200 dark:border-gray-700'}"
				>
					{#if pkg.featured}
						<span
							class="absolute -top-3 left-6 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-orange-accent dark:text-gray-900"
						>
							Most popular
						</span>
					{/if}

					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">{pkg.name}</h3>
					<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">{pkg.description}</p>

					<p class="mt-6 flex items-baseline gap-1.5">
						{#if pkg.prefix}
							<span class="text-sm text-gray-500 dark:text-gray-400">{pkg.prefix}</span>
						{/if}
						<span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
							${fmt(pkg.price)}
						</span>
					</p>

					<ul class="mt-6 flex-1 space-y-3 text-sm text-gray-700 dark:text-gray-200">
						{#each pkg.features as feature}
							<li class="flex gap-2.5">
								<svg
									class="mt-0.5 h-4 w-4 flex-none text-red-600 dark:text-orange-accent"
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
						class="mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:focus-visible:ring-orange-accent dark:focus-visible:ring-offset-gray-900 {pkg.featured
							? 'bg-red-600 text-white hover:bg-red-700 dark:bg-orange-accent dark:text-gray-900 dark:hover:opacity-90'
							: 'border border-gray-300 text-gray-900 hover:border-red-600 hover:text-red-600 dark:border-gray-600 dark:text-white dark:hover:border-orange-accent dark:hover:text-orange-accent'}"
						aria-label="{pkg.cta} — {pkg.name}"
					>
						{pkg.cta}
					</a>
				</article>
			{/each}
		</div>

		{#if footnotes?.length}
			<ul class="mt-8 space-y-1 text-center text-sm text-gray-500 dark:text-gray-400">
				{#each footnotes as note}
					<li>{note}</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
