// const Box = styled.div`
// 	/* Box */
// 	background-color: var(--color-grey-0);
// 	border: 1px solid var(--color-grey-100);
// 	border-radius: var(--border-radius-md);

// 	padding: 4.8rem;
// 	flex: 0 1 96rem;
// 	text-align: center;

// 	& h1 {
// 		margin-bottom: 1.6rem;
// 	}

// 	& p {
// 		font-family: "Sono";
// 		margin-bottom: 3.2rem;
// 		color: var(--color-grey-500);
// 	}
// `

type Props = {
	children: React.ReactNode
}

export function Box({ children }: Props) {
	return <div>{children}</div>
	/* 
    ADD <h1> AND <p> LATER 
  */
}
