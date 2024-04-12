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

	const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

	const {
		isPending: isFetching,
		data: { data: bookings, count } = { data: {}, count: 0 },
		error
	}: any = useQuery({
		queryKey: ["bookings", filter, sortBy, page],
		queryFn: () => getAllBookings({ filter, sortBy, page })
	})

	return { isFetching, error, bookings, count }
}
