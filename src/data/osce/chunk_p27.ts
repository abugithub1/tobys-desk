import { ContentItem, Question } from './types';

// Pages 27-28: Periapicals/Bitewings, OPT, Infection Control, Blood Tests, Paeds GA Consent

export const content_p27: ContentItem[] = [
  // ── Periapicals ──────────────────────────────────────────
  {
    id: 'c27-01',
    topic: 'radiography',
    subtopic: 'Periapicals',
    title: 'Periapical Radiographs – Indications & Technique',
    text: 'Periapicals use the paralleling technique: film and tooth parallel, beam at 90 degrees, film and tooth not close together. Indications: apical infection/inflammation, periodontal assessment, trauma, unerupted teeth assessment, root shape/number before extractions, endodontic procedures, apical surgery, cyst/lesion evaluation, implant post-op. Placement: smooth white surface towards tube head, embossed dot to occlusal surface. Anterior teeth – film vertical; posterior – film horizontal. Bite block in contact with tooth edge, aiming ring ensuring cone parallel vertically and horizontally. Generally size 2.',
    keyPoints: [
      'Paralleling technique: film and tooth parallel, beam at 90 degrees',
      'Film and tooth are NOT close together in paralleling technique',
      'Indications include apical infection, periodontal assessment, trauma, unerupted teeth, root assessment, endo procedures, cyst evaluation, implant post-op',
      'Smooth white surface towards tube head, embossed dot to occlusal surface',
      'Anterior teeth: long axis of film vertical; Posterior: horizontal',
      'Generally size 2 film',
      'Tube positioned in aiming ring, cone parallel both vertically and horizontally'
    ],
    keywords: ['periapical', 'paralleling technique', 'beam 90 degrees', 'size 2', 'embossed dot', 'aiming ring'],
    imageUrl: '/images/osce/page27_img01.webp',
    imageAlt: 'Paralleling technique diagram showing film and tooth parallel with beam at 90 degrees',
    pageRef: 27
  },
  {
    id: 'c27-02',
    topic: 'radiography',
    subtopic: 'Periapical Image Evaluation',
    title: 'Periapical Image Evaluation Criteria',
    text: 'A good periapical radiograph should show: no evidence of bending of teeth and periapical region of interest, no foreshortening/elongation, no horizontal overlap, should not obscure pulp/root canals. Should demonstrate all teeth of interest. Should be 3mm of periapical bone visible to enable assessment of apical anatomy. Should be good density and adequate contrast between enamel and dentine. No pressure marks on film, no emulsion scratches. No roller marks. No evidence of film fog. No chemical streaks/splashes/contamination. No evidence of inadequate fixation/washing.',
    keyPoints: [
      'No bending of teeth or periapical region',
      'No foreshortening or elongation',
      'No horizontal overlap',
      'Should not obscure pulp/root canals',
      '3mm of periapical bone must be visible',
      'Good density and adequate contrast between enamel and dentine',
      'No pressure marks, emulsion scratches, roller marks, film fog',
      'No chemical streaks/splashes/contamination or inadequate fixation/washing'
    ],
    keywords: ['periapical', 'image evaluation', '3mm periapical bone', 'foreshortening', 'elongation', 'horizontal overlap', 'film fog'],
    pageRef: 27
  },
  // ── Bitewings ────────────────────────────────────────────
  {
    id: 'c27-03',
    topic: 'radiography',
    subtopic: 'Bitewings',
    title: 'Bitewing Radiographs – Indications & Technique',
    text: 'Indications for bitewings: caries upper/lower premolars/molars, monitor progression of caries, assessing existing restorations, extend of caries either suspected or unsuspected, approximal caries, overlying edges of restorations, assessing bone levels. Generally size 2 for adults, young child one size 0 plate needed. Taking x-ray: anterior edge should be located to include 4-5 interproximal spaces. Plate should be in contact with posterior teeth. Patient bites down. Image evaluation: no horizontal overlap, 3-4 to 7-8 spaces visible, periodontal bone levels visible, buccal and lingual cusps superimposed, occlusal plane horizontal.',
    keyPoints: [
      'Indications: caries detection/monitoring, assessing restorations, approximal caries, bone levels',
      'Size 2 for adults, size 0 for young children',
      'Anterior edge should include 4-5 interproximal spaces; plate contacts posterior teeth',
      'Good image: no horizontal overlap, 3-4 to 7-8 spaces, buccal/lingual cusps superimposed, occlusal plane horizontal'
    ],
    keywords: ['bitewing', 'interproximal', 'caries', 'size 2', 'bone levels', 'cusps superimposed', 'occlusal plane'],
    pageRef: 27
  },
  // ── Vertical Bitewings ──────────────────────────────────
  {
    id: 'c27-04',
    topic: 'radiography',
    subtopic: 'Vertical Bitewings',
    title: 'Vertical Bitewings',
    text: 'For an adult with excessive bone loss greater than 6mm, 2 vertical bitewings on each side may be needed. First image to include teeth 345 and second to include 678.',
    keyPoints: [
      'Indicated when bone loss exceeds 6mm',
      'Two vertical bitewings needed per side',
      'First image includes teeth 3, 4, 5',
      'Second image includes teeth 6, 7, 8'
    ],
    keywords: ['vertical bitewing', 'bone loss', '6mm', 'excessive bone loss'],
    pageRef: 27
  },
  // ── OPT ──────────────────────────────────────────────────
  {
    id: 'c27-05',
    topic: 'radiography',
    subtopic: 'OPT',
    title: 'OPT (Orthopantomogram) – Indications & Positioning',
    text: 'OPT indications: ortho assessment, mandibular fracture, large pathological lesions (cysts/tumours), severe gagging/trismus, third molar assessment, gross decay, implant assessment, TMJ demonstration, perio pocketing >6mm in >1 quadrant, bony lesion/unerupted tooth not demonstrated intra-orally. Contraindicated for children unable to keep still 10-20 sec or patients with uncontrollable involuntary movement. Positioning: shoulders relaxed, head between clamps, chin on support, incisors in grooves on bite block. Stretch neck, tilt head forward (forehead slightly forward of chin). Median sagittal plane vertical, Frankfort plane parallel to floor, AP light on canine. Close lips, swallow, tongue on roof of mouth.',
    keyPoints: [
      'Indications: ortho assessment, mandibular fracture, large lesions, gagging/trismus, third molars, implants, TMJ, perio >6mm in >1 quadrant',
      'NOT for children unable to keep still 10-20 sec or uncontrollable involuntary movement',
      'Frankfort plane parallel to floor; median sagittal plane vertical; AP light on canine',
      'Stretch neck, tilt head forward (forehead slightly forward of chin)',
      'Close lips, swallow, tongue on roof of mouth'
    ],
    keywords: ['OPT', 'orthopantomogram', 'Frankfort plane', 'mandibular fracture', 'TMJ', 'sagittal plane', 'canine light'],
    imageUrl: '/images/osce/page27_img02.webp',
    imageAlt: 'Panoramic bony anatomy diagram with labelled landmarks on OPT',
    pageRef: 27
  },
  // ── Panoramic Bony Anatomy ──────────────────────────────
  {
    id: 'c27-06',
    topic: 'radiography',
    subtopic: 'Panoramic Bony Anatomy',
    title: 'Panoramic Bony Anatomy Landmarks on OPT',
    text: 'Key landmarks on OPT: 1. Nasal septum, 2. Nasal cavity, 3. Inferior concha, 4. Anterior nasal spine, 5. Infra-orbital rim, 6. Infra-orbital canal, 7. Floor of nose/hard palate, 8. Zygomatic buttress, 9. Zygomatic arch, 10. Pterygomaxillary fissure, 11. Lateral pterygoid plate, 12. Articular eminence, 13. External auditory meatus, 14. Styloid process, 15. Floor of nose/hard palate, 16. Sigmoid notch, 17. Cervical vertebrae, 18. Foramen transversarium, 19. External oblique ridge, 20. Mandibular foramen, 21. Inferior alveolar canal, 22. Mental foramen, 23. Bony cortex of inferior border of mandible, 24. Antigonial notch, 25. Hyoid bone, 26. Coronoid process.',
    keyPoints: [
      'Midface: nasal septum, nasal cavity, inferior concha, anterior nasal spine, infra-orbital rim/canal',
      'Maxilla: floor of nose/hard palate, zygomatic buttress, zygomatic arch, pterygomaxillary fissure, lateral pterygoid plate',
      'TMJ area: articular eminence, external auditory meatus, styloid process',
      'Mandible: external oblique ridge, mandibular foramen, inferior alveolar canal, mental foramen, antigonial notch, coronoid process, sigmoid notch',
      'Other: cervical vertebrae, foramen transversarium, hyoid bone'
    ],
    keywords: ['panoramic anatomy', 'OPT landmarks', 'mental foramen', 'inferior alveolar canal', 'sigmoid notch', 'coronoid process', 'zygomatic arch'],
    imageUrl: '/images/osce/page27_img02.webp',
    imageAlt: 'Panoramic bony anatomy with 26 labelled landmarks',
    pageRef: 27
  },
  // ── Infection Control in Radiography ────────────────────
  {
    id: 'c27-07',
    topic: 'infection-control',
    subtopic: 'Radiography Infection Control',
    title: 'Infection Control During Radiographic Procedures',
    text: 'Wear gloves during all radiographic procedures and when handling contaminated items. Change gloves after every patient. Open barrier envelopes without touching film, drop onto clean surface. Remove gloves to process plate. New gloves to disinfect work surfaces/cassettes. Discard contaminated waste in clinical waste bag. All non-disposable holders, bite blocks and bite pegs must be washed and autoclaved. Wash hands.',
    keyPoints: [
      'Gloves during all radiographic procedures; change after every patient',
      'Open barrier envelopes without touching film; drop onto clean surface',
      'Remove gloves to process plate; new gloves to disinfect surfaces',
      'Contaminated waste in clinical waste bag; non-disposable holders/bite blocks autoclaved'
    ],
    keywords: ['infection control', 'radiography', 'gloves', 'barrier envelopes', 'autoclave', 'clinical waste'],
    pageRef: 28
  },
  // ── Oral Med Blood Tests ────────────────────────────────
  {
    id: 'c27-08',
    topic: 'oral-medicine',
    subtopic: 'Blood Tests',
    title: 'Oral Medicine Blood Tests – Normal Ranges',
    text: 'Normal ranges: APTT 25-35 sec (prolonged: Vit K deficiency, warfarin, Von Willebrand\'s, haemophilia, liver failure). Bilirubin 0.03mg/dL (raised: Gilbert\'s, liver damage). CRP <0.5mg/dL (non-specific marker; raised in liver/kidney failure). ESR 0.20 (F) 0-15 (M) (raised: myeloma, SLE, arthritis, IBD). Fasting glucose 4-6mmol/L. Hb 12-16 (F) 14-17 (M) (low: anaemias, nutritional deficiencies, bone marrow problems, kidney failure, sickle cell; high: lung disease, polycythemia, EPO abuse). INR 2-3. Platelets 150-350 x10^3/uL (decreased: thrombocytopenia, liver failure, aplastic anaemia). PT 11-13 sec (prolonged: Vit K deficiency, warfarin, liver failure). Thrombin 18-24 sec (prolonged: heparin, fibrinogen deficiency).',
    keyPoints: [
      'APTT 25-35 sec (prolonged: Vit K deficiency, warfarin, Von Willebrand\'s, haemophilia, liver failure)',
      'Bilirubin 0.03mg/dL; CRP <0.5mg/dL (non-specific marker)',
      'ESR 0.20 (F) 0-15 (M); Fasting glucose 4-6mmol/L; INR 2-3',
      'Hb 12-16 (F) 14-17 (M) – low in anaemias, high in polycythemia',
      'Platelets 150-350 x10^3/uL; PT 11-13 sec; Thrombin 18-24 sec'
    ],
    keywords: ['blood tests', 'APTT', 'INR', 'PT', 'ESR', 'CRP', 'platelets', 'haemoglobin', 'bilirubin', 'thrombin', 'fasting glucose'],
    pageRef: 28
  },
  // ── Paeds GA Consent ────────────────────────────────────
  {
    id: 'c27-09',
    topic: 'paediatrics',
    subtopic: 'GA Consent',
    title: 'Paediatric GA Consent – Who Can Consent?',
    text: 'Check patient D.O.B. Other options: LA/RA. Key date 1/12/2003: if child born BEFORE this date and dad not married to mum, dad CANNOT consent. After this date, dad can consent if on birth certificate. Over 16: entitled to consent to own treatment (overruled only in exceptional circumstances). Under 16: presumed to lack capacity but can consent if Gillick competent; otherwise someone with parental responsibility consents. Court of Protection (Mental Capacity Act 2005) can overrule refusal if death/severe permanent injury may result. Courts can overrule parental refusal if treatment is in child\'s best interests.',
    keyPoints: [
      'Check D.O.B. first; other options LA/RA',
      'Key date 1/12/2003: unmarried fathers cannot consent for children born before this date',
      'After 1/12/2003: father can consent if on birth certificate',
      'Over 16 can consent; under 16 presumed to lack capacity unless Gillick competent',
      'Court of Protection (MCA 2005) can overrule refusal if death/severe injury may result',
      'Courts can overrule parental refusal if treatment in child\'s best interests'
    ],
    keywords: ['consent', 'paediatric', 'Gillick competent', 'parental responsibility', 'Court of Protection', 'Mental Capacity Act', '1/12/2003', 'GA consent'],
    pageRef: 28
  }
];

