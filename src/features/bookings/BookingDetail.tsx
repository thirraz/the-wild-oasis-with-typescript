import BookingDataBox from "./BookingDataBox"
import Row from "../../ui/Row"
import Tag from "../../ui/Tag"
import { Button } from "../../ui/Button"
import ButtonText from "../../ui/ButtonText"

import { useMoveBack } from "../../hooks/useMoveBack"
import { useNavigate } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import { useFetchBooking } from "./useFetchBooking"
import { useCheckout } from "../check-in-out/useCheckout"
import { HiArrowUpOnSquare } from "react-icons/hi2"
import { Modal } from "../../ui/Modal"
import ConfirmDelete from "../../ui/ConfirmDelete"
import { useDeleteBooking } from "./useDeleteBooking"

function BookingDetail() {
	const { booking, isPending: isFetching } = useFetchBooking()
	const { checkout, isCheckingOut } = useCheckout()
	const { deleteBooking, isDeleting } = useDeleteBooking()

	const navigate = useNavigate()

	const moveBack = useMoveBack()

	if (isFetching) return <Spinner />

	const { status, id: bookingId } = booking

	const statusToTagName: any = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver"
	}

	return (
		<div className="space-y-4">
			<Row direction="horizontal">
				<div className="flex gap-7 items-center">
					<h1 className="text-2xl">Booking #{bookingId}</h1>

					<Tag type={statusToTagName[status]}>
						{status.replace("-", " ")}
					</Tag>
				</div>
				<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
			</Row>

			{<BookingDataBox booking={booking} />}

			<div className="flex gap-4 justify-end">
				{status === "unconfirmed" && (
					<button
						onClick={() => navigate(`/checkin/${bookingId}`)}
						className="flex justify-center items-center px-14 py-3 gap-4 w-full hover:bg-grey-100"
					>
						<span className="min-w-max">Check-in</span>
					</button>
				)}

				{status === "checked-in" && (
					<Button
						onClick={() => checkout(bookingId)}
						disabled={isCheckingOut}
					>
						<HiArrowUpOnSquare className="text-2xl" />
						<span className="min-w-max">Check-out</span>
					</Button>
				)}

				<Modal>
					<Modal.Open openWindowName="delete">
						<Button color="danger">Delete booking</Button>
					</Modal.Open>
					<Modal.Window name="delete">
						<ConfirmDelete
							resourceName="delete"
							onConfirm={() =>
								deleteBooking(bookingId, {
									onSettled: () => navigate(-1)
								})
							}
							disabled={isDeleting}
						/>
					</Modal.Window>
				</Modal>

				<Button color="secondary" onClick={moveBack}>
					Back
				</Button>
			</div>
		</div>
	)
}

export default BookingDetail
