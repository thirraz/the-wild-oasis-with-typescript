import supabase, { supabaseUrl } from "./supabase"

type DBFields = {
	name: string
	maxCapacity: number
	regularPrice: number
	discount: number
	description: string
	image: any
}

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*")

	if (error) throw new Error(`Cabins could not be loaded: ${error}`)

	return data
}

export async function createCabins(newCabin: DBFields) {
	// https://gbcksxbxabufcuobfztg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
	const imgName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")

	const imgPath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imgName}`

	// 1. Create cabin
	const { data, error } = await supabase
		.from("cabins")
		.insert([{ ...newCabin, image: imgPath }])
		.select()

	if (error) throw new Error(`This cabin can't be created: ${error.message}`)

	// 2. Upload image
	const { error: storageError } = await supabase.storage
		.from("cabin-images")
		.upload(imgName, newCabin.image)

	if (storageError)
		//@ts-ignore
		await supabase.from("cabins").delete().eq("id", data.id)

	return data
}

export async function deleteCabins(id: number | string) {
	const { error } = await supabase.from("cabins").delete().eq("id", id)

	if (error) throw new Error(`This cabin can't be deleted: ${error.message}`)
}
