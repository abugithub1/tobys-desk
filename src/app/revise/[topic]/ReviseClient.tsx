"use client";

import Link from "next/link";
import { useOsce, TOPIC_CONFIGS } from "@/context/OsceContext";
import RevisionDeck from "@/components/RevisionDeck";

export default function ReviseClient({ topic }: { topic: string }) {
  const { isLoaded } = useOsce();

  const topicConfig = topic === 'all'
    ? { id: 'all', name: 'Revise Everything', description: 'All topics, all question types, random order' }
    : TOPIC_CONFIGS.find(t => t.id === topic);

  if (!topicConfig) {
    return (
      <div className="pt-12 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-rose-800">Topic not found</h1>
        <Link href="/" className="mt-4 inline-block px-6 py-2 bg-pink-500 text-white rounded-full">
          Back to Home
        </Link>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-pink-400 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 mb-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-pink-500 hover:text-pink-600 transition-colors mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to topics
        </Link>
      </div>
      <RevisionDeck topicId={topicConfig.id} topicName={topicConfig.name} />
    </div>
  );
}
