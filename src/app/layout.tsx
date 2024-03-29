import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@/styles/globals1.scss";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
	title: {
		template: "%s | John Dennehy",
		default: "John Dennehy", // a default is required when creating a template
	},
	description: "Personal website of John Dennehy, Web Developer",
	referrer: "origin-when-cross-origin",
	keywords: [
		"Next.js",
		"React",
		"JavaScript",
		"TypeScript",
		"Tailwind CSS",
		"Web Development",
		"Frontend",
	],
	creator: "John Dennehy",
	metadataBase: new URL("https://www.johndennehy.dev"),
	openGraph: {
		title: "John Dennehy",
		description: "Personal website of John Dennehy, Web Developer",
		url: "https://www.johndennehy.dev",
		siteName: "JohnDennehy.dev",

		images: [
			{
				url: "/profile-square.jpg", // Must be an absolute URL
				width: 400,
				height: 400,
			},
		],
		locale: "en_GB",
		type: "website",
	},
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
