import { twMerge } from "tailwind-merge"

type Props = {
	src: string
	className?: string
	alt?: string
}

export function Flag({ src, className, alt }: Props) {
	return (
		<img
			src={src}
			className={twMerge(
				"max-w-8 w-8 rounded-tiny block border border-grey-100",
				className
			)}
			alt={alt ? alt : "Icon"}
		/>
	)
}
