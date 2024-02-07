import "@/styles/globals.css";
import "@/styles/globals1.scss";

import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import { Outfit } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


import { ClerkProvider } from "@clerk/nextjs";
import DefaultLayout from "@/components/Layout";
import { cn } from "../lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

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
						GeistSans.className,
						GeistMono.className,
						outfit.className,
						// `${inter.variable} ${caveat.variable}`,
						"antialiased",
						"h-screen-dvh w-screen-dvw scrollbar-gutter overflow-x-hidden",
					)}
				>
					<body className="transition-colors duration-500 ">
						<DefaultLayout>{children}</DefaultLayout>
					</body>
				</html>
			</ClerkProvider>
		);
}
