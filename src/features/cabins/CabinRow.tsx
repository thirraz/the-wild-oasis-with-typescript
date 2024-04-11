import { Button } from "../../ui/Button"
import { formatCurrency } from "../../utils/helpers"
import CreateCabinForm from "./CreateCabinForm"
import { useDeleteCabin } from "./useDeleteCabin"
import { HiPencil, HiTrash } from "react-icons/hi2"
import { useCreateCabin } from "./useCreateCabin"
import { Modal } from "../../ui/Modal"
import ConfirmDelete from "../../ui/ConfirmDelete"
import Table from "../../ui/Table"
import { HiDuplicate } from "react-icons/hi"

type Props = {
	cabin: any
}

export default function CabinRow({ cabin }: Props) {
	const { isCreating: isDuplicating, createCabin } = useCreateCabin()
	const { isDeleting, deleteCabin } = useDeleteCabin()

	const {
		id: cabinId,
		name: cabinName,
		maxCapacity,
		regularPrice,
		discount,
		image,
		description
	} = cabin

	function handleDuplicate() {
		createCabin({
			name: `Copy of ${cabinName}`,
			maxCapacity,
			regularPrice,
			discount,
			image,
			description
		})
	}

	return (
		<Table.Row>
			{/* If doesn't an image, replace by a <div> with a border */}
			{image ? (
				<img
					src={image}
					className="block max-w-[7rem] max-h-full aspect-[3/2] object-cover object-center translate-x-[-7px]"
				/>
			) : (
				<div className="border border-grey-300 block max-w-[7rem] w-[7rem] max-h-full aspect-[3/2] object-cover object-center translate-x-[-7px]" />
			)}

			<span className="block font-sono font-bold text-grey-600">
				{cabinName}
			</span>

			<div>Fits up to {maxCapacity} guests</div>

			<div className="font-sono font-bold">
				{formatCurrency(regularPrice)}
			</div>
			<div className="font-sono font-bold text-green-700">
				{discount ? formatCurrency(discount) : <span>&mdash;</span>}
			</div>

			<div className="flex flex-col items-center gap-4">
				<Button
					onClick={handleDuplicate}
					disabled={isDuplicating}
					size="small"
					color="secondary"
				>
					<HiDuplicate className="mx-auto text-lg" />
				</Button>

				<Modal>
					<Modal.Open openWindowName="edit">
						<Button size="small" color="secondary">
							<HiPencil />
						</Button>
					</Modal.Open>
					<Modal.Window name="edit">
						<CreateCabinForm cabinToEdit={cabin} />
					</Modal.Window>

					<Modal.Open openWindowName="delete-cabin">
						<Button disabled={isDeleting} size="small" color="primary">
							<HiTrash />
						</Button>
					</Modal.Open>
					<Modal.Window deleteModal name="delete-cabin">
						<ConfirmDelete
							resourceName="cabins"
							disabled={isDeleting}
							onConfirm={() => deleteCabin(cabinId)}
						/>
					</Modal.Window>
				</Modal>
			</div>
		</Table.Row>
	)
}
