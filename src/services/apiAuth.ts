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
