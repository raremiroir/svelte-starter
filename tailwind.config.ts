import type { Config } from 'tailwindcss';
import twTypography from '@tailwindcss/typography';
import twForms from '@tailwindcss/forms';
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import customTheme from './src/style/custom-theme';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		twTypography,
		twForms,
		skeleton({
			themes: {
				custom: [customTheme]
			}
		})
	]
} as Config;
