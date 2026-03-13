"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        setError("Wrong password");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-8">
          <div className="text-center mb-6">
            <h1
              className="text-3xl font-bold text-rose-900"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Toby&apos;s Desk
            </h1>
            <p className="text-rose-400 text-sm mt-1">Enter password to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl border border-pink-200 bg-pink-50/50
                         text-rose-900 placeholder:text-rose-300
                         focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent
                         transition-all"
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-xl bg-pink-500 text-white font-semibold
                         hover:bg-pink-600 active:bg-pink-700
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors cursor-pointer"
            >
              {loading ? "..." : "Enter"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
