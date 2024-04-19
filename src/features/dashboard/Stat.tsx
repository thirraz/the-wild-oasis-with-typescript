import React from "react"

type Props = {
	icon: React.ReactNode
	title: string
	value: number | undefined
	color: string
}

export default function Stat({ icon, title, value, color }: Props) {
	return (
		<div className="bg-grey-0 dark:bg-dark-grey-0 border border-grey-100 dark:border-dark-grey-100 rounded-md p-6 grid [grid-template-columns:3.5rem_1fr] [grid-template-rows:auto_auto] ">
			<div
				data-color={color}
				className=" w-8 h-8 row-span-full [aspect-ratio:1] flex items-center justify-center
			 data-[color=blue]:bg-blue-100 dark:data-[color=blue]:bg-blue-100 data-[color=blue]:text-blue-700 dark:data-[color=blue]:text-dark-blue-700
			 data-[color=green]:bg-green-100 dark:data-[color=green]:bg-green-100 text-green-700 dark:text-dark-green-700
			 data-[color=indigo]:bg-indigo-100 dark:data-[color=indigo]:bg-indigo-100 data-[color=indigo]:text-indigo-700 dark:data-[color=indigo]:text-dark-indigo-700
			 data-[color=yellow]:bg-yellow-100 data-[color=yellow]:dark:bg-yellow-100 data-[color=yellow]:text-yellow-700 dark:data-[color=yellow]:text-dark-yellow-700
			  rounded-[50%]"
			>
				{icon}
			</div>
			<h5 className="self-end text-sm uppercase tracking-[0.4px] font-bold text-grey-500 dark:text-grey-500">
				{title}
			</h5>
			<p className="text-4xl leading-none font-semibold">
				{value ? value : "0"}
			</p>
		</div>
	)
}
