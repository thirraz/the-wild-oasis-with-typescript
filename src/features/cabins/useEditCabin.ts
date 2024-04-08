import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import { EditCabinParams } from "./CreateCabinForm"
import toast from "react-hot-toast"

export function useEditCabin() {
	const queryClient = useQueryClient()

	const { mutate: editCabin, isPending: isEditing } = useMutation({
		mutationFn: ({ newCabinData, id }: EditCabinParams) =>
			createEditCabin(newCabinData, id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			})
			toast.success("Cabin edited!")
		},
		onError: err => toast.error(err.message)
	})

	return { isEditing, editCabin }
}
