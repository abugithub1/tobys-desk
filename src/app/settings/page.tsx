"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SettingsTable from "@/components/SettingsTable";
import { useOsce, TOPIC_CONFIGS } from "@/context/OsceContext";

function SettingsContent() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get('topic') || 'all';
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const { content, questions, isLoaded, resetProgress, resetAllProgress } = useOsce();

  const filteredContent = useMemo(() => {
    if (selectedTopic === 'all') return content;
    return content.filter(c => c.topic === selectedTopic);
  }, [content, selectedTopic]);

  const filteredQuestions = useMemo(() => {
    if (selectedTopic === 'all') return questions;
    return questions.filter(q => q.topic === selectedTopic);
  }, [questions, selectedTopic]);

  if (!isLoaded) {
    return <div className="text-center py-12 text-pink-400">Loading...</div>;
  }

  return (
    <div className="pt-8 pb-16 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-rose-800 mb-2">Settings & Data</h1>
      <p className="text-rose-400 mb-6">View and manage revision content and progress</p>

      {/* Topic Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTopic('all')}
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
              onClick={() => setSelectedTopic(t.id)}
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
                {filteredContent.map(item => (
                  <tr key={item.id} className="border-b border-pink-50 hover:bg-pink-50/30">
                    <td className="p-3 text-pink-500 text-xs font-medium">{item.topic}</td>
                    <td className="p-3 text-rose-800 font-medium">{item.title}</td>
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
                    <td className="p-3 text-rose-400 text-xs">{item.pageRef}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                {filteredQuestions.map(q => (
                  <tr key={q.id} className="border-b border-pink-50 hover:bg-pink-50/30">
                    <td className="p-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        q.type === 'flashcard' ? 'bg-violet-100 text-violet-600' :
                        q.type === 'mcq' ? 'bg-blue-100 text-blue-600' :
                        q.type === 'fill-blank' ? 'bg-amber-100 text-amber-600' :
                        'bg-emerald-100 text-emerald-600'
                      }`}>{q.type}</span>
                    </td>
                    <td className="p-3 text-rose-800 max-w-sm truncate">{q.question}</td>
                    <td className="p-3 text-rose-600 max-w-xs truncate">{q.answer}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        q.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
                        q.difficulty === 'medium' ? 'bg-amber-100 text-amber-600' :
                        'bg-red-100 text-red-600'
                      }`}>{q.difficulty}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Existing Cyst Settings */}
      <h2 className="text-lg font-semibold text-rose-800 mb-3">Jaw Cysts Data (Legacy)</h2>
      <SettingsTable />
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
