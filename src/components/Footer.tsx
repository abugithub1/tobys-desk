export default function Footer() {
  return (
    <footer className="mt-auto border-t border-pink-200 bg-pink-50/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-3">
          {/* Flower 1 - Daisy */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-pink-400">
            <circle cx="14" cy="14" r="4" fill="#fbbf24" />
            <ellipse cx="14" cy="5" rx="3" ry="5" fill="currentColor" opacity="0.8" />
            <ellipse cx="14" cy="23" rx="3" ry="5" fill="currentColor" opacity="0.8" />
            <ellipse cx="5" cy="14" rx="5" ry="3" fill="currentColor" opacity="0.8" />
            <ellipse cx="23" cy="14" rx="5" ry="3" fill="currentColor" opacity="0.8" />
            <ellipse cx="7.5" cy="7.5" rx="3" ry="5" fill="currentColor" opacity="0.6" transform="rotate(-45 7.5 7.5)" />
            <ellipse cx="20.5" cy="20.5" rx="3" ry="5" fill="currentColor" opacity="0.6" transform="rotate(-45 20.5 20.5)" />
            <ellipse cx="20.5" cy="7.5" rx="3" ry="5" fill="currentColor" opacity="0.6" transform="rotate(45 20.5 7.5)" />
            <ellipse cx="7.5" cy="20.5" rx="3" ry="5" fill="currentColor" opacity="0.6" transform="rotate(45 7.5 20.5)" />
          </svg>

          {/* Tooth */}
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
            <path d="M12 2C8 2 4 4 4 9c0 3 1 5 2 8 1 3 1.5 6 2.5 8 .5 1 1 1 1.5 1s1-.5 1.5-2c.3-.8.5-1.5.5-1.5s.2.7.5 1.5c.5 1.5 1 2 1.5 2s1 0 1.5-1c1-2 1.5-5 2.5-8 1-3 2-5 2-8 0-5-4-7-8-7z" fill="#f9a8d4" stroke="#ec4899" strokeWidth="1"/>
            <ellipse cx="9" cy="8" rx="1.5" ry="1" fill="white" opacity="0.6" />
            <circle cx="10" cy="12" r="0.8" fill="#ec4899" opacity="0.3" />
            <circle cx="14" cy="11" r="0.8" fill="#ec4899" opacity="0.3" />
          </svg>

          {/* Flower 2 - Tulip */}
          <svg width="22" height="28" viewBox="0 0 22 28" fill="none" className="text-rose-400">
            <path d="M11 12C8 12 5 9 5 6c0-2 2-4 6-4s6 2 6 4c0 3-3 6-6 6z" fill="currentColor" opacity="0.8" />
            <path d="M9 10C7 10 5 8 5 6" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            <path d="M13 10C15 10 17 8 17 6" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            <line x1="11" y1="12" x2="11" y2="26" stroke="#86efac" strokeWidth="2" />
            <path d="M11 18c-3 0-5-2-5-2" stroke="#86efac" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M11 22c2 0 4-1.5 4-1.5" stroke="#86efac" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>

          {/* Small flower */}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-purple-300">
            <circle cx="9" cy="9" r="2.5" fill="#fbbf24" />
            <circle cx="9" cy="3.5" r="3" fill="currentColor" opacity="0.7" />
            <circle cx="9" cy="14.5" r="3" fill="currentColor" opacity="0.7" />
            <circle cx="3.5" cy="9" r="3" fill="currentColor" opacity="0.7" />
            <circle cx="14.5" cy="9" r="3" fill="currentColor" opacity="0.7" />
          </svg>
        </div>

        <p className="text-center text-sm text-pink-400 mt-3 font-medium">
          Made with love for Toby
        </p>
      </div>
    </footer>
  );
}
