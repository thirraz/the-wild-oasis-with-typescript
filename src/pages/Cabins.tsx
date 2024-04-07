import Row from "../ui/Row"
import CabinTable from "../features/cabins/CabinTable"
import { Button } from "../ui/Button"
import { useState } from "react"
import CreateCabinForm from "../features/cabins/CreateCabinForm"

function Cabins() {
	const [showForm, setShowForm] = useState(false)

	return (
		<div className="space-y-8">
			<Row direction="horizontal">
				<h1 className="text-4xl">All cabins</h1>
				<p>Filter / Sort</p>
			</Row>

			<Row>
				<CabinTable />

				<Button onClick={() => setShowForm(show => !show)}>
					Add new cabin
				</Button>

				{showForm && <CreateCabinForm />}
			</Row>
		</div>
	)
}

export default Cabins
