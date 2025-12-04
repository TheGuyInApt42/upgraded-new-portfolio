<script>
	import { PUBLIC_STRIPE_AUDIT_LINK } from '$env/static/public';

	export let text = 'Start My $299 Audit';
	export let cssClasses =
		'inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3 text-base font-bold text-black shadow-lg transition-transform hover:-translate-y-1 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900';
</script>

<a href={PUBLIC_STRIPE_AUDIT_LINK} class={cssClasses}>
	{text}
</a>
