<script>
	import { enhance } from '$app/forms';
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import { buildReport } from '$lib/grader/checks.js';

	/** Result of the last form action (grade or report). */
	export let form;

	let grading = false;
	let unlocking = false;

	$: stage = form?.stage || 'start';
	$: report = form?.findings ? safeReport(form.findings) : null;
	$: topIssue = report?.issues?.[0];

	function safeReport(findings) {
		try {
			return buildReport(findings);
		} catch {
			return null;
		}
	}

	const gradeColor = (g) =>
		g === 'A' || g === 'B'
			? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200'
			: g === 'C'
				? 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200'
				: g === '–'
					? 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-white/60'
					: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-200';

	const metaData = {
		title: 'Free Website Grader | Gorham Web Consulting',
		description:
			'Get a free A–F grade for your small business website: mobile speed, Google basics, and how easy it is for customers to call or book.',
		url: '/grade',
		keywords: ['website grader', 'free website check', 'small business website audit', 'website report card']
	};

	const card =
		'rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-8 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40';
	const input =
		'w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-900 placeholder-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder-white/40';
	const btnPrimary =
		'inline-flex items-center justify-center rounded-full bg-turquoise-accent px-6 py-3 text-sm font-semibold uppercase text-slate-900 no-underline shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0';
	const btnSecondary =
		'inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-sm font-semibold uppercase text-slate-700 no-underline transition hover:border-slate-400 hover:bg-white hover:no-underline dark:border-white/30 dark:bg-white/10 dark:text-white/80';
</script>

<HeadTags {metaData} />

<section
	class="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 py-20 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white md:py-24 lg:py-32"
