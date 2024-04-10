import { Button } from "../../ui/Button"
import { Modal } from "../../ui/Modal"
import CreateCabinForm from "./CreateCabinForm"

export default function AddCabin() {
	return (
		<Modal>
			<Modal.Open openWindowName="cabin-form">
				<Button className="w-fit">Add new cabin</Button>
			</Modal.Open>
			<Modal.Window name="cabin-form">
				<CreateCabinForm />
			</Modal.Window>
		</Modal>
	)
}
