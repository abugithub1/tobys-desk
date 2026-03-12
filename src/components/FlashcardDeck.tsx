"use client";

import { useState, useCallback, useMemo } from "react";
import { useCysts } from "@/context/CystContext";
import Flashcard from "./Flashcard";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function FlashcardDeck() {
  const { cysts, isLoaded } = useCysts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [order, setOrder] = useState<number[]>(() =>
    Array.from({ length: 18 }, (_, i) => i)
  );

  const orderedCysts = useMemo(
    () => order.map((i) => cysts[i]).filter(Boolean),
    [order, cysts]
  );

  const currentCyst = orderedCysts[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, orderedCysts.length - 1));
  }, [orderedCysts.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleShuffle = useCallback(() => {
    setOrder((prev) => shuffleArray(prev));
    setCurrentIndex(0);
  }, []);

  const handleReset = useCallback(() => {
    setOrder(Array.from({ length: cysts.length }, (_, i) => i));
    setCurrentIndex(0);
  }, [cysts.length]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-pink-400 text-lg">Loading...</div>
      </div>
    );
  }

  if (!currentCyst) return null;

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-4">
      {/* Progress and Controls */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-full transition-colors shadow-md shadow-pink-200"
          >
            Shuffle
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-white hover:bg-pink-50 text-pink-600 text-sm font-medium rounded-full transition-colors border border-pink-200"
          >
            Reset Order
          </button>
        </div>
        <span className="text-rose-500 font-mono text-lg font-semibold bg-white px-3 py-1 rounded-full border border-pink-200">
          {currentIndex + 1} / {orderedCysts.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-pink-100 rounded-full h-2 mb-6">
        <div
          className="bg-gradient-to-r from-pink-400 to-rose-500 h-2 rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / orderedCysts.length) * 100}%`,
          }}
        />
      </div>

      {/* Flashcard */}
      <div className="w-full" key={currentCyst.id}>
        <Flashcard cyst={currentCyst} />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-6 w-full justify-between">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-pink-50 disabled:bg-pink-50 disabled:text-pink-200 text-pink-600 font-medium rounded-full transition-colors border border-pink-200 disabled:border-pink-100 shadow-sm"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>

        <button
          onClick={goNext}
          disabled={currentIndex === orderedCysts.length - 1}
          className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-pink-50 disabled:bg-pink-50 disabled:text-pink-200 text-pink-600 font-medium rounded-full transition-colors border border-pink-200 disabled:border-pink-100 shadow-sm"
        >
          Next
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
