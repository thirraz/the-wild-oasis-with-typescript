import {
	Area,
	AreaChart,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
	ResponsiveContainer
} from "recharts"
import { useDarkMode } from "../../contexts/DarkModeContext"
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns"

type Props = {
	bookings:
		| { created_at: any; totalPrice: any; extrasPrice: any }[]
		| undefined
	numDays: number
}

export default function SalesChart({ bookings, numDays }: Props) {
	const { isDarkMode } = useDarkMode()

	const allDates = eachDayOfInterval({
		start: subDays(new Date(), numDays - 1),
		end: new Date()
	})

	const data = allDates.map(date => {
		return {
			label: format(date, "MMM dd"),
			totalSales: bookings
				?.filter(booking => isSameDay(date, new Date(booking.created_at)))
				.reduce((acc, cur) => acc + cur.totalPrice, 0),
			extrasSales: bookings
				?.filter(booking => isSameDay(date, new Date(booking.created_at)))
				.reduce((acc, cur) => acc + cur.extrasPrice, 0)
		}
	})

	const colors = isDarkMode
		? {
				totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
				extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
				text: "#e5e7eb",
				background: "#18212f"
		  }
		: {
				totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
				extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
				text: "#374151",
				background: "#fff"
		  }

	return (
		<div className="bg-grey-0 dark:bg-dark-grey-0  border border-grey-100 dark:border-dark-grey-100 rounded-md p-11 flex flex-col gap-8 col-span-full">
			<h2 className="text-lg">
				Sales from {format(String(allDates.at(0)), "MMM dd yyyy")} &mdash;{" "}
				{format(String(allDates.at(-1)), "MMM dd yyyy")}
			</h2>

			<ResponsiveContainer height={300} width="100%">
				<AreaChart data={data}>
					<XAxis
						dataKey="label"
						tick={{ fill: colors.text }}
						tickLine={{ fill: colors.text }}
					/>
					<YAxis
						unit="$"
						tick={{ fill: colors.text }}
						tickLine={{ fill: colors.text }}
					/>
					<CartesianGrid strokeDasharray="4" />
					<Tooltip contentStyle={{ backgroundColor: colors.background }} />
					<Area
						dataKey="totalSales"
						type="monotone"
						stroke={colors.totalSales.stroke}
						fill={colors.totalSales.fill}
						strokeWidth={2}
						name="Total sales"
						unit="$"
					/>
					<Area
						dataKey="extrasSales"
						type="monotone"
						stroke={colors.extrasSales.stroke}
						fill={colors.extrasSales.fill}
						strokeWidth={2}
						name="Extras sales"
						unit="$"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}
