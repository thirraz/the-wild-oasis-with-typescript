import { useForm } from "react-hook-form"

import Form from "../../ui/Form"
import { Button } from "../../ui/Button"

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

type CreateCabinFields = {
	name: string
	maxCapacity: number
	regularPrice: number
	discount: number
	description: string
}

function CreateCabinForm() {
	const { register, handleSubmit } = useForm<CreateCabinFields>()

	function onSubmit(data: CreateCabinFields) {
		console.log(data)
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<div className="form-row">
				<label className="label" htmlFor="name">
					Cabin name
				</label>
				<input
					className="input"
					type="text"
					id="name"
					{...register("name")}
				/>
			</div>

			<div className="form-row">
				<label className="label" htmlFor="maxCapacity">
					Maximum capacity
				</label>
				<input
					className="input"
					type="number"
					id="maxCapacity"
					{...register("maxCapacity")}
				/>
			</div>

			<div className="form-row">
				<label className="label" htmlFor="regularPrice">
					Regular price
				</label>
				<input
					className="input"
					type="number"
					id="regularPrice"
					{...register("regularPrice")}
				/>
			</div>

			<div className="form-row">
				<label className="label" htmlFor="discount">
					Discount
				</label>
				<input
					type="number"
					id="discount"
					defaultValue={0}
					className="input"
					{...register("discount")}
				/>
			</div>

			<div className="form-row">
				<label className="label" htmlFor="description">
					Description for website
				</label>
				<textarea
					id="description"
					defaultValue=""
					className="py-[0.8rem] px-[1.2rem] max-w-[20rem] border-[1px] border-grey-300 rounded-[5px] bg-grey-0 shadow-sm w-full h-32"
					{...register("description")}
				/>
			</div>

			<div className="form-row">
				<label className="label" htmlFor="image">
					Cabin photo
				</label>
				<input
					type="file"
					id="image"
					accept="image/*"
					className="input-btn text-[1.4rem] rounded-sm text-sm"
				/>
			</div>

			<div className="form-row">
				{/* type is an HTML attribute! */}
				<Button color="secondary" /* type="reset" */>Cancel</Button>
				<Button size="medium" color="primary">
					Edit cabin
				</Button>
			</div>
		</Form>
	)
}

export default CreateCabinForm
