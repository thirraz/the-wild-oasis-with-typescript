type Props = {
	src: string
}

export function Flag({ src }: Props) {
	return (
		<img
			src={src}
			className="max-w-8 w-8 rounded-tiny block border border-grey-100"
		/>
	)
}
