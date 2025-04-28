<script>
	function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section id="testimonials" class="bg-green-100 py-16" aria-labelledby="testimonials-heading">
	<div class="mx-auto max-w-3xl px-4 text-center">
		<h2 id="testimonials-heading" class="mb-6 text-3xl font-bold text-green-800">
			Testimonials Coming Soon!
		</h2>
		<p class="mb-8 text-lg text-green-700">
			We're currently working with our first batch of landscaping clients — your business could be
			one of the first success stories featured here!
		</p>

		<!-- Testimonial placeholder with visual elements -->
		<div
			class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3"
			role="region"
			aria-label="Testimonial placeholders"
		>
			<!-- Placeholder 1 -->
			<div
				class="bg-opacity-50 rounded-xl border border-green-200 bg-white p-6 shadow-sm"
				role="presentation"
			>
				<div class="mb-4 flex justify-center" aria-hidden="true">
					<div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 text-green-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</div>
				</div>
				<div
					class="mb-3 flex h-20 items-center justify-center rounded-lg border border-dashed border-green-300 bg-green-50"
				>
					<p class="font-medium text-green-600">Future Testimonial</p>
				</div>
				<p class="text-green-600 italic" aria-label="Five star rating">
					<span aria-hidden="true">⭐⭐⭐⭐⭐</span>
				</p>
			</div>

			<!-- Placeholder 2 -->
			<div
				class="bg-opacity-50 rounded-xl border border-green-200 bg-white p-6 shadow-sm"
				role="presentation"
			>
				<div class="mb-4 flex justify-center" aria-hidden="true">
					<div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 text-green-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</div>
				</div>
				<div
					class="mb-3 flex h-20 items-center justify-center rounded-lg border border-dashed border-green-300 bg-green-50"
				>
					<p class="font-medium text-green-600">Your Success Story</p>
				</div>
				<p class="text-green-600 italic" aria-label="Five star rating">
					<span aria-hidden="true">⭐⭐⭐⭐⭐</span>
				</p>
			</div>

			<!-- Placeholder 3 -->
			<div
				class="bg-opacity-50 rounded-xl border border-green-200 bg-white p-6 shadow-sm"
				role="presentation"
			>
				<div class="mb-4 flex justify-center" aria-hidden="true">
					<div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 text-green-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</div>
				</div>
				<div
					class="mb-3 flex h-20 items-center justify-center rounded-lg border border-dashed border-green-300 bg-green-50"
				>
					<p class="font-medium text-green-600">Coming Soon</p>
				</div>
				<p class="text-green-600 italic" aria-label="Five star rating">
					<span aria-hidden="true">⭐⭐⭐⭐⭐</span>
				</p>
			</div>
		</div>

		<!-- Early client bonus with improved design and accessibility -->
		<div
			class="mx-auto max-w-xl rounded-xl border-t-4 border-green-600 bg-white p-8 text-green-800 shadow-lg"
			role="region"
			aria-labelledby="early-client-bonus-heading"
		>
			<div class="mb-4 flex items-center justify-center" aria-hidden="true">
				<div class="rounded-full bg-green-100 p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-green-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-label="Gift box icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
						/>
					</svg>
				</div>
			</div>
			<h3 id="early-client-bonus-heading" class="mb-3 text-xl font-bold">Early Client Bonus</h3>
			<p class="mb-4 text-green-700">
				Be one of our first 5 landscaping clients and get a <span
					class="rounded bg-green-100 px-2 py-1 font-semibold text-green-800">25% discount</span
				> for the first 3 months in exchange for a short testimonial and permission to feature your site.
			</p>
			<button
				on:click={() => scrollToSection('contact')}
				class="mt-2 rounded-full bg-green-700 px-6 py-3 text-white shadow transition duration-300 hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
				aria-label="Claim 25% early client discount and go to contact form"
			>
				Claim Early Client Discount
			</button>
		</div>
	</div>
</section>
