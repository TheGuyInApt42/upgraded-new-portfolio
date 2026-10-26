<script>
	/**
	 * @typedef {Object} ITestimonial
	 * @property {string} quote        Full review text
	 * @property {string} name         Reviewer name
	 * @property {string} [role]       e.g. "Owner"
	 * @property {string} [business]   e.g. "B Sharp Hair Art"
	 * @property {string} [projectHref] Link to the matching case study
	 * @property {string} [avatar]     Image URL; falls back to initials
	 * @property {number} [rating]     1–5, omit to hide stars
	 * @property {string} [source]     e.g. "Google"
	 */

	/** @type {ITestimonial[]} */
	export let testimonials = [];
	export let eyebrow = 'Testimonials';
	export let heading = 'What Clients Are Saying';
	export let subheading = 'Real feedback from local businesses we’ve helped grow online.';
	export let ctaHref = '/projects';
	export let ctaLabel = 'See the Work Behind the Reviews';

	$: single = testimonials.length === 1;

	/** @param {string} name */
	const initials = (name) =>
		name
			.split(' ')
			.map((p) => p[0])
			.slice(0, 2)
			.join('')
			.toUpperCase();
</script>

{#if testimonials.length}
	<section
		id="testimonials"
		aria-labelledby="testimonials-heading"
		class="px-4 py-20 sm:px-6 lg:py-28"
	>
		<div class="mx-auto max-w-6xl">
			<!-- Section header (matches Portfolio / Blog pattern) -->
			<header class="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
				<p
					class="mb-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-500/30 dark:text-emerald-400"
				>
					{eyebrow}
				</p>
				<h2
					id="testimonials-heading"
					class="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white"
				>
					{heading}
				</h2>
				{#if subheading}
					<p class="mt-4 text-lg text-slate-600 dark:text-slate-300">{subheading}</p>
				{/if}
			</header>

			<!-- Cards -->
			<div class="grid gap-8 {single ? 'mx-auto max-w-3xl' : 'md:grid-cols-2'}">
				{#each testimonials as t (t.name)}
					<figure
						class="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-emerald-500/40 dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 {single
							? 'lg:p-12'
							: ''}"
					>
						<!-- Decorative quote mark -->
						<svg
							aria-hidden="true"
							class="absolute -right-2 -top-2 h-28 w-28 text-emerald-500/10 transition-colors group-hover:text-emerald-500/20"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
							/>
						</svg>

						{#if t.rating}
							<div
								class="relative mb-5 flex gap-1"
								role="img"
								aria-label="{t.rating} out of 5 stars"
							>
								{#each Array(5) as _, i}
									<svg
										aria-hidden="true"
										class="h-5 w-5 {i < t.rating
											? 'text-amber-400'
											: 'text-slate-300 dark:text-slate-600'}"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
								{/each}
							</div>
						{/if}

						<blockquote
							class="relative flex-1 leading-relaxed text-slate-700 dark:text-slate-200 {single
								? 'text-lg md:text-xl'
								: 'text-base md:text-lg'}"
						>
							<p>“{t.quote}”</p>
						</blockquote>

						<figcaption
							class="relative mt-8 flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-700/60"
						>
							{#if t.avatar}
								<img
									src={t.avatar}
									alt=""
									loading="lazy"
									class="h-12 w-12 rounded-full object-cover ring-2 ring-emerald-500/50"
								/>
							{:else}
								<span
									aria-hidden="true"
									class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 font-semibold text-emerald-700 ring-2 ring-emerald-500/40 dark:text-emerald-400"
								>
									{initials(t.name)}
								</span>
							{/if}

							<div class="min-w-0 flex-1">
								<p class="font-semibold text-slate-900 dark:text-white">{t.name}</p>
								{#if t.role || t.business}
									<p class="text-sm text-slate-500 dark:text-slate-400">
										{[t.role, t.business].filter(Boolean).join(', ')}
									</p>
								{/if}
							</div>

							{#if t.projectHref}
								<a
									href={t.projectHref}
									class="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-500/40 transition hover:bg-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-400"
								>
									View project
								</a>
							{:else if t.source}
								<span class="shrink-0 text-xs text-slate-400">via {t.source}</span>
							{/if}
						</figcaption>
					</figure>
				{/each}
			</div>

			{#if ctaHref}
				<div class="mt-12 text-center">
					<a
						href={ctaHref}
						class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white ring-1 ring-slate-900 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
					>
						{ctaLabel}
						<svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			{/if}
		</div>
	</section>
{/if}
