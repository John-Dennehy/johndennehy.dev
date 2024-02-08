"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NavLinks from "../Navbar/NavLinks";

const TITLE = "John Dennehy";

export const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/projects", label: "Projects" },
	{ href: "/experience", label: "Experience" },
];

function JohnDennehy() {
	return (
		<Link href="/">
			<h1 className="align-middle text-3xl font-sans font-semibold tracking-tight py-2">
				{TITLE}
			</h1>
		</Link>
	);
}

export default function Header() {
	return (
		<header className="sticky left-0	right-0 top-0 z-50 bg-white shadow-sm	transition-colors print:hidden ">
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
