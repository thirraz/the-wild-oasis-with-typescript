import { useForm } from "react-hook-form"

import Form from "../../ui/Form"
import { Button } from "../../ui/Button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCabins } from "../../services/apiCabins"
import toast from "react-hot-toast"
import FormRow from "../../ui/FormRow"

// const FormRow = styled.div`
// 	display: grid;
// 	align-items: center;
// 	grid-template-columns: 24rem 1fr 1.2fr;
// 	gap: 2.4rem;

// 	padding: 1.2rem 0;

// 	&:first-child {
// 		padding-top: 0;
// 	}

// 	&:last-child {
// 		padding-bottom: 0;
// 	}

// 	&:not(:last-child) {
// 		border-bottom: 1px solid var(--color-grey-100);
// 	}

// 	&:has(button) {
// 		display: flex;
// 		justify-content: flex-end;
// 		gap: 1.2rem;
// 	}
// `

// const Label = styled.label`
// 	font-weight: 500;
// `

// const Error = styled.span`
// 	font-size: 1.4rem;
// 	color: var(--color-red-700);
// `

export type CreateCabinFields = {
	name: string
	maxCapacity: number
	regularPrice: number
	discount: number
	description: string
	image: any
}

function CreateCabinForm() {
	const queryClient = useQueryClient()

	const { register, handleSubmit, reset, getValues, formState } =
		useForm<CreateCabinFields>()

	const { errors } = formState

	const { mutate, isPending: isCreating } = useMutation({
		mutationFn: createCabins,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cabins"]
			})
			toast.success("Cabin created!")
			reset()
		},
		onError: err => toast.error(err.message)
	})

	function onSubmit(data: CreateCabinFields) {
		mutate({ ...data, image: data.image[0] })
		console.log(data.image[0].name)
	}

	function onError(errors: any) {
		console.log(errors)
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
					disabled={isCreating}
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
					disabled={isCreating}
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
					disabled={isCreating}
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
					disabled={isCreating}
					className="input"
					placeholder="Example: 50"
					{...register("discount", {
						required: "This field is required",
						validate: value =>
							value < getValues().regularPrice ||
							"Discount should be less than regular price"
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
					disabled={isCreating}
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
					disabled={isCreating}
					accept="image/jpg"
					className="max-w-[17rem] input-btn text-[1.4rem] rounded-sm text-sm"
					{...register("image", { required: "This field is required" })}
				/>
			</FormRow>

			<div className="flex gap-[1rem] text-sm justify-end mt-6">
				{/* type is an HTML attribute! */}
				<Button color="secondary" /* type="reset" */>Cancel</Button>
				<Button size="medium" color="primary" disabled={isCreating}>
					Add cabin
				</Button>
			</div>
		</Form>
	)
}

export default CreateCabinForm
