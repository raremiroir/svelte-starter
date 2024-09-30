import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import tailwindcss from 'eslint-plugin-tailwindcss';
import html from 'eslint-plugin-html';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { parseForESLint } from 'svelte-eslint-parser';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'dist/',
			'node_modules/',
			'tailwind.config.ts',
			'playwright.config.ts',
			'postcss.config.js',
			'vite.config.ts',
			'svelte.config.js',
		],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.eslint.json',
				parser: {
					js: parseForESLint('svelte-eslint-parser'),
					ts: parseForESLint('@typescript-eslint/parser'),
					tsx: parseForESLint('@typescript-eslint/parser'),
					html: parseForESLint('svelte-eslint-parser')
				}
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['src/*.ts', 'src/*.js', 'src/*.d.ts', 'src/*.svelte', 'src/*.js'],
		plugins: {
			svelte,
			tseslint,
			tailwindcss,
			html,
			simpleImportSort
		},
		rules: {
			'no-undef': 'off', // disallow the use of undeclared variables unless mentioned in a /*global */ block
			// Svelte rules
			'svelte/no-dupe-else-if-blocks': ['error'], // disallow duplicate else-if blocks
			'svelte/no-dupe-on-directives': ['error'], // disallow duplicate on directives
			'svelte/no-dupe-use-directives': ['error'], // disallow duplicate use directives
			'svelte/no-at-html-tags': ['off'], // warm when @html is used in expressions
			'svelte/button-has-type': ['warn', { button: true, submit: true, reset: true }], // warn when button element has no type attribute
			'svelte/no-at-debug-tags': ['error'], // disallow debugging syntax
			'svelte/no-ignored-unsubscribe': ['off'], // disallow ignoring store unsubscribe method
			'svelte/no-reactive-functions': ['error'], // disallow reactive functions as they add nothing to the reactivity
			'svelte/no-reactive-literals': ['error'], // disallow reactive declarations inside functions
			'svelte/no-unused-svelte-ignore': ['error'], // disallow unused svelte-ignore comments
			'svelte/no-useless-mustaches': [
				'error',
				{
					// disallow unnecessary mustaches
					ignoreIncludesComment: false,
					ignoreStringEscape: false
				}
			],
			'svelte/require-each-key': ['error'], // require each directive to have a key
			'svelte/first-attribute-linebreak': [
				'error',
				{
					// enforce first attribute line break
					multiline: 'below',
					singleline: 'beside'
				}
			],
			'svelte/html-closing-bracket-spacing': [
				'error',
				{
					// enforce html closing bracket spacing
					startTag: 'never', // <div>
					endTag: 'never', // </div>
					selfClosingTag: 'always' // <div />
				}
			],
			'svelte/html-quotes': [
				'error',
				{
					// enforce html attribute quotes
					prefer: 'double',
					dynamic: {
						quoted: false,
						avoidInvalidUnquotedInHTML: false
					}
				}
			],
			'svelte/max-attributes-per-line': [
				'error',
				{
					// limit attributes per line
					multiline: 1,
					singleline: 7
				}
			],
			'svelte/mustache-spacing': [
				'error',
				{
					// enforce mustache binding spacing
					textExpressions: 'never',
					attributesAndProps: 'never',
					directiveExpressions: 'never',
					tags: {
						openingBrace: 'never',
						closingBrace: 'never'
					}
				}
			],
			'svelte/no-spaces-around-equal-signs-in-attribute': ['error'],
			'svelte/shorthand-attribute': [
				'error',
				{
					// require shorthand attributes
					prefer: 'always'
				}
			],
			'svelte/shorthand-directive': [
				'error',
				{
					// require shorthand directives
					prefer: 'always'
				}
			],
			'svelte/spaced-html-comment': ['error', 'always'], // enforce spaced html comments
			'svelte/no-inner-declarations': ['error', 'functions'], // disallow inner declarations
			'svelte/no-trailing-spaces': ['error'], // disallow trailing spaces
			'svelte/sort-attributes': [
				'error',
				{
					// sort attributes
					order: [
						'slot',
						'this',
						'bind:this',
						'id',
						'name',
						'key',
						'type',
						'ref',
						'href',
						'target',
						'rel',
						{
							// other attributes. (Alphabetical order within the same group.)
							match: ['!/:/u', '!/^(?:this|id|name|style|class)$/u', '!/^--/u'],
							sort: 'alphabetical'
						},
						['/^bind:/u', '!bind:this', '/^on:/u'], // `bind:` directives (other then `bind:this`), and `on:` directives.
						{ match: '/^transition:/u', sort: 'alphabetical' }, // `transition:` directive.
						{ match: '/^in:/u', sort: 'alphabetical' }, // `in:` directive.
						{ match: '/^out:/u', sort: 'alphabetical' }, // `out:` directive.
						{ match: '/^animate:/u', sort: 'alphabetical' }, // `animate:` directive.
						{ match: '/^--/u', sort: 'alphabetical' }, // `--style-props` (Alphabetical order within the same group.)
						['style', '/^style:/u'], // `style` attribute, and `style:` directives.
						{ match: '/^let:/u', sort: 'alphabetical' }, // `let:` directives. (Alphabetical order within the same group.)
						'class',
						{ match: '/^class:/u', sort: 'alphabetical' }, // `class:` directives. (Alphabetical order within the same group.)
						{ match: '/^use:/u', sort: 'alphabetical' } // `use:` directives. (Alphabetical order within the same group.)
					]
				}
			],
			// TypeScript specific rules
			'@typescript-eslint/ban-ts-comment': [
				'error',
				{
					// enforce consistent ts-comment style
					'ts-expect-error': 'allow-with-description',
					'ts-ignore': true,
					'ts-nocheck': true,
					'ts-check': false,
					minimumDescriptionLength: 5
				}
			],
			'@typescript-eslint/no-explicit-any': 'error', // disallow the use of `any`
			'@typescript-eslint/no-non-null-assertion': ['off'], // disallow non-null-assertions
			'@typescript-eslint/no-empty-interface': [
				'error',
				{
					// disallow empty interfaces
					allowSingleExtends: false
				}
			],
			'@typescript-eslint/array-type': ['warn'], // enforce the array type in array
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					// disallow unused variables
					vars: 'all', // check all variables
					args: 'after-used', // check function arguments
					ignoreRestSiblings: true, // ignore rest siblings
					argsIgnorePattern: '^_', // ignore args that start with underscore
					varsIgnorePattern: '^_' // ignore vars that start with underscore
					// varsIgnorePattern: '^\\$\\$(Props|Events|Slots)$',
				}
			],
			// Tailwind CSS
			'tailwindcss/classnames-order': 'warn', // enforce order of tailwind classes
			'tailwindcss/enforces-negative-arbitrary-values': 'error', // enforce negative arbitrary values -> e.g. -top-[5px] should become top-[-5px]
			'tailwindcss/enforces-shorthand': 'error', // enforce using shorthand tailwind classes when available -> e.g. mt4 instead of my-4 mx-4
			'tailwindcss/no-contradicting-classname': 'error', // disallow contradicting tailwind classes -> e.g. m-1 and m-1.5 should not be used together
			'tailwindcss/no-custom-classname': 'off' // disallow custom class names
			// Import sorting
			// 'simple-import-sort/imports': 'error',
			// 'simple-import-sort/exports': 'error'
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
);
