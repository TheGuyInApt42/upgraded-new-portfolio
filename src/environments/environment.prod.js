import { EnvironmentName } from '$lib/enums/environment-name';
import { EnvironmentType } from '$lib/enums/environment-type';
import {
	SveltekitDataEndpointsProd,
	SveltekitSearchEndpointsProd,
} from '$lib/enums/sveltekit-endpoint.prod';


export const environment = {
	name: EnvironmentName.PRODUCTION,
	environmentType: EnvironmentType.PROD,
	production: true,
	isDebugMode: false,
	launchURL: import.meta.env.SVELTEKIT_STARTER_BASE_URL,
	apiUrls: {
		CHUCK_NORRIS: import.meta.env.SVELTEKIT_STARTER_CHUCK_NORRIS_API_URL,
		IN_MEMORY: '',
		GITHUB: import.meta.env.SVELTEKIT_STARTER_GITHUB_API_URL,
	},
	chuckNorriesAPIConfig: {
		defaultAPILang: import.meta.env.SVELTEKIT_STARTER_CHUCK_NORRIS_API_LANG
			? import.meta.env.SVELTEKIT_STARTER_CHUCK_NORRIS_API_LANG
			: 'en-US',
		endPoints: {
			SEARCH: SveltekitSearchEndpointsProd.SEARCH,
			SERVICE: SveltekitDataEndpointsProd.SERVICE,
		},
	},
	twitterConfig: {
		TWITTER_API_KEY: import.meta.env.SVELTEKIT_STARTER_TWITTER_API_KEY,
		TWITTER_TWEETS_ENDPOINT: import.meta.env.SVELTEKIT_STARTER_TWITTER_TWEETS_ENDPOINT,
		TWITTER_SEARCH_URL: import.meta.env.SVELTEKIT_STARTER_TWITTER_SEARCH_URL,
	},
	gitHubConfig: {
		GITHUB_API_URL: import.meta.env.SVELTEKIT_STARTER_GITHUB_API_URL,
	},
};