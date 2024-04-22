import LoginForm from "../features/authentication/LoginForm"
import Logo from "../ui/Logo"

function Login() {
	return (
		<main className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-grey-100 dark:bg-dark-grey-100 gap-5">
			<div className="text-sm px-6 py-5 max-w-64 border border-grey-600 dark:border-dark-grey-border-grey-600 absolute top-10 right-10 text-grey-600 dark:text-dark-grey-600 rounded-md shadow-sm bg-grey-0">
				<h2 className="font-bold uppercase mb-4">
					Use this e-mail and password to use this app. Thanks!
				</h2>
				<p>
					<span className="font-semibold">e-mail:</span> jonas@example.com
				</p>
				<p>
					<span className="font-semibold">password:</span> passpass
				</p>
			</div>
			<Logo />
			<h3 className="text-2xl uppercase font-bold mt-3">
				Log in to your account
			</h3>
			<LoginForm />
		</main>
	)
}

export default Login
