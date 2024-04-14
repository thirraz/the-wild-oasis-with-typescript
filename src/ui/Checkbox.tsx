//
type Props = {
	checked: boolean
	onChange: () => void
	disabled: boolean
	id: string
	children: React.ReactNode
}

export function Checkbox({
	checked,
	onChange,
	disabled = false,
	id,
	children
}: Props) {
	return (
		<div className="flex items-center gap-5">
			<input
				type="checkbox"
				id={id}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className="w-4 h-4 outline-offset-2 origin-[0] accent-brand-600"
			/>
			<label
				className="flex-[1] flex items-center gap-[0.8rem]"
				htmlFor={!disabled ? id : ""}
			>
				{children}
			</label>
		</div>
	)
}

export default Checkbox
