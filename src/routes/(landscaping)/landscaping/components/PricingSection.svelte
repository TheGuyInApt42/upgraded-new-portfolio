<script>
	import { enhance } from '$app/forms';

	// Define pricing plans
	const plans = [
		{
			name: 'Starter',
			price: 100,
			isPopular: false,
			features: {
				pages: '3 pages',
				hosting: true,
				updates: '1',
				seo: 'Basic',
				googleBusiness: false,
				reports: false,
				emailMarketing: false,
				leadGeneration: false
			}
		},
		{
			name: 'Growth',
			price: 200,
			isPopular: true,
			features: {
				pages: '5-7 pages',
				hosting: true,
				updates: '3',
				seo: 'Advanced',
				googleBusiness: true,
				reports: 'Quarterly',
				emailMarketing: false,
				leadGeneration: 'Basic'
			}
		},
		{
			name: 'Pro',
			price: 300,
			isPopular: false,
			features: {
				pages: '7+ pages',
				hosting: true,
				updates: 'Unlimited',
				seo: 'Premium',
				googleBusiness: true,
				reports: 'Monthly',
				emailMarketing: true,
				leadGeneration: 'Advanced'
			}
		}
	];

	// Using Svelte 5 runes for reactive state

	// Selected plan and modal state
	let selectedPlan = null;
	let isModalOpen = false;

	// Form data with initial empty values
	let formData = {
		name: '',
		email: '',
		phone: '',
		plan: null
	};

	// Form validation state
	let formErrors = {};
	let formSubmitted = false;
	let isSubmitting = false;
	let showSuccessMessage = false;

	// Modal ref for focus management
	let modalRef = null;
	let firstFocusableElement = null;
	let lastFocusableElement = null;

	// Open modal with selected plan
	function openPlanModal(plan) {
		selectedPlan = plan;
		formData.plan = plan;
		isModalOpen = true;
	}

	// Close modal
	function closeModal() {
		isModalOpen = false;

		// Reset form data only if not showing success message
		if (!showSuccessMessage) {
			resetForm();
		}
	}

	// Reset form data
	function resetForm() {
		formData = {
			name: '',
			email: '',
			phone: '',
			plan: selectedPlan
		};
		formErrors = {};
		formSubmitted = false;
	}

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

		formErrors = newErrors;
		return isValid;
	}

	// Handle keyboard navigation in modal
	function handleModalKeyDown(event) {
		if (!isModalOpen) return;

		// Close on escape
		if (event.key === 'Escape') {
			event.preventDefault();
			closeModal();
			return;
		}

		// Trap focus inside the modal
		if (event.key === 'Tab' && firstFocusableElement && lastFocusableElement) {
			if (event.shiftKey) {
				if (document.activeElement === firstFocusableElement) {
					event.preventDefault();
					lastFocusableElement.focus();
				}
			} else {
				if (document.activeElement === lastFocusableElement) {
					event.preventDefault();
					firstFocusableElement.focus();
				}
			}
		}
	}

	// Track if the contact form is open
	let isContactFormOpen = false;

	function toggleContactForm() {
		isContactFormOpen = !isContactFormOpen;
	}

	$: if (isModalOpen && modalRef) {
		setTimeout(() => {
			if (modalRef) {
				modalRef.focus();

				// Get all focusable elements
				const elements = modalRef.querySelectorAll(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
				);

				if (elements.length) {
					firstFocusableElement = elements[0];
					lastFocusableElement = elements[elements.length - 1];
					firstFocusableElement.focus();
				}
			}
		}, 50);
	}
</script>

