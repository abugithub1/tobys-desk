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

// Category display ordering
const CATEGORY_ORDER: Record<string, number> = {
  "Oral Surgery": 0,
  "Prosthodontics": 1,
  "Endodontics": 2,
  "Radiology": 3,
  "Pharmacology": 4,
  "Medical": 5,
  "Oral Medicine": 6,
  "Paediatrics": 7,
  "Periodontics": 8,
  "Professional": 9,
  "Orthodontics": 10,
};

export default function Home() {
  const { isLoaded, getTopicStats, getAllStats } = useOsce();
  const allStats = isLoaded ? getAllStats() : null;
  const grouped = groupByCategory(TOPIC_CONFIGS);

  const sortedCategories = Object.keys(grouped).sort(
    (a, b) => (CATEGORY_ORDER[a] ?? 99) - (CATEGORY_ORDER[b] ?? 99)
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
        <div className="mt-4 h-5 flex items-center justify-center gap-6 text-sm">
          {allStats && allStats.total > 0 && (
            <>
              <span className="text-rose-400">
                <span className="font-mono font-bold text-pink-600">{allStats.total}</span> questions
              </span>
              <span className="text-green-500">
                <span className="font-mono font-bold">{allStats.correct}</span> correct
              </span>
              <span className="text-red-400">
                <span className="font-mono font-bold">{allStats.incorrect}</span> incorrect
              </span>
            </>
          )}
        </div>
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

      {/* Topics grouped by category */}
      {sortedCategories.map((category) => {
        const topics = grouped[category];
        return (
          <div key={category} className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-3 pl-1">
              {category}
            </h2>
            <div className="space-y-2.5">
              {topics.map((topic) => {
                const stats = isLoaded ? getTopicStats(topic.id) : null;
                const hasProgress = stats && stats.total > 0;
                const correctW = hasProgress ? (stats.correct / stats.total) * 100 : 0;
                const incorrectW = hasProgress ? (stats.incorrect / stats.total) * 100 : 0;
                const pct = hasProgress ? Math.round(((stats.correct + stats.incorrect) / stats.total) * 100) : 0;

                return (
                  <Link
                    key={topic.id}
                    href={`/revise/${topic.id}`}
                    className="group flex items-center gap-4 px-5 py-4 bg-white rounded-xl border border-pink-200 hover:border-pink-300 transition-all hover:shadow-sm active:scale-[0.99]"
                  >
                    <span className="flex-shrink-0 text-lg">{topic.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-rose-900 group-hover:text-pink-600 transition-colors">
                          {topic.name}
                        </h3>
                        {hasProgress && (
                          <span className="text-xs text-rose-300 font-mono">{stats.total}Qs</span>
                        )}
                      </div>
                      <p className="text-xs text-rose-400 mt-0.5 mb-1.5 truncate">{topic.description}</p>
                      {hasProgress && (
                        <>
                          <div className="flex h-2 rounded-full overflow-hidden bg-pink-100 mb-1.5">
                            {stats.correct > 0 && (
                              <div className="bg-green-400" style={{ width: `${correctW}%` }} />
                            )}
                            {stats.incorrect > 0 && (
                              <div className="bg-red-400" style={{ width: `${incorrectW}%` }} />
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-rose-400">
                            <span><span className="font-mono font-semibold text-green-500">{stats.correct}</span> correct</span>
                            <span><span className="font-mono font-semibold text-red-400">{stats.incorrect}</span> wrong</span>
                            <span><span className="font-mono font-semibold text-rose-300">{stats.unseen}</span> unseen</span>
                            <span className="ml-auto font-mono text-rose-300">{pct}%</span>
                          </div>
                        </>
                      )}
                    </div>
                    <svg className="w-5 h-5 text-pink-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
