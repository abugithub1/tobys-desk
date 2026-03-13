import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAgent from "@/components/ChatAgent";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import { OsceProvider } from "@/context/OsceContext";
import { ThemeProvider } from "@/context/ThemeContext";

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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Toby's Desk",
  },
};

// Inline script to prevent flash of wrong theme
const themeScript = `
  try {
    var t = localStorage.getItem('tobys-desk-theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${outfit.variable} ${caveat.variable} font-sans antialiased text-rose-950 min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <OsceProvider>
            <Navbar />
            <main className="pb-12 flex-1">{children}</main>
            <Footer />
            <ChatAgent />
            <ServiceWorkerRegistration />
          </OsceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
