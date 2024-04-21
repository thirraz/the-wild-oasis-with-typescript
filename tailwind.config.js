/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"spinner-gradient":
					"radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000) top/10px 10px no-repeat, conic-gradient(#0000 30%, var(--color-brand-600))"
			}
		},
		colors: {
			"brand-50": "#eef2ff",
			"brand-100": "#e0e7ff",
			"brand-200": "#c7d2fe",
			"brand-500": "#6366f1",
			"brand-600": "#4f46e5",
			"brand-700": "#4338ca",
			"brand-800": "#3730a3",
			"brand-900": "#312e81",
			"grey-0": "#fff", //dark mode checked
			"grey-50": "#f9fafb", //dark mode checked
			"grey-100": "#f3f4f6", //dark mode checked
			"grey-200": "#e5e7eb", //dark mode checked
			"grey-300": "#d1d5db", //dark mode checked
			"grey-400": "#9ca3af", //dark mode checked
			"grey-500": "#6b7280", //dark mode checked
			"grey-600": "#4b5563", //dark mode checked
			"grey-700": "#374151", //dark mode checked
			"grey-800": "#1f2937", //dark mode checked
			"grey-900": "#111827", //dark mode checked
			"blue-100": "#e0f2fe", //dark mode checked
			"blue-700": "#0369a1", //dark mode checked
			"green-100": "#dcfce7", //dark mode checked
			"green-700": "#15803d", //dark mode checked
			"yellow-100": "#fef9c3", //dark mode checked
			"yellow-700": "#a16207", //dark mode checked
			"silver-100": "#e5e7eb", //dark mode checked
			"silver-700": "#374151",
			"indigo-100": "#e0e7ff",
			"indigo-700": "#4338ca",
			"red-100": "#fee2e2",
			"red-700": "#b91c1c",
			"red-800": "#991b1b",

			"backdrop-color": "rgba(255, 255, 255, .1)",

			/* DARK MODE */
			"dark-grey-0": "#18212f",
			"dark-grey-50": "#111827",
			"dark-grey-100": "#1f2937",
			"dark-grey-200": "#374151",
			"dark-grey-300": "#4b5563",
			"dark-grey-400": "#6b7280",
			"dark-grey-500": "#9ca3af",
			"dark-grey-600": "#d1d5db",
			"dark-grey-700": "#e5e7eb",
			"dark-grey-800": "#f3f4f6",
			"dark-grey-900": "#f9fafb",

			"dark-blue-100": "#075985",
			"dark-blue-700": "#e0f2fe",
			"dark-green-100": "#dcfce7",
			"dark-green-700": "#166534",
			"dark-yellow-100": "#854d0e",
			"dark-yellow-700": "#fef9c3",
			"dark-silver-100": "#374151",
			"dark-silver-700": "#f3f4f6",
			"dark-indigo-100": "#3730a3",
			"dark-indigo-700": "#e0e7ff",

			"dark-red-100": "#fee2e2",
			"dark-red-700": "#b91c1c",
			"dark-red-800": "#991b1b"
		},
		boxShadow: {
			sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
			md: "0 0.6rem 2.4rem rgba(0, 0, 0, 0.06)",
			lg: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)"
		},
		borderRadius: {
			tiny: "3px",
			sm: "5px",
			md: "7px",
			lg: "9px"
		},
		fontFamily: {
			sans: "'Poppins',sans-serif",
			sono: "'Sono', sans-serif"
		}
	},
	plugins: [],
	darkMode: "class"
}
