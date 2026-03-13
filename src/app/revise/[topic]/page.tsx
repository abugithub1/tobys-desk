import { TOPIC_CONFIGS } from "@/data/osce/types";
import ReviseClient from "./ReviseClient";

// Pre-render all topic pages at build time so they work offline
export function generateStaticParams() {
  return [
    { topic: "all" },
    ...TOPIC_CONFIGS.map((t) => ({ topic: t.id })),
  ];
}

export default async function RevisePage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  return <ReviseClient topic={topic} />;
}
