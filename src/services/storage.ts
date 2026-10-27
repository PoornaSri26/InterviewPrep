import { Problem, MockInterviewSession, StarStory, RoadmapWeek, Flashcard, OfferPackage, DailyChallenge, SolutionMap } from '../types';
import { initialProblems } from '../data/problemsData';
import { initialStarStories } from '../data/behavioralData';
import { initialRoadmap } from '../data/roadmapData';
import { initialFlashcards } from '../data/flashcardsData';
import { initialOffers } from '../data/offersData';

const STORAGE_KEYS = {
  PROBLEMS: 'interview_os_problems',
  MOCKS: 'interview_os_mocks',
  STAR_STORIES: 'interview_os_star',
  ROADMAP: 'interview_os_roadmap',
  STREAK: 'interview_os_streak',
  LAST_VISIT: 'interview_os_last_visit',
  API_KEY: 'interview_os_gemini_key',
  FLASHCARDS: 'interview_os_flashcards',
  OFFERS: 'interview_os_offers',
  DAILY_CHALLENGES: 'interview_os_daily_challenges',
  SOLUTIONS: 'interview_os_solutions',
  REPO_CATALOG_ENABLED: 'interview_os_repo_catalog_enabled'
};

/**
 * One-time repair: remove title-duplicates (e.g. seeded "Two Sum" vs a
 * `sheet-two-sum` import persisted before the title-based dedupe existed).
 * Keeps whichever entry has more SRS progress, merges company tags into it.
 */
const dedupeProblems = (list: Problem[]): Problem[] => {
  const byTitle = new Map<string, Problem>();
  const out: Problem[] = [];
  let changed = false;
  for (const p of list) {
    const key = p.title.trim().toLowerCase();
    if (!key) continue;
    const existing = byTitle.get(key);
    if (!existing) {
      byTitle.set(key, p);
      out.push(p);
      continue;
    }
    changed = true;
    const score = (x: Problem) =>
      x.repetitionCount * 10 + (x.status !== 'unsolved' ? 5 : 0) + (x.userNotes ? 3 : 0);
    const [keep, drop] = score(p) >= score(existing) ? [p, existing] : [existing, p];
    if (keep !== existing) out[out.indexOf(existing)] = keep;
    byTitle.set(key, keep);
    // merge company tags + source url from the dropped duplicate
    const mergedCompanies = Array.from(new Set([...keep.companies, ...drop.companies]));
    const merged = { ...keep, companies: mergedCompanies, sourceUrl: keep.sourceUrl || drop.sourceUrl };
    const idx = out.indexOf(keep);
    if (idx >= 0) out[idx] = merged;
    byTitle.set(key, merged);
  }
  if (changed) {
    try {
      localStorage.setItem(STORAGE_KEYS.PROBLEMS, JSON.stringify(out));
    } catch (e) { /* best effort */ }
  }
  return out;
};

export const getStoredProblems = (): Problem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROBLEMS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PROBLEMS, JSON.stringify(initialProblems));
      return initialProblems;
    }
    return dedupeProblems(JSON.parse(raw));
  } catch (e) {
    return initialProblems;
  }
};

export const saveProblems = (problems: Problem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROBLEMS, JSON.stringify(problems));
  } catch (e) {
    console.error('Failed to save problems to storage', e);
  }
};

// Spaced Repetition (SuperMemo SM-2 calculation)
export const updateProblemSRS = (
  problemId: string,
  quality: 0 | 1 | 2 | 3 | 4 | 5 // 0=complete blackout, 3=good with effort, 5=perfect
): Problem[] => {
  const problems = getStoredProblems();
  const updated = problems.map((prob) => {
    if (prob.id !== problemId) return prob;

    let { repetitionCount, intervalDays, easeFactor } = prob;

    if (quality >= 3) {
      if (repetitionCount === 0) {
        intervalDays = 1;
      } else if (repetitionCount === 1) {
        intervalDays = 3;
      } else if (repetitionCount === 2) {
        intervalDays = 7;
      } else {
        intervalDays = Math.round(intervalDays * easeFactor);
      }
      repetitionCount++;
    } else {
      repetitionCount = 0;
      intervalDays = 1;
    }

    // Update ease factor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

    const now = new Date();
    const nextDate = new Date();
    nextDate.setDate(now.getDate() + intervalDays);

    let status: Problem['status'] = 'learning';
    if (intervalDays >= 14) status = 'mastered';
    else if (repetitionCount > 0) status = 'reviewing';

    return {
      ...prob,
      status,
      lastReviewed: now.toISOString().split('T')[0],
      nextReviewDate: nextDate.toISOString().split('T')[0],
      intervalDays,
      easeFactor,
      repetitionCount
    };
  });

  saveProblems(updated);
  return updated;
};

export const getStoredMocks = (): MockInterviewSession[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MOCKS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const saveMockSession = (session: MockInterviewSession): void => {
  try {
    const current = getStoredMocks();
    localStorage.setItem(STORAGE_KEYS.MOCKS, JSON.stringify([session, ...current]));
  } catch (e) {
    console.error('Failed to save mock interview', e);
  }
};

export const getStoredStarStories = (): StarStory[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STAR_STORIES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.STAR_STORIES, JSON.stringify(initialStarStories));
      return initialStarStories;
    }
    return JSON.parse(raw);
  } catch (e) {
    return initialStarStories;
  }
};

export const saveStarStories = (stories: StarStory[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.STAR_STORIES, JSON.stringify(stories));
  } catch (e) {
    console.error('Failed to save star stories', e);
  }
};

