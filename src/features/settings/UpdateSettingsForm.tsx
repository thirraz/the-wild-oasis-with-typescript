import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Spinner from "../../ui/Spinner"
import { useSettings } from "./useSettings"

function UpdateSettingsForm() {
	const {
		isPending,
		settings: {
			minBookingLength,
			maxBookingLength,
			maxGuestsPerBooking,
			breakfastPrice
		} = {}
	} = useSettings()

	if (isPending) return <Spinner />

	return (
		<Form>
			<FormRow label="Minimum nights/booking">
				<input
					type="number"
					id="min-nights"
					defaultValue={minBookingLength}
					className="input"
				/>
			</FormRow>

			<FormRow label="Maximum nights/booking">
				<input
					type="number"
					id="max-nights"
					defaultValue={maxBookingLength}
					className="input"
				/>
			</FormRow>

			<FormRow label="Maximum guests/booking">
				<input
					type="number"
					id="max-guests"
					defaultValue={maxGuestsPerBooking}
					className="input"
				/>
			</FormRow>

			<FormRow label="Breakfast price">
				<input
					type="number"
					id="breakfast-price"
					defaultValue={breakfastPrice}
					className="input"
				/>
			</FormRow>
		</Form>
	)
}

export default UpdateSettingsForm
