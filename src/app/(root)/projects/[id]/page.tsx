export async function generateStaticParams() {
	// TODO: fetch ids from database
	const ids = [ "1", "2", "3" ];

	return ids.map((post) => {
		return { id: post };
	});
}

type ProjectPageProps = {
	params: { id: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {

	return (
		<div>
			<h1>Project </h1>
			<p>Project id: {params.id}</p>
		</div>
	);
}