// ============================================================
// QUESTIONS
// ============================================================

export const questions_p27: Question[] = [
  // ── c27-01: Periapical Technique ─────────────────────────
  {
    id: 'q27-001',
    contentId: 'c27-01',
    topic: 'radiography',
    subtopic: 'Periapicals',
    type: 'mcq',
    question: 'In the paralleling technique for periapical radiographs, what is the relationship between the beam and the film?',
    answer: 'The beam is directed at 90 degrees to both the film and the tooth, which are parallel to each other.',
    options: [
      'Beam at 90 degrees, film and tooth parallel',
      'Beam at 45 degrees, film and tooth parallel',
      'Beam at 90 degrees, film and tooth perpendicular',
      'Beam at 60 degrees, film touching tooth'
    ],
    correctOptionIndex: 0,
    keywords: ['paralleling', 'beam', '90 degrees', 'periapical'],
    difficulty: 'easy'
  },
  {
    id: 'q27-002',
    contentId: 'c27-01',
    topic: 'radiography',
    subtopic: 'Periapicals',
    type: 'fill-blank',
    question: 'When placing a periapical film, the smooth white surface faces towards the ___.',
    answer: 'tube head',
    fullText: 'When placing a periapical film, the smooth white surface faces towards the tube head.',
    blankWord: 'tube head',
    acceptableAnswers: ['tube head', 'tube', 'x-ray tube head', 'x-ray tube'],
    keywords: ['periapical', 'placement', 'smooth white surface', 'tube head'],
    difficulty: 'medium'
  },
  {
    id: 'q27-003',
    contentId: 'c27-01',
    topic: 'radiography',
    subtopic: 'Periapicals',
    type: 'flashcard',
    question: 'For periapical radiographs, what orientation should the long axis of the film be for anterior vs posterior teeth?',
    answer: 'Anterior teeth: long axis of film VERTICAL. Posterior teeth: long axis of film HORIZONTAL.',
    keywords: ['periapical', 'film orientation', 'anterior', 'posterior', 'vertical', 'horizontal'],
    difficulty: 'medium'
  },
  // ── c27-02: PA Image Evaluation ──────────────────────────
  {
    id: 'q27-005',
    contentId: 'c27-02',
    topic: 'radiography',
    subtopic: 'Periapical Image Evaluation',
    type: 'fill-blank',
    question: 'A good periapical radiograph should show ___ mm of periapical bone to enable assessment of apical anatomy.',
    answer: '3mm',
    fullText: 'A good periapical radiograph should show 3mm of periapical bone to enable assessment of apical anatomy.',
    blankWord: '3mm',
    acceptableAnswers: ['3mm', '3', '3 mm'],
    keywords: ['periapical', '3mm', 'periapical bone', 'apical anatomy'],
    difficulty: 'medium'
  },
  {
    id: 'q27-006',
    contentId: 'c27-02',
    topic: 'radiography',
    subtopic: 'Periapical Image Evaluation',
    type: 'free-text',
    question: 'List five faults to check for when evaluating a periapical radiograph image quality.',
    answer: 'No foreshortening/elongation, no horizontal overlap, no bending, pulp/root canals not obscured, no pressure marks, no emulsion scratches, no roller marks, no film fog, no chemical streaks/contamination.',
    acceptableAnswers: ['foreshortening', 'elongation', 'horizontal overlap', 'bending', 'pressure marks', 'roller marks', 'film fog', 'chemical streaks'],
    keywords: ['periapical', 'image evaluation', 'faults', 'quality'],
    difficulty: 'medium'
  },
  {
    id: 'q27-007',
    contentId: 'c27-02',
    topic: 'radiography',
    subtopic: 'Periapical Image Evaluation',
    type: 'mcq',
    question: 'Which of the following is NOT a criterion for a good periapical radiograph?',
    answer: 'Buccal and lingual cusps superimposed is a bitewing criterion, not periapical.',
    options: [
      'No horizontal overlap',
      '3mm of periapical bone visible',
      'Buccal and lingual cusps superimposed',
      'Good density and adequate contrast between enamel and dentine'
    ],
    correctOptionIndex: 2,
    keywords: ['periapical', 'image quality', 'cusps superimposed', 'bitewing'],
    difficulty: 'hard'
  },

  // ── c27-03: Bitewings ───────────────────────────────────
  {
    id: 'q27-008',
    contentId: 'c27-03',
    topic: 'radiography',
    subtopic: 'Bitewings',
    type: 'mcq',
    question: 'What film size is generally used for bitewing radiographs in adults?',
    answer: 'Size 2 for adults. Young children use size 0.',
    options: [
      'Size 0',
      'Size 1',
      'Size 2',
      'Size 4'
    ],
    correctOptionIndex: 2,
    keywords: ['bitewing', 'film size', 'size 2', 'adults'],
    difficulty: 'easy'
  },
  {
    id: 'q27-009',
    contentId: 'c27-03',
    topic: 'radiography',
    subtopic: 'Bitewings',
    type: 'fill-blank',
    question: 'When taking a bitewing, the anterior edge should be located to include ___ interproximal spaces.',
    answer: '4-5',
    fullText: 'When taking a bitewing, the anterior edge should be located to include 4-5 interproximal spaces.',
    blankWord: '4-5',
    acceptableAnswers: ['4-5', '4 to 5', 'four to five', '4-5 interproximal'],
    keywords: ['bitewing', 'interproximal spaces', 'anterior edge'],
    difficulty: 'medium'
  },
  {
    id: 'q27-010',
    contentId: 'c27-03',
    topic: 'radiography',
    subtopic: 'Bitewings',
    type: 'flashcard',
    question: 'What are the image evaluation criteria for a good bitewing radiograph?',
    answer: 'No horizontal overlap. 3-4 to 7-8 spaces visible. Periodontal bone levels visible. Buccal and lingual cusps superimposed. Occlusal plane horizontal.',
    keywords: ['bitewing', 'image evaluation', 'cusps superimposed', 'occlusal plane'],
    difficulty: 'medium'
  },
  // ── c27-04: Vertical Bitewings ──────────────────────────
  {
    id: 'q27-012',
    contentId: 'c27-04',
    topic: 'radiography',
    subtopic: 'Vertical Bitewings',
    type: 'fill-blank',
    question: 'Vertical bitewings are indicated when bone loss is greater than ___ mm.',
    answer: '6mm',
    fullText: 'Vertical bitewings are indicated when bone loss is greater than 6mm.',
    blankWord: '6mm',
    acceptableAnswers: ['6mm', '6', '6 mm'],
    keywords: ['vertical bitewing', 'bone loss', '6mm'],
    difficulty: 'medium'
  },
  {
    id: 'q27-013',
    contentId: 'c27-04',
    topic: 'radiography',
    subtopic: 'Vertical Bitewings',
    type: 'flashcard',
    question: 'How many vertical bitewings are needed per side, and which teeth does each cover?',
    answer: '2 vertical bitewings per side. First image includes teeth 3, 4, 5. Second image includes teeth 6, 7, 8.',
    keywords: ['vertical bitewing', 'teeth coverage', '345', '678'],
    difficulty: 'medium'
  },
  // ── c27-05: OPT ─────────────────────────────────────────
  {
    id: 'q27-015',
    contentId: 'c27-05',
    topic: 'radiography',
    subtopic: 'OPT',
    type: 'free-text',
    question: 'List five indications for taking an OPT (orthopantomogram).',
    answer: 'Ortho assessment, mandibular fracture, large cysts/tumours, severe gagging/trismus, third molar assessment, gross decay, implant planning, TMJ demonstration, perio pocketing >6mm in >1 quadrant.',
    acceptableAnswers: ['ortho assessment', 'mandibular fracture', 'cysts', 'tumours', 'gagging', 'trismus', 'third molar', 'implant', 'TMJ', 'perio pocketing'],
    keywords: ['OPT', 'indications', 'orthopantomogram'],
    difficulty: 'medium'
  },
  {
    id: 'q27-016',
    contentId: 'c27-05',
    topic: 'radiography',
    subtopic: 'OPT',
    type: 'mcq',
    question: 'When positioning a patient for an OPT, which anatomical plane should be parallel to the floor?',
    answer: 'Frankfort plane should be parallel to the floor.',
    options: [
      'Occlusal plane',
      'Median sagittal plane',
      'Frankfort plane',
      'Coronal plane'
    ],
    correctOptionIndex: 2,
    keywords: ['OPT', 'Frankfort plane', 'positioning', 'parallel to floor'],
    difficulty: 'medium'
  },
  {
    id: 'q27-017',
    contentId: 'c27-05',
    topic: 'radiography',
    subtopic: 'OPT',
    type: 'fill-blank',
    question: 'When positioning for an OPT, the antero-posterior light should be centered on the ___ tooth.',
    answer: 'canine',
    fullText: 'When positioning for an OPT, the antero-posterior light should be centered on the canine tooth.',
    blankWord: 'canine',
    acceptableAnswers: ['canine', 'canine tooth'],
    keywords: ['OPT', 'positioning', 'antero-posterior light', 'canine'],
    difficulty: 'hard'
  },
  {
    id: 'q27-018',
    contentId: 'c27-05',
    topic: 'radiography',
    subtopic: 'OPT',
    type: 'flashcard',
    question: 'What are the contraindications for taking an OPT?',
    answer: 'Not suitable for children who cannot keep still for 10-20 seconds. Not suitable for patients suffering from medical conditions resulting in uncontrollable involuntary movement and lack of co-ordination.',
    keywords: ['OPT', 'contraindications', 'children', 'involuntary movement'],
    difficulty: 'medium'
  },

  // ── c27-06: Panoramic Bony Anatomy ──────────────────────
  {
    id: 'q27-019',
    contentId: 'c27-06',
    topic: 'radiography',
    subtopic: 'Panoramic Bony Anatomy',
    type: 'mcq',
    question: 'Which of the following is NOT a landmark visible on a panoramic radiograph?',
    answer: 'Foramen ovale is not typically labelled as a standard panoramic landmark. The mental foramen, sigmoid notch, and pterygomaxillary fissure are all standard OPT landmarks.',
    options: [
      'Mental foramen',
      'Sigmoid notch',
      'Foramen ovale',
      'Pterygomaxillary fissure'
    ],
    correctOptionIndex: 2,
    keywords: ['OPT', 'panoramic anatomy', 'landmarks', 'foramen ovale'],
    difficulty: 'hard'
  },
  {
    id: 'q27-020',
    contentId: 'c27-06',
    topic: 'radiography',
    subtopic: 'Panoramic Bony Anatomy',
    type: 'flashcard',
    question: 'Name the key mandibular landmarks visible on an OPT.',
    answer: 'External oblique ridge, mandibular foramen, inferior alveolar canal, mental foramen, bony cortex of inferior border of mandible, antigonial notch, coronoid process, sigmoid notch.',
    keywords: ['mandible', 'OPT landmarks', 'external oblique ridge', 'mental foramen', 'inferior alveolar canal', 'coronoid process'],
    difficulty: 'hard'
  },
  // ── c27-07: Infection Control ───────────────────────────
  {
    id: 'q27-022',
    contentId: 'c27-07',
    topic: 'infection-control',
    subtopic: 'Radiography Infection Control',
    type: 'flashcard',
    question: 'What is the correct procedure for handling film during radiographic procedures to maintain infection control?',
    answer: 'Open barrier envelopes without touching the film, drop it onto a clean surface. Remove gloves to process the plate. Put on new gloves afterwards to disinfect work surfaces.',
    keywords: ['infection control', 'radiography', 'barrier envelopes', 'film handling', 'gloves'],
    difficulty: 'medium'
  },
  {
    id: 'q27-023',
    contentId: 'c27-07',
    topic: 'infection-control',
    subtopic: 'Radiography Infection Control',
    type: 'mcq',
    question: 'Which of the following items used in radiography must be washed and autoclaved after use?',
    answer: 'Non-disposable intra-oral holders, bite blocks and bite pegs must be washed and autoclaved.',
    options: [
      'Barrier envelopes',
      'Non-disposable intra-oral holders, bite blocks and bite pegs',
      'Film packets only',
      'Lead aprons only'
    ],
    correctOptionIndex: 1,
    keywords: ['infection control', 'autoclave', 'bite blocks', 'holders'],
    difficulty: 'easy'
  },
  // ── c27-08: Blood Tests ─────────────────────────────────
  {
    id: 'q27-025',
    contentId: 'c27-08',
    topic: 'oral-medicine',
    subtopic: 'Blood Tests',
    type: 'flashcard',
    question: 'What is the normal range for APTT and what conditions prolong it?',
    answer: 'APTT normal range: 25-35 seconds. Prolonged in: Vitamin K deficiency, warfarin patients, Von Willebrand\'s disease, haemophilia, liver failure.',
    keywords: ['APTT', '25-35 sec', 'Vitamin K', 'warfarin', 'Von Willebrand', 'haemophilia'],
    difficulty: 'medium'
  },
  {
    id: 'q27-026',
    contentId: 'c27-08',
    topic: 'oral-medicine',
    subtopic: 'Blood Tests',
    type: 'mcq',
    question: 'What is the normal INR range?',
    answer: 'INR normal range is 2-3.',
    options: [
      '0.5-1.0',
      '1.0-1.5',
      '2-3',
      '4-6'
    ],
    correctOptionIndex: 2,
    keywords: ['INR', 'normal range', '2-3'],
    difficulty: 'easy'
  },
  {
    id: 'q27-027',
    contentId: 'c27-08',
    topic: 'oral-medicine',
    subtopic: 'Blood Tests',
    type: 'fill-blank',
    question: 'Normal fasting glucose is ___ mmol/L.',
    answer: '4-6',
    fullText: 'Normal fasting glucose is 4-6 mmol/L.',
    blankWord: '4-6',
    acceptableAnswers: ['4-6', '4 to 6', '4-6mmol/L'],
    keywords: ['fasting glucose', '4-6', 'mmol/L', 'normal range'],
    difficulty: 'easy'
  },
  {
    id: 'q27-028',
    contentId: 'c27-08',
    topic: 'oral-medicine',
    subtopic: 'Blood Tests',
    type: 'mcq',
    question: 'Which blood test is prolonged specifically in heparin patients?',
    answer: 'Thrombin time (18-24 sec) is prolonged in heparin patients and fibrinogen deficiency.',
    options: [
      'APTT',
      'PT',
      'Thrombin time',
      'ESR'
    ],
    correctOptionIndex: 2,
    keywords: ['thrombin', 'heparin', '18-24 sec'],
    difficulty: 'medium'
  },
  {
    id: 'q27-029',
    contentId: 'c27-08',
    topic: 'oral-medicine',
    subtopic: 'Blood Tests',
    type: 'free-text',
    question: 'What is the normal platelet count and what conditions cause it to decrease?',
    answer: 'Normal platelets: 150-350 x 10^3/uL. Decreased in thrombocytopenia, liver failure, and aplastic anaemia.',
    acceptableAnswers: ['150-350', 'thrombocytopenia', 'liver failure', 'aplastic anaemia'],
    keywords: ['platelets', '150-350', 'thrombocytopenia', 'aplastic anaemia'],
    difficulty: 'medium'
  },
  // ── c27-09: Paeds GA Consent ────────────────────────────
  {
    id: 'q27-031',
    contentId: 'c27-09',
    topic: 'paediatrics',
    subtopic: 'GA Consent',
    type: 'flashcard',
    question: 'What is the significance of the date 1/12/2003 in relation to paternal consent?',
    answer: 'If a child was born BEFORE 1/12/2003 and the father is not married to the mother, the father CANNOT consent. For children born AFTER this date, the father can consent as long as he is on the birth certificate.',
    keywords: ['consent', '1/12/2003', 'father', 'paternal', 'birth certificate', 'married'],
    difficulty: 'hard'
  },
  {
    id: 'q27-032',
    contentId: 'c27-09',
    topic: 'paediatrics',
    subtopic: 'GA Consent',
    type: 'mcq',
    question: 'At what age is a person entitled to consent to their own dental treatment?',
    answer: 'People over 16 are entitled to consent to their own treatment, which can only be overruled in exceptional circumstances.',
    options: [
      '12 years old',
      '14 years old',
      '16 years old',
      '18 years old'
    ],
    correctOptionIndex: 2,
    keywords: ['consent', 'age 16', 'own treatment'],
    difficulty: 'easy'
  },
  {
    id: 'q27-033',
    contentId: 'c27-09',
    topic: 'paediatrics',
    subtopic: 'GA Consent',
    type: 'fill-blank',
    question: 'Children under 16 can consent to their own treatment if they are deemed to be ___ competent.',
    answer: 'Gillick',
    fullText: 'Children under 16 can consent to their own treatment if they are deemed to be Gillick competent.',
    blankWord: 'Gillick',
    acceptableAnswers: ['Gillick', 'Gillick competent'],
    keywords: ['Gillick competent', 'under 16', 'consent', 'capacity'],
    difficulty: 'medium'
  },
  {
    id: 'q27-034',
    contentId: 'c27-09',
    topic: 'paediatrics',
    subtopic: 'GA Consent',
    type: 'free-text',
    question: 'What body can overrule a young person\'s refusal of treatment, and under what legislation does it operate?',
    answer: 'The Court of Protection can overrule a young person\'s refusal of treatment if it may lead to their death or severe permanent injury. It operates under the Mental Capacity Act (2005).',
    acceptableAnswers: ['Court of Protection', 'Mental Capacity Act', '2005', 'death', 'severe permanent injury'],
    keywords: ['Court of Protection', 'Mental Capacity Act', '2005', 'refusal', 'overrule'],
    difficulty: 'hard'
  },
  {
    id: 'q27-035',
    contentId: 'c27-09',
    topic: 'paediatrics',
    subtopic: 'GA Consent',
    type: 'mcq',
    question: 'An unmarried father wants to consent for his child born in November 2003. Can he consent?',
    answer: 'No. Child born before 1/12/2003 and parents unmarried means father cannot consent.',
    options: [
      'Yes, as long as he is on the birth certificate',
      'Yes, all fathers can consent',
      'No, because the child was born before 1/12/2003 and parents are unmarried',
      'No, only mothers can consent for children under 5'
    ],
    correctOptionIndex: 2,
    keywords: ['consent', 'unmarried father', '1/12/2003', 'before date'],
    difficulty: 'hard'
  }
];
