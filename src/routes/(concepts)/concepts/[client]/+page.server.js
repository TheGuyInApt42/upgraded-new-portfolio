import { mockupConfigs } from '$lib/data/mockupConfigs.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	// params.client comes from the [client] folder name in the URL
	const config = mockupConfigs[params.client];

	if (!config) {
		// If you type /concepts/random-name, it shows a 404
		throw error(404, 'Prospect concept not found');
	}

	// This 'config' becomes available in your +page.svelte as 'data.config'
	return { config };
}
