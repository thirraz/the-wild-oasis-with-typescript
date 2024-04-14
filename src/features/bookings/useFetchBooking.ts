import { useParams } from "react-router-dom"
import { getBooking } from "../../services/apiBookings"
import { useQuery } from "@tanstack/react-query"

export function useFetchBooking() {
	const { bookingId } = useParams()

	const {
		isPending,
		data: booking,
		error
	} = useQuery({
		queryKey: ["booking", bookingId],
		queryFn: () => getBooking(bookingId!),
		retry: false
	})

	return { isPending, error, booking, bookingId }
}
