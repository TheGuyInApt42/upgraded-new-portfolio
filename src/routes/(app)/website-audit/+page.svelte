<script>
	import StripeButton from '$lib/components/stripe/StripeButton.svelte';

	const painPoints = [
		"You're embarrassed to send people to your current website.",
		'You know people visit your site, but your phone never rings.',
		'A customer told you “your site looks broken” on their phone.',
		"You have no idea if you're even showing up on Google.",
		"You paid for a website years ago, and it's been a useless, expensive brochure ever since."
	];

	const deliverables = [
		{
			title: 'The 5-Second Load Test',
			feature: "I'll test your site's load speed.",
			benefit:
				"Over 50% of visitors leave if a site takes longer than 3-5 seconds. I'll show you if you're losing half your customers before they even see your page."
		},
		{
			title: 'The Mobile “Frustration” Test',
			feature: "I'll record a video of me using your site on an iPhone and an Android phone.",
			benefit:
				"You'll see exactly what your customers see. Can they tap the phone number? Is the contact form impossible to fill out? This is often the #1 source of lost leads."
		},
		{
			title: 'The “Lost Lead” Form & Phone Check',
			feature: "I'll personally test every contact form, button, and phone number.",
			benefit:
				"You'd be shocked how many contact forms are broken or go to a spam folder. I'll find out if your “Get a Quote” button is a dead end."
		},
		{
			title: 'The “Local Visibility” Score',
			feature: "I'll check your Google Business Profile and basic SEO.",
			benefit:
				'Can local customers find you when they search “auto shop near me”? I’ll show you where you stand against your top competitor.'
		},
		{
			title: 'A 30-Minute, 1-on-1 Strategy Call',
			feature: 'We meet for a 30-minute Zoom call.',
			benefit:
				"We'll review your report together. Ask me anything. You'll leave with a crystal-clear action plan."
		}
	];

	const steps = [
		{
			title: 'Purchase & Book',
			description:
				'Click the button below to pay the $299 fee and fill out a quick, 2-minute form about your business.'
		},
		{
			title: 'I Get to Work',
			description:
				'I spend the next 2-3 business days analyzing your site, recording videos, and creating your custom PDF report.'
		},
		{
			title: 'Get Your Action Plan',
			description:
				'We hop on a 30-minute strategy call. I walk you through the report and hand you your step-by-step plan.'
		}
	];
</script>

<!-- Hero -->
<section
	class="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white"
>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -top-32 right-8 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-500/20"
		></div>
		<div
			class="absolute bottom-[-140px] left-1/3 h-96 w-96 -translate-x-1/3 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/10"
		></div>
	</div>

	<div
		class="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pb-20 pt-32 text-center sm:px-10 lg:pt-36"
	>
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
			Stop Guessing. Start Growing.
		</h1>
		<p class="text-base text-slate-700 sm:text-lg lg:text-xl dark:text-white/80">
			Is your website costing you customers? For $299, get a simple, 10-point Website Health Audit
			that shows you exactly where you're losing money and how to fix it.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<StripeButton />
			<span class="text-sm text-slate-600 dark:text-white/60"
				>Secure checkout · Takes under 2 minutes</span
			>
		</div>
	</div>
</section>

