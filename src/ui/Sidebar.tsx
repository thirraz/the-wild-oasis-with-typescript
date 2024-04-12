import Uploader from "../data/Uploader"
import Logo from "./Logo"
import MainNav from "./MainNav"
import NavList from "./NavList"

export default function Sidebar() {
	return (
		<aside className="bg-grey-0 py-[3.2rem] px-[2.4rem] border-r-[1px] border-grey-100 row-span-full space-y-[3.2rem]">
			<Logo />
			<NavList>
				<MainNav />
			</NavList>
			<Uploader />
		</aside>
	)
}
