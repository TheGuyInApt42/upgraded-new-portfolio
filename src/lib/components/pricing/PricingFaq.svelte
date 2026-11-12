<script>
	// Svelte 4/5 compatible (no runes). Drop in $lib/components/ and place it
	// directly under <Pricing /> on the homepage. Edit the questions below.
	export let heading = 'Fair questions I hear a lot';
	export let subheading = 'If one of these is on your mind, here is my honest answer.';
	// Matches Pricing.svelte. Inside a blog post (already padded), pass sectionClass="py-12".
	export let sectionClass = 'px-4 pb-20 sm:px-6 lg:pb-28';
	export let ctaHref = '/contact';
	export let ctaLabel = 'Ask me anything on a free call';

	export let faqs = [
		{
			q: '"It costs too much."',
			a: 'Plans start at $150 a month at my founding rate, not a big check upfront. For most local businesses, one extra customer a month covers it. The first three clients keep the founding rate for as long as they stay.'
		},
		{
			q: '"What if I want out, or something happens to you?"',
			a: 'Your domain (your web address) is registered in your name from day one, so no one can ever hold it hostage. After the first 12 months, the site itself is fully yours to keep, whether you stay with me or not. Want to leave earlier? Pay off the rest of the year and take everything with you.'
		},
		{
			q: '"My site is fine the way it is."',
			a: 'It might be. Open it on your phone the way a new customer would. Can they find your number in five seconds? Does it look like you are still in business? If not, people will not tell you. They will just call the next business on Google.'
		},
		{
			q: '"I get my customers from word of mouth."',
			a: 'Word of mouth is the best kind of customer. But when someone hears your name, they look you up before they call. Your site is where you back up what the referral said about you.'
		},
		{
			q: '"A family member already handles my site."',
			a: 'Family help is hard to beat on price. I am happy to work alongside them, or take over the parts they do not have time for, like updates, fixes and showing up on Google. No hard feelings either way.'
		},
		{
			q: '"I don\'t have time for this."',
			a: 'That is the point of hiring me. Plan on one 30-minute call, plus a few photos and answers you already know. I handle everything else and send it to you to approve.'
		}
	];

	const focusRing =
		'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900';
</script>

<section class={sectionClass} aria-labelledby="pricing-faq-heading">
	<div class="mx-auto max-w-4xl">
		<div class="mx-auto mb-10 max-w-2xl text-center">
			<h2
				id="pricing-faq-heading"
				class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				{heading}
			</h2>
			{#if subheading}
				<p class="mt-3 text-slate-600 dark:text-white/70">{subheading}</p>
			{/if}
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			{#each faqs as item, i (item.q)}
				<details
					class="group rounded-3xl border border-slate-300/60 bg-white/80 p-5 shadow-sm backdrop-blur transition open:shadow-md dark:border-white/15 dark:bg-white/10"
					open={i < 2}
				>
					<summary
						class="flex cursor-pointer list-none items-start justify-between gap-4 rounded-2xl font-semibold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden {focusRing}"
					>
						<span>{item.q}</span>
						<span
							aria-hidden="true"
							class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise-accent text-sm leading-none text-slate-900 transition group-open:rotate-45"
						>
							+
						</span>
					</summary>
					<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/75">{item.a}</p>
				</details>
			{/each}
		</div>

		{#if ctaHref}
			<div class="mt-10 text-center">
				<a
					href={ctaHref}
					class="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-sm font-semibold uppercase text-slate-700 no-underline transition hover:border-slate-400 hover:bg-white hover:no-underline dark:border-white/30 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/15 {focusRing}"
				>
					{ctaLabel}
				</a>
			</div>
		{/if}
	</div>
</section>
