import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

type DefaultLayoutProps = {
	children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<div className="bg-brandBgLight dark:bg-brandBgDark font-sans transition-colors duration-500 ">
			<div className="grid grid-rows-pancake h-screen ">
				<Header />
				<Main>{children}</Main>
				<Footer />
			</div>
		</div>
	);
}
