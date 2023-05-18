import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

type DefaultLayoutProps = {
	children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<div className="grid grid-rows-header-and-main h-screen ">
			<Header />
			<div className="grid grid-rows-main-and-footer ">
				<Main>{children}</Main>
				<Footer />
			</div>
		</div>
	);
}
