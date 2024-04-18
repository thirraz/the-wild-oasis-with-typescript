import { ComponentProps } from "react"
import { SortAndFilterOptions } from "./Filter"

type Props = {
	type?: string
	options: SortAndFilterOptions[]
	value: string
} & ComponentProps<"select">

export function Select({ type, options, value, ...props }: Props) {
	return (
		<select
			{...props}
			value={value}
			data-select-type={type}
			className="data-[select-type=white]:border-grey-100 data-[select-type=white]:dark:border-grey-100 text-sm py-[0.8rem] px-6 rounded-sm bg-grey-0 dark:bg-dark-grey-0 font-medium shadow-sm border border-grey-300 dark:border-dark-grey-300 pointer"
		>
			{options.map(option => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}
