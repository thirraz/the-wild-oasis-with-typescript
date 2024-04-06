type Props = {
	children: React.ReactNode
	active: boolean
}

export function FilterButton({ children, active }: Props) {
	return (
		<button
			className={`filter-btn bg-grey-0 rounded-sm font-medium text-[1.4rem] py-[.44rem] px-[0.8rem] transition-all  ${
				active ? "bg-brand-600 text-brand-50" : ""
			}`}
		>
			{children}
		</button>
	)
}
