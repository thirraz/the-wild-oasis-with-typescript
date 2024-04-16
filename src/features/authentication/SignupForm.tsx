import { useForm } from "react-hook-form"
import { Button } from "../../ui/Button"
import { Form } from "../../ui/Form"
import FormRow from "../../ui/FormRow"

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
	const { register, formState, handleSubmit, getValues } = useForm()
	const { errors } = formState

	function onSubmit(data: any) {
		console.log(data)
	}

	return (
		<Form className="max-w-[70%]" onSubmit={handleSubmit(onSubmit)}>
			<FormRow label="Full name" errorMessage={errors?.fullName?.message}>
				<input
					className="input"
					type="text"
					id="fullName"
					{...register("fullName", { required: "This field is required" })}
				/>
			</FormRow>

			<FormRow label="Email address" errorMessage={errors?.email?.message}>
				<input
					className="input"
					type="email"
					id="email"
					{...register("email", {
						required: "This field is required",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Please provide a valid e-mail"
						}
					})}
				/>
			</FormRow>

			<FormRow
				label="Password (min 8 characters)"
				errorMessage={errors?.password?.message}
			>
				<input
					className="input"
					type="password"
					id="password"
					{...register("password", {
						required: "This field is required",
						minLength: {
							value: 8,
							message: "Please, use at lest 8 characters"
						}
					})}
				/>
			</FormRow>

			<FormRow
				label="Repeat password"
				errorMessage={errors?.passwordConfirm?.message}
			>
				<input
					className="input"
					type="password"
					id="passwordConfirm"
					{...register("passwordConfirm", {
						required: "This field is required",
						validate: value =>
							value === getValues().password ||
							"Passwords needs to match"
					})}
				/>
			</FormRow>

			<div className="flex items-center gap-4 mt-4 max-w-fit ml-auto">
				{/* type is an HTML attribute! */}
				<Button size="small" color="secondary" type="reset">
					Cancel
				</Button>
				<Button size="small">Create new user</Button>
			</div>
		</Form>
	)
}

export default SignupForm
