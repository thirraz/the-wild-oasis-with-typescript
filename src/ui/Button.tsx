import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
	base: "rounded-sm shadow-sm",
	variants: {
		size: {
			small: "w-full grid place-content-center text-sm py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center",
			medium:
				"w-full grid place-content-center py-[1.2rem] px-[1.6rem] font-semibold",
			large: "text-lg grid place-content-center py-[1.2rem] px-[2.4rem] font-semibold"
		},
		color: {
			primary: "text-brand-50 bg-brand-600 hover:bg-brand-700",
			secondary:
				"text-grey-600 bg-grey-0 border-[1px] border-grey-200 hover:bg-grey-200",
			danger: "text-red-100 bg-red-700 hover:bg-red-800"
		}
	},
	defaultVariants: {
		size: "medium",
		color: "primary"
	}
})

type Props = ComponentProps<"button"> &
	VariantProps<typeof button> & { className?: string }

export function Button({ color, size, className, ...props }: Props) {
	return <button {...props} className={button({ size, color, className })} />
}

/* HOW TO USE =>
	 <Button size="medium" color="danger">
				Test
	</Button>
*/
