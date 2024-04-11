import { useSearchParams } from "react-router-dom"
import { SortAndFilterOptions } from "./Filter"
import { Select } from "./Select"

type Props = {
	options: SortAndFilterOptions[]
}

export function SortBy({ options }: Props) {
	const [searchParams, setSearchParams] = useSearchParams()
	const sortBy = searchParams.get("sortBy") || ""

	function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
		searchParams.set("sortBy", e.target.value)
		setSearchParams(searchParams)
	}

	return (
		<Select
			options={options}
			type="white"
			value={sortBy}
			onChange={e => handleChange(e)}
		/>
	)
}
