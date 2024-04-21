import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useDarkMode } from "../contexts/DarkModeContext"

export default function AppLayout() {
	const { isDarkMode } = useDarkMode()

	console.log(isDarkMode)

	console
	return (
		<div
			className={`${
				isDarkMode ? "dark" : ""
			}  h-[100dvh] grid [grid-template-columns:17rem_1fr] [grid-template-rows:auto_1fr] bg-grey-50 dark:bg-dark-grey-50 overflow-y-hidden`}
		>
			<Sidebar />
			<Header />

			<main className="hide-scrollbar bg-grey-50 dark:text-grey-100 dark:bg-dark-grey-50 p-[4rem_4.8rem_0] overflow-y-scroll overflow-x-hidden ">
				<div className="max-w-[120rem] mx-auto">
					<Outlet />
				</div>
			</main>
		</div>
	)
}
