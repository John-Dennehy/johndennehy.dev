"use client";

import Link from "next/link";

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
				className={`font-bold transition-all ${active ? "underline" : ""}`}
			>
				{children}
				{active && <span className="sr-only">(current)</span>}
			</Link>
		</li>
	);
}


