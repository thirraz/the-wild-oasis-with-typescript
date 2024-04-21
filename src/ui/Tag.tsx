import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type Props = ComponentProps<"span"> & {
	type: string
	className?: string
}

export function Tag({ type, className, ...props }: Props) {
	return (
		<span
			{...props}
			data-type={type}
			className={twMerge(
				"w-fit text-xs text-center uppercase font-bold py-[0.4rem] px-[1.2rem] rounded-[100px] data-[type=green]:text-green-700 data-[type=green]:dark:text-dark-green-100 data-[type=green]:bg-green-100 data-[type=green]:dark:bg-dark-green-700 data-[type=blue]:text-blue-700 data-[type=blue]:dark:text-dark-blue-700 data-[type=blue]:bg-blue-100 data-[type=blue]:dark:bg-dark-blue-100 data-[type=silver]:text-silver-700 data-[type=silver]:dark:text-silver-700 data-[type=silver]:bg-silver-100 data-[type=silver]:dark:bg-silver-100",
				className
			)}
		/>
	)
}

export default Tag
