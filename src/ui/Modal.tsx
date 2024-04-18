import { cloneElement, createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"
import { HiXMark } from "react-icons/hi2"
import { useOutsideClick } from "../hooks/useOutsideClick"

type WindowProps = {
	name?: string
	children: React.ReactElement
	deleteModal?: boolean
}

type ContextProperties = {
	openName: string
	open: any
	close: any
}

type ModalProps = { children: React.ReactElement | React.ReactElement[] }

type OpenProps = {
	children: React.ReactElement
	openWindowName: string
}

const ModalContext = createContext<ContextProperties>({
	openName: "",
	open,
	close
})

export function Modal({ children }: ModalProps) {
	const [openName, setOpenName] = useState<string>("")

	const open = setOpenName
	const close = () => setOpenName("")

	return (
		<ModalContext.Provider value={{ openName, open, close }}>
			{children}
		</ModalContext.Provider>
	)
}

// Modal.Open
function Open({ children, openWindowName }: OpenProps) {
	const { open } = useContext(ModalContext)

	return cloneElement(children, { onClick: () => open(openWindowName) })
}

// Modal.Window
function Window({ children, name, deleteModal }: WindowProps) {
	const { openName, close } = useContext(ModalContext)
	const ref = useOutsideClick(close)

	if (name !== openName) return null

	return createPortal(
		<div className="fixed top-0 left-0 w-full h-[100dvh] bg-backdrop-color backdrop-blur-sm z-[1000] transition-all ">
			<div
				ref={ref}
				data-delete-modal={deleteModal}
				className="max-w-[40rem] w-[40rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-grey-0 dark:bg-dark-grey-0 rounded-lg shadow-lg py-[3.2rem] px-16 transition-all max-h-[90dvh] overflow-y-scroll data-[delete-modal=true]:overflow-y-hidden"
			>
				<button
					onClick={close}
					className="bg-none border-none p-[0.1rem] border rounded-sm translate-x-[0.8rem] transition-all absolute top-[1.2rem] right-[1.9rem] hover:bg-grey-200 dark:hover:bg-dark-grey-200 active:bg-grey-300 dark:active:bg-grey-300 [&>svg]:w-[2.4rem] [&>svg]:h-[2.4rem] [&>svg]:text-grey-500 [&>svg]:dark:text-grey-500"
				>
					<HiXMark />
				</button>

				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</div>
		</div>,
		document.body
	)
}

Modal.Open = Open
Modal.Window = Window
