export async function generateStaticParams() {
	// TODO: fetch ids from database
	const ids = [ "1", "2", "3" ];

	return ids.map((post) => {
		return { id: post };
	});
}

type BlogPostPageProps = {
	params: { id: string };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<div>
			<h1>Blog Post</h1>
			<p>Blog post id: {params.id}</p>
		</div>
	);
}
