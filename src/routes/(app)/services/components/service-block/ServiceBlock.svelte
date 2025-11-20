<script>
/**
 * @type {IServiceBlock}
 */
export let service;

const imageLayout =
service?.alignment === 'right'
? 'relative order-2 w-full overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/30 p-4 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40'
: 'relative w-full overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/30 p-4 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40';
</script>

{#if service}
<div class="mb-14 grid gap-10 lg:grid-cols-2 lg:items-center">
<!-- Image -->
<div class={imageLayout}>
<div class="aspect-[4/3] overflow-hidden rounded-[28px] bg-slate-900/5 dark:bg-slate-900/40">
<img
src={service.imageSrc}
alt={service.imageAlt}
loading="lazy"
class="h-full w-full object-cover transition duration-500 will-change-transform hover:scale-105"
/>
</div>
</div>

<!-- Text -->
<div
class="rounded-3xl border border-slate-200 bg-white/85 p-8 text-slate-800 shadow-lg shadow-slate-200/50 transition dark:border-white/10 dark:bg-slate-900/60 dark:text-white/80 dark:shadow-black/30"
>
<div class="space-y-6">
<div class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-white/20 dark:bg-white/10 dark:text-white/70">
{service.heading}
</div>
<h2 class="text-2xl font-bold text-slate-900 dark:text-white lg:text-4xl">{service.tagline}</h2>
<p class="text-base leading-relaxed text-slate-600 dark:text-white/70">{service.text}</p>
<div class="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-4 text-sm font-medium text-slate-800 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-100">
{service.interesting}
</div>
</div>
</div>
</div>
{/if}
