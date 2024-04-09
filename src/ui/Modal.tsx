// const StyledModal = styled.div`
// 	position: fixed;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	background-color: var(--color-grey-0);
// 	border-radius: var(--border-radius-lg);
// 	box-shadow: var(--shadow-lg);
// 	padding: 3.2rem 4rem;
// 	transition: all 0.5s;
// `

// const Overlay = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100vh;
// 	background-color: var(--backdrop-color);
// 	backdrop-filter: blur(4px);
// 	z-index: 1000;
// 	transition: all 0.5s;
// `

// const Button = styled.button`
// 	background: none;
// 	border: none;
// 	padding: 0.4rem;
// 	border-radius: var(--border-radius-sm);
// 	transform: translateX(0.8rem);
// 	transition: all 0.2s;
// 	position: absolute;
// 	top: 1.2rem;
// 	right: 1.9rem;

// 	&:hover {
// 		background-color: var(--color-grey-100);
// 	}

// 	& svg {
// 		width: 2.4rem;
// 		height: 2.4rem;
// 		/* Sometimes we need both */
// 		/* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
// 		color: var(--color-grey-500);
// 	}
// `

type Props = {
	children: React.ReactNode
}

export default function Modal({ children }: Props) {
	return (
		<div className="fixed top-0 left-0 w-full h-[100dvh] bg-backdrop-color backdrop-blur-sm z-[1000] transition-all">
			<div className="max-w-[40rem] w-[40rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-grey-0 rounded-lg shadow-lg py-[3.2rem] px-16 transition-all max-h-[90dvh] overflow-y-scroll">
				<button className="bg-none p-[0.4rem] border "></button>

				{children}
			</div>
		</div>
	)
}
