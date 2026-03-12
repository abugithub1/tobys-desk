import Link from "next/link";

const topics = [
  {
    title: "Jaw Cysts",
    description: "18 cyst types - mucoceles, odontogenic, non-odontogenic, bone cysts. Identify from clinical images and learn removal methods.",
    href: "/jaw-cysts",
    cardCount: 18,
    category: "Oral Surgery",
    color: "from-pink-400 to-rose-500",
  },
];

export default function Home() {
  return (
    <div className="pt-8 pb-16 max-w-5xl mx-auto px-4">
      {/* Header with decorative elements */}
      <div className="text-center mb-12 relative">
        {/* Decorative flowers */}
        <div className="absolute top-0 left-8 opacity-20 hidden sm:block">
          <svg width="48" height="48" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="4" fill="#fbbf24" />
            <ellipse cx="14" cy="5" rx="3" ry="5" fill="#f9a8d4" />
            <ellipse cx="14" cy="23" rx="3" ry="5" fill="#f9a8d4" />
            <ellipse cx="5" cy="14" rx="5" ry="3" fill="#f9a8d4" />
            <ellipse cx="23" cy="14" rx="5" ry="3" fill="#f9a8d4" />
          </svg>
        </div>
        <div className="absolute top-2 right-12 opacity-20 hidden sm:block">
          <svg width="36" height="36" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="2.5" fill="#fbbf24" />
            <circle cx="9" cy="3.5" r="3" fill="#c4b5fd" />
            <circle cx="9" cy="14.5" r="3" fill="#c4b5fd" />
            <circle cx="3.5" cy="9" r="3" fill="#c4b5fd" />
            <circle cx="14.5" cy="9" r="3" fill="#c4b5fd" />
          </svg>
        </div>

        <h1
          className="text-5xl sm:text-6xl font-bold text-pink-600 tracking-tight"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Toby&apos;s Desk
        </h1>
        <p className="text-rose-400 mt-3 text-lg max-w-xl mx-auto leading-relaxed">
          Interactive revision for 5th year dental exams. Flashcards, clinical images, and comprehensive study material.
        </p>
      </div>

      <h2 className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4 pl-1">
        Revision Topics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="group block bg-white rounded-2xl border border-pink-200 overflow-hidden hover:border-pink-300 transition-all hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-0.5"
          >
            <div className={`h-1.5 bg-gradient-to-r ${topic.color}`} />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">
                  {topic.category}
                </span>
                <span className="text-xs text-rose-300 font-mono bg-pink-50 px-2 py-0.5 rounded-full">
                  {topic.cardCount} cards
                </span>
              </div>
              <h3 className="text-lg font-semibold text-rose-900 group-hover:text-pink-600 transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-rose-400 mt-2 line-clamp-3 leading-relaxed">
                {topic.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-sm text-pink-500 font-medium">
                Start revising
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}

        {/* Coming Soon placeholder */}
        <div className="block bg-white/50 rounded-2xl border border-dashed border-pink-200 overflow-hidden">
          <div className="h-1.5 bg-pink-100" />
          <div className="p-5 flex flex-col items-center justify-center min-h-[160px] text-center">
            <svg width="24" height="24" viewBox="0 0 24 28" fill="none" className="mb-2 opacity-30">
              <path d="M12 2C8 2 4 4 4 9c0 3 1 5 2 8 1 3 1.5 6 2.5 8 .5 1 1 1 1.5 1s1-.5 1.5-2c.3-.8.5-1.5.5-1.5s.2.7.5 1.5c.5 1.5 1 2 1.5 2s1 0 1.5-1c1-2 1.5-5 2.5-8 1-3 2-5 2-8 0-5-4-7-8-7z" fill="#f9a8d4" stroke="#ec4899" strokeWidth="1"/>
            </svg>
            <p className="text-pink-400 text-sm font-medium">More topics coming soon</p>
            <p className="text-pink-300 text-xs mt-1">Add PDFs to build new revision decks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
