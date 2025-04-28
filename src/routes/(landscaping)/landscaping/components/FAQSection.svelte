<script>
	import { enhance } from '$app/forms';

	// Define the FAQ items data structure
	const faqs = [
		{
			id: 1,
			question: 'How long does it take to build a landscaping website?',
			answer: `For most landscaping websites, we can have your site 
        live within 2-3 weeks of receiving your content 
        (logo, images, company information). The Starter Plan can be 
        completed faster (1-2 weeks), while the Growth and Pro plans 
        may take 3-4 weeks due to the additional features and content.`
		},
		/* {
			id: 2,
			question: 'Do I need to provide my own photos?',
			answer:
				'While we strongly recommend using photos of your actual work (because it builds trust with potential clients), we can provide professional stock photos for landscaping if needed. We also offer optional professional photography services in select areas for an additional fee.'
		}, */
		{
			id: 3,
			question: 'Is there a setup fee or long-term contract?',
			answer: `While there are no setup fees with our monthly plans, 
        there is a minimum of a year commitment for all plans. 
        You can switch plans at any time after the first year,
        and you can upgrade or downgrade your plan as needed.
        You can cancel at any time after the first year with 30 days' notice.
        We're confident you'll love your website and the results it brings, 
        but we don't believe in locking clients into lengthy commitments.`
		},
		{
			id: 4,
			question: 'Can I update my website content myself?',
			answer: `Yes, all plans include access to a simple content management 
        system where you can make basic updates. 
        For more complex changes, we handle those for you based on 
        your plan's update allowance. The Pro Plan includes 
        unlimited content updates that we'll handle for you.`
		},
		{
			id: 5,
			question: 'Do you help with domain names and email?',
			answer: `Absolutely! We'll help you select and register a 
        domain name that works for your business 
        (annual domain fees apply, typically $15-20/year). 
        We can also set up professional email addresses for your business.`
		},
		{
			id: 6,
			question: 'What happens if I want to cancel?',
			answer:
				"If you decide to cancel, simply give us 30 days' notice. We can provide you with a copy of your website content and help with the transition to a new provider if needed. Your domain name remains your property, and we'll help you transfer it if you wish."
		}
	];

	// Using the $state rune to track the open FAQ item
	let openId = null;

	// Function to toggle FAQ item
	function toggleFaq() {
		openId = openId === id ? null : id;
	}

	// Handle keyboard navigation
	function handleKeyDown(event, id) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleFaq(id);
		}
	}

	// Track if the contact form is open
	let isContactFormOpen = false;

	// Form data with initial empty values
	let formData = {
		name: '',
		email: '',
		question: ''
	};

	function toggleContactForm() {
		isContactFormOpen = !isContactFormOpen;
	}

	// Focus trap for contact form
	let contactFormRef = null;
	let focusableElements;
	let firstFocusableElement;
	let lastFocusableElement;

	$: if (isContactFormOpen && contactFormRef) {
		// Using setTimeout to ensure the DOM is ready
		setTimeout(() => {
			if (contactFormRef) {
				contactFormRef.focus();

				// Get all focusable elements
				const elements = contactFormRef.querySelectorAll(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
				);

				focusableElements = elements;

				if (elements.length) {
					firstFocusableElement = elements[0];
					lastFocusableElement = elements[elements.length - 1];
					firstFocusableElement.focus();
				}
			}
		}, 50);
	}

	function handleContactFormKeyDown(event) {
		if (!isContactFormOpen) return;

		// Close on escape
		if (event.key === 'Escape') {
			event.preventDefault();
			toggleContactForm();
			return;
		}

		// Trap focus inside the form
		if (event.key === 'Tab') {
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

	// Handle input changes
	function handleInputChange(event, field) {
		const target = event.target;
		formData = {
			...formData,
			[field]: target.value
		};
	}
</script>

<section id="faq" class="bg-green-50 py-16" aria-labelledby="faq-heading">
	<div class="mx-auto max-w-5xl px-4">
		<h2 id="faq-heading" class="mb-10 text-center text-3xl font-bold text-green-800">
			Frequently Asked Questions
		</h2>

		<!-- FAQ Accordion -->
		<div class="space-y-4" role="region" aria-label="FAQ Accordion">
			{#each faqs as faq}
				<div class="overflow-hidden rounded-xl border border-green-200">
					<h3>
						<button
							id={`faq-button-${faq.id}`}
							class="flex w-full items-center justify-between bg-white p-4 text-left focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:outline-none"
							aria-expanded={openId === faq.id}
							aria-controls={`faq-content-${faq.id}`}
							onclick={() => toggleFaq(faq.id)}
							onkeydown={(e) => handleKeyDown(e, faq.id)}
						>
							<span class="text-lg font-medium text-green-800">{faq.question}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-green-600 transition-transform duration-300 {openId === faq.id
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</h3>
					<div
						id={`faq-content-${faq.id}`}
						class="max-h-0 overflow-hidden border-t border-green-100 bg-white transition-all duration-300 {openId ===
						faq.id
							? 'max-h-96 p-4'
							: 'max-h-0 p-0'}"
						aria-hidden={openId !== faq.id}
						role="region"
					>
						<p class="text-green-700">{faq.answer}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional question CTA -->
		<div class="mt-10 text-center">
			<p class="mb-4 text-green-700">Don't see your question here?</p>
			<button
				class="rounded-full bg-green-700 px-6 py-3 text-white shadow transition duration-300 hover:bg-green-800 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:outline-none"
				onclick={toggleContactForm}
				aria-haspopup="dialog"
				aria-expanded={isContactFormOpen}
			>
				Ask Us Anything
			</button>
		</div>
	</div>

	<!-- Contact Form Modal -->
	{#if isContactFormOpen}
		<div
			class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
			role="dialog"
			aria-modal="true"
			aria-labelledby="contact-form-title"
		>
			<div
				aria-label="Contact form"
				class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
				bind:this={contactFormRef}
				tabindex="-1"
				role="dialog"
				onkeydown={handleContactFormKeyDown}
			>
				<div class="mb-4 flex items-center justify-between">
					<h2 id="contact-form-title" class="text-xl font-bold text-green-800">
						Ask Your Question
					</h2>
					<button
						onclick={toggleContactForm}
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

				<form
					use:enhance={() => {
						return ({ result }) => {
							if (result.type === 'success') {
								alert(`Thanks for your question! We will get back to you soon.`);
								toggleContactForm(); // Assuming this closes a modal
							}
						};
					}}
					action="/contact?/question"
					method="POST"
				>
					<!-- Honeypot field (invisible to humans, bots might fill it) -->
					<input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" />

					<!-- Hidden field to identify form type -->
					<input type="hidden" name="form_type" value="question" />

					<div class="mb-4">
						<label for="name" class="mb-2 block text-sm font-medium text-green-700">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							oninput={(e) => handleInputChange(e, 'name')}
							class="w-full rounded-lg border border-green-300 p-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
							required
						/>
					</div>

					<div class="mb-4">
						<label for="email" class="mb-2 block text-sm font-medium text-green-700">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							oninput={(e) => handleInputChange(e, 'email')}
							class="w-full rounded-lg border border-green-300 p-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
							required
						/>
					</div>

					<div class="mb-4">
						<label for="question" class="mb-2 block text-sm font-medium text-green-700"
							>Your Question</label
						>
						<textarea
							id="question"
							rows="4"
							name="question"
							value={formData.question}
							oninput={(e) => handleInputChange(e, 'question')}
							class="w-full rounded-lg border border-green-300 p-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
							required
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full rounded-lg bg-green-700 py-2 text-white shadow transition duration-300 hover:bg-green-800 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:outline-none"
					>
						Submit Question
					</button>
				</form>
			</div>
		</div>
	{/if}
</section>
