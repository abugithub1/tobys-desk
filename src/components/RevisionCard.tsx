"use client";

import { useState, useCallback } from "react";
import { Question } from "@/data/osce/types";
import { fuzzyMatch, MatchResult } from "@/lib/fuzzyMatch";

interface RevisionCardProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
}

export default function RevisionCard({ question, onAnswer }: RevisionCardProps) {
  switch (question.type) {
    case 'flashcard': return <FlashcardCard question={question} onAnswer={onAnswer} />;
    case 'mcq': return <MCQCard question={question} onAnswer={onAnswer} />;
    case 'fill-blank': return <FillBlankCard question={question} onAnswer={onAnswer} />;
    case 'free-text': return <FreeTextCard question={question} onAnswer={onAnswer} />;
  }
}

function FlashcardCard({ question, onAnswer }: RevisionCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);

  return (
    <div className="w-full">
      <div
        className="w-full cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={() => setIsFlipped(prev => !prev)}
      >
        <div
          className="card-flip relative w-full min-h-[300px]"
          style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* Front */}
          <div className="card-face absolute inset-0 rounded-2xl bg-white shadow-lg shadow-pink-100 border border-pink-200 overflow-hidden">
            <div className="flex flex-col h-full p-6 sm:p-8">
              {question.imageUrl && (
                <div className="mb-4 rounded-xl overflow-hidden bg-pink-50 max-h-48">
                  <img src={question.imageUrl} alt="" className="w-full h-full object-contain" />
                </div>
              )}
              <div className="flex-1 flex items-center justify-center">
                <p className="text-lg sm:text-xl text-rose-800 text-center leading-relaxed font-medium">
                  {question.question}
                </p>
              </div>
              <p className="text-pink-300 text-sm text-center mt-4">Tap to reveal answer</p>
            </div>
          </div>
          {/* Back */}
          <div className="card-face card-back absolute inset-0 rounded-2xl bg-white shadow-lg shadow-pink-100 border border-pink-200 overflow-hidden">
            <div className="flex flex-col h-full p-6 sm:p-8">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-3">Answer</h3>
                <p className="text-base sm:text-lg text-rose-700 leading-relaxed">{question.answer}</p>
                {question.explanation && (
                  <p className="mt-3 text-sm text-rose-400 italic">{question.explanation}</p>
                )}
              </div>
              <p className="text-pink-300 text-sm text-center mt-4">Tap to see question</p>
            </div>
          </div>
        </div>
      </div>
      {/* Self-assessment buttons */}
      {!answered && (
        <div className="flex gap-3 mt-4 justify-center">
          <button
            onClick={() => { setAnswered(true); onAnswer(false); }}
            className="px-6 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-full border border-red-200 transition-colors"
          >
            Got it wrong
          </button>
          <button
            onClick={() => { setAnswered(true); onAnswer(true); }}
            className="px-6 py-2.5 bg-green-50 hover:bg-green-100 text-green-600 font-medium rounded-full border border-green-200 transition-colors"
          >
            Got it right
          </button>
        </div>
      )}
      {answered && (
        <p className="text-center text-pink-400 text-sm mt-4">Answer recorded</p>
      )}
    </div>
  );
}

