import { join } from 'path';

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './src/my-custom-theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [myCustomTheme],
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					},
					{
						name: 'wintry',
						enhancements: true
					},
					{
						name: 'modern',
						enhancements: true
					}
				]
			}
		})
	]
};
