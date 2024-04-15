import { useState } from "react"
import { Button } from "../../ui/Button"
import Form from "../../ui/Form"

function LoginForm() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	function handleSubmit() {}

	return (
		<Form
			onSubmit={handleSubmit}
			className="space-y-6 bg-grey-0 px-16 py-16 rounded-md max-w-[40rem] w-[40rem] flex flex-col"
		>
			<div className="flex flex-col gap-2 text-lg w-full">
				<label htmlFor="email">E-email</label>
				<input
					type="email"
					id="email"
					// This makes this form better for password managers
					autoComplete="username"
					value={email}
					onChange={e => setEmail(e.target.value)}
					className="border border-grey-300 bg-grey-0 rounded-sm py-2 px-4 shadow-sm outline-brand-500"
				/>
			</div>
			<div className="flex flex-col gap-2 text-lg">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					className="border border-grey-300 bg-grey-0 rounded-sm py-2 px-4 shadow-sm outline-brand-500"
				/>
			</div>
			<div>
				<Button size="large" className="w-full py-4">
					Login
				</Button>
			</div>
		</Form>
	)
}

export default LoginForm
