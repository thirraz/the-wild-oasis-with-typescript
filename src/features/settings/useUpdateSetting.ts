import { useMutation, useQueryClient } from "@tanstack/react-query"

import toast from "react-hot-toast"
import { updateSetting as updateSetingAPI } from "../../services/apiSettings"

export function useUpdateSetting() {
	const queryClient = useQueryClient()

	const { mutate: updateSetting, isPending: isUpdating } = useMutation({
		mutationFn: updateSetingAPI,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			})
			toast.success("Settings updated!")
		},
		onError: err => toast.error(err.message)
	})

	return { isUpdating, updateSetting }
}
