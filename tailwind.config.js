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
			/* Indigo */
			"brand-50": "#eef2ff",
			"brand-100": "#e0e7ff",
			"brand-200": "#c7d2fe",
			"brand-500": "#6366f1",
			"brand-600": "#4f46e5",
			"brand-700": "#4338ca",
			"brand-800": "#3730a3",
			"brand-900": "#312e81",

			/* Grey */
			"grey-0": "#fff",
			"grey-50": "#f9fafb",
			"grey-100": "#f3f4f6",
			"grey-200": "#e5e7eb",
			"grey-300": "#d1d5db",
			"grey-400": "#9ca3af",
			"grey-500": "#6b7280",
			"grey-600": "#4b5563",
			"grey-700": "#374151",
			"grey-800": "#1f2937",
			"grey-900": "#111827",

			/* Blue */
			"blue-100": "#e0f2fe",
			"blue-700": "#0369a1",

			/* Green */
			"green-100": "#dcfce7",
			"green-700": "#15803d",

			/* Yellow */
			"yellow-100": "#fef9c3",
			"yellow-700": "#a16207",

			/* Silver */
			"silver-100": "#e5e7eb",
			"silver-700": "#374151",

			/* Indigo */
			"indigo-100": "#e0e7ff",
			"indigo-700": "#4338ca",

			"backdrop-color": "rgba(255, 255, 255, .1)"
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
		}
	},
	plugins: []
}
