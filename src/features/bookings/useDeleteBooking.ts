import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings"
import toast from "react-hot-toast"

export function useDeleteBooking() {
	const queryClient = useQueryClient()

	const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
		mutationFn: (id: number | string) => deleteBookingAPI(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["bookings"]
			})

			toast.success("Booking successfully deleted!")
		},
		onError: err => toast.error(err.message)
	})

	return { isDeleting, deleteBooking }
}
