type Props = {
	children: React.ReactNode
}

export function ButtonText({ children }: Props) {
	return (
		<button className="text-brand-600 font-medium text-center transition-all bg-none rounded-sm hover:text-brand-700 active:text-brand-700">
			{children}
		</button>
	)
}

export default ButtonText
