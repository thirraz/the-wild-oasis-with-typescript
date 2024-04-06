import { ComponentProps } from "react"

type Props = ComponentProps<"div">

export function Filter(props: Props) {
	return (
		<div
			{...props}
			className="border-[1px] border-grey-100 bg-grey-0 shadow-sm rounded-sm p-[0.4rem] flex gap-[0.4rem]"
		/>
	)
}
