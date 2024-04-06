type Props = {
	children: React.ReactNode
}

export function ButtonGroup({ children }: Props) {
	return <div className="flex gap-5 justify-end">{children}</div>
}

export default ButtonGroup
