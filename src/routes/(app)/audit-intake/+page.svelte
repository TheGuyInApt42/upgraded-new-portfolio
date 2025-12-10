<script>
	import { enhance } from '$app/forms';

	let submitting = false;
	let result = null;
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
	<div class="max-w-2xl mx-auto lg:pt-28">
		<div class="text-center mb-12">
			<div
				class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-6"
			>
				<svg
					class="h-8 w-8 text-green-600 dark:text-green-300"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			</div>
			<h1 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
				Payment Successful!
			</h1>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
				Thank you for trusting GWC. I am excited to help you fix your site.
			</p>
			<p class="mt-2 text-base font-medium text-teal-600 dark:text-teal-400">
				Please complete this quick form so I can start your audit immediately.
			</p>
		</div>

		<div
			class="bg-white dark:bg-black py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-gray-100 dark:border-gray-800"
		>
			<form
				method="POST"
				class="space-y-6"
				use:enhance={() => {
					submitting = true;
					return async ({ result: formResult, update }) => {
						submitting = false;
						result = formResult.data;
						if (formResult.data?.success) {
							// Redirect on success
							window.location.href = '/audit-success';
						}
					};
				}}
			>
				<div>
					<label for="website" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
						Which website are we auditing?
					</label>
					<div class="mt-1">
						<input
							id="website"
							name="website"
							type="url"
							required
							placeholder="https://example.com"
							class="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-900 dark:text-white sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label
						for="frustration"
						class="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						What is your #1 frustration with your current site?
					</label>
					<div class="mt-1">
						<textarea
							id="frustration"
							name="frustration"
							rows="3"
							required
							class="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-900 dark:text-white sm:text-sm"
							placeholder="e.g. Customers can't find my phone number, or it looks bad on mobile..."
						></textarea>
					</div>
				</div>

				<div>
					<label
						for="competitors"
						class="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Who is your main local competitor? (Optional)
					</label>
					<p class="text-xs text-gray-500 mb-2">I'll compare your visibility against theirs.</p>
					<div class="mt-1">
						<input
							id="competitors"
							name="competitors"
							type="text"
							class="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-900 dark:text-white sm:text-sm"
						/>
					</div>
				</div>

				{#if result && !result.success}
					<p class="text-red-600 text-sm">{result.message}</p>
				{/if}

				<div>
					<button
						type="submit"
						disabled={submitting}
						class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 uppercase tracking-wide transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{submitting ? 'Submitting...' : 'Start The Process'}
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
