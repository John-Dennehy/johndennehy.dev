import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";
import { Inter } from '@next/font/google'
import { Pacifico } from "@next/font/google";

import type { AppProps } from "next/app";
import Link from "next/link";
import { ReactNode } from "react";
import { Header } from "ui";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const navLinks: ReactNode[] = [
  //
  <Link href="/">Home</Link>,
  // <Link href="/about">About</Link>,
  <Link href="/contact">Contact</Link>,
  <Link href="/zlist">Z-List</Link>,
];

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Z-List",
    href: "/zlist",
  },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans bg-brandBgLight h-screen`}>
      <div
        className={`
        ${pacifico.variable} font-handwriting text-brandPrimary py-2 
      `}
      ></div>
      <Header navItems={navItems} navLinks={navLinks}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl text-brandPrimary font-black py-2 tracking-wide">
            Hi! I'm John Dennehy
          </h1>
          <p className="py-4 text-lg text-brandText py-2 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis
            impedit doloribus ipsam neque numquam aspernatur inventosre, magni
            ad ipsa. Non vitae eum accusamus eos expedita sequi incidunt rerum
            deleniti!
          </p>
        </div>
      </Header>
      <main className="p-4  ">
        <div className="container m-auto">
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
}