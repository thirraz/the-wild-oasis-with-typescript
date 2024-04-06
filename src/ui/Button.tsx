/*
  USE class-variance-authority package (search in its documentation)
*/

import { ComponentProps } from "react"

const sizes = {
	small: css`
		font-size: 1.2rem;
		padding: 0.4rem 0.8rem;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	`,
	medium: css`
		font-size: 1.4rem;
		padding: 1.2rem 1.6rem;
		font-weight: 500;
	`,
	large: css`
		font-size: 1.6rem;
		padding: 1.2rem 2.4rem;
		font-weight: 500;
	`
}

const variations = {
	primary: css`
		color: var(--color-brand-50);
		background-color: var(--color-brand-600);

		&:hover {
			background-color: var(--color-brand-700);
		}
	`,
	secondary: css`
		color: var(--color-grey-600);
		background: var(--color-grey-0);
		border: 1px solid var(--color-grey-200);

		&:hover {
			background-color: var(--color-grey-50);
		}
	`,
	danger: css`
		color: var(--color-red-100);
		background-color: var(--color-red-700);

		&:hover {
			background-color: var(--color-red-800);
		}
	`
}

type Props = ComponentProps<"button">

export function Button(props: Props) {
	return (
		<button
			{...props}
			className="text-[1.4rem] py-[1.2rem] px-[1.6rem] font-medium rounded-sm bg-brand-600 text-brand-50 shadow-sm pointer hover:bg-brand-700"
		/>
	)
}
