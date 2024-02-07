
type DashboardPageProps = {
	params: { id: string };
};

export default function DashboardPage({ params }: DashboardPageProps) {
	return (
		<div>
			<h1>Dashboard</h1>
			<p>Dashboard</p>
			{params.id}
			{/* create form to add roles to database */}

			{/* form to add skills to database */}
		</div>
	);
} 