import Input from "../../ui/Input"
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

function CreateCabinForm() {
	return (
		<Form>
			<div className="form-row">
				<label className="label" htmlFor="name">
					Cabin name
				</label>
				<Input type="text" id="name" />
			</div>

			<div className="form-row">
				<label className="label" htmlFor="maxCapacity">
					Maximum capacity
				</label>
				<Input type="number" id="maxCapacity" />
			</div>

			<div className="form-row">
				<label className="label" htmlFor="regularPrice">
					Regular price
				</label>
				<Input type="number" id="regularPrice" />
			</div>

			<div className="form-row">
				<label className="label" htmlFor="discount">
					Discount
				</label>
				<Input type="number" id="discount" defaultValue={0} />
			</div>

			<div className="form-row">
				<label className="label" htmlFor="description">
					Description for website
				</label>
				<textarea
					id="description"
					defaultValue=""
					className="py-[0.8rem] px-[1.2rem] border-[1px] border-grey-300 rounded-[5px] bg-grey-0 shadow-sm w-full h-32"
				/>
			</div>

			<div className="form-row">
				<label className="label" htmlFor="image">
					Cabin photo
				</label>
				<input
					type="image"
					id="image"
					accept="image/*"
					className="input-btn text-[1.4rem] rounded-sm"
				/>
			</div>

			<div className="form-row">
				{/* type is an HTML attribute! */}
				<Button color="secondary" /* type="reset" */>Cancel</Button>
				<Button size="small" color="secondary">
					Edit cabin
				</Button>
			</div>
		</Form>
	)
}

export default CreateCabinForm
