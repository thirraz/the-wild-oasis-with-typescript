import { ComponentProps } from "react"

type Props = ComponentProps<"select"> & {
	type: string
}

export function Select({ type, ...props }: Props) {
	return (
		<select
			{...props}
			className={`text-[1.4rem] py-[0.8rem] px-[1.2rem] rounded-sm bg-grey-0 font-medium shadow-sm border-[1px] ${
				type === "white" ? "border-grey-100" : "border-grey-300"
			} `}
		/>
	)
}
