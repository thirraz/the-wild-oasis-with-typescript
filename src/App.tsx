import { Button } from "./ui/Button"

export default function App() {
	return (
		<div className="space-x-4 bg-[#0f0f0f] min-h-screen">
			<Button size="medium" color="danger">
				Test
			</Button>
			<Button size="large">Test</Button>
			<Button size="small">Test</Button>
			<Button size="medium">Test</Button>
			<Button size="large">Test</Button>
		</div>
	)
}
