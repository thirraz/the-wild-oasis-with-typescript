import { ComponentProps } from "react"

type Props = ComponentProps<"button">

export function ButtonIcon(props: Props) {
	return (
		<button
			{...props}
			className="bg-none p-[0.6rem] rounded-sm transition-all hover:bg-grey-100 dark:hover:bg-dark-grey-100"
		/>
	)
}

export default ButtonIcon
