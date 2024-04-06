import { ComponentProps } from "react"

type Props = ComponentProps<"div">

export function TableOperations(props: Props) {
	return <div {...props} className="flex items-center gap-[1.6rem]" />
}

export default TableOperations
