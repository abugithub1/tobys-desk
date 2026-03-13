import { ContentItem, Question } from './types';

// ── Pages 11–12: Radiograph Grading, Types, Positioning, Film Faults, Auditing ──

export const content_p11: ContentItem[] = [
  {
    id: 'c11-01',
    topic: 'radiography',
    subtopic: 'Radiograph Grading',
    title: 'Radiograph Quality Grading – Grades 1, 2 and 3',
    text: 'Grade 1: Excellent quality – diagnostically optimal, no faults, correct exposure and positioning, no artefacts. Target standard for all radiographs. Grade 2: Acceptable quality – some minor errors (slight cone-cutting, minor positioning errors, slight over/underexposure) but area of interest still visible and diagnostically useful. Retake NOT required. Grade 3: Unacceptable – not diagnostically useful. Major faults (severe cone-cutting, gross over/underexposure, severe positioning errors, significant artefacts) prevent diagnosis. Retake IS required if clinically justified.',
    keyPoints: [
      'Grade 1 = excellent, diagnostically optimal, target standard',
      'Grade 2 = acceptable, minor errors, still diagnostically useful, NO retake',
      'Grade 3 = unacceptable, major faults, retake required if clinically justified',
      'Minor faults (Grade 2): slight cone-cutting, minor positioning, slight exposure errors',
      'Major faults (Grade 3): severe cone-cutting, gross exposure error, significant artefacts'
    ],
    keywords: ['grade 1', 'grade 2', 'grade 3', 'radiograph quality', 'retake', 'diagnostically optimal'],
    imageUrl: '/images/osce/page11_img03.jpeg',
    imageAlt: 'Periapical radiographs showing Grade 2 quality examples',
    pageRef: 11
  },
  {
    id: 'c11-02',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    title: 'Periapical (PA) Radiographs',
    text: 'Periapical radiographs show the entire tooth from crown to apex including surrounding bone. Used to assess periapical pathology, root morphology, root fractures, periapical abscess/granuloma, root resorption, and alveolar bone levels around individual teeth. Film/sensor placed behind tooth of interest.',
    keyPoints: [
      'Shows entire tooth from crown to apex plus surrounding bone',
      'Assesses periapical pathology, root morphology, root fractures',
      'Detects periapical abscess/granuloma and root resorption',
      'Film/sensor placed behind tooth of interest'
    ],
    keywords: ['periapical', 'PA', 'crown to apex', 'periapical pathology', 'root morphology'],
    imageUrl: '/images/osce/page11_img01.jpeg',
    imageAlt: 'Periapical radiograph showing UL5 region',
    pageRef: 11
  },
  {
    id: 'c11-03',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    title: 'Bitewing (BW) Radiographs',
    text: 'Bitewing radiographs show the crowns and crestal bone of upper and lower teeth simultaneously. Patient bites on a tab or holder. Gold standard for interproximal caries detection. Also assesses crestal alveolar bone levels (horizontal bone loss), detects calculus, and checks existing restorations.',
    keyPoints: [
      'Shows crowns and crestal bone of upper and lower teeth simultaneously',
      'Patient bites on a tab or holder',
      'Gold standard for interproximal caries detection',
      'Assesses crestal alveolar bone levels (horizontal bone loss)',
      'Detects calculus and checks existing restorations'
    ],
    keywords: ['bitewing', 'BW', 'interproximal caries', 'crestal bone', 'gold standard'],
    imageUrl: '/images/osce/page11_img07.jpeg',
    imageAlt: 'Bitewing radiograph showing premolar/molar crowns',
    pageRef: 11
  },
  {
    id: 'c11-04',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    title: 'OPT (Orthopantomogram / DPT) Radiographs',
    text: 'An OPT (also called DPT or panoramic radiograph) shows the entire mandible, maxilla, both TMJs, and all teeth in a single image. Uses a rotating X-ray source and detector. Indications: assessment of third molars, trauma/fractures, cysts/tumours, orthodontic assessment, overview of dentition. Lower resolution than intraoral films so not ideal for caries detection.',
    keyPoints: [
      'Shows entire mandible, maxilla, both TMJs, and all teeth in one image',
      'Uses rotating X-ray source and detector',
      'Indications: third molars, trauma, cysts, tumours, orthodontics',
      'Lower resolution than intraoral films – not ideal for caries detection',
      'Also called DPT or panoramic radiograph'
    ],
    keywords: ['OPT', 'DPT', 'panoramic', 'orthopantomogram', 'rotating'],
    imageUrl: '/images/osce/page11_img11.jpeg',
    imageAlt: 'OPT radiograph showing full dental panoramic view',
    pageRef: 11
  },
  {
    id: 'c11-05',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    title: 'Periapical Parallel Technique',
    text: 'In the paralleling technique the film/sensor is placed parallel to the long axis of the tooth and the X-ray beam is directed perpendicular to both the film and the tooth. A film holder (e.g. Rinn holder) with an aiming ring is used. Produces the most accurate image with minimal distortion. Gold standard for periapical radiographs.',
    keyPoints: [
      'Film/sensor placed parallel to long axis of tooth',
      'X-ray beam directed perpendicular to both film and tooth',
      'Uses a film holder with aiming ring (e.g. Rinn holder)',
      'Most accurate image with minimal distortion',
      'Gold standard technique for periapical radiographs'
    ],
    keywords: ['parallel technique', 'perpendicular', 'Rinn holder', 'aiming ring', 'gold standard'],
    imageUrl: '/images/osce/page12_img01.jpeg',
    imageAlt: 'Patient positioned for periapical parallel technique',
    pageRef: 12
  },
  {
    id: 'c11-06',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    title: 'Bisecting Angle Technique',
    text: 'The X-ray beam is directed perpendicular to an imaginary line that bisects the angle between the long axis of the tooth and the film/sensor plane. Film placed as close to tooth as possible. Used when parallel technique is not possible (e.g. shallow palate, gagging). More prone to distortion – elongation (beam too shallow) or foreshortening (beam too steep).',
    keyPoints: [
      'Beam directed perpendicular to the bisecting line',
      'Bisecting line = imaginary line bisecting angle between tooth axis and film',
      'Used when parallel technique not possible (shallow palate, gagging)',
      'Elongation if beam too shallow; foreshortening if beam too steep',
      'More prone to distortion than parallel technique'
    ],
    keywords: ['bisecting angle', 'elongation', 'foreshortening', 'distortion', 'shallow palate'],
    imageUrl: '/images/osce/page12_img02.jpeg',
    imageAlt: 'Patient positioned for bisecting angle technique',
    pageRef: 12
  },
  {
    id: 'c11-07',
    topic: 'radiography',
    subtopic: 'Film Faults',
    title: 'Radiograph Faults – Bent Film and Coned Off',
    text: 'Bent Film: Film/sensor bent during placement causing distortion – affected area appears stretched or warped. Avoid by careful handling and correct placement. Coned Off: Part of image unexposed (appears white/clear) because X-ray beam not correctly aimed at film. The PID/collimator was misaligned. Common fault with bisecting angle technique where no aiming ring is used.',
    keyPoints: [
      'Bent film = film bent during placement causing stretching/warping',
      'Coned off = part of image unexposed due to misaligned X-ray beam',
      'Coned off appears as white/clear unexposed area',
      'Coned off common with bisecting angle technique (no aiming ring)',
      'Avoid bent film by careful handling and correct placement'
    ],
    keywords: ['bent film', 'coned off', 'PID', 'collimator', 'distortion', 'unexposed'],
    imageUrl: '/images/osce/page12_img03.jpeg',
    imageAlt: 'Examples of bent film and coned off radiograph faults',
    pageRef: 12
  },
  {
    id: 'c11-08',
    topic: 'radiography',
    subtopic: 'Auditing',
    title: 'Radiograph Auditing',
    text: 'Auditing is a tool for directly improving healthcare outcomes and ensuring patient care is in line with best standards. Aims to implement change if necessary. Collects routine data, determines whether the right thing is being done, reviews what clinicians actually do. Four-stage audit cycle: (1) prep & planning, (2) measuring performance, (3) implementing change, (4) sustaining improvement. Commissioned on behalf of NHS England. Healthcare professionals themselves carry out the audit. Audit examines: justification for procedures, film reject rate, lost films/reports.',
    keyPoints: [
      'Improves healthcare outcomes and ensures best practice',
      'Four-stage cycle: prep & planning, measuring performance, implementing change, sustaining improvement',
      'Collects routine data and reviews what clinicians actually do',
      'Commissioned by NHS England; carried out by healthcare professionals themselves',
      'Examines: justification for procedures, film reject rate, lost films/reports'
    ],
    keywords: ['audit', 'audit cycle', 'four stages', 'film reject rate', 'NHS England'],
    pageRef: 12
  },
];

