import UpdateSettingsForm from "../features/settings/UpdateSettingsForm"
import Row from "../ui/Row"

function Settings() {
	return (
		<Row>
			<h1 className="text-4xl">Update hotel settings</h1>
			<UpdateSettingsForm />
		</Row>
	)
}

export default Settings
