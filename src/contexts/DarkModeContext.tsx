import { createContext, useContext } from "react"
import { useLocalStorageState } from "../hooks/useLocalStorageState"

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
	// const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		window.matchMedia("(prefers-color-scheme:dark)").matches,
		"isDarkMode"
	)

	const toggleDarkMode = () => setIsDarkMode((dark: boolean) => !dark)

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
