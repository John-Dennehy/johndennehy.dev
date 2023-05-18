import { UserButton } from "@clerk/nextjs";
import { DarkModeToggle } from "../NavBar/DarkModeToggle";
import NavLinks from "../NavBar/NavLinks";
import Branding from "../NavBar/Branding";

const TITLE = "John Dennehy";

export default function Header() {
	return (
		<header className="sticky top-0 left-0 right-0 bg-light-background text-light-primary	dark:bg-dark-background dark:text-dark-primary shadow-md">
			<div className="container mx-auto grid grid-cols-3 p-4">
				<div className="left flex flex-row items-center  ">
					<Branding name="John Dennehy" />
				</div>
				<div className="middle flex items-center justify-self-center">
					<NavLinks
						navLinks={[
							{ href: "/", label: "Home" },
							{ href: "/blog", label: "Blog" },
							{ href: "/projects", label: "Projects" },
							{ href: "/contact", label: "Contact" },
						]}
					/>
				</div>
				<div className="right flex flex-row-reverse items-center gap-4">
					<UserButton />
					<DarkModeToggle />
				</div>
			</div>
		</header>
	);
}
