import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCabins } from "../../services/apiCabins"
import toast from "react-hot-toast"

export function useDeleteCabin() {
	const queryClient = useQueryClient()

	const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
		mutationFn: (id: number | string) => deleteCabins(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			})

			toast.success("Cabin successfully deleted!")
		},
		onError: err => toast.error(err.message)
	})

	return { isDeleting, deleteCabin }
}
