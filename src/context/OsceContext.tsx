"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { ContentItem, Question, UserProgress, AnswerStatus, TOPIC_CONFIGS } from "@/data/osce/types";

interface TopicStats {
  total: number;
  seen: number;
  correct: number;
  incorrect: number;
  unseen: number;
  completionRate: number;
}

interface OsceContextType {
  content: ContentItem[];
  questions: Question[];
  progress: UserProgress;
  isLoaded: boolean;

  // Progress tracking
  markQuestion: (questionId: string, status: AnswerStatus) => void;
  getTopicStats: (topicId: string) => TopicStats;
  getAllStats: () => TopicStats;

  // Question filtering
  getQuestionsForTopic: (topicId: string) => Question[];
  getFilteredQuestions: (topicId: string | 'all', mode: 'all' | 'wrong-unseen') => Question[];
  getContentForTopic: (topicId: string | 'all') => ContentItem[];

  // Shuffling
  shuffleQuestions: (questions: Question[]) => Question[];

  // Reset
  resetProgress: (topicId?: string) => void;
  resetAllProgress: () => void;

  // Content editing
  updateContent: (id: string, updates: Partial<Pick<ContentItem, 'title' | 'text'>>) => void;
}

const OsceContext = createContext<OsceContextType | undefined>(undefined);

const STORAGE_KEY = "tobys-desk-osce-progress";
const CONTENT_EDITS_KEY = "tobys-desk-osce-content-edits";

export function OsceProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [progress, setProgress] = useState<UserProgress>({});
  const [contentEdits, setContentEdits] = useState<Record<string, Partial<ContentItem>>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data dynamically
  useEffect(() => {
    async function loadData() {
      try {
        const mod = await import("@/data/osce/all-content");
        const mergedContent = mod.allContent.map((c: ContentItem) => ({
          ...c,
          ...(contentEdits[c.id] || {}),
        }));
        setContent(mergedContent);
        setQuestions(mod.allQuestions);
      } catch {
        console.warn("OSCE content not yet available");
        setContent([]);
        setQuestions([]);
      }
      setIsLoaded(true);
    }

    // Load progress from localStorage
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setProgress(JSON.parse(stored));
        const edits = localStorage.getItem(CONTENT_EDITS_KEY);
        if (edits) setContentEdits(JSON.parse(edits));
      } catch {}
    }

    loadData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist progress
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  // Persist content edits
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem(CONTENT_EDITS_KEY, JSON.stringify(contentEdits));
    }
  }, [contentEdits, isLoaded]);

  const markQuestion = useCallback((questionId: string, status: AnswerStatus) => {
    setProgress(prev => ({
      ...prev,
      [questionId]: {
        status,
        lastAttempted: new Date().toISOString(),
        attempts: (prev[questionId]?.attempts || 0) + 1,
      },
    }));
  }, []);

  const getTopicStats = useCallback((topicId: string): TopicStats => {
    const topicQuestions = questions.filter(q => q.topic === topicId);
    const total = topicQuestions.length;
    let correct = 0, incorrect = 0, unseen = 0;
    for (const q of topicQuestions) {
      const p = progress[q.id];
      if (!p || p.status === 'unseen') unseen++;
      else if (p.status === 'correct') correct++;
      else incorrect++;
    }
    return {
      total,
      seen: correct + incorrect,
      correct,
      incorrect,
      unseen,
      completionRate: total > 0 ? Math.round(((correct + incorrect) / total) * 100) : 0,
    };
  }, [questions, progress]);

  const getAllStats = useCallback((): TopicStats => {
    const total = questions.length;
    let correct = 0, incorrect = 0, unseen = 0;
    for (const q of questions) {
      const p = progress[q.id];
      if (!p || p.status === 'unseen') unseen++;
      else if (p.status === 'correct') correct++;
      else incorrect++;
    }
    return {
      total,
      seen: correct + incorrect,
      correct,
      incorrect,
      unseen,
      completionRate: total > 0 ? Math.round(((correct + incorrect) / total) * 100) : 0,
    };
  }, [questions, progress]);

  const getQuestionsForTopic = useCallback((topicId: string): Question[] => {
    return questions.filter(q => q.topic === topicId);
  }, [questions]);

  const getFilteredQuestions = useCallback((topicId: string | 'all', mode: 'all' | 'wrong-unseen'): Question[] => {
    let filtered = topicId === 'all' ? [...questions] : questions.filter(q => q.topic === topicId);
    if (mode === 'wrong-unseen') {
      filtered = filtered.filter(q => {
        const p = progress[q.id];
        return !p || p.status === 'unseen' || p.status === 'incorrect';
      });
    }
    return filtered;
  }, [questions, progress]);

  const getContentForTopic = useCallback((topicId: string | 'all'): ContentItem[] => {
    if (topicId === 'all') return content;
    return content.filter(c => c.topic === topicId);
  }, [content]);

  const shuffleQuestions = useCallback((qs: Question[]): Question[] => {
    const arr = [...qs];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const resetProgress = useCallback((topicId?: string) => {
    if (!topicId) {
      setProgress({});
      return;
    }
    setProgress(prev => {
      const next = { ...prev };
      for (const q of questions) {
        if (q.topic === topicId) delete next[q.id];
      }
      return next;
    });
  }, [questions]);

  const resetAllProgress = useCallback(() => {
    setProgress({});
  }, []);

  const updateContent = useCallback((id: string, updates: Partial<Pick<ContentItem, 'title' | 'text'>>) => {
    setContentEdits(prev => ({
      ...prev,
      [id]: { ...(prev[id] || {}), ...updates },
    }));
    setContent(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  }, []);

  return (
    <OsceContext.Provider value={{
      content, questions, progress, isLoaded,
      markQuestion, getTopicStats, getAllStats,
      getQuestionsForTopic, getFilteredQuestions, getContentForTopic,
      shuffleQuestions, resetProgress, resetAllProgress, updateContent,
    }}>
      {children}
    </OsceContext.Provider>
  );
}

export function useOsce() {
  const ctx = useContext(OsceContext);
  if (!ctx) throw new Error("useOsce must be used within OsceProvider");
  return ctx;
}

export { TOPIC_CONFIGS };
