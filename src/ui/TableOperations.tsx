type Props = {
	children: React.ReactNode
}

export function TableOperations({ children }: Props) {
	return <div className="flex items-center gap-[1.6rem]">{children}</div>
}

export default TableOperations
