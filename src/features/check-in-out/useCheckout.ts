import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"

export function useCheckout() {
	const queryClient = useQueryClient()

	const { mutate: checkout, isPending: isCheckingOut } = useMutation({
		mutationFn: (bookingId: any) =>
			updateBooking(bookingId, {
				status: "checked-out"
			}),

		onSuccess: data => {
			toast.success(`Booking #${data.id} successfully checked out`)
			queryClient.invalidateQueries({ type: "active" })
		},

		onError: err => {
			toast.error("There was an error while checking out")
			console.log(err.message)
		}
	})

	return { checkout, isCheckingOut }
}
