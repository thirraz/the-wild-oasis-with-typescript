import Row from "../ui/Row"
import CabinTable from "../features/cabins/CabinTable"

function Cabins() {
	// useEffect(() => {
	// 	// (async () => {
	// 	// 	const data = await getCabins()
	// 	// 	console.log(data)
	// 	// })()
	// 	getCabins().then(data => console.log(data))
	// }, [])

	return (
		<div className="space-y-8">
			<Row direction="horizontal">
				<h1 className="text-4xl">All cabins</h1>
				<p>Filter / Sort</p>
			</Row>

			<Row>
				<CabinTable />
			</Row>
		</div>
	)
}

export default Cabins
