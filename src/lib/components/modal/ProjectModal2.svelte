<style>
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		display: grid;
		min-width: 240px;
		border-radius: 6px;
		padding: 16px;
		background: white;
		pointer-events: auto;
		height: 675px;
		grid-template-columns: 55% auto;
		grid-template-rows: 97% auto;
		grid-template-areas:
			'img details'
			'. close';
		column-gap: 25px;
	}

	.img {
		grid-area: img;
	}

	.details {
		grid-area: details;
	}

	.actions {
		grid-area: close;
		display: flex;
		justify-content: flex-end;
		flex-direction: row;
		margin-left: auto;
		font-size: 1.5rem;
		width: 1.5rem;
	}

	@media screen and (max-width: 768px){
		.contents{
			grid-template-rows: 50% 45% auto;
			grid-template-columns: auto;
			grid-template-areas: 
			'img'
			'details'
			'close';
			
		}
	}
</style>

<script>
	import { closeModal } from 'svelte-modals';
	import { fade } from 'svelte/transition';

	// provided by Modals
	export let isOpen;

	export let title;
	export let message;
	export let site;
	export let imgSrc;
	export let work;
	export let tech;
</script>

{#if isOpen}
	<div role="dialog" class="modal z-20" transition:fade|global>
		<div class="contents lg:w-9/12">
			<div class="img h-full">
				<a href="{site}" target="_blank">
					<img src="{imgSrc}" alt="" class="h-full" />
				</a>
				
			</div>
			<div class="details flex flex-col">
				<h2 class="md:text-4xl">{title}</h2>

				<p class="mt-6">{message}</p>

				<p class="mt-6">{work}</p>

				<p class="mt-6">Technologies Used: {tech}</p>

				<a class="mt-5 py-2.5 px-6 bg-accent w-36 rounded text-center" href="{site}" target="_blank"
					>Visit Site</a
				>
			</div>
			<div class="actions">
				<button class="border" on:click="{closeModal}">X</button>
			</div>
		</div>
	</div>
{/if}
