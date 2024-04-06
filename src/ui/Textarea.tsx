import { ComponentProps } from "react"

type Props = ComponentProps<"textarea">

export function Textarea(props: Props) {
	return (
		<textarea
			{...props}
			className="py-[0.8rem] px-[1.2rem] border-[1px] border-grey-300 rounded-[5px] bg-grey-0 shadow-sm w-full h-32"
		/>
	)
}

export default Textarea
