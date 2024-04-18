import { NavLink } from "react-router-dom"

type Props = {
	to: string
	linkName: string
	Icon: React.ReactNode
}
export default function Link({ to, Icon, linkName }: Props) {
	return (
		<NavLink
			to={to}
			className=" flex items-center gap-3 text-grey-600 dark:text-dark-grey-600 font-medium py-[.7rem] px-[1rem] transition-all hover:text-grey-800 dark:hover:text-dark-grey-800 hover:bg-grey-100  dark:hover:bg-dark-grey-100 hover:rounded-sm active:text-grey-800 dark:active:text-dark-grey-800 active:bg-grey-50 active:dark:bg-dark-grey-50 active:rounded-sm [&>svg]:active:text-brand-600 [&>svg]:hover:text-brand-600"
		>
			{Icon}
			{linkName}
		</NavLink>
	)
}
