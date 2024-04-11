import { useQuery } from "@tanstack/react-query"
import { getAllBookings } from "../../services/apiBookings"

export function useFetchBookings() {
	const { isPending: isFetching, data: bookings } = useQuery({
		queryKey: ["bookings"],
		queryFn: getAllBookings
	})

	return { isFetching, bookings }
}
