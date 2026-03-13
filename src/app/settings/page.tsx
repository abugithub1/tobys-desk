"use client";

import { useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useOsce, TOPIC_CONFIGS } from "@/context/OsceContext";
import { ContentItem, Question } from "@/data/osce/types";

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

function Pagination({
  total,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: {
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (p: number) => void;
  onPageSizeChange: (s: number) => void;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  return (
    <div className="flex items-center justify-between px-3 py-2.5 border-t border-pink-100 bg-pink-50/30 text-xs">
      <div className="flex items-center gap-2 text-rose-400">
        <span>{from}-{to} of {total}</span>
        <span className="text-pink-200">|</span>
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="bg-white border border-pink-200 rounded-lg px-1.5 py-1 text-rose-600 focus:outline-none focus:ring-1 focus:ring-pink-400"
        >
          {PAGE_SIZE_OPTIONS.map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span>per page</span>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(1)}
          disabled={page <= 1}
          className="px-2 py-1 rounded-lg hover:bg-pink-100 text-pink-500 disabled:text-pink-200 disabled:hover:bg-transparent transition-colors"
          aria-label="First page"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="px-2 py-1 rounded-lg hover:bg-pink-100 text-pink-500 disabled:text-pink-200 disabled:hover:bg-transparent transition-colors"
          aria-label="Previous page"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="px-2 py-1 text-rose-600 font-medium">
          {page} / {totalPages}
        </span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="px-2 py-1 rounded-lg hover:bg-pink-100 text-pink-500 disabled:text-pink-200 disabled:hover:bg-transparent transition-colors"
          aria-label="Next page"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={page >= totalPages}
          className="px-2 py-1 rounded-lg hover:bg-pink-100 text-pink-500 disabled:text-pink-200 disabled:hover:bg-transparent transition-colors"
          aria-label="Last page"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ExpandedContent({ item }: { item: ContentItem }) {
  return (
    <tr>
      <td colSpan={4} className="p-0">
        <div className="px-6 py-4 bg-pink-50/50 border-t border-pink-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.imageUrl && (
              <div className="rounded-xl overflow-hidden bg-white border border-pink-200 max-w-xs">
                <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-contain" />
              </div>
            )}
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Full Text</h4>
                <p className="text-sm text-rose-700 leading-relaxed">{item.text}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">All Key Points</h4>
                <ul className="list-disc list-inside space-y-1">
                  {item.keyPoints.map((kp, i) => (
                    <li key={i} className="text-sm text-rose-600">{kp}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Keywords</h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.keywords.map((kw, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white border border-pink-200 text-pink-600">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

function ExpandedQuestion({ q }: { q: Question }) {
  return (
    <tr>
      <td colSpan={4} className="p-0">
        <div className="px-6 py-4 bg-pink-50/50 border-t border-pink-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {q.imageUrl && (
              <div className="rounded-xl overflow-hidden bg-white border border-pink-200 max-w-xs">
                <img src={q.imageUrl} alt="" className="w-full h-auto object-contain" />
              </div>
            )}
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Full Question</h4>
                <p className="text-sm text-rose-800 leading-relaxed font-medium">{q.question}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Full Answer</h4>
                <p className="text-sm text-rose-700 leading-relaxed">{q.answer}</p>
              </div>
              {q.explanation && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Explanation</h4>
                  <p className="text-sm text-rose-600 italic">{q.explanation}</p>
                </div>
              )}
              {q.options && q.options.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Options</h4>
                  <ol className="list-inside space-y-1">
                    {q.options.map((opt, i) => (
                      <li key={i} className={`text-sm ${i === q.correctOptionIndex ? 'text-green-600 font-semibold' : 'text-rose-600'}`}>
                        {String.fromCharCode(65 + i)}. {opt} {i === q.correctOptionIndex && '(correct)'}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {q.fullText && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Full Text (Fill-blank)</h4>
                  <p className="text-sm text-rose-600">{q.fullText}</p>
                  {q.blankWord && <p className="text-sm text-green-600 font-medium mt-1">Missing word: {q.blankWord}</p>}
                </div>
              )}
              {q.acceptableAnswers && q.acceptableAnswers.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Acceptable Answers</h4>
                  <ul className="list-disc list-inside space-y-0.5">
                    {q.acceptableAnswers.map((a, i) => (
                      <li key={i} className="text-sm text-rose-600">{a}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-pink-500 mb-1">Keywords</h4>
                <div className="flex flex-wrap gap-1.5">
                  {q.keywords.map((kw, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white border border-pink-200 text-pink-600">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

function SettingsContent() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get('topic') || 'all';
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [search, setSearch] = useState("");
  const [expandedContent, setExpandedContent] = useState<Set<string>>(new Set());
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [contentPage, setContentPage] = useState(1);
  const [contentPageSize, setContentPageSize] = useState(10);
  const [questionsPage, setQuestionsPage] = useState(1);
  const [questionsPageSize, setQuestionsPageSize] = useState(10);
  const { content, questions, isLoaded, resetProgress, resetAllProgress } = useOsce();

  const toggleContent = useCallback((id: string) => {
    setExpandedContent(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleQuestion = useCallback((id: string) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const searchWords = useMemo(() =>
    search.toLowerCase().split(/\s+/).filter(Boolean),
    [search]
  );

  const matchesSearch = useCallback((texts: string[]) => {
    if (searchWords.length === 0) return true;
    const combined = texts.join(" ").toLowerCase();
    return searchWords.some(word => combined.includes(word));
  }, [searchWords]);

  const filteredContent = useMemo(() => {
    let items = selectedTopic === 'all' ? content : content.filter(c => c.topic === selectedTopic);
    if (searchWords.length > 0) {
      items = items.filter(c => matchesSearch([c.topic, c.title, c.text, ...c.keyPoints, ...c.keywords]));
    }
    return items;
  }, [content, selectedTopic, searchWords, matchesSearch]);

  const filteredQuestions = useMemo(() => {
    let items = selectedTopic === 'all' ? questions : questions.filter(q => q.topic === selectedTopic);
    if (searchWords.length > 0) {
      items = items.filter(q => matchesSearch([q.topic, q.question, q.answer, q.explanation || '', q.type, q.difficulty || '']));
    }
    return items;
  }, [questions, selectedTopic, searchWords, matchesSearch]);

  // Reset to page 1 when filters change
  const handleTopicChange = useCallback((topic: string) => {
    setSelectedTopic(topic);
    setContentPage(1);
    setQuestionsPage(1);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setContentPage(1);
    setQuestionsPage(1);
  }, []);

  const handleContentPageSizeChange = useCallback((size: number) => {
    setContentPageSize(size);
    setContentPage(1);
  }, []);

  const handleQuestionsPageSizeChange = useCallback((size: number) => {
    setQuestionsPageSize(size);
    setQuestionsPage(1);
  }, []);

  // Paginated slices
  const pagedContent = useMemo(() => {
    const start = (contentPage - 1) * contentPageSize;
    return filteredContent.slice(start, start + contentPageSize);
  }, [filteredContent, contentPage, contentPageSize]);

  const pagedQuestions = useMemo(() => {
    const start = (questionsPage - 1) * questionsPageSize;
    return filteredQuestions.slice(start, start + questionsPageSize);
  }, [filteredQuestions, questionsPage, questionsPageSize]);

  // Clamp page if it goes out of bounds (e.g. after filter change reduces total)
  const contentTotalPages = Math.max(1, Math.ceil(filteredContent.length / contentPageSize));
  if (contentPage > contentTotalPages) setContentPage(contentTotalPages);
  const questionsTotalPages = Math.max(1, Math.ceil(filteredQuestions.length / questionsPageSize));
  if (questionsPage > questionsTotalPages) setQuestionsPage(questionsTotalPages);

  if (!isLoaded) {
    return <div className="text-center py-12 text-pink-400">Loading...</div>;
  }

  return (
    <div className="pt-8 pb-16 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-rose-800 mb-2">Content</h1>
      <p className="text-rose-400 mb-4">View and manage revision content and progress</p>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search across all columns..."
          className="w-full max-w-md px-4 py-2.5 rounded-xl border border-pink-200 bg-white text-sm text-rose-900 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
        />
      </div>

      {/* Topic Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => handleTopicChange('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedTopic === 'all'
              ? 'bg-pink-500 text-white'
              : 'bg-white text-pink-600 border border-pink-200 hover:bg-pink-50'
          }`}
        >
          All Topics ({content.length} items)
        </button>
        {TOPIC_CONFIGS.map(t => {
          const count = content.filter(c => c.topic === t.id).length;
          if (count === 0) return null;
          return (
            <button
              key={t.id}
              onClick={() => handleTopicChange(t.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedTopic === t.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-pink-600 border border-pink-200 hover:bg-pink-50'
              }`}
            >
              {t.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Reset buttons */}
      <div className="flex gap-3 mb-6">
        {selectedTopic !== 'all' && (
          <button
            onClick={() => resetProgress(selectedTopic)}
            className="px-4 py-2 bg-white hover:bg-red-50 text-red-500 text-sm font-medium rounded-full border border-red-200 transition-colors"
          >
            Reset Progress for {TOPIC_CONFIGS.find(t => t.id === selectedTopic)?.name}
          </button>
        )}
        <button
          onClick={resetAllProgress}
          className="px-4 py-2 bg-white hover:bg-red-50 text-red-500 text-sm font-medium rounded-full border border-red-200 transition-colors"
        >
          Reset All Progress
        </button>
      </div>

      {/* Content Table */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-rose-800 mb-3">Content Items ({filteredContent.length})</h2>
        <div className="bg-white rounded-2xl border border-pink-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100 bg-pink-50/50">
                  <th className="text-left p-3 font-semibold text-rose-600">Topic</th>
                  <th className="text-left p-3 font-semibold text-rose-600">Title</th>
                  <th className="text-left p-3 font-semibold text-rose-600">Key Points</th>
                  <th className="text-left p-3 font-semibold text-rose-600">Page</th>
                </tr>
              </thead>
              <tbody>
                {pagedContent.map(item => (
                  <>
                    <tr
                      key={item.id}
                      onClick={() => toggleContent(item.id)}
                      className={`border-b border-pink-50 cursor-pointer transition-colors ${expandedContent.has(item.id) ? 'bg-pink-50/50' : 'hover:bg-pink-50/30'}`}
                    >
                      <td className="p-3 text-pink-500 text-xs font-medium">{item.topic}</td>
                      <td className="p-3 text-rose-800 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className={`w-3 h-3 text-pink-400 transition-transform flex-shrink-0 ${expandedContent.has(item.id) ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {item.title}
                        </div>
                      </td>
                      <td className="p-3 text-rose-600 max-w-md">
                        <ul className="list-disc list-inside space-y-0.5">
                          {item.keyPoints.slice(0, 3).map((kp, i) => (
                            <li key={i} className="text-xs">{kp}</li>
                          ))}
                          {item.keyPoints.length > 3 && (
                            <li className="text-xs text-pink-400">+{item.keyPoints.length - 3} more</li>
                          )}
                        </ul>
                      </td>
                      <td className="p-3 text-rose-400 text-xs">{item.pageRef || '-'}</td>
                    </tr>
                    {expandedContent.has(item.id) && <ExpandedContent key={`${item.id}-expanded`} item={item} />}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            total={filteredContent.length}
            page={contentPage}
            pageSize={contentPageSize}
            onPageChange={setContentPage}
            onPageSizeChange={handleContentPageSizeChange}
          />
        </div>
      </div>

      {/* Questions Table */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-rose-800 mb-3">Questions ({filteredQuestions.length})</h2>
        <div className="bg-white rounded-2xl border border-pink-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100 bg-pink-50/50">
                  <th className="text-left p-3 font-semibold text-rose-600">Type</th>
                  <th className="text-left p-3 font-semibold text-rose-600">Question</th>
                  <th className="text-left p-3 font-semibold text-rose-600">Answer</th>
                  <th className="text-left p-3 font-semibold text-rose-600">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {pagedQuestions.map(q => (
                  <>
                    <tr
                      key={q.id}
                      onClick={() => toggleQuestion(q.id)}
                      className={`border-b border-pink-50 cursor-pointer transition-colors ${expandedQuestions.has(q.id) ? 'bg-pink-50/50' : 'hover:bg-pink-50/30'}`}
                    >
                      <td className="p-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          q.type === 'flashcard' ? 'bg-violet-100 text-violet-600' :
                          q.type === 'mcq' ? 'bg-blue-100 text-blue-600' :
                          q.type === 'fill-blank' ? 'bg-amber-100 text-amber-600' :
                          'bg-emerald-100 text-emerald-600'
                        }`}>{q.type}</span>
                      </td>
                      <td className="p-3 text-rose-800 max-w-sm">
                        <div className="flex items-center gap-2">
                          <svg className={`w-3 h-3 text-pink-400 transition-transform flex-shrink-0 ${expandedQuestions.has(q.id) ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="truncate">{q.question}</span>
                        </div>
                      </td>
                      <td className="p-3 text-rose-600 max-w-xs truncate">{q.answer}</td>
                      <td className="p-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          q.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
                          q.difficulty === 'medium' ? 'bg-amber-100 text-amber-600' :
                          'bg-red-100 text-red-600'
                        }`}>{q.difficulty}</span>
                      </td>
                    </tr>
                    {expandedQuestions.has(q.id) && <ExpandedQuestion key={`${q.id}-expanded`} q={q} />}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            total={filteredQuestions.length}
            page={questionsPage}
            pageSize={questionsPageSize}
            onPageChange={setQuestionsPage}
            onPageSizeChange={handleQuestionsPageSizeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-pink-400">Loading...</div>}>
      <SettingsContent />
    </Suspense>
  );
}
