"use client";

import { useState } from "react";
import { Cyst } from "@/data/cysts";

interface FlashcardProps {
  cyst: Cyst;
}

export default function Flashcard({ cyst }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className="card-flip relative w-full"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          aspectRatio: "4 / 3",
        }}
      >
        {/* Front - Slide Image */}
        <div className="card-face absolute inset-0 rounded-2xl bg-white shadow-lg shadow-pink-100 border border-pink-200 overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={cyst.imageUrl}
              alt={cyst.slideDescription}
              className="w-full h-full object-contain bg-pink-50"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900/50 to-transparent p-4">
              <p className="text-white/90 text-sm font-medium">
                Tap to reveal answer
              </p>
            </div>
          </div>
        </div>

        {/* Back - Cyst Name + Removal */}
        <div className="card-face card-back absolute inset-0 rounded-2xl bg-white shadow-lg shadow-pink-100 border border-pink-200 overflow-hidden">
          <div className="flex flex-col h-full p-6 sm:p-8">
            <div className="flex-shrink-0 mb-4 pb-4 border-b-2 border-pink-100">
              <h2 className="text-xl sm:text-2xl font-bold text-rose-800 leading-tight">
                {cyst.name}
              </h2>
              <p className="mt-1 text-sm text-rose-400 italic">
                {cyst.slideDescription}
              </p>
            </div>
            <div className="flex-1 overflow-y-auto">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-2">
                Removal / Management
              </h3>
              <p className="text-base sm:text-lg text-rose-700 leading-relaxed">
                {cyst.removal}
              </p>
            </div>
            <div className="flex-shrink-0 mt-4 pt-3 border-t border-pink-100">
              <p className="text-pink-300 text-sm text-center">
                Tap to see image
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
