<script>
	import { enhance } from '$app/forms';
	import { info } from '$lib/config';

	// Form data with initial empty values
	let formData = {
		name: '',
		email: '',
		phone: '',
		company: '',
		message: ''
	};

	// Form validation state
	let formErrors = {};
	let formSubmitted = false;
	let isSubmitting = false;

	// Success message state
	let showSuccessMessage = false;

	// Handle input changes
	function handleInputChange(event, field) {
		const target = event.target;
		formData = {
			...formData,
			[field]: target.value
		};

		// Clear error when user starts typing
		if (formErrors[field]) {
			formErrors = {
				...formErrors,
				[field]: ''
			};
		}
	}

	// Validate form
	function validateForm() {
		const newErrors = {};
		let isValid = true;

		// Name validation
		if (!formData.name.trim()) {
			newErrors.name = 'Please enter your name';
			isValid = false;
		}

		// Email validation
		if (!formData.email.trim()) {
			newErrors.email = 'Please enter your email address';
			isValid = false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
			isValid = false;
		}

		// Phone validation (optional but format if provided)
		if (formData.phone.trim() && !/^[\d\s\(\)\-\+]{7,20}$/.test(formData.phone)) {
			newErrors.phone = 'Please enter a valid phone number';
			isValid = false;
		}

		// Message validation
		if (!formData.message.trim()) {
			newErrors.message = 'Please tell us how we can help you';
			isValid = false;
		}

		formErrors = newErrors;
		return isValid;
	}

	// Handle form submission
	function handleSubmit() {
		formSubmitted = true;

		if (!validateForm()) {
			// Focus the first field with an error
			const firstErrorField = Object.keys(formErrors)[0];
			const errorElement = document.getElementById(firstErrorField);
			errorElement?.focus();
			return;
		}

		isSubmitting = true;

		// Simulate form submission - replace with actual API call
		setTimeout(() => {
			isSubmitting = false;
			showSuccessMessage = true;

			// Reset form after successful submission
			formData = {
				name: '',
				email: '',
				phone: '',
				company: '',
				message: ''
			};

			formSubmitted = false;

			// Hide success message after 5 seconds
			setTimeout(() => {
				showSuccessMessage = false;
			}, 5000);
		}, 1000);
	}
</script>

