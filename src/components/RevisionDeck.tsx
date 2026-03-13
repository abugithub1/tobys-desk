"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Question } from "@/data/osce/types";
import { useOsce } from "@/context/OsceContext";
import RevisionCard from "./RevisionCard";

interface RevisionDeckProps {
  topicId: string | 'all';
  topicName: string;
}

export default function RevisionDeck({ topicId, topicName }: RevisionDeckProps) {
  const { getFilteredQuestions, shuffleQuestions, markQuestion, progress } = useOsce();
  const [mode, setMode] = useState<'all' | 'wrong-unseen'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
  const [started, setStarted] = useState(false);

  const availableAll = useMemo(() => getFilteredQuestions(topicId, 'all'), [topicId, getFilteredQuestions]);
  const availableWrongUnseen = useMemo(() => getFilteredQuestions(topicId, 'wrong-unseen'), [topicId, getFilteredQuestions]);

  const startSession = useCallback((selectedMode: 'all' | 'wrong-unseen') => {
    setMode(selectedMode);
    const qs = getFilteredQuestions(topicId, selectedMode);
    setSessionQuestions(shuffleQuestions(qs));
    setCurrentIndex(0);
    setSessionStats({ correct: 0, incorrect: 0 });
    setStarted(true);
  }, [topicId, getFilteredQuestions, shuffleQuestions]);

  const handleAnswer = useCallback((correct: boolean) => {
    const q = sessionQuestions[currentIndex];
    if (q) {
      markQuestion(q.id, correct ? 'correct' : 'incorrect');
      setSessionStats(prev => ({
        correct: prev.correct + (correct ? 1 : 0),
        incorrect: prev.incorrect + (correct ? 0 : 1),
      }));
    }
  }, [currentIndex, sessionQuestions, markQuestion]);

  const goNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, sessionQuestions.length - 1));
  }, [sessionQuestions.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const isComplete = started && currentIndex === sessionQuestions.length - 1 &&
    sessionStats.correct + sessionStats.incorrect === sessionQuestions.length;

  // Mode selection screen
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-800">{topicName}</h2>
          <p className="text-rose-400 mt-2">Choose your revision mode</p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => startSession('all')}
            disabled={availableAll.length === 0}
            className="w-full p-6 bg-white rounded-2xl border-2 border-pink-200 hover:border-pink-400 transition-all text-left group disabled:opacity-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-rose-800 group-hover:text-pink-600 transition-colors">
                  Revise All
                </h3>
                <p className="text-sm text-rose-400 mt-1">Go through all questions in random order</p>
              </div>
              <span className="text-pink-400 font-mono text-sm bg-pink-50 px-3 py-1 rounded-full">
                {availableAll.length} questions
              </span>
            </div>
          </button>
          <button
            onClick={() => startSession('wrong-unseen')}
            disabled={availableWrongUnseen.length === 0}
            className="w-full p-6 bg-white rounded-2xl border-2 border-pink-200 hover:border-pink-400 transition-all text-left group disabled:opacity-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-rose-800 group-hover:text-pink-600 transition-colors">
                  Wrong + Unseen Only
                </h3>
                <p className="text-sm text-rose-400 mt-1">Skip questions you&apos;ve already answered correctly</p>
              </div>
              <span className="text-pink-400 font-mono text-sm bg-pink-50 px-3 py-1 rounded-full">
                {availableWrongUnseen.length} questions
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (sessionQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl border border-pink-200 p-8">
          <p className="text-rose-400 text-lg">No questions available for this selection.</p>
          <button
            onClick={() => setStarted(false)}
            className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = sessionQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / sessionQuestions.length) * 100;

  // Completion screen
  if (isComplete && currentIndex === sessionQuestions.length - 1) {
    const pct = sessionQuestions.length > 0 ? Math.round((sessionStats.correct / sessionQuestions.length) * 100) : 0;
    return (
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl border border-pink-200 p-8">
          <h2 className="text-2xl font-bold text-rose-800 mb-4">Session Complete!</h2>
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <span className="text-3xl font-bold text-green-600">{sessionStats.correct}</span>
              <p className="text-sm text-green-500">Correct</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-red-500">{sessionStats.incorrect}</span>
              <p className="text-sm text-red-400">Incorrect</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-pink-600">{pct}%</span>
              <p className="text-sm text-pink-400">Score</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => startSession(mode)}
              className="px-6 py-2.5 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => setStarted(false)}
              className="px-6 py-2.5 bg-white hover:bg-pink-50 text-pink-600 rounded-full border border-pink-200 transition-colors"
            >
              Change Mode
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-4">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-pink-400 uppercase tracking-wider bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
            {mode === 'all' ? 'All Questions' : 'Wrong + Unseen'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-green-600 font-mono">{sessionStats.correct} correct</span>
          <span className="text-xs text-red-500 font-mono">{sessionStats.incorrect} wrong</span>
          <span className="text-rose-500 font-mono text-sm font-semibold bg-white px-3 py-1 rounded-full border border-pink-200">
            {currentIndex + 1} / {sessionQuestions.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-pink-100 rounded-full h-2 mb-6">
        <div
          className="bg-gradient-to-r from-pink-400 to-rose-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question type badge */}
      <div className="w-full mb-2">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
          currentQuestion.type === 'flashcard' ? 'bg-violet-100 text-violet-600' :
          currentQuestion.type === 'mcq' ? 'bg-blue-100 text-blue-600' :
          currentQuestion.type === 'fill-blank' ? 'bg-amber-100 text-amber-600' :
          'bg-emerald-100 text-emerald-600'
        }`}>
          {currentQuestion.type === 'flashcard' ? 'Flashcard' :
           currentQuestion.type === 'mcq' ? 'Multiple Choice' :
           currentQuestion.type === 'fill-blank' ? 'Fill in the Blank' :
           'Written Answer'}
        </span>
      </div>

      {/* Card */}
      <div className="w-full" key={currentQuestion.id}>
        <RevisionCard question={currentQuestion} onAnswer={handleAnswer} />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-6 w-full justify-between">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-pink-50 disabled:bg-pink-50 disabled:text-pink-200 text-pink-600 font-medium rounded-full transition-colors border border-pink-200 disabled:border-pink-100 shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
        <button
          onClick={goNext}
          disabled={currentIndex === sessionQuestions.length - 1}
          className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-pink-50 disabled:bg-pink-50 disabled:text-pink-200 text-pink-600 font-medium rounded-full transition-colors border border-pink-200 disabled:border-pink-100 shadow-sm"
        >
          Next
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
