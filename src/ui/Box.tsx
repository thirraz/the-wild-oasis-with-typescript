import { ComponentProps } from "react"

type Props = ComponentProps<"div">

export function Box(props: Props) {
	return <div {...props} />
	/* 
    ADD <h1> AND <p> LATER 
  */
}
