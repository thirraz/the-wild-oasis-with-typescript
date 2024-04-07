import { CreateCabinFields } from "../features/cabins/CreateCabinForm"
import supabase from "./supabase"

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*")

	if (error) throw new Error(`Cabins could not be loaded: ${error}`)

	return data
}

export async function createCabins(newCabin: CreateCabinFields) {
	const { data, error } = await supabase
		.from("cabins")
		.insert([newCabin])
		.select()

	if (error) throw new Error(`This cabin can't be creat: ${error.message}`)

	return data
}

export async function deleteCabins(id: number | string) {
	const { error } = await supabase.from("cabins").delete().eq("id", id)

	if (error) throw new Error(`This cabin can't be deleted: ${error.message}`)
}
