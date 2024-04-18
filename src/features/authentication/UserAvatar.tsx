import { useUser } from "./useUser"

export default function UserAvatar() {
	const { user } = useUser()
	const { fullName, avatar } = user!.user_metadata

	return (
		<div className="flex gap-4 items-center font-semibold text-sm text-grey-600 dark:text-dark-grey-600 ">
			<img
				src={avatar || "/default-user.jpg"}
				alt={`Profile picture of ${fullName}`}
				className="block w-12 aspect-square-[1] object-cover object-center rounded-[50%] outline-1 outline-grey-100 dark:outline-dark-grey-100"
			/>
			<span>{fullName}</span>
		</div>
	)
}
