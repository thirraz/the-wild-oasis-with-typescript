import Row from "../ui/Row"
import CabinTable from "../features/cabins/CabinTable"
import AddCabin from "../features/cabins/AddCabin"

function Cabins() {
	return (
		<div className="space-y-8">
			<Row direction="horizontal">
				<h1 className="text-4xl">All cabins</h1>
				<p>Filter / Sort</p>
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
