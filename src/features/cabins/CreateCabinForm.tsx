import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import toast from "react-hot-toast"

import Form from "../../ui/Form"
import { Button } from "../../ui/Button"
import FormRow from "../../ui/FormRow"

export type CreateCabinFields = {
	name: string
	maxCapacity: number
	regularPrice: number
	discount: number
	description: string
	image: any
}

type EditCabinParams = {
	newCabinData: any
	id: any
}

type Props = {
	cabinToEdit?:
		| (CreateCabinFields & { id: string | number })
		| Record<string, never> // <= {}
}
function CreateCabinForm({ cabinToEdit = {} }: Props) {
	const { id: editId, ...editValues } = cabinToEdit
	// const isEditSession = Boolean(editId)
	const isEditSession = Boolean(cabinToEdit?.id)

	const queryClient = useQueryClient()

	const { register, handleSubmit, reset, formState } =
		useForm<CreateCabinFields>({
			defaultValues: isEditSession ? editValues : {}
		})

	const { errors } = formState

	const { mutate: createCabin, isPending: isCreating } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			})
			toast.success("Cabin created!")
			reset()
		},
		onError: err => toast.error(err.message)
	})

	const { mutate: editCabin, isPending: isEditing } = useMutation({
		mutationFn: ({ newCabinData, id }: EditCabinParams) =>
			createEditCabin(newCabinData, id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			})
			toast.success("Cabin edited!")
			reset()
		},
		onError: err => toast.error(err.message)
	})

	const isWorking = isCreating || isEditing

	function onSubmit(data: any) {
		const image =
			typeof data.image === "object" && data.image.length > 0
				? data.image[0]
				: cabinToEdit.image

		if (isEditSession) {
			editCabin({
				newCabinData: { ...data, image },
				id: editId
			})
		} else createCabin({ ...data, image })
	}

	function onError(errors: any) {
		console.log(`Error => ${errors}`)
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			<FormRow
				label="Cabin name"
				errorMessage={errors?.name?.message}
				htmlFor="name"
			>
				<input
					className="input"
					type="text"
					id="name"
					disabled={isWorking}
					placeholder="Example: 001"
					{...register("name", { required: "This field is required" })}
				/>
			</FormRow>

			<FormRow
				label="Max capactity"
				errorMessage={errors?.maxCapacity?.message}
				htmlFor="maxCapacity"
			>
				<input
					className="input"
					type="number"
					id="maxCapacity"
					disabled={isWorking}
					placeholder="Example: 4"
					{...register("maxCapacity", {
						required: "This field is required",
						min: {
							value: 1,
							message: "Max capacity should be at least 1"
						}
					})}
				/>
			</FormRow>

			<FormRow
				label="Regular price"
				errorMessage={errors?.regularPrice?.message}
				htmlFor="regularPrice"
			>
				<input
					className="input"
					type="number"
					id="regularPrice"
					disabled={isWorking}
					placeholder="Example: 350"
					{...register("regularPrice", {
						required: "This field is required",
						min: {
							value: 1,
							message: "Regular price should be at least 1"
						}
					})}
				/>
			</FormRow>

			<FormRow
				label="Discount"
				errorMessage={errors?.discount?.message}
				htmlFor="discount"
			>
				<input
					type="number"
					id="discount"
					disabled={isWorking}
					className="input"
					placeholder="Example: 50"
					{...register("discount", {
						required: "This field is required"

						// validate: value =>
						// 	value >= getValues().regularPrice ||
						// 	"Discount should be less than regular price"
					})}
				/>
			</FormRow>

			<FormRow
				label="Description"
				errorMessage={errors?.description?.message}
				htmlFor="description"
			>
				{" "}
				<textarea
					id="description"
					disabled={isWorking}
					className="py-[0.8rem] px-[1.2rem] max-w-[17] w-[17rem] border-[1px] border-grey-300 rounded-[5px] bg-grey-0 shadow-sm h-32"
					{...register("description", {
						required: "This field is required"
					})}
				/>
			</FormRow>

			<FormRow label="Cabin photo">
				<input
					type="file"
					id="image"
					disabled={isWorking}
					accept="image/*"
					className="max-w-[17rem] input-btn text-[1.4rem] rounded-sm text-sm"
					{...register("image", {
						required: isEditSession ? false : "This field is required"
					})}
				/>
			</FormRow>

			<div className="flex gap-[1rem] text-sm justify-end mt-6">
				{/* type is an HTML attribute! */}
				<Button color="secondary" /* type="reset" */>Cancel</Button>
				<Button size="medium" color="primary" disabled={isWorking}>
					{isEditSession ? "Edit cabin" : "Create new cabin"}
				</Button>
			</div>
		</Form>
	)
}

export default CreateCabinForm