export const questions_p11: Question[] = [
  // ── c11-01: Radiograph Grading ──
  {
    id: 'q11-001',
    contentId: 'c11-01',
    topic: 'radiography',
    subtopic: 'Radiograph Grading',
    type: 'flashcard',
    question: 'Describe the three grades of radiograph quality.',
    answer: 'Grade 1: Excellent – diagnostically optimal, no faults. Grade 2: Acceptable – minor errors but still diagnostically useful, no retake needed. Grade 3: Unacceptable – not diagnostically useful, retake required if clinically justified.',
    keywords: ['grade 1', 'grade 2', 'grade 3', 'quality'],
    difficulty: 'easy'
  },
  {
    id: 'q11-002',
    contentId: 'c11-01',
    topic: 'radiography',
    subtopic: 'Radiograph Grading',
    type: 'mcq',
    question: 'A radiograph has slight cone-cutting but the area of interest is still clearly visible. What grade is it?',
    answer: 'Grade 2',
    options: ['Grade 1', 'Grade 2', 'Grade 3', 'Unclassifiable'],
    correctOptionIndex: 1,
    explanation: 'Grade 2 has minor faults (e.g. slight cone-cutting) but remains diagnostically useful – no retake needed.',
    keywords: ['grade 2', 'cone-cutting', 'acceptable'],
    difficulty: 'medium'
  },
  {
    id: 'q11-003',
    contentId: 'c11-01',
    topic: 'radiography',
    subtopic: 'Radiograph Grading',
    type: 'mcq',
    question: 'Which grade of radiograph requires a retake if clinically justified?',
    answer: 'Grade 3',
    options: ['Grade 1', 'Grade 2', 'Grade 3', 'All grades'],
    correctOptionIndex: 2,
    explanation: 'Grade 3 is unacceptable and not diagnostically useful, so a retake is required if clinically justified.',
    keywords: ['grade 3', 'retake'],
    difficulty: 'easy'
  },
  {
    id: 'q11-004',
    contentId: 'c11-01',
    topic: 'radiography',
    subtopic: 'Radiograph Grading',
    type: 'fill-blank',
    question: 'Grade 1 radiographs are of _____ quality and are diagnostically _____.',
    answer: 'excellent; optimal',
    fullText: 'Grade 1 radiographs are of excellent quality and are diagnostically optimal.',
    blankWord: 'excellent; optimal',
    keywords: ['grade 1', 'excellent', 'optimal'],
    difficulty: 'easy'
  },
  {
    id: 'q11-005',
    contentId: 'c11-01',
    topic: 'radiography',
    subtopic: 'Radiograph Grading',
    type: 'free-text',
    question: 'Name three major faults that would make a radiograph Grade 3.',
    answer: 'Severe cone-cutting, gross over/underexposure, severe positioning errors, significant artefacts.',
    acceptableAnswers: ['severe cone-cutting', 'gross overexposure', 'gross underexposure', 'severe positioning errors', 'significant artefacts'],
    keywords: ['grade 3', 'cone-cutting', 'overexposure', 'positioning'],
    difficulty: 'medium'
  },

  // ── c11-02: Periapical Radiographs ──
  {
    id: 'q11-006',
    contentId: 'c11-02',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'flashcard',
    question: 'What does a periapical (PA) radiograph show?',
    answer: 'The entire tooth from crown to apex including surrounding bone. Used to assess periapical pathology, root morphology, root fractures, periapical abscess/granuloma, root resorption, and alveolar bone levels.',
    imageUrl: '/images/osce/page11_img01.jpeg',
    imageAlt: 'Periapical radiograph showing UL5 region',
    keywords: ['periapical', 'PA', 'crown to apex'],
    difficulty: 'easy'
  },
  {
    id: 'q11-007',
    contentId: 'c11-02',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'mcq',
    question: 'Which radiograph type shows the entire tooth from crown to apex plus surrounding bone?',
    answer: 'Periapical (PA)',
    options: ['Bitewing', 'Periapical (PA)', 'OPT/DPT', 'Lateral cephalogram'],
    correctOptionIndex: 1,
    keywords: ['periapical', 'crown to apex'],
    difficulty: 'easy'
  },
  {
    id: 'q11-008',
    contentId: 'c11-02',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'free-text',
    question: 'List four clinical indications for taking a periapical radiograph.',
    answer: 'Periapical pathology, root morphology assessment, root fractures, periapical abscess/granuloma, root resorption, alveolar bone levels.',
    acceptableAnswers: ['periapical pathology', 'root morphology', 'root fractures', 'periapical abscess', 'root resorption', 'alveolar bone levels'],
    keywords: ['periapical', 'indications'],
    difficulty: 'medium'
  },

  // ── c11-03: Bitewing Radiographs ──
  {
    id: 'q11-009',
    contentId: 'c11-03',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'flashcard',
    question: 'What is the primary use of a bitewing radiograph?',
    answer: 'Gold standard for detecting interproximal caries. Also assesses crestal alveolar bone levels (horizontal bone loss), detects calculus, and checks existing restorations.',
    keywords: ['bitewing', 'interproximal caries', 'gold standard'],
    difficulty: 'easy'
  },
  {
    id: 'q11-010',
    contentId: 'c11-03',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'mcq',
    question: 'Which radiograph type is the gold standard for detecting interproximal caries?',
    answer: 'Bitewing',
    options: ['Periapical', 'Bitewing', 'OPT', 'Occlusal'],
    correctOptionIndex: 1,
    keywords: ['bitewing', 'gold standard', 'caries'],
    difficulty: 'easy'
  },
  {
    id: 'q11-011',
    contentId: 'c11-03',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'fill-blank',
    question: 'Bitewing radiographs show the _____ and _____ bone of upper and lower teeth simultaneously.',
    answer: 'crowns; crestal',
    fullText: 'Bitewing radiographs show the crowns and crestal bone of upper and lower teeth simultaneously.',
    blankWord: 'crowns; crestal',
    keywords: ['bitewing', 'crowns', 'crestal bone'],
    difficulty: 'medium'
  },
  {
    id: 'q11-012',
    contentId: 'c11-03',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'free-text',
    question: 'What type of bone loss can bitewing radiographs assess?',
    answer: 'Horizontal bone loss – bitewings show crestal alveolar bone levels.',
    acceptableAnswers: ['horizontal bone loss', 'crestal bone loss', 'alveolar bone loss'],
    keywords: ['bitewing', 'horizontal bone loss', 'crestal'],
    difficulty: 'medium'
  },

  // ── c11-04: OPT ──
  {
    id: 'q11-013',
    contentId: 'c11-04',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'flashcard',
    question: 'What structures does an OPT (DPT / panoramic radiograph) show?',
    answer: 'The entire mandible, maxilla, both TMJs, and all teeth in a single image. Uses a rotating X-ray source and detector.',
    imageUrl: '/images/osce/page11_img11.jpeg',
    imageAlt: 'OPT radiograph showing full panoramic view',
    keywords: ['OPT', 'DPT', 'panoramic'],
    difficulty: 'easy'
  },
  {
    id: 'q11-014',
    contentId: 'c11-04',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'mcq',
    question: 'Why is an OPT not ideal for detecting caries?',
    answer: 'Lower resolution than intraoral films',
    options: ['Too much radiation dose', 'Lower resolution than intraoral films', 'Only shows one arch', 'Cannot image posterior teeth'],
    correctOptionIndex: 1,
    keywords: ['OPT', 'resolution', 'caries'],
    difficulty: 'medium'
  },
  {
    id: 'q11-015',
    contentId: 'c11-04',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'free-text',
    question: 'List four indications for requesting an OPT radiograph.',
    answer: 'Assessment of third molars, trauma/fractures, cysts/tumours, orthodontic assessment, overview of dentition.',
    acceptableAnswers: ['third molars', 'wisdom teeth', 'trauma', 'fractures', 'cysts', 'tumours', 'orthodontic assessment'],
    keywords: ['OPT', 'indications'],
    difficulty: 'medium'
  },
  {
    id: 'q11-016',
    contentId: 'c11-04',
    topic: 'radiography',
    subtopic: 'Radiograph Types',
    type: 'fill-blank',
    question: 'An OPT uses a _____ X-ray source and detector to capture the entire dentition.',
    answer: 'rotating',
    fullText: 'An OPT uses a rotating X-ray source and detector to capture the entire dentition.',
    blankWord: 'rotating',
    keywords: ['OPT', 'rotating'],
    difficulty: 'medium'
  },

  // ── c11-05: Parallel Technique ──
  {
    id: 'q11-017',
    contentId: 'c11-05',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    type: 'flashcard',
    question: 'Describe the periapical parallel technique.',
    answer: 'Film/sensor placed parallel to long axis of tooth, X-ray beam directed perpendicular to both film and tooth. Uses a Rinn holder with aiming ring. Gold standard – produces most accurate image with minimal distortion.',
    imageUrl: '/images/osce/page12_img01.jpeg',
    imageAlt: 'Patient positioned for periapical parallel technique',
    keywords: ['parallel technique', 'perpendicular', 'Rinn holder'],
    difficulty: 'medium'
  },
  {
    id: 'q11-018',
    contentId: 'c11-05',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    type: 'mcq',
    question: 'In the paralleling technique, the X-ray beam is directed at what angle to the film and tooth?',
    answer: 'Perpendicular (right angles)',
    options: ['45 degrees', 'Perpendicular (right angles)', '30 degrees', 'Parallel'],
    correctOptionIndex: 1,
    keywords: ['parallel technique', 'perpendicular'],
    difficulty: 'medium'
  },
  {
    id: 'q11-019',
    contentId: 'c11-05',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    type: 'fill-blank',
    question: 'The paralleling technique is the _____ _____ for periapical radiographs.',
    answer: 'gold standard',
    fullText: 'The paralleling technique is the gold standard for periapical radiographs.',
    blankWord: 'gold standard',
    keywords: ['parallel technique', 'gold standard'],
    difficulty: 'easy'
  },
  {
    id: 'q11-020',
    contentId: 'c11-05',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    type: 'free-text',
    question: 'What holder is commonly used for the paralleling technique?',
    answer: 'A Rinn holder (film holder) with an aiming ring to ensure correct alignment of the X-ray beam.',
    acceptableAnswers: ['Rinn holder', 'film holder with aiming ring', 'Rinn holder with aiming ring'],
    keywords: ['Rinn holder', 'aiming ring'],
    difficulty: 'medium'
  },

  // ── c11-06: Bisecting Angle Technique ──
  {
    id: 'q11-021',
    contentId: 'c11-06',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    type: 'flashcard',
    question: 'Describe the bisecting angle technique for periapical radiographs.',
    answer: 'X-ray beam directed perpendicular to an imaginary line bisecting the angle between the long axis of the tooth and the film plane. Used when parallel technique not possible (shallow palate, gagging). Prone to elongation or foreshortening.',
    imageUrl: '/images/osce/page12_img02.jpeg',
    imageAlt: 'Patient positioned for bisecting angle technique',
    keywords: ['bisecting angle', 'elongation', 'foreshortening'],
    difficulty: 'medium'
  },
  {
    id: 'q11-022',
    contentId: 'c11-06',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    type: 'mcq',
    question: 'When would you use the bisecting angle technique instead of the parallel technique?',
    answer: 'When parallel technique not possible (e.g. shallow palate, gagging)',
    options: ['For all posterior teeth', 'When parallel technique not possible (e.g. shallow palate, gagging)', 'For bitewing radiographs', 'When higher resolution is needed'],
    correctOptionIndex: 1,
    keywords: ['bisecting angle', 'shallow palate', 'gagging'],
    difficulty: 'medium'
  },
  {
    id: 'q11-023',
    contentId: 'c11-06',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    type: 'mcq',
    question: 'What types of distortion are associated with the bisecting angle technique?',
    answer: 'Elongation and foreshortening',
    options: ['Magnification and minification', 'Elongation and foreshortening', 'Coning off and double exposure', 'Blurring and ghosting'],
    correctOptionIndex: 1,
    explanation: 'Beam too shallow = elongation; beam too steep = foreshortening.',
    keywords: ['bisecting angle', 'elongation', 'foreshortening'],
    difficulty: 'medium'
  },
  {
    id: 'q11-024',
    contentId: 'c11-06',
    topic: 'radiography',
    subtopic: 'Radiograph Positioning',
    type: 'free-text',
    question: 'In the bisecting angle technique, where is the X-ray beam directed?',
    answer: 'Perpendicular to an imaginary line that bisects the angle between the long axis of the tooth and the film/sensor plane.',
    acceptableAnswers: ['perpendicular to the bisecting line', 'at right angles to the bisector'],
    keywords: ['bisecting angle', 'perpendicular', 'bisecting line'],
    difficulty: 'hard'
  },

  // ── c11-07: Film Faults ──
  {
    id: 'q11-025',
    contentId: 'c11-07',
    topic: 'radiography',
    subtopic: 'Film Faults',
    type: 'flashcard',
    question: 'What is a "coned off" radiograph?',
    answer: 'Part of the image is unexposed (appears white/clear) because the X-ray beam was not aimed at the film correctly. The PID/collimator was misaligned. Common fault with bisecting angle technique.',
    imageUrl: '/images/osce/page12_img04.jpeg',
    imageAlt: 'Coned off radiograph fault',
    keywords: ['coned off', 'unexposed', 'PID'],
    difficulty: 'easy'
  },
  {
    id: 'q11-026',
    contentId: 'c11-07',
    topic: 'radiography',
    subtopic: 'Film Faults',
    type: 'flashcard',
    question: 'What is a "bent film" fault on a radiograph?',
    answer: 'Film/sensor bent during placement causing distortion – affected area appears stretched or warped. Avoided by careful handling and correct placement.',
    imageUrl: '/images/osce/page12_img03.jpeg',
    imageAlt: 'Bent film radiograph fault',
    keywords: ['bent film', 'distortion', 'warped'],
    difficulty: 'easy'
  },
  {
    id: 'q11-027',
    contentId: 'c11-07',
    topic: 'radiography',
    subtopic: 'Film Faults',
    type: 'mcq',
    question: 'A radiograph shows a white/clear unexposed area on one side. What fault is this?',
    answer: 'Coned off',
    options: ['Bent film', 'Coned off', 'Double exposure', 'Fogging'],
    correctOptionIndex: 1,
    keywords: ['coned off', 'unexposed', 'white area'],
    difficulty: 'easy'
  },
  {
    id: 'q11-028',
    contentId: 'c11-07',
    topic: 'radiography',
    subtopic: 'Film Faults',
    type: 'mcq',
    question: 'Which technique is coning off most commonly associated with?',
    answer: 'Bisecting angle technique',
    options: ['Parallel technique', 'Bisecting angle technique', 'Occlusal technique', 'OPT'],
    correctOptionIndex: 1,
    explanation: 'Coning off is common with the bisecting angle technique because no aiming ring is used.',
    keywords: ['coned off', 'bisecting angle'],
    difficulty: 'medium'
  },

  // ── c11-08: Auditing ──
  {
    id: 'q11-029',
    contentId: 'c11-08',
    topic: 'radiography',
    subtopic: 'Auditing',
    type: 'flashcard',
    question: 'What is the purpose of a radiograph audit?',
    answer: 'To directly improve healthcare outcomes and ensure patient care meets best standards. Collects routine data, reviews what clinicians do, and aims to implement change if necessary.',
    keywords: ['audit', 'quality improvement', 'best standards'],
    difficulty: 'medium'
  },
  {
    id: 'q11-030',
    contentId: 'c11-08',
    topic: 'radiography',
    subtopic: 'Auditing',
    type: 'mcq',
    question: 'How many stages are in the audit cycle?',
    answer: 'Four',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctOptionIndex: 2,
    explanation: 'The four stages: (1) prep & planning, (2) measuring performance, (3) implementing change, (4) sustaining improvement.',
    keywords: ['audit cycle', 'four stages'],
    difficulty: 'easy'
  },
  {
    id: 'q11-031',
    contentId: 'c11-08',
    topic: 'radiography',
    subtopic: 'Auditing',
    type: 'free-text',
    question: 'Name the four stages of the audit cycle.',
    answer: '(1) Prep and planning, (2) Measuring performance, (3) Implementing change, (4) Sustaining improvement.',
    acceptableAnswers: ['prep and planning', 'measuring performance', 'implementing change', 'sustaining improvement'],
    keywords: ['audit cycle', 'prep', 'measuring', 'implementing', 'sustaining'],
    difficulty: 'medium'
  },
  {
    id: 'q11-032',
    contentId: 'c11-08',
    topic: 'radiography',
    subtopic: 'Auditing',
    type: 'fill-blank',
    question: 'The audit cycle: prep & planning, _____ performance, implementing change, sustaining _____.',
    answer: 'measuring; improvement',
    fullText: 'The audit cycle: prep & planning, measuring performance, implementing change, sustaining improvement.',
    blankWord: 'measuring; improvement',
    keywords: ['audit cycle', 'measuring', 'improvement'],
    difficulty: 'medium'
  },
  {
    id: 'q11-033',
    contentId: 'c11-08',
    topic: 'radiography',
    subtopic: 'Auditing',
    type: 'free-text',
    question: 'What three things does a radiograph audit specifically examine?',
    answer: 'Justification for procedures, film reject rate, and lost films/reports.',
    acceptableAnswers: ['justification for procedures', 'film reject rate', 'lost films', 'lost reports'],
    keywords: ['audit', 'justification', 'film reject rate', 'lost films'],
    difficulty: 'medium'
  },
  {
    id: 'q11-034',
    contentId: 'c11-08',
    topic: 'radiography',
    subtopic: 'Auditing',
    type: 'mcq',
    question: 'Who carries out radiograph audits in the NHS?',
    answer: 'Healthcare professionals themselves',
    options: ['External auditors from the CQC', 'Healthcare professionals themselves', 'Hospital management only', 'The General Dental Council'],
    correctOptionIndex: 1,
    explanation: 'Audits are commissioned on behalf of NHS England but healthcare professionals themselves carry out the audit.',
    keywords: ['audit', 'healthcare professionals', 'NHS England'],
    difficulty: 'medium'
  },
];
