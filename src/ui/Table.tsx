import { createContext, useContext } from "react"
// const StyledTable = styled.div`
// 	border: 1px solid var(--color-grey-200);
// 	font-size: 1.4rem;
// 	background-color: var(--color-grey-0);
// 	border-radius: 7px;
// 	overflow: hidden;
// `

// const CommonRow = styled.div`
// 	display: grid;
// 	grid-template-columns: ${props => props.columns};
// 	column-gap: 2.4rem;
// 	align-items: center;
// 	transition: none;
// `

// const StyledHeader = styled(CommonRow)`
// 	padding: 1.6rem 2.4rem;

// 	background-color: var(--color-grey-50);
// 	border-bottom: 1px solid var(--color-grey-100);
// 	text-transform: uppercase;
// 	letter-spacing: 0.4px;
// 	font-weight: 600;
// 	color: var(--color-grey-600);
// `

// const StyledRow = styled(CommonRow)`
// 	padding: 1.2rem 2.4rem;

// 	&:not(:last-child) {
// 		border-bottom: 1px solid var(--color-grey-100);
// 	}
// `

// const StyledBody = styled.section`
// 	margin: 0.4rem 0;
// `

// const Footer = styled.footer`
// 	background-color: var(--color-grey-50);
// 	display: flex;
// 	justify-content: center;
// 	padding: 1.2rem;

// 	/* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
// 	&:not(:has(*)) {
// 		display: none;
// 	}
// `

// const Empty = styled.p`
// 	font-size: 1.6rem;
// 	font-weight: 500;
// 	text-align: center;
// 	margin: 2.4rem;
// `

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
			className={`grid [grid-template-columns:${columns}] gap-x-[2.4rem] items-center transition-none py-[1rem] px-[1.8rem] bg-grey-50  uppercase tracking-[0.4px] font-bold text-grey-600`}
		>
			{children}
		</header>
	)
}

function Row({ children }: Props) {
	const { columns } = useContext(TableContext)
	return (
		<div
			className={`grid [grid-template-columns:${columns}] gap-x-[2.4rem] items-center transition-none py-[.7rem] px-[1.8rem] [&:not:last-child]:border-b-grey-100`}
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

	return <section className="my-[0.4rem] 0">{data.map(render)}</section>
}

Table.Head = Head
Table.Row = Row
Table.Body = Body
