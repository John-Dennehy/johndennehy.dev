export const metadata = {
	title: "John Dennehy's Blog",
	description: "The personal blog of John Dennehy",
	url: "https://www.johndennehy.dev/blog",
};

type BlogPageProps = {
};

export default async function BlogPage({ }: BlogPageProps) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<div>
			<h1>My Blog</h1>
		</div>
	);
}
