export type QuestionType = 'flashcard' | 'mcq' | 'fill-blank' | 'free-text';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type AnswerStatus = 'unseen' | 'correct' | 'incorrect';

export interface ContentItem {
  id: string;
  topic: string;
  subtopic?: string;
  title: string;
  text: string;
  keyPoints: string[];
  keywords: string[];
  imageUrl?: string;
  imageAlt?: string;
  pageRef: number;
}

export interface Question {
  id: string;
  contentId: string;
  topic: string;
  subtopic?: string;
  type: QuestionType;
  question: string;
  answer: string;
  explanation?: string;
  imageUrl?: string;
  imageAlt?: string;
  // MCQ specific
  options?: string[];
  correctOptionIndex?: number;
  // Fill-blank specific
  fullText?: string;
  blankWord?: string;
  // Free-text: acceptable answer variations for fuzzy matching
  acceptableAnswers?: string[];
  keywords: string[];
  difficulty: Difficulty;
}

export interface UserProgress {
  [questionId: string]: {
    status: AnswerStatus;
    lastAttempted?: string;
    attempts: number;
  };
}

export interface TopicConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  category: string;
}

export const TOPIC_CONFIGS: TopicConfig[] = [
  { id: 'jaw-cysts', name: 'Jaw Cysts', description: 'Identify cysts from clinical images, radiographs, and learn removal/management methods', icon: '🦷', color: 'from-pink-400 to-rose-500', category: 'Oral Surgery' },
  { id: 'splinting-trauma', name: 'Splinting & Trauma', description: 'Placing splints, avulsed teeth, broken teeth, fractured tuberosity, trauma charts', icon: '🦷', color: 'from-red-400 to-rose-500', category: 'Oral Surgery' },
  { id: 'bridges', name: 'Bridges', description: 'Bridge types (fixed-fixed, cantilever, resin bonded), faults, failure reasons, and repair', icon: '🌉', color: 'from-blue-400 to-indigo-500', category: 'Prosthodontics' },
  { id: 'dentures', name: 'Dentures', description: 'Denture faults, complaints, care instructions, acrylic faults, and common problems', icon: '🦷', color: 'from-purple-400 to-violet-500', category: 'Prosthodontics' },
  { id: 'partial-dentures', name: 'Partial Denture Design', description: 'Kennedy classification, surveying, support, retention, bracing, reciprocation, connectors', icon: '🔧', color: 'from-teal-400 to-cyan-500', category: 'Prosthodontics' },
  { id: 'crowns-restorations', name: 'Crowns & Restorations', description: 'Crown faults, stained teeth management, reg rim faults, impression faults', icon: '👑', color: 'from-amber-400 to-yellow-500', category: 'Prosthodontics' },
  { id: 'articulators-occlusion', name: 'Articulators & Occlusion', description: 'Articulator types, facebow, occlusion concepts, terminal hinge axis', icon: '⚙️', color: 'from-slate-400 to-gray-500', category: 'Prosthodontics' },
  { id: 'oral-surgery', name: 'Oral Surgery', description: 'Wisdom teeth, OAC, extraction assessment, forceps, suturing, dry socket, post-op instructions', icon: '🔪', color: 'from-red-500 to-orange-500', category: 'Oral Surgery' },
  { id: 'endodontics', name: 'Endodontics', description: 'Broken endo file, failed endo options, root resorption, AAE difficulty assessment', icon: '🦠', color: 'from-green-400 to-emerald-500', category: 'Endodontics' },
  { id: 'radiography', name: 'Radiography', description: 'Taking PAs/BWs/OPTs, rearranging radiographs, auditing, faults, SLOB rule, reporting', icon: '📷', color: 'from-sky-400 to-blue-500', category: 'Radiology' },
  { id: 'radiology-regulations', name: 'Radiology Regulations', description: 'Ionising radiation regulations, IRR99, IRR2000, ALARP, dose limits, film faults', icon: '☢️', color: 'from-yellow-400 to-amber-500', category: 'Radiology' },
  { id: 'prescribing', name: 'Prescribing', description: 'Writing prescriptions, antibiotic regimens, prescription matching for dental conditions', icon: '💊', color: 'from-pink-400 to-rose-500', category: 'Pharmacology' },
  { id: 'medical-emergencies', name: 'Medical Emergencies', description: 'Anaphylaxis, asthma, cardiac, choking, syncope, epilepsy, hypoglycaemia, ABCDE, emergency drugs', icon: '🚨', color: 'from-red-600 to-red-500', category: 'Medical' },
  { id: 'pain-diagnosis', name: 'Pain & Diagnosis', description: 'Pain history, pulpitis types, periapical conditions, neuralgias, TMJPDS, sinusitis, facial pain', icon: '😣', color: 'from-orange-400 to-red-400', category: 'Oral Medicine' },
  { id: 'paediatrics', name: 'Paediatric Dentistry', description: 'Child extractions, sedation, behaviour management, oral health toolkit, consent, delayed eruption', icon: '👶', color: 'from-lime-400 to-green-500', category: 'Paediatrics' },
  { id: 'periodontics', name: 'Periodontics', description: 'BPE readings, pericoronitis, delivering bad news, perio treatment planning', icon: '🩸', color: 'from-rose-400 to-pink-500', category: 'Periodontics' },
  { id: 'infection-control', name: 'Infection Control & H&S', description: 'Health & safety, waste disposal, needlestick policy, unit setup, zoning', icon: '🧤', color: 'from-emerald-400 to-teal-500', category: 'Professional' },
  { id: 'professional-practice', name: 'Professional Practice', description: 'Referral letters, DCP referral, safeguarding, confidentiality, clinical governance, MCA, consent, GDC standards', icon: '📋', color: 'from-indigo-400 to-purple-500', category: 'Professional' },
  { id: 'orthodontics', name: 'Orthodontics', description: 'IOTN grades 3-5, malocclusion assessment', icon: '😁', color: 'from-cyan-400 to-blue-400', category: 'Orthodontics' },
  { id: 'oral-medicine', name: 'Oral Medicine', description: 'Blood tests, dry mouth, oral health survey statistics, dental anomalies, pregnancy', icon: '🩺', color: 'from-violet-400 to-purple-400', category: 'Oral Medicine' },
  { id: 'medical-conditions', name: 'Medical Conditions', description: 'Warfarin patients, bisphosphonates, BRONJ risk assessment', icon: '💉', color: 'from-fuchsia-400 to-pink-400', category: 'Medical' },
  { id: 'missing-tooth', name: 'Missing Tooth Options', description: 'Treatment options for missing teeth - do nothing, partials, bridges, overdentures, implants', icon: '🕳️', color: 'from-stone-400 to-neutral-500', category: 'Prosthodontics' },
  { id: 'fractures-radiographs', name: 'Fractures & Radiographs', description: 'PA mandible, OM, OM30, reverse Townes, submento-vertex views and fracture examples', icon: '💀', color: 'from-zinc-400 to-slate-500', category: 'Oral Surgery' },
  { id: 'denture-questions', name: 'Denture Exam Questions', description: '72 practice questions on dentures, prosthetics, and related lab procedures', icon: '📝', color: 'from-blue-500 to-purple-500', category: 'Prosthodontics' },
];
