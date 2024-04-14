import { useEffect, useState } from "react"

import BookingDataBox from "../../features/bookings/BookingDataBox"
import Row from "../../ui/Row"
import { Button } from "../../ui/Button"
import ButtonText from "../../ui/ButtonText"
import { useMoveBack } from "../../hooks/useMoveBack"
import { useFetchBooking } from "../bookings/useFetchBooking"
import Spinner from "../../ui/Spinner"
import Checkbox from "../../ui/Checkbox"
import { Box } from "../../ui/Box"

import { formatCurrency } from "../../utils/helpers"
import { useCheckin } from "./useCheckin"

function CheckinBooking() {
	const [confirmPaid, setConfirmPaid] = useState(false)

	const { booking, isLoading: isFetching } = useFetchBooking()
	useEffect(() => setConfirmPaid(booking?.isPaid || false), [booking])

	const moveBack = useMoveBack()
	const { checkin, isCheckinIn } = useCheckin()

	if (isFetching) return <Spinner />

	const {
		id: bookingId,
		guests,
		totalPrice,
		numGuests,
		hasBreakfast,
		numNights
	} = booking

	function handleCheckin() {
		if (!confirmPaid) return
		checkin(bookingId)
	}

	return (
		<div className="space-y-4">
			<Row direction="horizontal">
				<h1 className="text-xl">Check in booking #{bookingId}</h1>
				<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
			</Row>

			<BookingDataBox booking={booking} />

			<Box>
				<Checkbox
					disabled={confirmPaid || isCheckinIn}
					checked={confirmPaid}
					onChange={() => setConfirmPaid(confirm => !confirm)}
					id="confirm"
				>
					<span>
						I confirm that {guests.fullName} has paid the total amount of{" "}
						{formatCurrency(totalPrice)}
					</span>
				</Checkbox>
			</Box>

			<div className="flex gap-4 justify-end items-end">
				<Button
					onClick={handleCheckin}
					disabled={!confirmPaid || isCheckinIn}
				>
					Check in booking #{bookingId}
				</Button>
				<Button onClick={moveBack} color="secondary">
					Back
				</Button>
			</div>
		</div>
	)
}

export default CheckinBooking
