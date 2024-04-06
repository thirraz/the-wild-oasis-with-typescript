import { ComponentProps } from "react"

type Props = ComponentProps<"main">

export function ErrorFallback(props: Props) {
	return (
		<main
			{...props}
			className="h-[100dvh] bg-grey-50 flex items-center justify-center p-[4.8rem]"
		/>
	)
}
