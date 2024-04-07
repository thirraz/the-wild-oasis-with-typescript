import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCabins"
import Spinner from "../../ui/Spinner"
import CabinRow from "./CabinRow"

// const Table = styled.div`
// 	border: 1px solid var(--color-grey-200);
// 	font-size: 1.4rem;
// 	background-color: var(--color-grey-0);
// 	border-radius: 7px;
// 	overflow: hidden;
// `

// const TableHeader = styled.header`
// 	display: grid;
// 	grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
// 	column-gap: 2.4rem;
// 	align-items: center;

// 	background-color: var(--color-grey-50);
// 	border-bottom: 1px solid var(--color-grey-100);
// 	text-transform: uppercase;
// 	letter-spacing: 0.4px;
// 	font-weight: 600;
// 	color: var(--color-grey-600);
// 	padding: 1.6rem 2.4rem;
// `

/* 
	isLoading is now called isPending
	cacheTime option is now called gcTime 
*/

export default function CabinTable() {
	const { isPending, data: cabins } = useQuery({
		queryKey: ["cabins"],
		queryFn: getCabins
	})

	if (isPending) return <Spinner />

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
