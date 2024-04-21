import Button from "../../ui/Button"
import { useCheckout } from "./useCheckout"

type Props = {
	bookingId: string | number
}

function CheckoutButton({ bookingId }: Props) {
	const { checkout, isCheckingOut } = useCheckout()

	return (
		<Button
			color="primary"
			size="small"
			onClick={() => checkout(bookingId)}
			disabled={isCheckingOut}
			className="text-sm bg-blue-700 dark:bg-dark-blue-100 hover:bg-grey-600 dark:hover:bg-grey-600"
		>
			Check out
		</Button>
	)
}

export default CheckoutButton
