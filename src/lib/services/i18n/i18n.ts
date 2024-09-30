import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from './paraglide/runtime';
// import { match as int } from "../params/int.js";

export const i18n = createI18n(runtime, {
	prefixDefaultLanguage: 'always',
	defaultLanguageTag: 'nl',
	pathnames: {
		'/over-ons': {
			en: '/about',
			nl: '/over-ons',
			fr: '/a-propos'
		}

		// You can use parameters
		// All translations must use identical parameters and names
		// "/user/[id=int]/[...rest]" : {
		// 	en: "/user/[id=int]/[...rest]",
		// 	de: "/benutzer/[id=int]/[...rest]",
		// 	fr: "/utilisateur/[id=int]/[...rest]",
		// },
	}
	// If you're using matchers in the pathnames, you need to pass them
	// matchers: { int	}
});
