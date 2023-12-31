
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ffffff 
		"--color-primary-50": "255 255 255", // #ffffff
		"--color-primary-100": "255 255 255", // #ffffff
		"--color-primary-200": "255 255 255", // #ffffff
		"--color-primary-300": "255 255 255", // #ffffff
		"--color-primary-400": "255 255 255", // #ffffff
		"--color-primary-500": "255 255 255", // #ffffff
		"--color-primary-600": "230 230 230", // #e6e6e6
		"--color-primary-700": "191 191 191", // #bfbfbf
		"--color-primary-800": "153 153 153", // #999999
		"--color-primary-900": "125 125 125", // #7d7d7d
		// secondary | #4F46E5 
		"--color-secondary-50": "229 227 251", // #e5e3fb
		"--color-secondary-100": "220 218 250", // #dcdafa
		"--color-secondary-200": "211 209 249", // #d3d1f9
		"--color-secondary-300": "185 181 245", // #b9b5f5
		"--color-secondary-400": "132 126 237", // #847eed
		"--color-secondary-500": "79 70 229", // #4F46E5
		"--color-secondary-600": "71 63 206", // #473fce
		"--color-secondary-700": "59 53 172", // #3b35ac
		"--color-secondary-800": "47 42 137", // #2f2a89
		"--color-secondary-900": "39 34 112", // #272270
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #971e11 
		"--color-error-50": "239 221 219", // #efdddb
		"--color-error-100": "234 210 207", // #ead2cf
		"--color-error-200": "229 199 196", // #e5c7c4
		"--color-error-300": "213 165 160", // #d5a5a0
		"--color-error-400": "182 98 88", // #b66258
		"--color-error-500": "151 30 17", // #971e11
		"--color-error-600": "136 27 15", // #881b0f
		"--color-error-700": "113 23 13", // #71170d
		"--color-error-800": "91 18 10", // #5b120a
		"--color-error-900": "74 15 8", // #4a0f08
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
		
	}
}