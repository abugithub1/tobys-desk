"use client";

import Link from "next/link";
import { useOsce, TOPIC_CONFIGS } from "@/context/OsceContext";

// Group topics by category
function groupByCategory(topics: typeof TOPIC_CONFIGS) {
  const groups: Record<string, typeof TOPIC_CONFIGS> = {};
  for (const t of topics) {
    if (!groups[t.category]) groups[t.category] = [];
    groups[t.category].push(t);
  }
  return groups;
}

// Category ordering + subtle accent colors (no garish gradients)
const CATEGORY_STYLE: Record<string, { order: number; accent: string }> = {
  "Oral Surgery": { order: 0, accent: "border-rose-300" },
  "Prosthodontics": { order: 1, accent: "border-blue-300" },
  "Endodontics": { order: 2, accent: "border-emerald-300" },
  "Radiology": { order: 3, accent: "border-sky-300" },
  "Pharmacology": { order: 4, accent: "border-amber-300" },
  "Medical": { order: 5, accent: "border-red-300" },
  "Oral Medicine": { order: 6, accent: "border-orange-300" },
  "Paediatrics": { order: 7, accent: "border-lime-300" },
  "Periodontics": { order: 8, accent: "border-pink-300" },
  "Professional": { order: 9, accent: "border-indigo-300" },
  "Orthodontics": { order: 10, accent: "border-cyan-300" },
};

export default function Home() {
  const { isLoaded, getTopicStats, getAllStats } = useOsce();
  const allStats = isLoaded ? getAllStats() : null;
  const grouped = groupByCategory(TOPIC_CONFIGS);

  const sortedCategories = Object.keys(grouped).sort(
    (a, b) => (CATEGORY_STYLE[a]?.order ?? 99) - (CATEGORY_STYLE[b]?.order ?? 99)
  );

  return (
    <div className="pt-8 pb-16 max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1
          className="text-5xl sm:text-6xl font-bold text-pink-600 tracking-tight"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Toby&apos;s Desk
        </h1>
        <p className="text-rose-400 mt-3 text-lg max-w-xl mx-auto leading-relaxed">
          Interactive revision for 5th year dental exams
        </p>
        {allStats && allStats.total > 0 && (
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <span className="text-rose-400">
              <span className="font-mono font-bold text-pink-600">{allStats.total}</span> questions
            </span>
            <span className="text-green-500">
              <span className="font-mono font-bold">{allStats.correct}</span> correct
            </span>
            <span className="text-red-400">
              <span className="font-mono font-bold">{allStats.incorrect}</span> incorrect
            </span>
          </div>
        )}
      </div>

      {/* Revise Everything */}
      <Link
        href="/revise/all"
        className="group flex items-center justify-between mb-10 px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl text-white hover:from-pink-600 hover:to-rose-600 transition-all hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5"
      >
        <div>
          <h3 className="text-lg font-bold">Revise Everything</h3>
          <p className="text-pink-100 text-sm mt-0.5">Random questions across all topics</p>
        </div>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Jaw Cysts flashcard module */}
      <Link
        href="/jaw-cysts"
        className="group flex items-center gap-4 mb-10 px-6 py-4 bg-white rounded-2xl border border-pink-200 hover:border-pink-300 transition-all hover:shadow-md hover:shadow-pink-100 hover:-translate-y-0.5"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-lg">
          🦷
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-rose-900 group-hover:text-pink-600 transition-colors">Jaw Cysts Flashcards</h3>
            <span className="text-xs text-rose-300 font-mono bg-pink-50 px-2 py-0.5 rounded-full">18 cards</span>
          </div>
          <p className="text-sm text-rose-400 mt-0.5 truncate">Identify cysts from clinical images and learn removal methods</p>
        </div>
        <svg className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* OSCE Topics grouped by category */}
      {sortedCategories.map((category) => {
        const topics = grouped[category];
        const accent = CATEGORY_STYLE[category]?.accent ?? "border-pink-300";

        return (
          <div key={category} className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-3 pl-1">
              {category}
            </h2>
            <div className="space-y-2">
              {topics.map((topic) => {
                const stats = isLoaded ? getTopicStats(topic.id) : null;
                return (
                  <Link
                    key={topic.id}
                    href={`/revise/${topic.id}`}
                    className={`group flex items-center gap-3 px-4 py-3 bg-white rounded-xl border-l-3 ${accent} border border-pink-100 hover:border-pink-200 transition-all hover:shadow-sm`}
                  >
                    <span className="flex-shrink-0 text-base">{topic.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-rose-900 group-hover:text-pink-600 transition-colors">
                          {topic.name}
                        </h3>
                        {stats && stats.total > 0 && (
                          <span className="text-xs text-rose-300 font-mono">{stats.total}Qs</span>
                        )}
                      </div>
                      <p className="text-xs text-rose-400 mt-0.5 truncate">{topic.description}</p>
                    </div>

                    {/* Mini progress */}
                    {stats && stats.total > 0 && stats.correct + stats.incorrect > 0 && (
                      <div className="flex-shrink-0 w-16">
                        <div className="flex gap-0.5 h-1 rounded-full overflow-hidden bg-pink-100">
                          {stats.correct > 0 && (
                            <div className="bg-green-400 rounded-full" style={{ width: `${(stats.correct / stats.total) * 100}%` }} />
                          )}
                          {stats.incorrect > 0 && (
                            <div className="bg-red-300 rounded-full" style={{ width: `${(stats.incorrect / stats.total) * 100}%` }} />
                          )}
                        </div>
                      </div>
                    )}

                    <svg className="w-4 h-4 text-pink-300 group-hover:text-pink-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
