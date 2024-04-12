import BookingTable from "../features/bookings/BookingTable"
import BookingTableOperations from "../features/bookings/BookingTableOperations"
import Row from "../ui/Row"

function Bookings() {
	return (
		<>
			<Row direction="horizontal">
				<h1 className="text-4xl">All bookings</h1>
				<BookingTableOperations />
			</Row>

			<BookingTable />
		</>
	)
}

export default Bookings
