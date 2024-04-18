import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
	base: "rounded-sm shadow-sm",
	variants: {
		size: {
			small: "disabled:bg-grey-500 dark:disabled:bg-dark-grey-500 disabled:text-grey-50 disabled:dark:text-dark-grey-50 disabled:cursor-not-allowed w-fit flex items-center justify-center gap-4 text-sm py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center",
			medium:
				"max-h-fit disabled:bg-grey-500 dark:disabled:bg-dark-grey-500 disabled:text-grey-50 disabled:dark-text-dark-grey-50 disabled:cursor-not-allowed w-fit flex items-center justify-center gap-4  py-[1rem] px-[1.6rem] font-semibold",
			large: "disabled:bg-grey-500 dark:disabled:bg-dark-grey-500 disabled:text-grey-50 disabled:dark:text-dark-grey-50 disabled:cursor-not-allowed w-fit text-lg flex items-center justify-center gap-4 py-[1.2rem] px-[2.4rem] font-semibold"
		},
		color: {
			primary: "text-brand-50 bg-brand-600 hover:bg-brand-700",
			secondary:
				"text-grey-600 dark:text-dark-grey-600 bg-grey-0 dark:bg-dark-grey-0 border border-grey-200 dark:border-dark-grey-200 hover:bg-grey-200 hover:bg-dark-grey-200",
			danger:
				"text-red-100 dark:text-dark-red-100 bg-red-700 dark:bg-dark-red-700 hover:bg-red-800 dark:hover:bg-dark-red-800"
		}
	},
	defaultVariants: {
		size: "medium",
		color: "primary"
	}
})

type Props = ComponentProps<"button"> &
	VariantProps<typeof button> & { className?: string }

export default function Button({ color, size, className, ...props }: Props) {
	return <button {...props} className={button({ size, color, className })} />
}
