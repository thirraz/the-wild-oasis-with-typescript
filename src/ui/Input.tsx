import { ComponentProps } from "react"

type Props = ComponentProps<"input">

export default function Input(props: Props) {
	return (
		<input
			{...props}
			className="border-[1px] border-grey-300 bg-grey-0 rounded-sm py-[0.8rem] px-[1.2rem] shadow-sm"
		/>
	)
}
