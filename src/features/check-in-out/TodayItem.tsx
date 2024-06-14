import { Link } from "react-router-dom"
import Button from "../../ui/Button"
import { Flag } from "../../ui/Flag"
import Tag from "../../ui/Tag"
import CheckoutButton from "./CheckoutButton"

// const StyledTodayItem = styled.li`
// 	display: grid;
// 	grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
// 	gap: 1.2rem;
// 	align-items: center;

// 	font-size: 1.4rem;
// 	padding: 0.8rem 0;
// 	border-bottom: 1px solid var(--color-grey-100);

// 	&:first-child {
// 		border-top: 1px solid var(--color-grey-100);
// 	}
// `

// const Guest = styled.div`
// 	font-weight: 500;
// `

type Props = {
	id: string | number
	status: string
	guests: Record<string, string>
	numNights: number
}
// type Props = {
// 	activity: any[]
// }

export default function TodayItem({ id, status, guests, numNights }: Props) {
	// const { id, status, guests, numNights } = activity
	return (
		<li className="grid [grid-template-columns:6rem_2.2rem_4.123rem_4rem_2rem] gap-4 items-center font-sm py-2 border-b border-grey-100 dark:border-dark-grey-100 first:border-t first:border-t-grey-100 dark:first:border-dark-grey-100">
			{status === "unconfirmed" && (
				<Tag
					type="green"
					className="w-18 max-w-18 overflow-hidden text-ellipsis"
				>
					Arriving
				</Tag>
			)}
			{status === "checked-in" && (
				<Tag
					type="blue"
					className="w-18 max-w-18 overflow-hidden text-ellipsis"
				>
					Departing
				</Tag>
			)}
			<Flag src={guests?.countryFlag} alt={`Flag of ${guests?.country}`} />
			<div className="w-20 overflow-hidden text-ellipsis  text-sm font-semibold">
				{guests?.fullName}
			</div>
			<p>{numNights} nights</p>

			{status === "unconfirmed" && (
				<Button
					size="small"
					color="primary"
					className="text-sm bg-green-700 dark:bg-dark-green-700 hover:bg-grey-600 dark:hover:bg-grey-600"
				>
					<Link to={`/checkin/${id}`}>Check in</Link>
				</Button>
			)}

			{status === "checked-in" && <CheckoutButton bookingId={id} />}
		</li>
	)
}
