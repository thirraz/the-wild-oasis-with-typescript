import {
	HiOutlineCalendarDays,
	HiOutlineCog6Tooth,
	HiOutlineHome,
	HiOutlineHomeModern,
	HiOutlineUsers
} from "react-icons/hi2"
import Link from "./Link"
import Logo from "./Logo"
import NavList from "./NavList"

export default function Sidebar() {
	return (
		<aside className="bg-grey-0 py-[3.2rem] px-[2.4rem] border-r-[1px] border-grey-100 row-span-full space-y-[3.2rem]">
			<Logo />
			<NavList>
				<li>
					<Link
						to="/dashboard"
						linkName="Home"
						Icon={<HiOutlineHome className="sidebar-icon" />}
					/>
				</li>

				<li>
					<Link
						to="/bookings"
						linkName="Bookings"
						Icon={<HiOutlineCalendarDays className="sidebar-icon" />}
					/>
				</li>

				<li>
					<Link
						to="/cabins"
						linkName="Cabins"
						Icon={<HiOutlineHomeModern className="sidebar-icon" />}
					/>
				</li>

				<li>
					<Link
						to="/users"
						linkName="Users"
						Icon={<HiOutlineUsers className="sidebar-icon" />}
					/>
				</li>

				<li>
					<Link
						to="/settings"
						linkName="Settings"
						Icon={<HiOutlineCog6Tooth className="sidebar-icon" />}
					/>
				</li>
			</NavList>
		</aside>
	)
}
