"use client";
import { usePathname } from "next/navigation";
import { NavLink } from "./NavLink";

type NavLinksProps = {
  navLinks: { href: string; label: string }[];
};

export default function NavLinks({ navLinks }: NavLinksProps) {
  const pathname = usePathname();
  const currentPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");

  return (
    <ul className="flex flex-row justify-items-center gap-3">
      {navLinks.map(({ href, label }) => {
        const isActive = currentPath === href;
        return (
          <NavLink key={href} href={href} active={isActive}>
            {label}
          </NavLink>
        );
      })}
    </ul>
  );
}
