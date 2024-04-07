import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

export default function AppLayout() {
	return (
		<div className="h-[100dvh] grid [grid-template-columns:20rem_1fr] [grid-template-rows:auto_1fr]">
			<Sidebar />
			<Header />

			<main className="bg-grey-50 p-[4rem_4.8rem_6.4rem] overflow-scroll">
				<div className="max-w-[120rem] mx-auto">
					<Outlet />
				</div>
			</main>
		</div>
	)
}
