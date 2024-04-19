import DashboardFilter from "../features/dashboard/DashboardFilter"
import DashboardLayout from "../features/dashboard/DashboardLayout"
import Row from "../ui/Row"

function Dashboard() {
	return (
		<>
			<Row direction="horizontal" className="mb-10">
				<h1 className="text-4xl">Dashboard</h1>
				<DashboardFilter />
			</Row>

			<DashboardLayout />
		</>
	)
}

export default Dashboard
