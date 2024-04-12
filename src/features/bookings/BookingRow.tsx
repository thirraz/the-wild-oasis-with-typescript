import { format, isToday } from "date-fns"

import Tag from "../../ui/Tag"
import Table from "../../ui/Table"

import { formatCurrency } from "../../utils/helpers"
import { formatDistanceFromNow } from "../../utils/helpers"

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

	return (
		<Table.Row>
			<div className="font-bold text-grey-600 font-sono">
				<span>{cabinName}</span>
			</div>

			<div className="flex flex-col gap-1 [&>span]:font-semibold last:text-sm last:text-grey-500">
				<span>{fullName}</span>
				<span>{email}</span>
			</div>

			<div className="flex flex-col gap-1 [&>span]:font-semibold last:text-sm last:text-grey-500">
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
		</Table.Row>
	)
}

export default BookingRow
