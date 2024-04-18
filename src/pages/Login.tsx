import LoginForm from "../features/authentication/LoginForm"
import Logo from "../ui/Logo"

function Login() {
	return (
		<main className="min-h-[100dvh] flex flex-col items-center justify-center bg-grey-100 dark:bg-dark-grey-100 gap-5">
			<Logo />
			<h3 className="text-2xl uppercase font-bold mt-3">
				Log in to your account
			</h3>
			<LoginForm />
		</main>
	)
}

export default Login
