import Header from "./Header";
import Footer from "./Footer";


type DefaultLayoutProps = {
	children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<div className="grid grid-rows-pancake h-screen ">
			<Header />
			<main className=" bg-brandBgLight dark:bg-brandBgDark text-brandText dark:text-brandTextLight transition-colors duration-500">
				<div className="container mx-auto">
					<div className="h-full p-8 ">{children}</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
