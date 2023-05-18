import "./globals.css";
import { Inter } from "next/font/google";
import { Pacifico } from "next/font/google";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import DefaultLayout from "@/components/Layout";

const inter = Inter({ subsets: [ "latin" ], variable: "--font-inter" });
const outfit = Outfit({ subsets: [ "latin" ], variable: "--font-outfit" });
const pacifico = Pacifico({
  weight: "400",
  subsets: [ "latin" ],
  variable: "--font-pacifico",
});

export const metadata = {
  title: "John Dennehy",
  description: "Personal website of John Dennehy",
  url: "https://www.johndennehy.dev",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" className="overflow-x-hidden h-screen-dvh w-screen-dvw">
        <body className={`${inter.variable} ${pacifico.variable} ${outfit.variable}`}>
          <DefaultLayout>{children}</DefaultLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
