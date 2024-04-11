import BookingTable from "../features/bookings/BookingTable"
import Row from "../ui/Row"

function Bookings() {
	return (
		<>
			<Row direction="horizontal">
				<h1 className="text-4xl">All bookings</h1>
				<p>TEST</p>
			</Row>

			<BookingTable />
		</>
	)
}

export default Bookings
