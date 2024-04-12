import {
	HiOutlineCalendarDays,
	HiOutlineCog6Tooth,
	HiOutlineHome,
	HiOutlineHomeModern,
	HiOutlineUsers
} from "react-icons/hi2"
import Link from "./Link"

export default function MainNav() {
	return (
		<>
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
		</>
	)
}
