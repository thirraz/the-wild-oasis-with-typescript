type Props = {
	children: React.ReactNode
}

export function SpinnerMini({ children }: Props) {
	return <div className="w-[2.4rem] h-[2.4rem] animate-spin">{children}</div>
}

export default SpinnerMini
