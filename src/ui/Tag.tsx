type Props = {
	children: React.ReactNode
	type: string
}

export function Tag({ children, type }: Props) {
	return (
		<span
			className={`w-fit uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-[100px] text-${type}-700 bg-${type}-100`}
		>
			{children}
		</span>
	)
}

export default Tag
