import { HiOutlineUser } from "react-icons/hi2"
import ButtonIcon from "./ButtonIcon"
import { useNavigate } from "react-router-dom"
import Logout from "../features/authentication/Logout"

export default function HeaderMenu() {
	const navigate = useNavigate()

	return (
		<ul className="flex gap-1 text-brand-600 ">
			<li>
				<ButtonIcon onClick={() => navigate("/account")}>
					<HiOutlineUser className="w-[1.4rem] h-[1.4rem]" />
				</ButtonIcon>
			</li>
			<li>
				<Logout />
			</li>
		</ul>
	)
}
