import { useState } from "react"
import { useSearchParams } from "react-router-dom"
type Options = {
	value: string
	label: string
}

type Props = {
	filterField: string
	options: Options[]
}

export function Filter({ filterField, options }: Props) {
	const [searchParams, setSearchParams] = useSearchParams()
	const [btnActive, setBtnActive] = useState(0)

	function handleClick(value: string) {
		searchParams.set(filterField, value)
		setSearchParams(searchParams)
	}

	return (
		<div className="border border-grey-100 bg-grey-0 shadow-sm rounded-sm p-[0.4rem] flex gap-[0.4rem] ">
			{options.map(({ value, label }, i) => (
				<button
					data-btn-active={btnActive === i}
					key={value}
					onClick={() => {
						handleClick(value)
						setBtnActive(i)
					}}
					className="filter-btn"
				>
					{label}
				</button>
			))}
		</div>
	)
}
