import { format, isToday } from "date-fns"

import Tag from "../../ui/Tag"
import Table from "../../ui/Table"

import { formatCurrency } from "../../utils/helpers"
import { formatDistanceFromNow } from "../../utils/helpers"
import { HiEllipsisVertical } from "react-icons/hi2"
import { useState } from "react"
import { BookingMenu } from "./BookingMenu"

type Props = {
	booking: {
		id: string | number
		createdAt: string
		startDate: string
		endDate: string
		numNights: string | number
		numGuests: string | number
		totalPrice: number
		status: string
		guests: { fullName: string; email: string }
		cabins: { name: string }
	}
}

function BookingRow({
	booking: {
		id: bookingId,
		createdAt: created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		totalPrice,
		status,
		guests: { fullName, email },
		cabins: { name: cabinName }
	}
}: Props) {
	const statusToTagName: any = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver"
	}

	const [showMenu, setShowMenu] = useState(false)

	return (
		<Table.Row>
			<div className="font-bold text-grey-600 dark:text-dark-grey-600 font-sono">
				<span>{cabinName}</span>
			</div>

			<div className="flex flex-col gap-1 [&>span]:font-semibold last:text-sm last:text-grey-500 dark:last:text-dark-grey-500">
				<span>{fullName}</span>
				<span>{email}</span>
			</div>

			<div className="flex flex-col gap-1 [&>span]:font-semibold last:text-sm last:text-grey-500 dark:last:text-grey-500">
				<span>
					{isToday(new Date(startDate))
						? "Today"
						: formatDistanceFromNow(startDate)}{" "}
					&rarr; {numNights} night stay
				</span>
				<span>
					{format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
					{format(new Date(endDate), "MMM dd yyyy")}
				</span>
			</div>
			<Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

			<div className="font-sono font-semibold">
				<span>{formatCurrency(totalPrice)}</span>
			</div>

			<div className="relative grid place-items-center w-fit h-fit ">
				<button
					className="text-2xl py-3 px-3 hover:bg-grey-100 dark:hover:bg-dark-grey-100 transition-all"
					onClick={() => setShowMenu(show => !show)}
				>
					<HiEllipsisVertical />
				</button>

				{showMenu && <BookingMenu status={status} bookingId={bookingId} />}
			</div>
		</Table.Row>
	)
}

export default BookingRow
