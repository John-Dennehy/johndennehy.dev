"use client";

import { UserButton } from "@clerk/nextjs";
import NavLinks from "../Navbar/NavLinks";
import Link from "next/link";
import Logo from "@/public/jd-logo.svg";
import Image from "next/image";

import { SlMenu } from "react-icons/sl";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TITLE = "John Dennehy";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="
      sticky left-0	right-0 top-0
      z-50
				shadow-sm
				backdrop-blur-lg
				transition-colors
        print:hidden
			"
    >
      <div className="container mx-auto flex flex-col  p-4 md:grid md:grid-cols-[1fr_1fr_1fr]">
        <div className="left flex flex-row items-center justify-between">
          <div className="mr-4 flex h-full flex-shrink-0 items-center gap-4">
            <Link href="/">
              <Image src={Logo} height={48} width={48} alt="Brand Logo" />
            </Link>
            <Link href="/">
              <h1 className="align-middle font-sans text-xl  font-semibold tracking-tight">
                {TITLE}
              </h1>
            </Link>
          </div>
          <HamburgerMenu
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
        <div className="right-container col-start-2 col-end-4 grid md:grid-cols-[1fr_1fr]">
          <div
            className={cn(
              "middle z-40 flex flex-row overflow-hidden transition-all duration-300 ease-in-out",
              "justify-self-center",
              isMenuOpen ? "max-h-screen" : ""
            )}
          >
            <NavLinks navLinks={navLinks} />
          </div>
          <div className="right flex flex-row-reverse items-center gap-4">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}

type HamburgerMenuProps = {
  onClick: () => void;
};

function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  const handleClick = () => {
    onClick();
  };
  // return hamburger menu for mobile using lucide icons
		return (
			<button type="button" onClick={handleClick}>
				<SlMenu />
			</button>
		);
}
