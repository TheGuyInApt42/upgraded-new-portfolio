<!-- A simple "Thanks, I'm on it!" page -->
<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		// Optional: Redirect after a delay if needed
		// setTimeout(() => goto('/'), 10000);
	});
</script>

<section
	class="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white min-h-[calc(100vh-200px)] flex items-center"
>
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -top-32 right-8 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-500/20"
		></div>
		<div
			class="absolute bottom-[-140px] left-1/3 h-96 w-96 -translate-x-1/3 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/10"
		></div>
	</div>

	<div class="mx-auto max-w-3xl px-6 py-20 sm:px-10 lg:py-32">
		<div
			class="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40 text-center"
		>
			<!-- Success Icon -->
			<div
				class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-8"
			>
				<svg
					class="h-12 w-12 text-emerald-600 dark:text-emerald-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>

			<!-- Main Message -->
			<h1
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
			>
				Thanks, I'm on it!
			</h1>

			<p class="mt-6 text-lg leading-relaxed text-slate-700 dark:text-white/80">
				I've received your audit intake form and I'm already getting started on your Website Health
				Audit.
			</p>

			<!-- What Happens Next -->
			<div
				class="mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-left dark:border-white/10 dark:bg-white/5"
			>
				<h2 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">
					What happens next?
				</h2>
				<ol class="space-y-3 text-base text-slate-700 dark:text-white/75">
					<li class="flex items-start gap-3">
						<span
							class="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white"
						>
							1
						</span>
						<span>
							<strong class="text-slate-900 dark:text-white">I'll analyze your website</strong> over
							the next 2-3 business days, testing everything from load speed to mobile usability.
						</span>
					</li>
					<li class="flex items-start gap-3">
						<span
							class="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white"
						>
							2
						</span>
						<span>
							<strong class="text-slate-900 dark:text-white"
								>I'll create your custom PDF report</strong
							>
							with videos, screenshots, and a clear action plan showing exactly what's broken and how
							to fix it.
						</span>
					</li>
					<li class="flex items-start gap-3">
						<span
							class="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white"
						>
							3
						</span>
						<span>
							<strong class="text-slate-900 dark:text-white"
								>We'll schedule your 30-minute strategy call</strong
							>
							where I'll walk you through the report and answer all your questions.
						</span>
					</li>
				</ol>
			</div>

			<!-- Contact Info -->
			<div
				class="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20"
			>
				<p class="text-base text-slate-700 dark:text-white/80">
					<strong class="text-slate-900 dark:text-white">Questions?</strong> Feel free to reach out at
					any time. I'll keep you updated throughout the process.
				</p>
			</div>

			<!-- CTA Button -->
			<div class="mt-10">
				<a
					href="/"
					class="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-base font-semibold uppercase text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
				>
					Back to Home
				</a>
			</div>
		</div>
	</div>
</section>
