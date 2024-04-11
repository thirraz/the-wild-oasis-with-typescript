import { createContext, useContext } from "react"

type TypeContext = {
	columns: string | undefined
}

type Props = {
	columns?: string
	children: React.ReactNode | React.ReactNode[]
}

type TableBodyProps = {
	data: any[] | undefined
	render: (mapFn: any, index: number) => React.ReactElement
}

const TableContext = createContext<TypeContext>({ columns: "" })

export default function Table({ columns, children }: Props) {
	return (
		<TableContext.Provider value={{ columns }}>
			<div className="border border-grey-200 text-sm bg-grey-0 rounded-md overflow-hidden">
				{children}
			</div>
		</TableContext.Provider>
	)
}

function Head({ children }: Props) {
	const { columns } = useContext(TableContext)
	return (
		<header
			className={`grid ${columns} gap-x-[2.4rem] items-center transition-none py-[1rem] px-[1.8rem] bg-grey-50  uppercase tracking-[0.4px] font-bold text-grey-600`}
		>
			{children}
		</header>
	)
}

function Row({ children }: Props) {
	const { columns } = useContext(TableContext)
	return (
		<div
			className={`grid ${columns} gap-x-[2.4rem] items-center transition-none py-[.7rem] px-[1.8rem] [&:not:last-child]:border-b-grey-100`}
		>
			{children}
		</div>
	)
}

function Body({ data, render }: TableBodyProps) {
	if (!data?.length)
		return (
			<p className="font-semibold text-center m-7">
				No data to show at the moment
			</p>
		)

	return (
		<section className="my-[0.4rem] space-y-8 b">{data.map(render)}</section>
	)
}

Table.Head = Head
Table.Row = Row
Table.Body = Body
