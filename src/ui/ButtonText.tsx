import { ComponentProps } from "react"

type Props = ComponentProps<"button">

export function ButtonText(props: Props) {
	return (
		<button
			{...props}
			className="text-brand-600 font-medium text-center transition-all bg-none rounded-sm hover:text-brand-700 active:text-brand-700"
		/>
	)
}

export default ButtonText
