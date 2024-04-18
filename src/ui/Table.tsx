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
			<div className="border border-grey-200 dark:border-dark-grey-200 text-sm bg-grey-0 dark:bg-dark-grey-0 rounded-md overflow-hidden">
				{children}
			</div>
		</TableContext.Provider>
	)
}

function Head({ children }: Props) {
	const { columns } = useContext(TableContext)
	return (
		<header
			className={`grid ${columns} gap-x-[2.4rem] items-center transition-none py-[1rem] px-[1.8rem] bg-grey-50 dark:bg-dark-grey-50  uppercase tracking-[0.4px] font-bold text-grey-600 dark:text-dark-grey-600`}
		>
			{children}
		</header>
	)
}

function Row({ children }: Props) {
	const { columns } = useContext(TableContext)
	return (
		<div
			className={`pb-10 border-b border-grey-200 dark:border-dark-grey-200 grid ${columns} gap-x-[2.4rem] items-center transition-none py-[.7rem] px-[1.8rem] last:border-none`}
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

function Footer({ children }: { children: React.ReactNode }) {
	return (
		<footer className="bg-grey-50 dark:bg-dark-grey-50 flex justify-center p-4 [&:not(:has(*))]:hidden">
			{children}
		</footer>
	)
}

Table.Head = Head
Table.Row = Row
Table.Body = Body
Table.Footer = Footer
