import { ComponentProps } from "react"

type Props = ComponentProps<"button"> & { active: boolean }

export function FilterButton({ active = false, ...props }: Props) {
	return (
		<button
			data-active={active}
			{...props}
			className="filter-btn data-[active=true]:bg-brand-600 data-[active=true]:text-brand-50 bg-grey-0 rounded-sm font-medium text-[1.4rem] py-[.44rem] px-[0.8rem] transition-all "
		/>
	)
}

// className={`filter-btn bg-grey-0 rounded-sm font-medium text-[1.4rem] py-[.44rem] px-[0.8rem] transition-all  ${
// 	active ? "bg-brand-600 text-brand-50" : ""
// }`}