<!-- Problem Section -->
<section class="bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-white">
	<div class="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-8">
		<div class="text-center">
			<h2 class="text-2xl font-bold sm:text-3xl">Does This Sound Familiar?</h2>
			<p class="mt-4 text-base text-slate-600 dark:text-white/70">
				If you're nodding “yes”, your website isn't just underperforming—it's actively costing you
				customers.
			</p>
		</div>

		<ul
			class="grid gap-4 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-emerald-100/20 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40"
		>
			{#each painPoints as point}
				<li class="flex items-start gap-3">
					<span
						class="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-emerald-300 text-emerald-500 dark:border-emerald-400 dark:text-emerald-300"
					>
						<svg class="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
							<path d="M4.8 7.9 3 6.1l-.9.9 2.7 2.7 5.1-5.1-.9-.9z" />
						</svg>
					</span>
					<span class="text-base text-slate-700 dark:text-white/75">{point}</span>
				</li>
			{/each}
		</ul>

		<blockquote
			class="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-lg italic text-slate-700 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-white/80"
		>
			“<span class="font-semibold"
				>A confusing website doesn't just sit there—it actively sends your potential customers
				straight to your competitors.</span
			>”
		</blockquote>
	</div>
</section>

<!-- Solution Intro -->
<section
	class="bg-gradient-to-b from-white via-slate-50 to-white py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
>
	<div class="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-8">
		<div
			class="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30"
		>
			<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
				The $299 Website Health Audit: A No-Fluff Action Plan
			</h2>
			<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
				Stop wasting money on a “pretty” website that doesn't work. The Website Health Audit is a
				professional diagnostic for your business.
			</p>
			<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
				I will personally review your entire online presence and deliver a simple, visual, 5-page
				PDF report. No confusing tech jargon. Just a clear, prioritized action plan that shows you:
			</p>
			<ul class="mt-6 grid gap-3 text-base text-slate-600 dark:text-white/70">
				<li class="flex items-start gap-3">
					<span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400"></span>
					<strong class="text-slate-900 dark:text-white">What's Broken</strong> (and costing you money)
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400"></span>
					<strong class="text-slate-900 dark:text-white">Why It's Broken</strong> (in plain English)
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400"></span>
					<strong class="text-slate-900 dark:text-white">How to Fix It</strong> (the step-by-step solution)
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- Deliverables -->
<section class="bg-white py-16 dark:bg-slate-950">
	<div class="mx-auto max-w-6xl px-6 sm:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
				Your $299 Audit Includes:
			</h2>
			<p class="mt-4 text-base text-slate-600 dark:text-white/70">
				If it doesn't move the needle, it's not in the report. Every deliverable is designed to
				uncover exactly where your website is leaking leads (and how to fix it fast).
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2">
			{#each deliverables as item}
				<div
					class="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-emerald-200/40 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 dark:hover:border-emerald-300/40"
				>
					<h3 class="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
					<div class="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">
						<p class="text-base font-medium text-emerald-700 dark:text-emerald-400">
							{item.benefit}
						</p>
						<p class="italic opacity-80">
							How I do it: {item.feature}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process -->
<section
	class="bg-gradient-to-br from-slate-100 via-white to-slate-200 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
>
	<div class="mx-auto max-w-5xl px-6 sm:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
				Your Simple 3-Step Process
			</h2>
			<p class="mt-4 text-base text-slate-600 dark:text-white/70">
				Nothing overwhelming. No jargon. Just a proven, fast path to clarity.
			</p>
		</div>

		<ol class="mt-12 grid gap-6 md:grid-cols-3">
			{#each steps as step, index}
				<li
					class="relative rounded-3xl border border-slate-200 bg-white/90 p-6 text-left shadow-lg shadow-slate-200/40 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30"
				>
					<span
						class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-turquoise-accent text-base font-bold uppercase text-slate-900 shadow-sm shadow-emerald-200/50 dark:text-slate-900"
					>
						{index + 1}
					</span>
					<h3 class="mt-6 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
						{step.description}
					</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- Risk Reversal -->
<section class="bg-white py-16 dark:bg-slate-950">
	<div
		class="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/95 px-6 py-12 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40 sm:px-10"
	>
		<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
			This is a 100% Risk-Free Investment
		</h2>
		<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
			<strong class="font-semibold text-slate-900 dark:text-white">Here's my promise:</strong> The PDF
			report and all my analysis are yours to keep. You can take that action plan and hand it to any
			designer—or even DIY.
		</p>
		<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70">
			But if you decide to hire me to do the full redesign, I'll apply the $299 you paid for this
			audit as a full credit toward the project.
		</p>
		<p class="mt-4 text-base font-semibold leading-relaxed text-slate-900 dark:text-white">
			You either get a $299 action plan, or you get a $299 discount on a new website. You cannot
			lose.
		</p>
	</div>
</section>

<!-- Final CTA -->
<section
	id="start"
	class="relative isolate overflow-hidden bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 py-20 text-slate-900 dark:from-emerald-500 dark:via-teal-500 dark:to-sky-500"
>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div class="absolute inset-y-0 right-0 w-1/2 bg-white/10 blur-3xl"></div>
	</div>

	<div class="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center text-slate-900">
		<h2 class="text-3xl font-bold sm:text-4xl">Ready to Stop Losing Customers?</h2>
		<p class="text-base sm:text-lg">
			Invest in your business today. Find out what's really broken, so you can finally fix it.
		</p>
		<!-- <a
			href="/contact?service=audit"
			class="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-base font-semibold uppercase text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
		>
			Start My $299 Audit Now
		</a> -->

		<StripeButton />
		<p class="text-sm text-slate-800/80">
			You will be taken to a secure payment page. After payment, you'll receive your welcome form
			immediately.
		</p>
	</div>
</section>