<section id="pricing" class="mx-auto max-w-5xl px-4 py-12" aria-labelledby="pricing-heading">
	<h2 id="pricing-heading" class="mb-8 text-center text-3xl font-bold text-green-800">
		Simple Pricing – No Surprises
	</h2>

	<!-- Pricing comparison table with accessibility improvements -->
	<div class="overflow-x-auto">
		<table class="w-full overflow-hidden rounded-xl shadow-lg" aria-describedby="pricing-heading">
			<caption class="sr-only">
				Comparison of pricing plans: Starter ($100/month), Growth ($200/month), and Pro ($300/month)
			</caption>
			<thead class="bg-green-700 text-white">
				<tr>
					<th scope="col" class="px-6 py-4 text-left">Plan Features</th>
					<th scope="col" class="border-l border-green-600 px-6 py-4 text-center">
						Starter<br /><span class="font-normal">$100/month</span>
					</th>
					<th scope="col" class="border-l border-green-600 bg-green-800 px-6 py-4 text-center">
						Growth<br /><span class="font-normal">$200/month</span>
						<span class="sr-only">(Most popular plan)</span>
					</th>
					<th scope="col" class="border-l border-green-600 px-6 py-4 text-center">
						Pro<br /><span class="font-normal">$300/month</span>
					</th>
				</tr>
			</thead>
			<tbody class="bg-white">
				<tr class="border-b border-gray-200">
					<th scope="row" class="px-6 py-3 text-left text-green-800">Pages</th>
					<td class="border-l border-gray-200 px-6 py-3 text-center">{plans[0].features.pages}</td>
					<td class="border-l border-gray-200 bg-green-50 px-6 py-3 text-center"
						>{plans[1].features.pages}</td
					>
					<td class="border-l border-gray-200 px-6 py-3 text-center">{plans[2].features.pages}</td>
				</tr>
				<tr class="border-b border-gray-200">
					<th scope="row" class="px-6 py-3 text-left text-green-800">Hosting & Maintenance</th>
					<td class="border-l border-gray-200 px-6 py-3 text-center" aria-label="Included">
						<span aria-hidden="true">✅</span>
					</td>
					<td
						class="border-l border-gray-200 bg-green-50 px-6 py-3 text-center"
						aria-label="Included"
					>
						<span aria-hidden="true">✅</span>
					</td>
					<td class="border-l border-gray-200 px-6 py-3 text-center" aria-label="Included">
						<span aria-hidden="true">✅</span>
					</td>
				</tr>
				<tr class="border-b border-gray-200">
					<th scope="row" class="px-6 py-3 text-left text-green-800">Monthly Content Updates</th>
					<td class="border-l border-gray-200 px-6 py-3 text-center">{plans[0].features.updates}</td
					>
					<td class="border-l border-gray-200 bg-green-50 px-6 py-3 text-center"
						>{plans[1].features.updates}</td
					>
					<td class="border-l border-gray-200 px-6 py-3 text-center">{plans[2].features.updates}</td
					>
				</tr>
				<tr class="border-b border-gray-200">
					<th scope="row" class="px-6 py-3 text-left text-green-800">SEO Optimization</th>
					<td class="border-l border-gray-200 px-6 py-3 text-center">{plans[0].features.seo}</td>
					<td class="border-l border-gray-200 bg-green-50 px-6 py-3 text-center"
						>{plans[1].features.seo}</td
					>
					<td class="border-l border-gray-200 px-6 py-3 text-center">{plans[2].features.seo}</td>
				</tr>
				<tr class="border-b border-gray-200">
					<th scope="row" class="px-6 py-3 text-left text-green-800">Google Business Profile</th>
					<td
						class="border-l border-gray-200 px-6 py-3 text-center"
						aria-label={plans[0].features.googleBusiness ? 'Included' : 'Not included'}
					>
						<span aria-hidden="true">{plans[0].features.googleBusiness ? '✅' : '❌'}</span>
					</td>
					<td
						class="border-l border-gray-200 bg-green-50 px-6 py-3 text-center"
						aria-label={plans[1].features.googleBusiness ? 'Included' : 'Not included'}
					>
						<span aria-hidden="true">{plans[1].features.googleBusiness ? '✅' : '❌'}</span>
					</td>
					<td
						class="border-l border-gray-200 px-6 py-3 text-center"
						aria-label={plans[2].features.googleBusiness ? 'Included' : 'Not included'}
					>
						<span aria-hidden="true">{plans[2].features.googleBusiness ? '✅' : '❌'}</span>
					</td>
				</tr>
				<tr class="border-b border-gray-200">
					<th scope="row" class="px-6 py-3 text-left text-green-800">Performance Reports</th>
					<td
						class="border-l border-gray-200 px-6 py-3 text-center"
						aria-label={plans[0].features.reports
							? typeof plans[0].features.reports === 'string'
								? plans[0].features.reports
								: 'Included'
							: 'Not included'}
					>
						<span aria-hidden="true"
							>{plans[0].features.reports
								? typeof plans[0].features.reports === 'string'
									? plans[0].features.reports
									: '✅'
								: '❌'}</span
						>
					</td>
					<td class="border-l border-gray-200 bg-green-50 px-6 py-3 text-center">
						{plans[1].features.reports}
					</td>
					<td class="border-l border-gray-200 px-6 py-3 text-center">
						{plans[2].features.reports}
					</td>
				</tr>
				<tr class="border-b border-gray-200">
					<th scope="row" class="px-6 py-3 text-left text-green-800">Email Marketing</th>
					<td
						class="border-l border-gray-200 px-6 py-3 text-center"
						aria-label={plans[0].features.emailMarketing
							? typeof plans[0].features.emailMarketing === 'string'
								? plans[0].features.emailMarketing
								: 'Included'
							: 'Not included'}
					>
						<span aria-hidden="true"
							>{plans[0].features.emailMarketing
								? typeof plans[0].features.emailMarketing === 'string'
									? plans[0].features.emailMarketing
									: '✅'
								: '❌'}</span
						>
					</td>
					<td
						class="border-l border-gray-200 bg-green-50 px-6 py-3 text-center"
						aria-label={plans[1].features.emailMarketing
							? typeof plans[1].features.emailMarketing === 'string'
								? plans[1].features.emailMarketing
								: 'Included'
							: 'Not included'}
					>
						<span aria-hidden="true"
							>{plans[1].features.emailMarketing
								? typeof plans[1].features.emailMarketing === 'string'
									? plans[1].features.emailMarketing
									: '✅'
								: '❌'}</span
						>
					</td>
					<td class="border-l border-gray-200 px-6 py-3 text-center">
						<span aria-hidden="true">{plans[2].features.emailMarketing ? '✅' : '❌'}</span>
					</td>
				</tr>
				<tr>
					<th scope="row" class="px-6 py-3 text-left text-green-800"
						>Lead Generation Optimization</th
					>
					<td
						class="border-l border-gray-200 px-6 py-3 text-center"
						aria-label={plans[0].features.leadGeneration
							? typeof plans[0].features.leadGeneration === 'string'
								? plans[0].features.leadGeneration
								: 'Included'
							: 'Not included'}
					>
						<span aria-hidden="true"
							>{plans[0].features.leadGeneration
								? typeof plans[0].features.leadGeneration === 'string'
									? plans[0].features.leadGeneration
									: '✅'
								: '❌'}</span
						>
					</td>
					<td class="border-l border-gray-200 bg-green-50 px-6 py-3 text-center">
						{plans[1].features.leadGeneration}
					</td>
					<td class="border-l border-gray-200 px-6 py-3 text-center">
						{plans[2].features.leadGeneration}
					</td>
				</tr>
				<tr class="bg-green-50">
					<td class="px-6 py-4 text-left"></td>
					<td class="border-l border-gray-200 px-6 py-4 text-center">
						<button
							class="rounded-full bg-green-600 px-4 py-2 text-sm text-white transition hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
							aria-label="Select Starter plan for $100 per month"
							onclick={() => openPlanModal('Starter')}
						>
							Select Starter
						</button>
					</td>
					<td class="border-l border-gray-200 bg-green-100 px-6 py-4 text-center">
						<button
							class="rounded-full bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
							aria-label="Select Growth plan for $200 per month - our most popular choice"
							onclick={() => openPlanModal('Growth')}
						>
							Popular Choice
						</button>
					</td>
					<td class="border-l border-gray-200 px-6 py-4 text-center">
						<button
							class="rounded-full bg-green-600 px-4 py-2 text-sm text-white transition hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
							aria-label="Select Pro plan for $300 per month"
							onclick={() => openPlanModal('Pro')}
						>
							Select Pro
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<!-- Plan Selection Modal -->
	{#if isModalOpen}
		<div
			class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
			role="dialog"
			tabindex="0"
			aria-modal="true"
			aria-labelledby="plan-modal-title"
			onkeydown={handleModalKeyDown}
		>
			<div
				class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
				bind:this={modalRef}
				tabindex="-1"
			>
				<div class="mb-4 flex items-center justify-between">
					<h3 id="plan-modal-title" class="text-xl font-bold text-green-800">
						You're selecting the {selectedPlan} Plan
					</h3>
					<button
						onclick={closeModal}
						class="rounded-full text-green-700 hover:text-green-900 focus:ring-2 focus:ring-green-600 focus:outline-none"
						aria-label="Close form"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<!-- Plan details summary -->
				<div class="mb-4 rounded-lg bg-green-50 p-4">
					<p class="font-medium text-green-800">
						{selectedPlan} Plan - ${selectedPlan === 'Starter'
							? '100'
							: selectedPlan === 'Growth'
								? '200'
								: '300'}/month
					</p>
					<p class="mt-1 text-sm text-green-700">
						{#if selectedPlan === 'Starter'}
							Includes 3 pages, basic SEO, and monthly updates.
						{:else if selectedPlan === 'Growth'}
							Includes 5-7 pages, advanced SEO, Google Business Profile, and more.
						{:else}
							Includes 7+ pages, premium SEO, monthly reports, blog posts, and advanced lead
							generation.
						{/if}
					</p>
				</div>

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
								<strong>Thank you!</strong> Your {selectedPlan} Plan request has been received. We'll
								contact you shortly to get started.
							</p>
						</div>
					</div>
				{:else}
					<form
						use:enhance={() => {
							// Set submitting state when form is submitted
							isSubmitting = true;

							return ({ result }) => {
								// Reset submitting state
								isSubmitting = false;

								if (result.type === 'success') {
									// Show success message
									showSuccessMessage = true;

									// Close modal after delay
									setTimeout(() => {
										showSuccessMessage = false;
										closeModal(); // This is the correct function to close the plan modal
									}, 3000);
								} else {
									// Handle error case
									alert('Something went wrong. Please try again.');
								}
							};
						}}
						method="POST"
						action="/contact?/interest"
						aria-label={`Contact form for ${selectedPlan} Plan`}
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
						<input type="hidden" name="form_type" value="interest" />

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

						<!-- Hidden input for plan selection -->
						<input type="hidden" name="selected_plan" value={selectedPlan} />

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
								Get Started with {selectedPlan} Plan
							{/if}
						</button>

						<p class="mt-4 text-center text-xs text-green-700">
							No long-term contracts. Cancel anytime with 30 days' notice.
						</p>
					</form>
				{/if}
			</div>
		</div>
	{/if}
</section>
