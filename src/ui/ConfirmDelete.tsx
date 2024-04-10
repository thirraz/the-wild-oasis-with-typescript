import { Button } from "./Button"

type Props = {
	resourceName: string
	disabled: boolean
	onConfirm: () => void
	onCloseModal: () => void
}

export function ConfirmDelete({
	resourceName,
	disabled,
	onConfirm,
	onCloseModal
}: Props) {
	return (
		<div className=" w-auto h-full flex flex-col gap-5 ">
			<h3 className="text-2xl">Delete {resourceName}</h3>
			<p className="text-grey-500 mb-5">
				Are you sure you want to delete this {resourceName} permanently?
				This action cannot be undone.
			</p>
			<div className="flex justify-end gap-5">
				{/* CONVERT BUTTON TO TAILWINDCSS LATER */}
				<Button
					color="secondary"
					disabled={disabled}
					onClick={onCloseModal}
				>
					Cancel
				</Button>
				<Button color="danger" disabled={disabled} onClick={onConfirm}>
					Delete
				</Button>
			</div>
		</div>
	)
}

export default ConfirmDelete
