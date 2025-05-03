<script>
	import { browser } from '$app/environment';

	// Start: Local Imports
	// Components


	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {IServiceBlock}
	 */
	export let service;
	// End: Exported Properties

	const setAlignment =
		service.alignment == 'right'
			? 'relative w-full overflow-hidden pb-1/1 xl:pb-2/3 lg:order-2'
			: 'relative w-full overflow-hidden pb-1/1 xl:pb-2/3';
</script>

{#if service}
	<div class="mb-8 lg:grid lg:grid-cols-2 md:mb-10 ">
		<!-- Pic and # -->
		<div class="{setAlignment}">
			<img
				class="absolute bottom-0 right-0 object-cover w-full h-full"
				src="{service.imageSrc}"
				alt="{service.imageAlt}"
			/>
		</div>

		<!-- Text -->
		<div
			class="flex flex-col items-center justify-center px-6 pt-8 pb-16 md:pt-10 md:pb-20 lg:px-20 lg:pt-20 lg:pb-24 bg-blue-green-accent dark:bg-orange-accent"
		>
			<div>
				<!-- Heading -->
				<h2 class="mb-6 text-2xl font-bold lg:text-4xl lg:mb-12">{service.heading}</h2>

				<!-- Short desciption -->
				<p class="mb-6 md:text-lg lg:text-xl lg:mb-12">{service.tagline} </p>
				<div class="relative z-20 mb-10 lg:mb-12">
					<div class="-mt-2 text-base max-w-prose md:text-lg lg:text-xl"
						><div class="relative z-20 inline-block">
							<div class="absolute w-full h-3 transform opacity-75 bottom-1 bg-accent2Light -rotate-3">
							</div>
						</div>
						{service.interesting}</div
					>
				</div>

				<!-- Longer text -->
				<p class="text-sm leading-normal md:text-base lg:leading-relaxed">{service.text}</p>
			</div>
		</div>
	</div>
{/if}
