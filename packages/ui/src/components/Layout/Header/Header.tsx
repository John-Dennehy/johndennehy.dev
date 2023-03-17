import { ReactNode } from "react";
import { Logo } from "../../Logo";

const DEFAULT_TITLE = "Header Title";

export type NavLinks = ReactNode[];

export type NavItems = {
  title: FunctionStringCallback;
  href: string;
}[];

export type HeaderProps = {
  title: ReactNode;
  navLinks: NavLinks;
  navItems: NavItems;
};

export const Header = ({ title, navLinks }: HeaderProps) => {
  return (
    <header className="text-brandPrimary bg-brandBgLight p-4">
      <div className="container mx-auto flex justify-between">
        <Logo />
        {title ?? DEFAULT_TITLE}
        <Nav navLinks={navLinks ?? []} />
      </div>
    </header>
  );
};

export type NavProps = {
  navLinks: NavLinks;
};

export const Nav = ({ navLinks }: NavProps) => {
  return (
    <nav className="flex">
      <ul className="flex flex-row gap-2 font-bold uppercase">
        {navLinks.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
