import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCabins"

export function useFetchCabins() {
	const { isPending: isFetching, data: cabins } = useQuery({
		queryKey: ["cabins"],
		queryFn: getCabins
	})

	return { isFetching, cabins }
}
