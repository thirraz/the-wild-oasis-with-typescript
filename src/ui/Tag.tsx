import { ComponentProps } from "react"

type Props = ComponentProps<"span"> & {
	type: string
}

export function Tag({ type, ...props }: Props) {
	return (
		<span
			{...props}
			className={`w-fit uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-[100px] text-${type}-700 bg-${type}-100`}
		/>
	)
}

export default Tag
