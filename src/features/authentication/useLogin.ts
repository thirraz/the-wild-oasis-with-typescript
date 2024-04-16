import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import { login as loginAPI, SignUp } from "../../services/apiAuth"

export function useLogin() {
	const navigate = useNavigate()

	const { mutate: login, isPending } = useMutation({
		mutationFn: ({ email, password }: SignUp) =>
			loginAPI({ email, password }),
		onSuccess: () => {
			navigate("/dashboard", { replace: true })
		},
		onError: err => {
			console.log("LOGIN ERROR", err.message)
			toast.error("Provided email or password are incorrect")
		}
	})

	return { login, isPending }
}
