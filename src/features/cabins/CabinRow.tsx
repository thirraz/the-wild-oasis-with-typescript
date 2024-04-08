import { Button } from "../../ui/Button"
import { formatCurrency } from "../../utils/helpers"
import { useState } from "react"
import CreateCabinForm from "./CreateCabinForm"
import { useDeleteCabin } from "./useDeleteCabin"

type Props = {
	cabin: any
}

export default function CabinRow({ cabin }: Props) {
	const {
		id: cabinId,
		name,
		maxCapacity,
		regularPrice,
		discount,
		image
	} = cabin

	const [showForm, setShowForm] = useState(false)

	const { isDeleting, deleteCabin } = useDeleteCabin()

	return (
		<>
			<div className="grid [grid-template-columns:0.6fr_1.8fr_2.2fr_repeat(3,1fr)] gap-[2.4rem] items-center py-[1rem] px-[1.2rem] ">
				{/* If doesn't an image, replace by a <div> with a border */}
				{image ? (
					<img
						src={image}
						className="block max-w-[7rem] max-h-full aspect-[3/2] object-cover object-center translate-x-[-7px]"
					/>
				) : (
					<div className="border-[1px] border-grey-300 block max-w-[7rem] w-[7rem] max-h-full aspect-[3/2] object-cover object-center translate-x-[-7px]" />
				)}

				<span className="block font-sono font-bold text-grey-600">
					{name}
				</span>

				<div>Fits up to {maxCapacity} guests</div>

				<div className="font-sono font-bold">
					{formatCurrency(regularPrice)}
				</div>
				<div className="font-sono font-bold text-green-700">
					{discount ? formatCurrency(discount) : <span>&mdash;</span>}
				</div>
				<div>
					<Button
						onClick={() => setShowForm(show => !show)}
						size="small"
						color="secondary"
					>
						Edit
					</Button>
					<Button
						onClick={() => deleteCabin(cabinId)}
						disabled={isDeleting}
						size="small"
						color="primary"
					>
						Delete
					</Button>
				</div>
			</div>
			{showForm && <CreateCabinForm cabinToEdit={cabin} />}
		</>
	)
}