<section id="contact" class="bg-green-800 py-16 text-white" aria-labelledby="contact-heading">
	<div class="mx-auto max-w-5xl px-4">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<!-- Contact information -->
			<div>
				<h2 id="contact-heading" class="mb-6 text-3xl font-bold">
					Ready to Grow Your Landscaping Business?
				</h2>
				<p class="mb-8 text-lg text-green-100">
					Book a free 30-minute discovery call to see how we can help you attract more high-quality
					landscaping clients with a professional website.
				</p>

				<!-- Contact details - using dl for semantic structure -->
				<dl class="mb-8 space-y-4">
					<div class="flex items-center">
						<div class="mr-4 rounded-full bg-green-700 p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<div>
							<dt class="text-sm text-green-200">Phone</dt>
							<dd class="font-medium">
								<a
									href="tel:+1{info.phone.replace(/\D/g, '')}"
									class="hover:underline focus:underline focus:outline-none">{info.phone}</a
								>
							</dd>
						</div>
					</div>

					<div class="flex items-center">
						<div class="mr-4 rounded-full bg-green-700 p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<dt class="text-sm text-green-200">Email</dt>
							<dd class="font-medium">
								<a
									href="mailto:{info.email}"
									class="hover:underline focus:underline focus:outline-none">{info.email}</a
								>
							</dd>
						</div>
					</div>
				</dl>

				<!-- Trust badges with improved semantics -->
				<ul class="flex flex-wrap items-center gap-4" aria-label="Trust indicators">
					<li class="flex items-center rounded-lg bg-green-700 px-3 py-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2 h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
						<span class="text-sm">SSL Secured</span>
					</li>
					<li class="flex items-center rounded-lg bg-green-700 px-3 py-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2 h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span class="text-sm">Money-Back Guarantee</span>
					</li>
				</ul>
			</div>

			<!-- Contact form -->
			<div class="rounded-xl bg-white p-8 text-gray-800 shadow-xl">
				<h3 class="mb-4 text-2xl font-semibold text-green-800">Book Your Free Discovery Call</h3>

				{#if showSuccessMessage}
					<div
						class="mb-4 rounded-lg bg-green-100 p-4 text-green-800"
						role="alert"
						aria-live="assertive"
					>
						<div class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-3 h-5 w-5 text-green-600"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<p>
								<strong>Thank you!</strong> Your request has been received. We'll contact you shortly
								to schedule your free discovery call.
							</p>
						</div>
					</div>
				{/if}

				<form
					id="contact-form"
					use:enhance={handleSubmit}
					method="POST"
					action="/contact?/contact"
					aria-label="Contact form"
					novalidate
				>
					<div class="mb-4">
						<label class="mb-2 block text-sm font-medium text-green-700" for="name">
							Full Name <span class="text-red-500">*</span>
						</label>
						<input
							class="w-full rounded-lg border {formErrors.name && formSubmitted
								? 'border-red-500'
								: 'border-green-300'} px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
							type="text"
							id="name"
							name="name"
							placeholder="John Smith"
							aria-required="true"
							aria-invalid={formErrors.name && formSubmitted ? 'true' : 'false'}
							aria-describedby={formErrors.name && formSubmitted ? 'name-error' : undefined}
							value={formData.name}
							oninput={(e) => handleInputChange(e, 'name')}
							required
						/>
						{#if formErrors.name && formSubmitted}
							<p id="name-error" class="mt-1 text-sm text-red-600" aria-live="polite">
								{formErrors.name}
							</p>
						{/if}
					</div>

					<!-- Honeypot field for spam prevention -->
					<div class="hidden">
						<label for="website">Website</label>
						<input type="text" id="website" name="website" autocomplete="off" tabindex="-1" />
					</div>

					<!-- Hidden field to identify form type -->
					<input type="hidden" name="form_type" value="contact" />

					<div class="mb-4">
						<label class="mb-2 block text-sm font-medium text-green-700" for="email">
							Email Address <span class="text-red-500">*</span>
						</label>
						<input
							class="w-full rounded-lg border {formErrors.email && formSubmitted
								? 'border-red-500'
								: 'border-green-300'} px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
							type="email"
							id="email"
							name="email"
							placeholder="john@yourcompany.com"
							aria-required="true"
							aria-invalid={formErrors.email && formSubmitted ? 'true' : 'false'}
							aria-describedby={formErrors.email && formSubmitted ? 'email-error' : undefined}
							value={formData.email}
							oninput={(e) => handleInputChange(e, 'email')}
							required
						/>
						{#if formErrors.email && formSubmitted}
							<p id="email-error" class="mt-1 text-sm text-red-600" aria-live="polite">
								{formErrors.email}
							</p>
						{/if}
					</div>

					<div class="mb-4">
						<label class="mb-2 block text-sm font-medium text-green-700" for="phone">
							Phone Number
						</label>
						<input
							class="w-full rounded-lg border {formErrors.phone && formSubmitted
								? 'border-red-500'
								: 'border-green-300'} px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
							type="tel"
							id="phone"
							name="phone"
							placeholder="(555) 123-4567"
							aria-describedby={formErrors.phone && formSubmitted ? 'phone-error' : 'phone-hint'}
							value={formData.phone}
							oninput={(e) => handleInputChange(e, 'phone')}
						/>
						{#if formErrors.phone && formSubmitted}
							<p id="phone-error" class="mt-1 text-sm text-red-600" aria-live="polite">
								{formErrors.phone}
							</p>
						{:else}
							<p id="phone-hint" class="mt-1 text-xs text-green-600">
								Optional, but helpful for scheduling
							</p>
						{/if}
					</div>

					<div class="mb-4">
						<label class="mb-2 block text-sm font-medium text-green-700" for="company">
							Company Name
						</label>
						<input
							class="w-full rounded-lg border border-green-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
							type="text"
							id="company"
							name="company"
							placeholder="Your Landscaping Company"
							value={formData.company}
							oninput={(e) => handleInputChange(e, 'company')}
						/>
					</div>

					<div class="mb-6">
						<label class="mb-2 block text-sm font-medium text-green-700" for="message">
							How can we help? <span class="text-red-500">*</span>
						</label>
						<textarea
							class="h-24 w-full rounded-lg border {formErrors.message && formSubmitted
								? 'border-red-500'
								: 'border-green-300'} px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
							id="message"
							name="message"
							placeholder="Tell us about your current website situation and goals..."
							aria-required="true"
							aria-invalid={formErrors.message && formSubmitted ? 'true' : 'false'}
							aria-describedby={formErrors.message && formSubmitted ? 'message-error' : undefined}
							value={formData.message}
							oninput={(e) => handleInputChange(e, 'message')}
							required
						></textarea>
						{#if formErrors.message && formSubmitted}
							<p id="message-error" class="mt-1 text-sm text-red-600" aria-live="polite">
								{formErrors.message}
							</p>
						{/if}
					</div>

					<button
						type="submit"
						class="w-full rounded-lg bg-green-700 py-3 font-medium text-white shadow transition hover:bg-green-800 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:outline-none disabled:opacity-70"
						disabled={isSubmitting}
						aria-busy={isSubmitting}
					>
						{#if isSubmitting}
							<span class="flex items-center justify-center">
								<svg
									class="mr-2 h-5 w-5 animate-spin"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Processing...
							</span>
						{:else}
							Schedule My Free Call
						{/if}
					</button>

					<p class="mt-4 text-center text-xs text-green-700">
						By submitting this form, you agree to our
						<a
							href="/privacy"
							class="underline hover:text-green-800 focus:ring-1 focus:ring-green-500 focus:outline-none"
							>privacy policy</a
						>
						and
						<a
							href="/terms"
							class="underline hover:text-green-800 focus:ring-1 focus:ring-green-500 focus:outline-none"
							>terms of service</a
						>.
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
