import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import { UpdateCabinParams } from "./CreateCabinForm"
import toast from "react-hot-toast"

export function useUpdateCabin() {
	const queryClient = useQueryClient()

	const { mutate: updateCabin, isPending: isUpdating } = useMutation({
		mutationFn: ({ newCabinData, id }: UpdateCabinParams) =>
			createEditCabin(newCabinData, id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			})
			toast.success("Cabin edited!")
		},
		onError: err => toast.error(err.message)
	})

	return { isUpdating, updateCabin }
}
