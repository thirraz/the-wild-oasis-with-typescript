// const Link = styled.a`
// 	&:link,
// 	&:visited {
// 		display: flex;
// 		align-items: center;
// 		gap: 1.2rem;

import { ComponentProps } from "react"

// 		color: var(--color-grey-600);
// 		font-size: 1.6rem;
// 		font-weight: 500;
// 		padding: 1.2rem 2.4rem;
// 		transition: all 0.3s;
// 	}

// 	/* This works because react-router places the active class on the active NavLink */
// 	&:hover,
// 	&:active,
// 	&.active:link,
// 	&.active:visited {
// 		color: var(--color-grey-800);
// 		background-color: var(--color-grey-50);
// 		border-radius: var(--border-radius-sm);
// 	}

// 	& svg {
// 		width: 2.4rem;
// 		height: 2.4rem;
// 		color: var(--color-grey-400);
// 		transition: all 0.3s;
// 	}

// 	&:hover svg,
// 	&:active svg,
// 	&.active:link svg,
// 	&.active:visited svg {
// 		color: var(--color-brand-600);
// 	}
// `

type Props = ComponentProps<"a">
export default function Link({ ...props }: Props) {
	return (
		<a
			{...props}
			className="flex items-center gap-5 text-grey-600 text-[1.6rem] font-medium py-[1.2rem] px-[2.4rem] transition-all hover:text-grey-800 hover:bg-grey-50 hover:rounded-sm active:text-grey-800 active:bg-grey-50 active:rounded-sm"
		/>
	)
}
