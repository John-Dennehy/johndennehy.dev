import Footer from "./Footer";

type MainProps = {
	children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
	return (
		<main className="container mx-auto h-full " >
			<div className="h-full p-8">{children}</div>
		</main>
	);
}
