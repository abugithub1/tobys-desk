import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CystProvider } from "@/context/CystContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toby's Desk - Dental Revision",
  description: "Interactive 5th year dental exam revision - flashcards, quizzes, and comprehensive study material",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${caveat.variable} font-sans antialiased bg-[#fff5f7] text-rose-950 min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
      >
        <CystProvider>
          <Navbar />
          <main className="pb-12 flex-1">{children}</main>
          <Footer />
        </CystProvider>
      </body>
    </html>
  );
}
