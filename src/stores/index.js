import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const isDev = writable(process.env.NODE_ENV === 'development');

export const theme = writable((browser && localStorage.getItem('theme')) || 'light');

const defaultValue = 'light';

const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;
//export const theme = writable<boolean>(false);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
	}
});