import SignupForm from "../features/authentication/SignupForm"

export default function Users() {
	return (
		<div className="flex flex-col items-center gap-12">
			<h1 className="text-3xl">Create a new user</h1>
			<SignupForm />
		</div>
	)
}
