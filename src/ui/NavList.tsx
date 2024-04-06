type Props = {
	children: React.ReactNode
}

export default function NavList({ children }: Props) {
	return <ul className="flex flex-col gap-[0.8rem]">{children}</ul>
}
