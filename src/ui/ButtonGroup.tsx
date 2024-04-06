import { ComponentProps } from "react"

type Props = ComponentProps<"div">

export function ButtonGroup(props: Props) {
	return <div {...props} className="flex gap-5 justify-end" />
}

export default ButtonGroup
