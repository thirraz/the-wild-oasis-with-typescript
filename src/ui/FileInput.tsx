import { ComponentProps } from "react"

type Props = ComponentProps<"input">

export function FileInput(props: Props) {
	return <input {...props} className="input-btn text-base rounded-sm " />
}

export default FileInput