export const getStoredRoadmap = (): RoadmapWeek[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ROADMAP);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.ROADMAP, JSON.stringify(initialRoadmap));
      return initialRoadmap;
    }
    return JSON.parse(raw);
  } catch (e) {
    return initialRoadmap;
  }
};

export const saveRoadmap = (roadmap: RoadmapWeek[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.ROADMAP, JSON.stringify(roadmap));
  } catch (e) {
    console.error('Failed to save roadmap', e);
  }
};

// ----------- FLASHCARDS (Spaced Repetition) -----------

export const getStoredFlashcards = (): Flashcard[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FLASHCARDS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(initialFlashcards));
      return initialFlashcards;
    }
    return JSON.parse(raw);
  } catch (e) {
    return initialFlashcards;
  }
};

export const saveFlashcards = (cards: Flashcard[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(cards));
  } catch (e) {
    console.error('Failed to save flashcards to storage', e);
  }
};

export const updateFlashcardSRS = (
  cardId: string,
  quality: 0 | 1 | 2 | 3 | 4 | 5
): Flashcard[] => {
  const cards = getStoredFlashcards();
  const updated = cards.map((card) => {
    if (card.id !== cardId) return card;

    let { repetitionCount, intervalDays, easeFactor } = card;

    if (quality >= 3) {
      if (repetitionCount === 0) intervalDays = 1;
      else if (repetitionCount === 1) intervalDays = 3;
      else if (repetitionCount === 2) intervalDays = 7;
      else intervalDays = Math.round(intervalDays * easeFactor);
      repetitionCount++;
    } else {
      repetitionCount = 0;
      intervalDays = 1;
    }

    easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervalDays);

    let status: Flashcard['status'] = 'learning';
    if (intervalDays >= 14) status = 'mastered';

    return {
      ...card,
      status,
      intervalDays,
      easeFactor,
      repetitionCount,
      nextReviewDate: nextDate.toISOString().split('T')[0]
    };
  });

  saveFlashcards(updated);
  return updated;
};

// ----------- OFFER COMPARATOR -----------

export const getStoredOffers = (): OfferPackage[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.OFFERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(initialOffers));
      return initialOffers;
    }
    return JSON.parse(raw);
  } catch (e) {
    return initialOffers;
  }
};

export const saveOffers = (offers: OfferPackage[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(offers));
  } catch (e) {
    console.error('Failed to save offers to storage', e);
  }
};

// ----------- DAILY CHALLENGE -----------

const todayStr = (): string => new Date().toISOString().split('T')[0];

/** Deterministically picks the problem of the day from the pool. */
export const getTodaysChallenge = (problems: Problem[]): DailyChallenge => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DAILY_CHALLENGES);
    const history: DailyChallenge[] = raw ? JSON.parse(raw) : [];
    const today = todayStr();
    const existing = history.find((c) => c.date === today);
    if (existing) return existing;

    if (problems.length === 0) {
      return { date: today, problemId: '', completed: false };
    }

    // Date-seeded pick so everyone gets the same problem all day
    const seed = Number(today.replace(/-/g, ''));
    const problem = problems[seed % problems.length];
    const challenge: DailyChallenge = { date: today, problemId: problem.id, completed: false };
    localStorage.setItem(STORAGE_KEYS.DAILY_CHALLENGES, JSON.stringify([challenge, ...history]));
    return challenge;
  } catch (e) {
    return { date: todayStr(), problemId: problems[0]?.id ?? '', completed: false };
  }
};

export const saveDailyChallenge = (challenge: DailyChallenge): DailyChallenge[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DAILY_CHALLENGES);
    const history: DailyChallenge[] = raw ? JSON.parse(raw) : [];
    const updated = [challenge, ...history.filter((c) => c.date !== challenge.date)];
    localStorage.setItem(STORAGE_KEYS.DAILY_CHALLENGES, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to save daily challenge', e);
    return [];
  }
};

export const getDailyChallengeHistory = (): DailyChallenge[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DAILY_CHALLENGES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

// ----------- PERSONAL LEETCODE SOLUTIONS -----------

export const getStoredSolutions = (): SolutionMap => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SOLUTIONS);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
};

/** Feature flag for the GitHub repo catalog page/import panel. */
export const getStoredRepoCatalogEnabled = (): boolean => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REPO_CATALOG_ENABLED);
    // Opt-in: the catalog stays out of the way unless explicitly enabled from Resource Hub.
    return raw === 'true';
  } catch {
    return false;
  }
};

export const saveSolutions = (solutions: SolutionMap): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SOLUTIONS, JSON.stringify(solutions));
  } catch (e) {
    console.error('Failed to save solutions to storage', e);
  }
};

export const getStreak = (): { current: number; max: number } => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STREAK);
    const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
    const today = new Date().toISOString().split('T')[0];

    let streak = raw ? JSON.parse(raw) : { current: 1, max: 1 };

    if (!lastVisit) {
      localStorage.setItem(STORAGE_KEYS.LAST_VISIT, today);
      localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify({ current: 1, max: 1 }));
      return { current: 1, max: 1 };
    }

    if (lastVisit === today) {
      return streak;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().split('T')[0];

    if (lastVisit === yStr) {
      streak.current += 1;
      streak.max = Math.max(streak.max, streak.current);
    } else {
      streak.current = 1;
    }

    localStorage.setItem(STORAGE_KEYS.LAST_VISIT, today);
    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streak));
    return streak;
  } catch (e) {
    return { current: 1, max: 1 };
  }
};
