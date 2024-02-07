import "@/styles/globals.css";
import "@/styles/globals1.scss";

import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import { Outfit } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import DefaultLayout from "@/components/Layout";
import { cn } from "../lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata = {
  title: "John Dennehy",
  description: "Personal website of John Dennehy",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(
          "h-screen-dvh w-screen-dvw scrollbar-gutter overflow-x-hidden",
          `${inter.variable} ${caveat.variable} ${outfit.variable}`
        )}
      >
        <body className="transition-colors duration-500 ">
          <DefaultLayout>{children}</DefaultLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
