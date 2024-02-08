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
				className={`font-light transition-all hover:text-purple-500
				${active ? "font-medium text-purple-600" : ""}
				
				`}
			>
				{children}
				{active && <span className="sr-only">(current)</span>}
			</Link>
		</li>
	);
}


