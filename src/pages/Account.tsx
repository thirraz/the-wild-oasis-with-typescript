import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm"
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm"
import Row from "../ui/Row"

function Account() {
	return (
		<div>
			<h1 className="text-4xl mb-7">Update your account</h1>

			<div className="space-y-8 ">
				<Row>
					<h3 className="text-xl">Update user data</h3>
					<UpdateUserDataForm />
				</Row>

				<Row>
					<h3 className="text-xl">Update password</h3>
					<UpdatePasswordForm />
				</Row>
			</div>
		</div>
	)
}

export default Account
