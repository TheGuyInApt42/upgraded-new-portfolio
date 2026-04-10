<script>
	import Phone from 'lucide-svelte/icons/phone';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import Scissors from 'lucide-svelte/icons/scissors';
	import Flower2 from 'lucide-svelte/icons/flower-2';
	import Layers from 'lucide-svelte/icons/layers';
	import TreePine from 'lucide-svelte/icons/tree-pine';
	import Droplets from 'lucide-svelte/icons/droplets';
	import MoveVertical from 'lucide-svelte/icons/move-vertical';
	import ShieldCheck from 'lucide-svelte/icons/shield-check';
	import BadgeCheck from 'lucide-svelte/icons/badge-check';
	import Clock from 'lucide-svelte/icons/clock';
	import MapPin from 'lucide-svelte/icons/map-pin';
	import Map from 'lucide-svelte/icons/map';
	import Lock from 'lucide-svelte/icons/lock';
	import ClipboardList from 'lucide-svelte/icons/clipboard-list';
	import Square from 'lucide-svelte/icons/square';

	export let name = '';
	export let size = 24;
	export let color = 'currentColor';
	export let strokeWidth = 1.75;

	const icons = {
		Phone,
		ArrowRight,
		ChevronDown,
		Menu,
		X,
		Scissors,
		Flower2,
		Layers,
		TreePine,
		Droplets,
		MoveVertical,
		ShieldCheck,
		BadgeCheck,
		Clock,
		MapPin,
		Map,
		Lock,
		ClipboardList,
		Square
	};

	$: Icon = icons[name] ?? Square;
</script>

<svelte:component this={Icon} {size} {color} {strokeWidth} />
