import Spinner from "../../ui/Spinner"
import { useRecentBookings } from "./useRecentBookings"
import { useRecentStays } from "./useRecentStays"

export default function DashboardLayout() {
	const { bookings, isPending: isLoadingRecentBookings } = useRecentBookings()
	const {
		stays,
		isPending: isLoadingRecentStays,
		confirmedStays
	} = useRecentStays()

	if (isLoadingRecentBookings || isLoadingRecentStays) return <Spinner />

	console.log(bookings)

	return (
		<div className="grid [grid-template-columns:repeat(4,1fr)] [grid-template-rows:auto_34rem_auto] gap-8">
			<div>Statistics</div>
			<div>Today's activities</div>
			<div>Chart stays durations</div>
			<div>Chart sales</div>
		</div>
	)
}
