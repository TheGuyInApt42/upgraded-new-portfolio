<style>
	h2 {
		font-size: 2rem;
		text-align: center;
	}
</style>

<script>
	export let description = 'Test';
</script>

<div class="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:mt-24 lg:mb-32">
	<!-- Project Image -->
	<div class="lg:relative lg:pb-2/3">
		<img
			class="shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute"
			src="/images/droplet.gif"
			alt="Example page from project"
		/>
	</div>

	<!-- Project Details -->
	<div class="lg:h-full lg:flex lg:items-center">
		<div class="lg:grid lg:auto-rows-min">
			<!-- Project name -->
			<div class="relative inline-block">
				<div class="lg:relative lg:inline-block">
					<h3 class="relative z-10 pt-8 font-bold md:text-xl dark:text-white">Ralph J Gorham</h3>
					<div class="absolute bottom-0 w-full h-2 bg-turquoise-accent dark:bg-orange-accent"></div>
				</div>
			</div>

			<!-- Project description -->
			<p class="py-4 text-sm leading-relaxed md:text-base lg:py-6 dark:text-white"
				>Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and
				storybook. The project has the structure set up for the scaleable web application.</p
			>

			<!-- Project URL + extra info  -->
			<span class="inline-block mb-8 text-sm italic opacity-80 dark:text-white"
				>Web Design + Web Development + Hosting</span
			>
			<br class="lg:hidden" />

			<!-- Project Site -->
			<a
				href="https://ralphjgorham.com"
				class="inline-block px-4 py-2 ml-auto font-medium text-black uppercase 
    shadow-md bg-turquoise-accent lg:ml-0 lg:w-max dark:bg-orange-accent"
			>
				<span class="text-sm opacity-75">Visit Project </span>></a
			>
		</div>
	</div>

	<!--
    <div class="mt-4">
        <h2> Ralph J Gorham </h2>
        <h3>Web Design + Web Development + Hosting</h3>
        <p>Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, 
            husky, and storybook. The project has the structure set up for the 
            scaleable web application.
        </p>

        <a href="https://ralphjgorham.com" class="inline-block px-4 py-2 ml-auto font-medium text-black uppercase 
    shadow-md bg-turquoise-accent lg:ml-0 lg:w-max dark:bg-orange-accent">
    <span
        class="text-sm opacity-75">Visit Project
    </span>></a>
    </div>
    -->
</div>
