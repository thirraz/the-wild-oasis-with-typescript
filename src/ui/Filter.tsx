type Props = {
	children: React.ReactNode
}

export function Filter({ children }: Props) {
	return (
		<div className="border-[1px] border-grey-100 bg-grey-0 shadow-sm rounded-sm p-[0.4rem] flex gap-[0.4rem]">
			{children}
		</div>
	)
}