function MCQCard({ question, onAnswer }: RevisionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctOptionIndex;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    onAnswer(idx === question.correctOptionIndex);
  };

  return (
    <div className="w-full rounded-2xl bg-white shadow-lg shadow-pink-100 border border-pink-200 p-6 sm:p-8">
      {question.imageUrl && (
        <div className="mb-4 rounded-xl overflow-hidden bg-pink-50 max-h-48">
          <img src={question.imageUrl} alt="" className="w-full h-full object-contain" />
        </div>
      )}
      <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-2 block">Multiple Choice</span>
      <p className="text-lg sm:text-xl text-rose-800 leading-relaxed font-medium mb-6">{question.question}</p>
      <div className="space-y-3">
        {question.options?.map((option, idx) => {
          let classes = "w-full text-left px-5 py-3.5 rounded-xl border-2 transition-all font-medium ";
          if (!isAnswered) {
            classes += "border-pink-200 hover:border-pink-400 hover:bg-pink-50 text-rose-700 cursor-pointer";
          } else if (idx === question.correctOptionIndex) {
            classes += "border-green-400 bg-green-50 text-green-700";
          } else if (idx === selected) {
            classes += "border-red-400 bg-red-50 text-red-700";
          } else {
            classes += "border-pink-100 text-rose-300";
          }
          return (
            <button key={idx} onClick={() => handleSelect(idx)} className={classes} disabled={isAnswered}>
              <span className="inline-flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-sm flex-shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </span>
            </button>
          );
        })}
      </div>
      {isAnswered && (
        <div className={`mt-4 p-3 rounded-xl text-sm ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {isCorrect ? 'Correct!' : `Incorrect. The answer is: ${question.options?.[question.correctOptionIndex!]}`}
          {question.explanation && <p className="mt-1 text-xs opacity-80">{question.explanation}</p>}
        </div>
      )}
    </div>
  );
}

function FillBlankCard({ question, onAnswer }: RevisionCardProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);

  const handleSubmit = () => {
    if (!input.trim() || result) return;
    const match = fuzzyMatch(input, question.blankWord || question.answer, question.acceptableAnswers, 0.7);
    setResult(match);
    onAnswer(match.isCorrect);
  };

  // Build display text with blank
  const displayText = question.fullText?.replace(
    question.blankWord || '',
    result ? `**${question.blankWord}**` : '_______'
  ) || question.question;

  return (
    <div className="w-full rounded-2xl bg-white shadow-lg shadow-pink-100 border border-pink-200 p-6 sm:p-8">
      <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-2 block">Fill in the Blank</span>
      <p className="text-lg sm:text-xl text-rose-800 leading-relaxed font-medium mb-6 whitespace-pre-wrap">
        {displayText.split('_______').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className="inline-block mx-1 px-3 py-0.5 border-b-2 border-pink-400 min-w-[100px] text-center">
                {result ? (
                  <span className={result.isCorrect ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                    {question.blankWord}
                  </span>
                ) : ' '}
              </span>
            )}
          </span>
        ))}
      </p>
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          placeholder="Type the missing word..."
          disabled={!!result}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none text-rose-800 placeholder:text-pink-300 disabled:bg-pink-50"
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || !!result}
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-200 text-white font-medium rounded-xl transition-colors"
        >
          Check
        </button>
      </div>
      {result && (
        <div className={`mt-4 p-3 rounded-xl text-sm ${result.isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {result.feedback === 'correct' && 'Correct!'}
          {result.feedback === 'close' && `Close enough! The exact answer is: ${question.blankWord}`}
          {result.feedback === 'partial' && `Partially correct. The answer is: ${question.blankWord}`}
          {result.feedback === 'incorrect' && `Incorrect. The answer is: ${question.blankWord}`}
          <span className="ml-2 opacity-60">({Math.round(result.confidence * 100)}% match)</span>
        </div>
      )}
    </div>
  );
}

function FreeTextCard({ question, onAnswer }: RevisionCardProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSubmit = () => {
    if (!input.trim() || result) return;
    const match = fuzzyMatch(input, question.answer, question.acceptableAnswers, 0.5);
    setResult(match);
    onAnswer(match.isCorrect);
  };

  return (
    <div className="w-full rounded-2xl bg-white shadow-lg shadow-pink-100 border border-pink-200 p-6 sm:p-8">
      {question.imageUrl && (
        <div className="mb-4 rounded-xl overflow-hidden bg-pink-50 max-h-48">
          <img src={question.imageUrl} alt="" className="w-full h-full object-contain" />
        </div>
      )}
      <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-2 block">Written Answer</span>
      <p className="text-lg sm:text-xl text-rose-800 leading-relaxed font-medium mb-6">{question.question}</p>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your answer..."
        disabled={!!result}
        rows={3}
        className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none text-rose-800 placeholder:text-pink-300 disabled:bg-pink-50 resize-none"
      />
      <div className="flex gap-3 mt-3">
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || !!result}
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-200 text-white font-medium rounded-xl transition-colors"
        >
          Submit
        </button>
        {result && !showAnswer && (
          <button
            onClick={() => setShowAnswer(true)}
            className="px-6 py-3 bg-white hover:bg-pink-50 text-pink-600 font-medium rounded-xl border border-pink-200 transition-colors"
          >
            Show Expected Answer
          </button>
        )}
      </div>
      {result && (
        <div className={`mt-4 p-3 rounded-xl text-sm ${result.isCorrect ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
          {result.feedback === 'correct' && 'Great answer!'}
          {result.feedback === 'close' && 'Close! Your answer captures the key points.'}
          {result.feedback === 'partial' && 'Partially correct - some key points are missing.'}
          {result.feedback === 'incorrect' && 'Not quite right.'}
          <span className="ml-2 opacity-60">({Math.round(result.confidence * 100)}% match)</span>
        </div>
      )}
      {showAnswer && (
        <div className="mt-3 p-4 rounded-xl bg-pink-50 border border-pink-200">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-2">Expected Answer</h4>
          <p className="text-rose-700 leading-relaxed">{question.answer}</p>
          {question.explanation && <p className="mt-2 text-sm text-rose-400 italic">{question.explanation}</p>}
        </div>
      )}
    </div>
  );
}
