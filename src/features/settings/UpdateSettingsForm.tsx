import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Spinner from "../../ui/Spinner"
import { useSettings } from "./useSettings"
import { useUpdateSetting } from "./useUpdateSetting"

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
	const { isUpdating, updateSetting } = useUpdateSetting()

	if (isPending) return <Spinner />

	function handleUpdate(
		e: React.FocusEvent<HTMLInputElement, Element>,
		fieldName: string
	) {
		const { value } = e.target

		if (!value) return

		updateSetting({ [fieldName]: value })
	}

	return (
		<Form>
			<FormRow label="Minimum nights/booking">
				<input
					type="number"
					id="min-nights"
					defaultValue={minBookingLength}
					className="input"
					onBlur={e => handleUpdate(e, "minBookingLength")}
					disabled={isUpdating}
				/>
			</FormRow>

			<FormRow label="Maximum nights/booking">
				<input
					type="number"
					id="max-nights"
					defaultValue={maxBookingLength}
					className="input"
					onBlur={e => handleUpdate(e, "maxBookingLength")}
					disabled={isUpdating}
				/>
			</FormRow>

			<FormRow label="Maximum guests/booking">
				<input
					type="number"
					id="max-guests"
					defaultValue={maxGuestsPerBooking}
					className="input"
					onBlur={e => handleUpdate(e, "maxGuestsPerBooking")}
					disabled={isUpdating}
				/>
			</FormRow>

			<FormRow label="Breakfast price">
				<input
					type="number"
					id="breakfast-price"
					defaultValue={breakfastPrice}
					className="input"
					onBlur={e => handleUpdate(e, "breakfastPrice")}
					disabled={isUpdating}
				/>
			</FormRow>
		</Form>
	)
}

export default UpdateSettingsForm
