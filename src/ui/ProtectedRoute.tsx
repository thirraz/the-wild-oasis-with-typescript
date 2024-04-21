import { useNavigate } from "react-router-dom"
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner"
import { useEffect } from "react"

type Props = {
	children: React.ReactNode | React.ReactNode[]
}

export default function ProtectedRoute({ children }: Props) {
	const navigate = useNavigate()

	// 1. Load the authenticated user
	const { isPending, isAuthenticated } = useUser()

	// 2. If there is NO authenticated user, redirect to /login route
	useEffect(() => {
		if (!isAuthenticated && !isPending) navigate("/login")
	}, [isAuthenticated, isPending, navigate])

	// 3. While loading, show a spinner
	if (isPending)
		return (
			<div className="h-[100dvh] w-[100dvw] grid place-items-center bg-grey-50">
				<Spinner />
			</div>
		)

	// 4. If there is a authenticated user, render the app

	if (isAuthenticated) return children
}
