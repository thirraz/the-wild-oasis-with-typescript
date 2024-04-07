import React from "react"

type Props = {
	fieldName: string
	label: string
	children: React.ReactNode
	errorMessage: string
}

export default function FormRow({
	fieldName,
	label,
	children,
	errorMessage
}: Partial<Props>) {
	return (
		<div className="form-row">
			<label className="label" htmlFor={fieldName}>
				{label}
			</label>
			<div className="flex flex-col gap-4">
				{/* IF THERE IS SOME ERROR, WILL DISPLAY THE ERROR MESSAGE  */}
				{errorMessage && (
					<span className="text-sm text-red-700 self-end">
						{errorMessage}
					</span>
				)}

				{children}
			</div>
		</div>
	)
}
