<script>

	// Start: Local Imports
	// Components

	// Models

	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {ITestimonial}
	 */
	export let testimonial;
	// End: Exported Properties
</script>

<!-- Testimonials -->
<section id="testimonials" class="relative lg:mb-16 xl:mb-0">
	<div class="relative z-20">
		<h2 class="pt-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl lg:py-16"
			>What the <div class="relative z-20 inline-block">
				<div class="relative z-10">Experts</div>
				<div class="absolute w-full h-3 transform bottom-2 bg-accent -rotate-3"> </div>
			</div> are saying</h2
		>

		<!-- Testimonials container -->
		<div class="lg:flex lg:justify-center">
			<div
				class="relative z-20 py-24 md:px-20 md:pt-16 lg:flex lg:flex-wrap lg:max-w-screen lg:pt-8 lg:justify-center lg:gap-12"
			>
				<!-- Testimonial 1 -->
				<div
					class="relative grid grid-cols-8 px-4 py-8 mx-4 mb-24 bg-white border border-b-0 shadow-md border-opacity-5 md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0"
				>
					<!-- Mobile Text -->
					<p class="z-10 col-start-1 col-end-6 text-sm italic md:hidden lg:text-lg">{testimonial.mobile}</p>

					<!-- Tablet and bigger Text -->
					<p class="z-10 hidden col-start-1 col-end-6 text-sm italic md:inline-block md:px-3 lg:text-lg">
						{testimonial.feedback}</p
					>

					<!-- Image -->
					<div class="relative col-start-6 col-end-9 overflow-visible">
						<img
							class="absolute bottom-0 right-0 -mb-8 md:h-56"
							src="images/testim_1.png"
							alt="Portait of a grey shirted man"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Vertical accent line -->
	<div class="absolute top-0 bottom-0 z-10 w-1 ml-8 border-l-2 border-accent lg:hidden"></div>
</section>
