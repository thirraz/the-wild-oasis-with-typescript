import BookingDataBox from "./BookingDataBox"
import Row from "../../ui/Row"
import Tag from "../../ui/Tag"
import { Button } from "../../ui/Button"
import ButtonText from "../../ui/ButtonText"

import { useMoveBack } from "../../hooks/useMoveBack"
import { useNavigate } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import { useFetchBooking } from "./useFetchBooking"

function BookingDetail() {
	const { bookingId, booking, isPending: isFetching } = useFetchBooking()

	const navigate = useNavigate()
	const status = "checked-in"

	const moveBack = useMoveBack()

	const statusToTagName = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver"
	}

	if (isFetching) return <Spinner />
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
				<Button color="secondary" onClick={moveBack}>
					Back
				</Button>
			</div>
		</div>
	)
}

export default BookingDetail
