import { useForm } from "react-hook-form"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"

import { useUpdateUser } from "./useUpdateUser"

function UpdatePasswordForm() {
	const { register, handleSubmit, formState, getValues, reset } = useForm()
	const { errors } = formState

	const { updateUser, isUpdating } = useUpdateUser()

	function onSubmit({ password }: any) {
		updateUser({ password }, { onSuccess: () => reset() })
	}

	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			className="bg-grey-0 dark:bg-dark-grey-0 px-10 py-7 rounded-lg"
		>
			<FormRow
				label="New password (min 8 chars)"
				errorMessage={errors?.password?.message}
			>
				<input
					className="input"
					type="password"
					id="password"
					autoComplete="current-password"
					disabled={isUpdating}
					{...register("password", {
						required: "This field is required",
						minLength: {
							value: 8,
							message: "Password needs a minimum of 8 characters"
						}
					})}
				/>
			</FormRow>

			<FormRow
				label="Confirm password"
				errorMessage={errors?.passwordConfirm?.message}
			>
				<input
					className="input"
					type="password"
					autoComplete="new-password"
					id="passwordConfirm"
					disabled={isUpdating}
					{...register("passwordConfirm", {
						required: "This field is required",
						validate: value =>
							getValues().password === value || "Passwords need to match"
					})}
				/>
			</FormRow>
			<div className="mt-7 text-sm flex gap-8 max-w-fit ml-auto">
				<Button onClick={reset} type="reset" color="secondary">
					Cancel
				</Button>
				<Button disabled={isUpdating}>Update password</Button>
			</div>
		</Form>
	)
}

export default UpdatePasswordForm
