import { UserButton } from "@clerk/nextjs";
import NavLinks from "../NavLinks";
import Branding from "../Branding";

import Link from "next/link";
import { Button } from "../ui/button";

const TITLE = "John Dennehy";
const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/projects", label: "Projects" },
	{ href: "/cv", label: "CV" },
];

export default function Header() {
	return (
		<header
			className="
				sticky top-0 left-0 right-0 
			text-light-primary	
			dark:text-brandAccent
				transition-colors
				backdrop-blur-lg
				shadow-sm
				z-50
			"
		>
			<div className="container mx-auto grid grid-cols-3 p-4">
				<div className="left flex flex-row items-center  ">
					<Branding name={TITLE} />
				</div>
				<div className="middle flex items-center justify-self-center">
					<NavLinks
						navLinks={navLinks}
					/>
				</div>
				<div className="right flex flex-row-reverse items-center gap-4">
					<UserButton />
					<Button>
						<Link href="/contact">Contact Me</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
