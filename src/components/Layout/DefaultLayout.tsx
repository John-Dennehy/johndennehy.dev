import Header from "./Header";
import Footer from "./Footer";


type DefaultLayoutProps = {
	children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
    <div className="grid h-screen grid-rows-pancake ">
      <Header />
      <main className="main bg-brandBgLight text-brandText transition-colors duration-500">
        <div className="container mx-auto print:mx-0">
          <div className="h-full p-8 print:p-0">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
