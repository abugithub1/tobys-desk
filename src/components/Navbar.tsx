"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive(path)
        ? "bg-pink-50 text-pink-600"
        : "text-rose-400 hover:text-pink-600 hover:bg-pink-50"
    }`;

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
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/settings" className={linkClass("/settings")}>
            Settings
          </Link>
          <Link
            href="/revise/all"
            className="ml-1 px-5 py-2 rounded-full text-sm font-semibold bg-pink-500 text-white hover:bg-pink-600 transition-colors shadow-sm shadow-pink-200"
          >
            Revise
          </Link>
        </div>
      </div>
    </nav>
  );
}
