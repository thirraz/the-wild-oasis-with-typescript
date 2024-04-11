import Row from "../ui/Row"
import CabinTable from "../features/cabins/CabinTable"
import AddCabin from "../features/cabins/AddCabin"
import CabinTableOperations from "../features/cabins/CabinTableOperations"

function Cabins() {
	return (
		<div className="space-y-8">
			<Row direction="horizontal">
				<h1 className="text-4xl">All cabins</h1>
				<CabinTableOperations />
			</Row>

			<Row>
				<CabinTable />
				<AddCabin />

				{/* <Button onClick={() => setShowForm(show => !show)}>
					Add new cabin
				</Button> 

				{showForm && <CreateCabinForm />} */}
			</Row>
		</div>
	)
}

export default Cabins
