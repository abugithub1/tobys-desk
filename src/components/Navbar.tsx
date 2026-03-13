"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  const linkClass = (path: string) =>
    `px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
      isActive(path)
        ? "bg-pink-50 text-pink-600"
        : "text-rose-400 hover:text-pink-600 hover:bg-pink-50"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 h-14 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 font-bold text-pink-600 tracking-tight whitespace-nowrap min-w-0"
          style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "1.3rem" }}
        >
          <svg viewBox="0 0 64 64" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" aria-hidden="true">
            <circle cx="32" cy="32" r="32" fill="#ec4899"/>
            <path d="M32 11c-4.5 0-8 1.2-10.2 3.5C19.5 17 19 20 19 23c0 3.2 1 6.5 2.2 10 1 3 1.8 5.8 2.5 8.2.6 2 1 3.5 1.6 4.5.5.8 1 1.3 1.7 1.3.8 0 1.3-.6 1.8-2 .4-1 .7-2.3 1-3.5.2-.7.2-1 .2-1s0 .3.2 1c.3 1.2.6 2.5 1 3.5.5 1.4 1 2 1.8 2 .7 0 1.2-.5 1.7-1.3.6-1 1-2.5 1.6-4.5.7-2.4 1.5-5.2 2.5-8.2C40 29.5 41 26.2 41 23c0-3-.5-6-2.8-8.5C36 12.2 36.5 11 32 11z" fill="white"/>
            <ellipse cx="27.5" cy="21" rx="2.8" ry="1.5" fill="white" opacity="0.5"/>
          </svg>
          Toby&apos;s Desk
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/settings" className={linkClass("/settings")}>
            Content
          </Link>
          <button
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-rose-400 hover:text-pink-600 hover:bg-pink-50 transition-colors flex-shrink-0"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <Link
            href="/revise/all"
            className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-pink-500 text-white hover:bg-pink-600 transition-colors shadow-sm shadow-pink-200 whitespace-nowrap flex-shrink-0"
          >
            Revise
          </Link>
        </div>
      </div>
    </nav>
  );
}
