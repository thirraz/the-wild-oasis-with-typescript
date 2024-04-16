import supabase from "./supabase"

export type SignUp = {
	email: string
	password: string
}

export async function login({ email, password }: SignUp) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	})

	if (error) throw new Error(error.message)

	return data
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession()

	if (!session.session) return null

	const { data, error } = await supabase.auth.getUser()

	if (error) throw new Error(error.message)

	console.log(data)
	return data?.user
}
