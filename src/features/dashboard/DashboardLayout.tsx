import Spinner from "../../ui/Spinner"
import SalesChart from "./SalesChart"
import Stats from "./Stats"

import { useFetchCabins } from "../cabins/useFetchCabins"
import { useRecentBookings } from "./useRecentBookings"
import { useRecentStays } from "./useRecentStays"
import DurationChart from "./DurationChart"
import TodayActivity from "../check-in-out/TodayActivity"

export default function DashboardLayout() {
	const { bookings, isPending: isLoadingRecentBookings } = useRecentBookings()
	const {
		isPending: isLoadingRecentStays,
		confirmedStays,
		numDays
	} = useRecentStays()
	const { cabins, isFetching: isFetchingCabins } = useFetchCabins()

	if (isLoadingRecentBookings || isLoadingRecentStays || isFetchingCabins)
		return <Spinner />

	console.log(confirmedStays)

	return (
		<div className="grid [grid-template-columns:repeat(4,1fr)] [grid-template-rows:repeat(3,auto)] gap-5">
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				cabinCount={cabins?.length}
				numDays={numDays}
			/>
			<TodayActivity />
			<DurationChart confirmedStays={confirmedStays} />
			<SalesChart bookings={bookings} numDays={numDays} />
		</div>
	)
}
