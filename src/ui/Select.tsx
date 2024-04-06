type Props = {
	children: React.ReactNode
	type: string
}

export function Select({ children, type }: Props) {
	return (
		<select
			className={`text-[1.4rem] py-[0.8rem] px-[1.2rem] rounded-sm bg-grey-0 font-medium shadow-sm border-[1px] ${
				type === "white" ? "border-grey-100" : "border-grey-300"
			} `}
		>
			{children}
		</select>
	)
}
