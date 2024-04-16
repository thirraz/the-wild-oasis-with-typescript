import { HiArrowRightOnRectangle } from "react-icons/hi2"
import ButtonIcon from "../../ui/ButtonIcon"
import { useLogout } from "./useLogout"
import SpinnerMini from "../../ui/SpinnerMini"

export default function Logout() {
	const { logout, isPending } = useLogout()

	return (
		<ButtonIcon disabled={isPending} onClick={() => logout()}>
			{isPending ? (
				<SpinnerMini />
			) : (
				<HiArrowRightOnRectangle className="text-brand-600 w-5 h-5" />
			)}
		</ButtonIcon>
	)
}
