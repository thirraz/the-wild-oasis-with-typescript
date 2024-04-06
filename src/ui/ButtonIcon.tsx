type Props = {
	children: React.ReactNode
	svg: any
}
export function ButtonIcon({ children, svg }: Props) {
	return (
		<button className="bg-none p-[0.6rem] rounded-sm transition-all hover:bg-grey-100">
			{svg}
			{children}
		</button>
	)
}

export default ButtonIcon
