import UserAvatar from "../features/authentication/UserAvatar"
import HeaderMenu from "./HeaderMenu"

export default function Header() {
	return (
		<header className="bg-grey-0  py-[1.2rem] px-[4.8rem] border-b-[1px] border-grey-100 flex gap-9 items-center justify-end">
			<UserAvatar />
			<HeaderMenu />
		</header>
	)
}
