import { createContext, useContext, useState } from "react"

type ContextProperties = {
	isDarkMode: boolean
	toggleDarkMode: () => void
}

const DarkModeContext = createContext<ContextProperties>({
	isDarkMode: false,
	toggleDarkMode() {}
})

function DarkModeProvider({
	children
}: {
	children: React.ReactNode | React.ReactNode[]
}) {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

	const toggleDarkMode = () => setIsDarkMode(dark => !dark)

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	)
}

function useDarkMode() {
	const context = useContext(DarkModeContext)

	if (context === undefined) throw new Error("Context used outside a Provider")

	return context
}

export { DarkModeProvider, useDarkMode }
