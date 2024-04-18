import {
	HiArrowDownOnSquare,
	HiArrowUpOnSquare,
	HiEye,
	HiTrash
} from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { useCheckout } from "../check-in-out/useCheckout"
import { Modal } from "../../ui/Modal"
import Button from "../../ui/Button"
import ConfirmDelete from "../../ui/ConfirmDelete"
import { useDeleteBooking } from "./useDeleteBooking"

type Props = { bookingId: string | number; status: string }

export function BookingMenu({ bookingId, status }: Props) {
	const navigate = useNavigate()
	const { checkout, isCheckingOut } = useCheckout()
	const { deleteBooking, isDeleting } = useDeleteBooking()

	return (
		<Modal>
			<div className="absolute top-3 right-[80%] bg-[#000] text-grey-600 dark:text-dark-grey-600 rounded-sm border border-grey-300 dark:border-dark-grey-300 transition-all">
				<button
					onClick={() => navigate(`/bookings/${bookingId}`)}
					className="flex justify-center bg-grey-0 dark:bg-dark-grey-0 items-center px-14 py-3 gap-4 w-full hover:bg-grey-100 dark:hover:bg-grey-100"
				>
					<HiEye className="text-2xl " />
					<span className="min-w-max">See details</span>
				</button>

				{status === "unconfirmed" && (
					<button
						onClick={() => navigate(`/checkin/${bookingId}`)}
						className="flex justify-center items-center px-14 py-3 gap-4 w-full hover:bg-grey-100 dark:hover:bg-dark-grey-100"
					>
						<HiArrowDownOnSquare className="text-2xl" />
						<span className="min-w-max">Check-in</span>
					</button>
				)}

				{status === "checked-in" && (
					<button
						onClick={() => checkout(bookingId)}
						disabled={isCheckingOut}
						className="flex justify-center items-center px-14 py-3 gap-4 w-full hover:bg-grey-100 dark:hover:bg-dark-grey-100"
					>
						<HiArrowUpOnSquare className="text-2xl" />
						<span className="min-w-max">Check-out</span>
					</button>
				)}

				<Modal.Open openWindowName="delete">
					<Button
						color="danger"
						className="w-full text-red-100 dark:text-dark-red-100 rounded-[0px]"
					>
						<HiTrash /> Delete
					</Button>
				</Modal.Open>

				<Modal.Window name="delete">
					<ConfirmDelete
						resourceName="delete"
						onConfirm={() => deleteBooking(bookingId)}
						disabled={isDeleting}
					/>
				</Modal.Window>
			</div>
		</Modal>
	)
}
