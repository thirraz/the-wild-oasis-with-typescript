type Props = {
	type?: string | "modal"
	children: React.ReactNode
}

export function Form({ type, children }: Props) {
	return (
		<form
			className={`overflow-hidden text-[1.4rem] ${
				type !== "modal"
					? "py-[2.4rem] px-16 bg-grey-0 border-[1px] border-grey-100 rounded-md"
					: "w-[80rem]"
			}`}
		>
			{children}
		</form>
	)
}

export default Form
