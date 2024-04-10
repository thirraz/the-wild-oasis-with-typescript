import { Button } from "../../ui/Button"
import { Modal } from "../../ui/Modal"
import CabinTable from "./CabinTable"
import CreateCabinForm from "./CreateCabinForm"

export default function AddCabin() {
	return (
		<div className="space-y-3">
			<Modal>
				<Modal.Open openWindowName="cabin-form">
					<Button>Add new cabin</Button>
				</Modal.Open>
				<Modal.Window name="cabin-form">
					<CreateCabinForm />
				</Modal.Window>
			</Modal>

			<Modal>
				<Modal.Open openWindowName="table">
					<Button>Show table</Button>
				</Modal.Open>
				<Modal.Window name="table">
					<CabinTable />
				</Modal.Window>
			</Modal>
		</div>
	)
}
