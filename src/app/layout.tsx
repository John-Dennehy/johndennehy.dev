import "@/styles/globals.css";
import "@/styles/globals1.scss";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Caveat } from "next/font/google";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "../lib/utils";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata = {
	title: "John Dennehy",
	description: "Personal website of John Dennehy",
};

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/cv", label: "CV" },
];

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				className={cn(
					GeistSans.variable,
					GeistMono.variable,
					caveat.variable,
					"antialiased",
				)}
			>
				<body className="transition-colors duration-500 font-sans w-screen">
					<div className="grid h-screen grid-rows-pancake ">
						<Header navLinks={navLinks} />
						<main className="main bg-brandBgLight text-brandText transition-colors duration-500 h-full">
							<div className="container mx-auto print:mx-0 h-full">
								<div className="h-full p-0 print:p-0">{children}</div>
							</div>
						</main>
						<Footer />
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
