import { useEffect, useRef } from "react"

export function useOutsideClick(handler: () => any, listenCapturing = true) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClick(e: any) {
			if (ref.current && !ref.current.contains(e.target)) {
				console.log("Clicked outside")
				handler()
			}
		}

		document.addEventListener("click", handleClick, listenCapturing)

		return () =>
			document.removeEventListener("click", handleClick, listenCapturing)
	}, [handler, listenCapturing])

	return ref
}
