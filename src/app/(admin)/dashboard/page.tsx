type DashboardPageProps = {
	params: { id: string };
};

export default function DashboardPage(props: DashboardPageProps) {
	return (
		<div>
			<h1>Dashboard</h1>
			<p>Dashboard</p>
			{props.params.id}
			{/* create form to add roles to database */}

			{/* form to add skills to database */}



		</div>
	);
} 