import { ComponentProps } from "react"

type Props = ComponentProps<"ul">

export default function NavList(props: Props) {
	return <ul {...props} className="flex flex-col gap-[0.8rem]" />
}