>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div class="absolute -top-24 left-12 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20"></div>
		<div
			class="absolute bottom-[-140px] right-1/4 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/15"
		></div>
	</div>

	<div class="relative mx-auto max-w-3xl px-6 pt-28 md:px-8 lg:pt-32">
		<!-- Intro + URL form (always visible, so they can grade another site) -->
		<div class="text-center">
			<span
				class="inline-flex items-center rounded-full border border-slate-300/60 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm dark:border-white/20 dark:bg-white/10 dark:text-white/80"
			>
				Free · About 20 seconds
			</span>
			<h1 class="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">How does your website grade?</h1>
			<p class="mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-white/70">
				Enter your website and I'll check what your customers actually run into: speed on a phone, Google
				basics, and how easy it is to call or book you.
			</p>
		</div>

		<form
			method="POST"
			action="?/grade"
			class="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
			use:enhance={() => {
				grading = true;
				return async ({ update }) => {
					await update({ reset: false });
					grading = false;
				};
			}}
		>
			<label for="url" class="sr-only">Your website address</label>
			<input
				id="url"
				name="url"
				type="text"
				inputmode="url"
				autocomplete="url"
				required
				placeholder="yourbusiness.com"
				value={form?.url ?? report?.url ?? ''}
				class={input}
			/>
			<!-- honeypot: real people never see or fill this -->
			<input type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
			<button type="submit" class={btnPrimary} disabled={grading}>
				{grading ? 'Checking…' : 'Grade my site'}
			</button>
		</form>

		<div aria-live="polite">
			{#if grading}
				<p class="mt-6 text-center text-sm text-slate-600 dark:text-white/70">
					Checking your site the way a customer on a phone would see it. This usually takes 15–30 seconds.
				</p>
			{:else if stage === 'error' && form?.error}
				<p
					class="mx-auto mt-6 max-w-xl rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-800 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200"
				>
					{form.error}
					<a href="/contact" class="font-semibold underline">Send it to me instead</a>
				</p>
			{/if}
		</div>

		{#if report && !grading && (stage === 'graded' || stage === 'report')}
			<!-- Report card (free) -->
			<div class="mt-12 {card}">
				<div class="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
					<div
						class="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl text-6xl font-bold {gradeColor(
							report.grade
						)}"
						aria-label="Overall grade {report.grade}"
					>
						{report.grade}
					</div>
					<div class="text-center sm:text-left">
						<p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">
							Report card
						</p>
						<h2 class="mt-1 text-2xl font-bold break-all">{report.host}</h2>
						{#if report.score != null}
							<p class="mt-1 text-slate-600 dark:text-white/70">{report.score} out of 100</p>
						{/if}
					</div>
				</div>

				<ul class="mt-8 divide-y divide-slate-200 dark:divide-white/10">
					{#each report.categories as cat (cat.key)}
						<li class="flex items-center justify-between py-3">
							<span class="font-medium">{cat.label}</span>
							<span class="rounded-full px-3 py-1 text-sm font-bold {gradeColor(cat.grade)}">
								{cat.grade}
							</span>
						</li>
					{/each}
				</ul>
				{#if report.categories.find((c) => c.key === 'speed')?.score == null}
					<p class="mt-3 text-xs text-slate-500 dark:text-white/50">
						Speed couldn't be measured this time, so it isn't counted in the grade.
					</p>
				{/if}
			</div>

			{#if stage === 'graded'}
				<!-- Email gate -->
				<div class="mt-6 {card}">
					{#if report.issues.length}
						<h2 class="text-2xl font-bold">
							I found {report.issues.length}
							{report.issues.length === 1 ? 'thing' : 'things'} to fix.
						</h2>
						<p class="mt-2 text-slate-600 dark:text-white/70">
							The biggest one: <strong class="text-slate-900 dark:text-white">{topIssue.title}.</strong>
							Get the full list, in order of what to fix first, with a plain-English fix for each.
						</p>
					{:else}
						<h2 class="text-2xl font-bold">Your site passed every automated check.</h2>
						<p class="mt-2 text-slate-600 dark:text-white/70">
							Want a copy of this report card, plus a personal second look?
						</p>
					{/if}

					<form
						method="POST"
						action="?/report"
						class="mt-6 grid gap-3 sm:grid-cols-2"
						use:enhance={() => {
							unlocking = true;
							return async ({ update }) => {
								await update({ reset: false });
								unlocking = false;
							};
						}}
					>
						<input type="hidden" name="findings" value={JSON.stringify(report.findings)} />
						<input type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
						<div>
							<label for="name" class="sr-only">First name</label>
							<input id="name" name="name" required autocomplete="given-name" placeholder="First name" value={form?.name ?? ''} class={input} />
						</div>
						<div>
							<label for="email" class="sr-only">Email</label>
							<input id="email" name="email" type="email" required autocomplete="email" placeholder="Email" value={form?.email ?? ''} class={input} />
						</div>
						<div class="sm:col-span-2">
							<label for="business" class="sr-only">Business name (optional)</label>
							<input id="business" name="business" autocomplete="organization" placeholder="Business name (optional)" value={form?.business ?? ''} class={input} />
						</div>
						{#if form?.error}
							<p class="text-sm text-rose-700 sm:col-span-2 dark:text-rose-300">{form.error}</p>
						{/if}
						<div class="sm:col-span-2">
							<button type="submit" class="{btnPrimary} w-full" disabled={unlocking}>
								{unlocking ? 'Sending…' : 'Show me the full report'}
							</button>
							<p class="mt-3 text-center text-xs text-slate-500 dark:text-white/50">
								I'll email you a copy and take a personal look at your site within 24 hours. No spam, and you can
								unsubscribe anytime.
							</p>
						</div>
					</form>
				</div>
			{:else}
				<!-- Full report (after email) -->
				<div class="mt-6 {card}">
					<h2 class="text-2xl font-bold">
						{report.issues.length ? 'What to fix first' : 'Nothing major to fix'}
					</h2>
					<p class="mt-2 text-slate-600 dark:text-white/70">
						Thanks{form?.name ? `, ${form.name}` : ''}. A copy is on its way to your inbox, and I'll follow up
						personally within 24 hours.
					</p>

					{#if report.issues.length}
						<ol class="mt-6 space-y-4">
							{#each report.issues as issue, i (issue.id)}
								<li class="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
									<div class="flex gap-4">
										<span
											class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-turquoise-accent text-sm font-bold text-slate-900"
										>
											{i + 1}
										</span>
										<div>
											<h3 class="font-semibold">{issue.title}</h3>
											<p class="mt-1 text-sm text-slate-600 dark:text-white/70">{issue.why}</p>
											<p class="mt-2 text-sm">
												<span class="font-semibold text-emerald-700 dark:text-emerald-300">Fix:</span>
												{issue.fix}
											</p>
										</div>
									</div>
								</li>
							{/each}
						</ol>
					{/if}
				</div>

				<!-- Pitch -->
				<div class="mt-6 {card} text-center">
					<h2 class="text-2xl font-bold">Want me to look at it by hand?</h2>
					<p class="mx-auto mt-3 max-w-xl text-slate-600 dark:text-white/70">
						This was the automated version. My $299 website audit is me going through your site on a real phone,
						testing your forms and booking, and comparing you to your top local competitor, then walking you
						through it on a 30-minute call. The fee is credited toward your first month if we work together.
					</p>
					<div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
						<a href="/website-audit" class={btnPrimary}>See the $299 audit</a>
						<a href="/contact" class={btnSecondary}>Or ask me a question</a>
					</div>
				</div>
			{/if}
		{/if}
	</div>
</section>
