import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { useCheckout } from "../check-in-out/useCheckout"

type Props = { bookingId: string | number; status: string }

export function BookingMenu({ bookingId, status }: Props) {
	const navigate = useNavigate()
	const { checkout, isCheckingOut } = useCheckout()

	return (
		<div className="absolute top-0 right-full bg-grey-0 text-grey-600 space-y-4 rounded-sm border border-grey-300 transition-all">
			<button
				onClick={() => navigate(`/bookings/${bookingId}`)}
				className="flex justify-center items-center px-14 py-3 gap-4 w-full hover:bg-grey-100"
			>
				<HiEye className="text-2xl" />
				<span className="min-w-max">See details</span>
			</button>

			{status === "unconfirmed" && (
				<button
					onClick={() => navigate(`/checkin/${bookingId}`)}
					className="flex justify-center items-center px-14 py-3 gap-4 w-full hover:bg-grey-100"
				>
					<HiArrowDownOnSquare className="text-2xl" />
					<span className="min-w-max">Check-in</span>
				</button>
			)}

			{status === "checked-in" && (
				<button
					onClick={() => checkout(bookingId)}
					disabled={isCheckingOut}
					className="flex justify-center items-center px-14 py-3 gap-4 w-full hover:bg-grey-100"
				>
					<HiArrowUpOnSquare className="text-2xl" />
					<span className="min-w-max">Check-out</span>
				</button>
			)}
		</div>
	)
}
