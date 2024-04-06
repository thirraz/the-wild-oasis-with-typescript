import { useEffect } from "react"
import Row from "../ui/Row"
import { getCabins } from "../services/apiCabins"

function Cabins() {
	useEffect(() => {
		// (async () => {
		// 	const data = await getCabins()
		// 	console.log(data)
		// })()
		getCabins().then(data => console.log(data))
	}, [])

	return (
		<Row direction="horizontal">
			<h1>All cabins</h1>
			<p>TEST</p>
			<img
				src="https://gbcksxbxabufcuobfztg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
				alt="pinto"
			/>
		</Row>
	)
}

export default Cabins
