"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinksProps = {
	navLinks: { href: string; label: string }[];
};

export default function NavLinks({ navLinks }: NavLinksProps) {
	const pathname = usePathname();
	const currentPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");

	return (
		<nav>
			<ul className="flex flex-row gap-3">
				{navLinks.map(({ href, label }) => {
					const isActive = currentPath === href;
					return (
						<NavLink key={href} href={href} active={isActive}>
							{label}
						</NavLink>
					);
				})}
			</ul>
		</nav>
	);
}

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
	active?: boolean;
};

export function NavLink({ href, children, active }: NavLinkProps) {
	return (
		<li>
			<Link
				href={href}
				className={`font-bold transition-all ${active ? " text-brandPrimary dark:text-brandAccent" : "text-light-text dark:text-dark-text"}`}
			>
				{children}
				{active && <span className="sr-only">(current)</span>}
			</Link>
		</li>
	);
}


