import { format, isToday } from "date-fns"
import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCheckCircle,
	HiOutlineCurrencyDollar,
	HiOutlineHomeModern
} from "react-icons/hi2"

import DataItem from "../../ui/DataItem"
import { Flag } from "../../ui/Flag"

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers"

type Props = {
	booking: Record<string, never>
}

// A purely presentational component
function BookingDataBox({ booking }: Props) {
	const {
		created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		cabinPrice,
		extrasPrice,
		totalPrice,
		hasBreakfast,
		observations,
		isPaid,
		guests: { fullName: guestName, email, country, countryFlag, nationalID },
		cabins: { name: cabinName }
	} = booking

	return (
		<section className="bg-grey-0 border border-grey-100 rounded-md overflow-hidden">
			<header className="flex justify-between text-grey-100 bg-brand-500 py-5 px-14 [&>svg]:h-12 [&>svg]:w-12">
				<div className="flex items-center gap-5 font-bold text-lg">
					<HiOutlineHomeModern />
					<p>
						{numNights} nights in Cabin{" "}
						<span className="font-sono text-xl ml-1">{cabinName}</span>
					</p>
				</div>

				<p>
					{format(new Date(startDate), "EEE, MMM dd yyyy")} (
					{isToday(new Date(startDate))
						? "Today"
						: formatDistanceFromNow(startDate)}
					) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
				</p>
			</header>

			<section className="p-5 bg-grey-0  rounded-md overflow-hidden">
				<div className="flex items-center gap-4 mb-6 text-grey-500 [&>p:first-of-type]:font-semibold [&>p:first-of-type]:text-grey-700">
					{countryFlag && (
						<Flag
							className="h-9 w-9"
							src={countryFlag}
							alt={`Flag of ${country}`}
						/>
					)}
					<p>
						{guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
					</p>
					<span>&bull;</span>
					<p>{email}</p>
					<span>&bull;</span>
					<p className="upperacse text-sm font-bold">
						National ID {nationalID}
					</p>
				</div>

				{observations && (
					<DataItem
						icon={<HiOutlineChatBubbleBottomCenterText />}
						label="Observations"
					>
						{observations}
					</DataItem>
				)}

				<DataItem
					icon={<HiOutlineCheckCircle />}
					label="Breakfast included?"
				>
					{hasBreakfast ? "Yes" : "No"}
				</DataItem>

				<div
					data-is-paid={isPaid}
					className="flex items-center justify-between py-5 px-11 rounded-sm mt-9 text-yellow-700 bg-yellow-100 data-[is-paid=true]:bg-green-100 data-[is-paid=true]:text-green-700 "
				>
					<DataItem
						icon={<HiOutlineCurrencyDollar />}
						label={`Total price`}
					>
						{formatCurrency(totalPrice)}

						{hasBreakfast &&
							` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
								extrasPrice
							)} breakfast)`}
					</DataItem>

					<p className="font-bold">
						{isPaid ? "Paid" : "Will pay at property"}
					</p>
				</div>
			</section>

			<footer className="py-6 px-12 text-xs text-grey-500 text-right font-bold">
				<p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
			</footer>
		</section>
	)
}

export default BookingDataBox
