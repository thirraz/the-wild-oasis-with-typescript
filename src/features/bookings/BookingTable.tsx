import BookingRow from "./BookingRow"
import Table from "../../ui/Table"
import Empty from "../../ui/Empty"

import { useFetchBookings } from "./useFetchBookings"
import Spinner from "../../ui/Spinner"

function BookingTable() {
	const { bookings, isFetching } = useFetchBookings()

	if (isFetching) return <Spinner />
	if (!bookings?.length) return <Empty resource="bookings" />

	return (
		<div className="space-y-14">
			<Table columns="[grid-template-columns:0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem]">
				<Table.Head>
					<div>Cabin</div>
					<div>Guest</div>
					<div>Dates</div>
					<div>Status</div>
					<div>Amount</div>
					<div></div>
				</Table.Head>

				<Table.Body
					data={bookings}
					render={booking => (
						<BookingRow key={booking.id} booking={booking} />
					)}
				/>
			</Table>
		</div>
	)
}

export default BookingTable
