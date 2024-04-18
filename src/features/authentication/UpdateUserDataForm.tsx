import { useState } from "react"

import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"

import { useUser } from "./useUser"
import { useUpdateUser } from "./useUpdateUser"

function UpdateUserDataForm() {
	// We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
	const {
		user: {
			email,
			user_metadata: { fullName: currentFullName }
		}
	} = useUser() as any

	const { updateUser, isUpdating } = useUpdateUser()

	const [fullName, setFullName] = useState(currentFullName)
	const [avatar, setAvatar] = useState("")

	console.log(avatar)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (!fullName) return

		updateUser(
			{ fullName, avatar },
			{
				onSuccess: () => {
					setAvatar("")
				}
			}
		)
	}

	function handleCancel() {
		setFullName(currentFullName)
		setAvatar("")
	}

	return (
		<Form onSubmit={handleSubmit} className="bg-grey-0 px-10 py-7 rounded-lg">
			<FormRow label="Email address">
				<input className="input" value={email} disabled={isUpdating} />
			</FormRow>
			<FormRow label="Full name">
				<input
					className="input"
					type="text"
					value={fullName}
					onChange={e => setFullName(e.target.value)}
					id="fullName"
				/>
			</FormRow>
			<FormRow label="Avatar image">
				<FileInput
					type="file"
					id="avatar"
					accept="image/*"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						// @ts-ignore
						setAvatar(e.target.files[0])
					}
					disabled={isUpdating}
				/>
			</FormRow>
			<div className="mt-7 text-sm flex gap-8 max-w-fit ml-auto">
				<Button
					type="reset"
					color="secondary"
					disabled={isUpdating}
					onClick={handleCancel}
				>
					Cancel
				</Button>
				<Button disabled={isUpdating}>Update account</Button>
			</div>
		</Form>
	)
}

export default UpdateUserDataForm
