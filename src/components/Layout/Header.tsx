"use client";

import Link from "next/link";
import NavLinks from "../Navbar/NavLinks";

export const defaultNavLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

function JohnDennehy() {
	return (
		<Link href="/">
			<h1 className="align-middle text-3xl font-sans font-semibold tracking-tight py-2">
				John Dennehy
			</h1>
		</Link>
	);
}

type HeaderProps = {
	navLinks: { href: string; label: string }[];
};

export default function Header({ navLinks = defaultNavLinks }: HeaderProps) {
	return (
		<header className="sticky left-0	right-0 top-0 z-50 bg-white shadow-sm	transition-colors print:hidden w-screen">
			<div className="container mx-auto ">
				<div className="flex flex-col md:flex-row  items-center md:justify-between">
					<div className="left">
						<JohnDennehy />
					</div>

					<div className="right">
						<NavLinks navLinks={navLinks} />
					</div>
				</div>
			</div>
		</header>
	);
}
