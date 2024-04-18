import { useState } from "react"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import { useLogin } from "./useLogin"
import SpinnerMini from "../../ui/SpinnerMini"

function LoginForm() {
	const [email, setEmail] = useState("jonas@example.com")
	const [password, setPassword] = useState("passpass")
	const { login, isPending } = useLogin()

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!email || !password) return

		login({ email, password })
	}

	return (
		<Form
			onSubmit={handleSubmit}
			className="space-y-6 bg-grey-0 dark:bg-dark-grey-0 px-16 py-16 rounded-md max-w-[40rem] w-[40rem] flex flex-col"
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
					className="text-sm border border-grey-300 dark:border-dark-grey-300 bg-grey-0  dark:bg-dark-grey-0 rounded-sm py-2 px-4 shadow-sm outline-brand-500"
					disabled={isPending}
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
					className="text-sm border border-grey-300 dark:border-dark-grey-300 bg-grey-0 dark:bg-dark-grey-0 rounded-sm py-2 px-4 shadow-sm outline-brand-500"
					disabled={isPending}
				/>
			</div>
			<div>
				<Button size="large" className="w-full py-4" disabled={isPending}>
					{isPending ? <SpinnerMini /> : "Log in"}
				</Button>
			</div>
		</Form>
	)
}

export default LoginForm
