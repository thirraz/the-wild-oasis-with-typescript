//
type Props = {
	checked: boolean
	onChange: () => void
	disabled: boolean
	id: string
	children?: React.ReactNode
}

export function Checkbox({
	checked,
	onChange,
	disabled = false,
	id,
	children
}: Props) {
	return (
		<div className="flex gap-[1.6rem]">
			<input
				type="checkbox"
				id={id}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className="w-[2.4rem] h-[2.4rem] outline-offset-2 origin-[0] accent-brand-600"
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

// function Checkbox({ checked, onChange, disabled = false, id, children }) {
//   return (
//     <StyledCheckbox>
//       <input
//         type="checkbox"
//         id={id}
//         checked={checked}
//         onChange={onChange}
//         disabled={disabled}
//       />
//       <label htmlFor={!disabled ? id : ""}>{children}</label>
//     </StyledCheckbox>
//   );
// }

export default Checkbox
