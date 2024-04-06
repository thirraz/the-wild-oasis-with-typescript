type Props = {
	children: React.ReactNode
}

export function Spinner({ children }: Props) {
	return (
		<div className="my-[4.8rem] mx-auto aspect-[1] rounded-full bg-spinner-gradient animate-spin">
			{children}
		</div>
	)
}

export default Spinner
