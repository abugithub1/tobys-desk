"use client";

interface ProgressRingProps {
  size: number;
  strokeWidth: number;
  correct: number;
  incorrect: number;
  unseen: number;
  total: number;
  showLabel?: boolean;
}

export default function ProgressRing({
  size,
  strokeWidth,
  correct,
  incorrect,
  unseen,
  total,
  showLabel = false,
}: ProgressRingProps) {
  if (total === 0) return null;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const correctPct = correct / total;
  const incorrectPct = incorrect / total;
  const unseenPct = unseen / total;

  const correctLen = correctPct * circumference;
  const incorrectLen = incorrectPct * circumference;
  const unseenLen = unseenPct * circumference;

  // Offsets: each segment starts where the previous ended
  const correctOffset = 0;
  const incorrectOffset = -(correctLen);
  const unseenOffset = -(correctLen + incorrectLen);

  const pctDone = Math.round(((correct + incorrect) / total) * 100);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Unseen (background grey) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#f3e8ee"
          strokeWidth={strokeWidth}
          strokeDasharray={`${unseenLen} ${circumference - unseenLen}`}
          strokeDashoffset={unseenOffset}
          strokeLinecap="round"
        />
        {/* Incorrect (red) */}
        {incorrect > 0 && (
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#f87171"
            strokeWidth={strokeWidth}
            strokeDasharray={`${incorrectLen} ${circumference - incorrectLen}`}
            strokeDashoffset={incorrectOffset}
            strokeLinecap="round"
          />
        )}
        {/* Correct (green) */}
        {correct > 0 && (
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#4ade80"
            strokeWidth={strokeWidth}
            strokeDasharray={`${correctLen} ${circumference - correctLen}`}
            strokeDashoffset={correctOffset}
            strokeLinecap="round"
          />
        )}
      </svg>
      {showLabel && (
        <span className="absolute text-xs font-bold text-rose-900">
          {pctDone}%
        </span>
      )}
    </div>
  );
}
