import supabase from "./supabase"

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*")

	if (error) throw new Error(`Cabins could not be loaded: ${error}`)

	return data
}

export async function deleteCabins(id: number | string) {
	const { error } = await supabase.from("cabins").delete().eq("id", id)

	if (error) throw new Error(`This cabin can't be deleted: ${error.message}`)
}
