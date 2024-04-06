type Props = {
	resource: string
}

function Empty({ resource }: Props) {
	return <p className="font-bold">No {resource} could be found.</p>
}

export default Empty
