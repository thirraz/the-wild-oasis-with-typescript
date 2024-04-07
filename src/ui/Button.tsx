// const sizes = {
// 	small: css`
// 		font-size: 1.2rem;
// 		padding: 0.4rem 0.8rem;
// 		text-transform: uppercase;
// 		font-weight: 600;
// 		text-align: center;
// 	`,
// 	medium: css`
// 		font-size: 1.4rem;
// 		padding: 1.2rem 1.6rem;
// 		font-weight: 500;
// 	`,
// 	large: css`
// 		font-size: 1.6rem;
// 		padding: 1.2rem 2.4rem;
// 		font-weight: 500;
// 	`
// }

// const variations = {
// 	primary: css`
// 		color: var(--color-brand-50);
// 		background-color: var(--color-brand-600);

// 		&:hover {
// 			background-color: var(--color-brand-700);
// 		}
// 	`,
// 	secondary: css`
// 		color: var(--color-grey-600);
// 		background: var(--color-grey-0);
// 		border: 1px solid var(--color-grey-200);

// 		&:hover {
// 			background-color: var(--color-grey-50);
// 		}
// 	`,
// 	danger: css`
// 		color: var(--color-red-100);
// 		background-color: var(--color-red-700);

// 		&:hover {
// 			background-color: var(--color-red-800);
// 		}
// 	`
// }

import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
	base: "rounded-sm shadow-sm",
	variants: {
		size: {
			small: "text-sm py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center",
			medium: "py-[1.2rem] px-[1.6rem] font-semibold",
			large: "text-lg py-[1.2rem] px-[2.4rem] font-semibold"
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

type Props = ComponentProps<"button"> & VariantProps<typeof button>

export function Button({ color, size, ...props }: Props) {
	return <button {...props} className={button({ size, color })} />
}

/* HOW TO USE =>
	 <Button size="medium" color="danger">
				Test
	</Button>
*/
