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
				className={`font-light transition-all underline-offset-4 hover:underline hover:decoration-2
				${active ? "underline decoration-2 decoration-blue-600" : ""}
				
				`}
			>
				{children}
				{active && <span className="sr-only">(current)</span>}
			</Link>
		</li>
	);
}


