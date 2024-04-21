import Row from "../../ui/Row"
import Spinner from "../../ui/Spinner"
import TodayItem from "./TodayItem"
import { useTodayActivity } from "./useTodayActivity"

// const StyledToday = styled.div`
// 	/* Box */
// 	background-color: var(--color-grey-0);
// 	border: 1px solid var(--color-grey-100);
// 	border-radius: var(--border-radius-md);

// 	padding: 3.2rem;
// 	display: flex;
// 	flex-direction: column;
// 	gap: 2.4rem;
// 	grid-column: 1 / span 2;
// 	padding-top: 2.4rem;
// `

// const TodayList = styled.ul`
// 	overflow: scroll;
// 	overflow-x: hidden;

// 	/* Removing scrollbars for webkit, firefox, and ms, respectively */
// 	&::-webkit-scrollbar {
// 		width: 0 !important;
// 	}
// 	scrollbar-width: none;
// 	-ms-overflow-style: none;
// `

// const NoActivity = styled.p`
// 	text-align: center;
// 	font-size: 1.8rem;
// 	font-weight: 500;
// 	margin-top: 0.8rem;
// `

export default function TodayActivity() {
	const { activities, isPending } = useTodayActivity()

	return (
		<div className="bg-grey-0 dark:bg-dark-grey-0 border border-grey-100 dark:border-dark-grey-100 rounded-md py-12 px-6 flex flex-col gap-9 col-start-1 col-span-2">
			<Row direction="horizontal">
				<h2 className="text-lg">Today Activities</h2>
			</Row>

			{!isPending ? (
				activities!.length! > 0 ? (
					<ul className="overflow-y-scroll overflow-x-hidden hide-scrollbar">
						{activities!.map((activity: any) => (
							<TodayItem {...activity} key={activity.id} />
						))}
					</ul>
				) : (
					<p className="text-center text-md font-semibold mt-3">
						No actitivies today...
					</p>
				)
			) : (
				<Spinner />
			)}
		</div>
	)
}
