// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;
//
//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;
//
// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;
//
// const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;
//
// const Price = styled.div`
//   font-family: "Sono";
//   font-weight: 600;
// `;
//
// const Discount = styled.div`
//   font-family: "Sono";
//   font-weight: 500;
//   color: var(--color-green-700);
// `;

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "../../ui/Button"
import { formatCurrency } from "../../utils/helpers"
import { deleteCabins } from "../../services/apiCabins"
import toast from "react-hot-toast"
import { useState } from "react"
import CreateCabinForm from "./CreateCabinForm"

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

	const queryClient = useQueryClient()

	const { isPending: isDeleting, mutate } = useMutation({
		mutationFn: (id: number | string) => deleteCabins(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			})

			toast.success("Cabin successfully deleted!")
		},
		onError: err => toast.error(err.message)
	})

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
					{formatCurrency(discount)}
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
						onClick={() => mutate(cabinId)}
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
