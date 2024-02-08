import "@/styles/globals.css";
import "@/styles/globals1.scss";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Caveat } from "next/font/google";
// import { Inter } from "next/font/google";
// import { Outfit } from "next/font/google";

import DefaultLayout from "@/components/Layout";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "../../lib/utils";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
// const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
	title: "John Dennehy",
	description: "Personal website of John Dennehy",
};

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
					// outfit.variable,
					// inter.variable,
					caveat.variable,
					"antialiased",
				)}
			>
				<body className="transition-colors duration-500 font-sans">
					<DefaultLayout>{children}</DefaultLayout>
				</body>
			</html>
		</ClerkProvider>
	);
}
