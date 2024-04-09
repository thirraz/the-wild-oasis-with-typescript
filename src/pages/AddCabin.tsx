import { useState } from "react"
import { Button } from "../ui/Button"
import Modal from "../ui/Modal"
import CreateCabinForm from "../features/cabins/CreateCabinForm"

export default function AddCabin() {
	const [showModal, setShowModal] = useState(false)

	return (
		<div>
			<Button onClick={() => setShowModal(show => !show)}>
				Add new cabin
			</Button>

			{showModal && (
				<Modal>
					<CreateCabinForm />
				</Modal>
			)}
		</div>
	)
}
