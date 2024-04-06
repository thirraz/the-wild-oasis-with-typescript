type Props = {
	resourceName: string
	onConfirm?: () => void
	disabled: boolean
}

export function ConfirmDelete({ resourceName, disabled }: Props) {
	return (
		<div className="w-[40rem] max-w-[40rem] flex flex-col gap-5">
			<h3 className="">Delete {resourceName}</h3>
			<p className="text-grey-500 mb-5">
				Are you sure you want to delete this {resourceName} permanently?
				This // action cannot be undone.
			</p>
			<div className="flex justify-end gap-5">
				{/* CONVERT BUTTON TO TAILWINDCSS LATER */}
				<Button variation="secondary" disabled={disabled}>
					// Cancel //{" "}
				</Button>
				//{" "}
				<Button variation="danger" disabled={disabled}>
					// Delete //{" "}
				</Button>
			</div>
		</div>
	)
}

export default ConfirmDelete
