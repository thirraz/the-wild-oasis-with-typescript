import BookingRow from "./BookingRow"
import Table from "../../ui/Table"
import Menus from "../../ui/Menus"

function BookingTable() {
	const bookings = []

	return (
		<Menus>
			<Table columns="0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem">
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
		</Menus>
	)
}

export default BookingTable
