import Spinner from "../../ui/Spinner"
import SalesChart from "./SalesChart"
import Stats from "./Stats"

import { useFetchCabins } from "../cabins/useFetchCabins"
import { useRecentBookings } from "./useRecentBookings"
import { useRecentStays } from "./useRecentStays"

export default function DashboardLayout() {
	const { bookings, isPending: isLoadingRecentBookings } = useRecentBookings()
	const {
		stays,
		isPending: isLoadingRecentStays,
		confirmedStays,
		numDays
	} = useRecentStays()
	const { cabins, isFetching: isFetchingCabins } = useFetchCabins()

	if (isLoadingRecentBookings || isLoadingRecentStays || isFetchingCabins)
		return <Spinner />

	console.log(confirmedStays)

	return (
		<div className="grid [grid-template-columns:repeat(4,1fr)] [grid-template-rows:auto_34rem_auto] gap-8">
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				cabinCount={cabins?.length}
				numDays={numDays}
			/>
			<SalesChart bookings={bookings} numDays={numDays} />
			<div>Today's activities</div>
			<div>Chart stays durations</div>
		</div>
	)
}
