<script>
	import { iconLibrary } from '$lib/assets/js/iconLibrary.js';
	import { defaultServices } from '$lib/config.js';

	export let heading = "How We'll Grow Your Business";
	export let highlightWord = 'Grow';
	export let subheading = 'Achieve new heights with the following services.';
	export let services = defaultServices;

	// Memoize the icon extraction to improve performance
	const getIconDetails = (iconKey) => {
		if (!iconKey) {
			return { type: 'html', value: iconLibrary.seo };
		}

		if (typeof iconKey === 'function') {
			return { type: 'component', value: iconKey };
		}

		if (typeof iconKey === 'string') {
			if (iconLibrary[iconKey]) {
				return { type: 'html', value: iconLibrary[iconKey] };
			}

			return { type: 'html', value: iconKey };
		}

		return { type: 'html', value: iconLibrary.seo };
	};

	// Process services only when they change
	$: normalizedServices = services.map((service, index) => {
		const icon = getIconDetails(service.icon);

		return {
			...service,
			key: service.id ?? index,
			iconType: icon.type,
			iconValue: icon.value
		};
	});

	$: headingParts =
		highlightWord && heading.includes(highlightWord)
			? {
					before: heading.split(highlightWord)[0],
					after: heading.split(highlightWord)[1] ?? ''
				}
			: { before: heading, after: '' };

	$: serviceLayout =
		normalizedServices.length === 4
			? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'
			: normalizedServices.length === 1
				? 'grid-cols-1'
				: normalizedServices.length === 2
					? 'grid-cols-1 sm:grid-cols-2'
					: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
</script>

<section
	id="services"
	class="relative isolate overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-200 py-20 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white md:py-24 lg:py-32"
	aria-labelledby="services-heading"
>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -top-24 left-12 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20"
		></div>
		<div
			class="absolute bottom-[-140px] right-1/4 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/15"
		></div>
	</div>

	<div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 id="services-heading" class="text-2xl font-bold md:text-3xl lg:text-4xl">
				{headingParts.before}
				<span class="relative inline-flex items-center justify-center">
					<span class="relative z-10">{highlightWord}</span>
					<span
						class="absolute bottom-1 h-3 w-full -rotate-3 bg-turquoise-accent/80 dark:bg-orange-accent/80"
						aria-hidden="true"
					></span>
				</span>
				{headingParts.after}
			</h2>

			<p class="mt-4 text-base text-slate-600 md:mt-6 md:text-lg dark:text-white/70">
				{subheading}
			</p>
		</div>

		<div class={`grid gap-6 ${serviceLayout} lg:gap-8 xl:gap-10`} aria-label="Services offered">
			{#each normalizedServices as service (service.key)}
				<article
					class="group relative flex flex-col gap-5 rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-emerald-200/40 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-black/40 dark:hover:border-emerald-300/40"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm shadow-emerald-100/40 group-hover:shadow-emerald-200/60 dark:bg-white/10 dark:text-white"
						aria-hidden="true"
					>
						{#if service.iconType === 'component'}
							<svelte:component this={service.iconValue} class="h-10 w-10" />
						{:else}
							{@html service.iconValue}
						{/if}
					</div>

					<div class="space-y-3">
						<h3 class="text-lg font-semibold">
							<span class="font-black">{service.highlight} </span>
							{service.title}
						</h3>
						<p class="text-sm leading-relaxed text-slate-600 dark:text-white/70">
							{service.description}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
