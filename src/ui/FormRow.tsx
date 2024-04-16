import React from "react"

type Props = {
	htmlFor: string
	label: string
	children: React.ReactNode
	errorMessage: string | any
}

export default function FormRow({
	htmlFor,
	label,
	children,
	errorMessage
}: Partial<Props>) {
	return (
		<div className="form-row">
			<label className="label" htmlFor={htmlFor}>
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
