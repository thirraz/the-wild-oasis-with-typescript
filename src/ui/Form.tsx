import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type Props = ComponentProps<"form"> & {
	type?: string | "modal"
	children: React.ReactNode
	className?: string
}

export function Form({ className, type, children, ...props }: Props) {
	return (
		<form
			{...props}
			data-form-type={type}
			className={twMerge(
				"overflow-hidden text-[1.4rem] max-w-full [data-form-type=modal]:max-w-fit [data-form-type=modal]:mx-auto [data-form-type=modal]:py-[2.4rem] [data-form-type=modal]:px-16 [data-form-type=modal]:bg-grey-0 [data-form-type=modal]:border [data-form-type=modal]:border-grey-100 [data-form-type=modal]:rounded-md",
				className
			)}
			// className={`overflow-hidden text-[1.4rem] ${
			// 	type !== "modal"
			// 		? "max-w-fit mx-auto py-[2.4rem] px-16 bg-grey-0 border border-grey-100 rounded-md"
			// 		: "max-w-full"
			// }`}
		>
			{children}
		</form>
	)
}

export default Form
