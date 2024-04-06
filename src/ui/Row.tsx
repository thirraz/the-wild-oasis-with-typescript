import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const row = tv({
	base: "flex",
	variants: {
		direction: {
			horizontal: "justify-between items-center",
			vertical: "flex-col gap-[1.6rem]"
		}
	},
	defaultVariants: {
		direction: "vertical"
	}
})

type Props = ComponentProps<"div"> &
	VariantProps<typeof row> & { className?: string }

export default function Row({ direction, className, ...props }: Props) {
	return <div {...props} className={row({ direction, className })} />
}
