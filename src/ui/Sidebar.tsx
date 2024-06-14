import Logo from "./Logo"
import MainNav from "./MainNav"
import NavList from "./NavList"

import { isFuture, isPast, isToday } from "date-fns"
import supabase from "../services/supabase"
import { subtractDates } from "../utils/helpers"
import { cabins } from "../data/data-cabins"
import { bookings } from "../data/data-bookings"
import { guests } from "../data/data-guests"

async function deleteGuests() {
	const { error } = await supabase.from("guests").delete().gt("id", 0)
	if (error) console.log(error.message)
}

async function deleteCabins() {
	const { error } = await supabase.from("cabins").delete().gt("id", 0)
	if (error) console.log(error.message)
}

async function deleteBookings() {
	const { error } = await supabase.from("bookings").delete().gt("id", 0)
	if (error) console.log(error.message)
}

async function createGuests() {
	const { error } = await supabase.from("guests").insert(guests)
	if (error) console.log(error.message)
}

async function createEditCabin() {
	const { error } = await supabase.from("cabins").insert(cabins)
	if (error) console.log(error.message)
}

async function createBookings() {
	// Bookings need a guestId and a cabinId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and cabinIds, and then replace the original IDs in the booking data with the actual ones from the DB
	const { data: guestsIds } = await supabase
		.from("guests")
		.select("id")
		.order("id")
	const allGuestIds = guestsIds?.map(cabin => cabin.id)
	const { data: cabinsIds } = await supabase
		.from("cabins")
		.select("id")
		.order("id")
	const allCabinIds = cabinsIds?.map(cabin => cabin.id)

	const finalBookings = bookings.map(booking => {
		// Here relying on the order of cabins, as they don't have and ID yet
		const cabin = cabins.at(booking.cabinId - 1)
		const numNights = subtractDates(booking.endDate, booking.startDate)
		const cabinPrice = numNights * (cabin!.regularPrice - cabin!.discount)
		const extrasPrice = booking.hasBreakfast
			? numNights * 15 * booking.numGuests
			: 0 // hardcoded breakfast price
		const totalPrice = cabinPrice + extrasPrice

		let status
		if (
			isPast(new Date(booking.endDate)) &&
			!isToday(new Date(booking.endDate))
		)
			status = "checked-out"
		if (
			isFuture(new Date(booking.startDate)) ||
			isToday(new Date(booking.startDate))
		)
			status = "unconfirmed"
		if (
			(isFuture(new Date(booking.endDate)) ||
				isToday(new Date(booking.endDate))) &&
			isPast(new Date(booking.startDate)) &&
			!isToday(new Date(booking.startDate))
		)
			status = "checked-in"

		return {
			...booking,
			numNights,
			cabinPrice,
			extrasPrice,
			totalPrice,
			guestId: allGuestIds?.at(booking.guestId - 1),
			cabinId: allCabinIds?.at(booking.cabinId - 1),
			status
		}
	})

	console.log(finalBookings)

	const { error } = await supabase.from("bookings").insert(finalBookings)
	if (error) console.log(error.message)
}

export default function Sidebar() {
	async function uploadAll() {
		// Bookings need to be deleted FIRST
		await deleteBookings()
		await deleteGuests()
		await deleteCabins()

		// Bookings need to be created LAST
		await createGuests()
		await createEditCabin()
		await createBookings()
	}

	async function uploadBookings() {
		await deleteBookings()
		await createBookings()
	}

	setTimeout(() => {
		uploadBookings()
		uploadAll()
	}, 1000 * 60 * 60 * 24)

	return (
		<aside className="bg-grey-0 dark:bg-dark-grey-0 py-[2rem] px-[1rem] border-r-[1px] border-grey-100 dark:border-dark-grey-100 row-span-full space-y-[2rem]">
			<Logo />
			<NavList>
				<MainNav />
			</NavList>
			{/* <Uploader /> */}
		</aside>
	)
}
