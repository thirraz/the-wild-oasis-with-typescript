import Logo from "./Logo"
import MainNav from "./MainNav"
import NavList from "./NavList"

export default function Sidebar() {
	return (
		<aside className="bg-grey-0 dark:bg-dark-grey-0 py-[2rem] px-[1rem] border-r-[1px] border-grey-100 dark:border-dark-grey-100 row-span-full space-y-[2rem]">
			<Logo />
			<NavList>
				<MainNav />
			</NavList>
		</aside>
	)
}
