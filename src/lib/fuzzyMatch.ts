/**
 * Fuzzy matching utilities for comparing user free-text answers
 * against expected answers. Uses multiple strategies:
 * 1. Exact match (case-insensitive)
 * 2. Levenshtein distance similarity
 * 3. Keyword overlap percentage
 * 4. Acceptable answer variations
 */

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text: string): string[] {
  const stopWords = new Set([
    'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'can', 'shall', 'to', 'of', 'in', 'for',
    'on', 'with', 'at', 'by', 'from', 'as', 'into', 'through', 'during',
    'before', 'after', 'and', 'but', 'or', 'nor', 'not', 'so', 'yet',
    'both', 'either', 'neither', 'each', 'every', 'all', 'any', 'few',
    'more', 'most', 'other', 'some', 'such', 'no', 'only', 'own', 'same',
    'than', 'too', 'very', 'just', 'because', 'if', 'when', 'which',
    'who', 'whom', 'this', 'that', 'these', 'those', 'it', 'its',
  ]);
  return normalize(text)
    .split(' ')
    .filter(w => w.length > 1 && !stopWords.has(w));
}

function stringSimilarity(a: string, b: string): number {
  const na = normalize(a);
  const nb = normalize(b);
  if (na === nb) return 1;
  if (na.length === 0 || nb.length === 0) return 0;
  const dist = levenshteinDistance(na, nb);
  const maxLen = Math.max(na.length, nb.length);
  return 1 - dist / maxLen;
}

function keywordOverlap(userAnswer: string, expectedAnswer: string): number {
  const userTokens = new Set(tokenize(userAnswer));
  const expectedTokens = tokenize(expectedAnswer);
  if (expectedTokens.length === 0) return 0;
  let matches = 0;
  for (const token of expectedTokens) {
    if (userTokens.has(token)) {
      matches++;
    } else {
      // Check if any user token is similar to this expected token
      for (const ut of userTokens) {
        if (stringSimilarity(ut, token) > 0.8) {
          matches += 0.8;
          break;
        }
      }
    }
  }
  return matches / expectedTokens.length;
}

export interface MatchResult {
  isCorrect: boolean;
  confidence: number; // 0-1
  feedback: 'correct' | 'close' | 'partial' | 'incorrect';
  matchedAnswer?: string;
}

export function fuzzyMatch(
  userAnswer: string,
  expectedAnswer: string,
  acceptableAnswers?: string[],
  threshold = 0.6
): MatchResult {
  if (!userAnswer.trim()) {
    return { isCorrect: false, confidence: 0, feedback: 'incorrect' };
  }

  const allAnswers = [expectedAnswer, ...(acceptableAnswers || [])];
  let bestScore = 0;
  let bestAnswer = expectedAnswer;

  for (const answer of allAnswers) {
    // Strategy 1: Exact/near-exact string similarity
    const similarity = stringSimilarity(userAnswer, answer);

    // Strategy 2: Keyword overlap
    const overlap = keywordOverlap(userAnswer, answer);

    // Strategy 3: Check if user answer contains the key answer
    const containsCheck = normalize(answer).length > 3 &&
      normalize(userAnswer).includes(normalize(answer)) ? 0.9 : 0;

    // Strategy 4: Check if answer contains user's response (partial match)
    const reverseContains = normalize(userAnswer).length > 3 &&
      normalize(answer).includes(normalize(userAnswer)) ? 0.7 : 0;

    // Combined score: weighted average favoring keyword overlap for longer answers
    const isLong = tokenize(answer).length > 4;
    const score = isLong
      ? Math.max(similarity * 0.3 + overlap * 0.7, containsCheck, reverseContains)
      : Math.max(similarity * 0.6 + overlap * 0.4, containsCheck, reverseContains);

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = answer;
    }
  }

  const isCorrect = bestScore >= threshold;
  const feedback = bestScore >= 0.85
    ? 'correct'
    : bestScore >= threshold
      ? 'close'
      : bestScore >= 0.35
        ? 'partial'
        : 'incorrect';

  return {
    isCorrect,
    confidence: Math.round(bestScore * 100) / 100,
    feedback,
    matchedAnswer: bestAnswer,
  };
}
