import Spinner from "../../ui/Spinner"
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
		<div className="border-[1px] border-grey-200 text-sm bg-grey-0 rounded-md overflow-hidden">
			<header className="grid [grid-template-columns:1fr_1.8fr_2.2fr_repeat(3,1fr)] gap-[2.4rem] items-center bg-grey-50 border-b-[1px] border-grey-100 uppercase tracking-[0.4px] font-bold text-grey-600 py-[1rem] px-[1.2rem] ">
				<div />
				<div>Cabin</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div />
			</header>
			{cabins &&
				cabins.map(cabin => <CabinRow cabin={cabin} key={cabin.id} />)}
		</div>
	)
}
