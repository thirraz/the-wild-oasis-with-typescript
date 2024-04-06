import { ComponentProps } from "react"

type Props = ComponentProps<"div">

export default function Row(props: Props) {
	return <div {...props} />
}
