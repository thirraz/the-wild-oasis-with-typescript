type Props = {
	icon: any //IF NECESSARY CONVERT ICON TO A COMPONENT
	label: string
	children: React.ReactNode
}

function DataItem({ icon, label, children }: Props) {
	return (
		<div className="flex items-center gap-7 p-[0.8rem]">
			<span className="flex items-center gap-[.8rem] font-medium">
				{icon}
				<span>{label}</span>
			</span>
			{children}
		</div>
	)
}


export default DataItem
