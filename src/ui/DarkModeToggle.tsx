import { HiOutlineMoon } from "react-icons/hi2"
import ButtonIcon from "./ButtonIcon"
import { useDarkMode } from "../contexts/DarkModeContext"
// import { useDarkMode } from "../contexts/DarkModeContext"

export default function DarkModeToggle() {
	const { toggleDarkMode } = useDarkMode()

	return (
		<ButtonIcon onClick={toggleDarkMode}>
			<HiOutlineMoon className="w-[1.4rem] h-[1.4rem]" />
		</ButtonIcon>
	)
}
