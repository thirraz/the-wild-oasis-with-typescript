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

	if (isFetching) return <Spinner />

	return (
		<Table columns="1fr_1.8fr_2.2fr_repeat(3,1fr)">
			<Table.Head>
				<div />
				<div>Cabin</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div />
			</Table.Head>
			<Table.Body
				data={cabins}
				render={(cabin: any[], i) => <CabinRow cabin={cabin} key={i} />}
			/>
		</Table>
	)
}
