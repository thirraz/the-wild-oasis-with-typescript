import { useQuery } from "@tanstack/react-query"
import { getAllBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"

export function useFetchBookings() {
	const [searchParams] = useSearchParams()

	// FILTER
	const filterValue = searchParams.get("status")
	const filter =
		!filterValue || filterValue === "all"
			? null
			: { field: "status", value: filterValue, method: "eq" }

	// SORT
	const sortByRaw = searchParams.get("sortBy") || "startDate-asc"
	const [field, direction] = sortByRaw.split("-")
	const sortBy = { field, direction }

	const { isPending: isFetching, data: bookings } = useQuery({
		queryKey: ["bookings", filter, sortBy],
		queryFn: () => getAllBookings({ filter, sortBy })
	})

	return { isFetching, bookings }
}
