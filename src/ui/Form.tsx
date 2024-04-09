import { ComponentProps } from "react"

type Props = ComponentProps<"form"> & {
	type?: string | "modal"
	children: React.ReactNode
}

export function Form({ type, children, ...props }: Props) {
	return (
		<form
			{...props}
			className={`overflow-hidden text-[1.4rem] ${
				type !== "modal"
					? "max-w-fit mx-auto py-[2.4rem] px-16 bg-grey-0 border-[1px] border-grey-100 rounded-md"
					: "max-w-[80rem] w-[80rem]"
			}`}
		>
			{children}
		</form>
	)
}

export default Form
