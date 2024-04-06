type Props = {
	children: React.ReactNode
}
export function ErrorFallback({ children }: Props) {
	return (
		<main className="h-[100dvh] bg-grey-50 flex items-center justify-center p-[4.8rem]">
			{children}
		</main>
	)
}
