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

export async function createEditCabin(newCabin: DBFields, id?: any) {
	const hasImgPath = newCabin.image?.startsWith?.(supabaseUrl)

	const imgName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")

	const imgPath = hasImgPath
		? newCabin.image
		: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imgName}`

	// 1. Create cabin
	let query: any = supabase.from("cabins")

	// A) CREATE
	if (!id) query = query.insert([{ ...newCabin, image: imgPath }])

	// B) EDIT
	if (id) query = query.update({ ...newCabin, image: imgPath }).eq("id", id)

	// const { data, error } = await query.select().single()
	const { data, error } = await query.select().maybeSingle()

	if (error) {
		console.log(error)
		throw new Error(`This cabin can't be created: ${error.message}`)
	}

	// 2. Upload image
	const { error: storageError } = await supabase.storage
		.from("cabin-images")
		.upload(imgName, newCabin.image)

	if (storageError)
		//@ts-ignore
		await supabase.from("cabins").delete().eq("id", data.id).select()

	return data
}

export async function deleteCabins(id: number | string) {
	const { error } = await supabase.from("cabins").delete().eq("id", id)

	if (error) throw new Error(`This cabin can't be deleted: ${error.message}`)
}
