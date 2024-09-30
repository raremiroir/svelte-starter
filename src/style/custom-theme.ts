import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #0A3158
		'--color-primary-50': '218 224 230', // #dae0e6
		'--color-primary-100': '206 214 222', // #ced6de
		'--color-primary-200': '194 204 213', // #c2ccd5
		'--color-primary-300': '157 173 188', // #9dadbc
		'--color-primary-400': '84 111 138', // #546f8a
		'--color-primary-500': '10 49 88', // #0A3158
		'--color-primary-600': '9 44 79', // #092c4f
		'--color-primary-700': '8 37 66', // #082542
		'--color-primary-800': '6 29 53', // #061d35
		'--color-primary-900': '5 24 43', // #05182b
		// secondary | #209992
		'--color-secondary-50': '222 240 239', // #def0ef
		'--color-secondary-100': '210 235 233', // #d2ebe9
		'--color-secondary-200': '199 230 228', // #c7e6e4
		'--color-secondary-300': '166 214 211', // #a6d6d3
		'--color-secondary-400': '99 184 179', // #63b8b3
		'--color-secondary-500': '32 153 146', // #209992
		'--color-secondary-600': '29 138 131', // #1d8a83
		'--color-secondary-700': '24 115 110', // #18736e
		'--color-secondary-800': '19 92 88', // #135c58
		'--color-secondary-900': '16 75 72', // #104b48
		// tertiary | #CFD8DE
		'--color-tertiary-50': '248 249 250', // #f8f9fa
		'--color-tertiary-100': '245 247 248', // #f5f7f8
		'--color-tertiary-200': '243 245 247', // #f3f5f7
		'--color-tertiary-300': '236 239 242', // #eceff2
		'--color-tertiary-400': '221 228 232', // #dde4e8
		'--color-tertiary-500': '207 216 222', // #CFD8DE
		'--color-tertiary-600': '186 194 200', // #bac2c8
		'--color-tertiary-700': '155 162 167', // #9ba2a7
		'--color-tertiary-800': '124 130 133', // #7c8285
		'--color-tertiary-900': '101 106 109', // #656a6d
		// success | #5EEB5B
		'--color-success-50': '231 252 230', // #e7fce6
		'--color-success-100': '223 251 222', // #dffbde
		'--color-success-200': '215 250 214', // #d7fad6
		'--color-success-300': '191 247 189', // #bff7bd
		'--color-success-400': '142 241 140', // #8ef18c
		'--color-success-500': '94 235 91', // #5EEB5B
		'--color-success-600': '85 212 82', // #55d452
		'--color-success-700': '71 176 68', // #47b044
		'--color-success-800': '56 141 55', // #388d37
		'--color-success-900': '46 115 45', // #2e732d
		// warning | #FABC3C
		'--color-warning-50': '254 245 226', // #fef5e2
		'--color-warning-100': '254 242 216', // #fef2d8
		'--color-warning-200': '254 238 206', // #feeece
		'--color-warning-300': '253 228 177', // #fde4b1
		'--color-warning-400': '252 208 119', // #fcd077
		'--color-warning-500': '250 188 60', // #FABC3C
		'--color-warning-600': '225 169 54', // #e1a936
		'--color-warning-700': '188 141 45', // #bc8d2d
		'--color-warning-800': '150 113 36', // #967124
		'--color-warning-900': '123 92 29', // #7b5c1d
		// error | #FF3C38
		'--color-error-50': '255 226 225', // #ffe2e1
		'--color-error-100': '255 216 215', // #ffd8d7
		'--color-error-200': '255 206 205', // #ffcecd
		'--color-error-300': '255 177 175', // #ffb1af
		'--color-error-400': '255 119 116', // #ff7774
		'--color-error-500': '255 60 56', // #FF3C38
		'--color-error-600': '230 54 50', // #e63632
		'--color-error-700': '191 45 42', // #bf2d2a
		'--color-error-800': '153 36 34', // #992422
		'--color-error-900': '125 29 27', // #7d1d1b
		// surface | #fefefe
		'--color-surface-50': '255 255 255', // #ffffff
		'--color-surface-100': '255 255 255', // #ffffff
		'--color-surface-200': '255 255 255', // #ffffff
		'--color-surface-300': '255 255 255', // #ffffff
		'--color-surface-400': '254 254 254', // #fefefe
		'--color-surface-500': '254 254 254', // #fefefe
		'--color-surface-600': '229 229 229', // #e5e5e5
		'--color-surface-700': '191 191 191', // #bfbfbf
		'--color-surface-800': '152 152 152', // #989898
		'--color-surface-900': '124 124 124' // #7c7c7c
	}
};

export default customTheme;
