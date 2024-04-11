import { useSearchParams } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import Table from "../../ui/Table"
import CabinRow from "./CabinRow"
import { useFetchCabins } from "./useFetchCabins"

/* 
	isLoading is now called isPending
	cacheTime option is now called gcTime 
*/

export default function CabinTable() {
	const { isFetching, cabins } = useFetchCabins()
	const [searchParams] = useSearchParams()

	if (isFetching) return <Spinner />

	// 1) FILTER
	const filterValue = searchParams.get("discount") || "all"
	let filteredCabins

	switch (filterValue) {
		case "all":
			filteredCabins = cabins
			break
		case "no-discount":
			filteredCabins = cabins?.filter(cabin => cabin.discount === 0)
			break
		case "with-discount":
			filteredCabins = cabins?.filter(cabin => cabin.discount > 0)
			break

		default:
			throw new Error("Some error occurred on filter")
	}

	// 2) SORT
	const sortBy = searchParams.get("sortBy") || "startDate-asc"
	const [field, direction] = sortBy.split("-")
	const modifier = direction === "asc" ? 1 : -1
	const sortedCabins = filteredCabins?.sort(
		(a, b) => (a[field] - b[field]) * modifier
	)

	return (
		<Table columns="[grid-template-columns:2fr_1.8fr_2.2fr_repeat(3,1fr)]">
			<Table.Head>
				<div>Cover</div>
				<div>Cabin</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div>Options</div>
			</Table.Head>

			<Table.Body
				data={sortedCabins}
				render={(cabin: any[], i) => <CabinRow cabin={cabin} key={i} />}
			/>
		</Table>
	)
}
