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
		<>
			<Row direction="horizontal">
				<h1>All cabins</h1>
				<p>Filter / Sort</p>
			</Row>

			<Row>
				<CabinTable />
			</Row>
		</>
	)
}

export default Cabins
