"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-pink-600 tracking-tight"
          style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "1.6rem" }}
        >
          Toby&apos;s Desk
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              pathname === "/"
                ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                : "text-pink-700 hover:text-pink-900 hover:bg-pink-100"
            }`}
          >
            Home
          </Link>
          <Link
            href="/jaw-cysts"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              pathname === "/jaw-cysts"
                ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                : "text-pink-700 hover:text-pink-900 hover:bg-pink-100"
            }`}
          >
            Jaw Cysts
          </Link>
          <Link
            href="/settings"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              pathname === "/settings"
                ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                : "text-pink-700 hover:text-pink-900 hover:bg-pink-100"
            }`}
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}
