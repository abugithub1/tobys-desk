import { ContentItem, Question } from './types';

// ── Pages 21–22: Oroantral Communication, IOTN, Rearranging Radiographs, Wisdom Teeth XLA ──

export const content_p21: ContentItem[] = [
  {
    id: 'c21-01',
    topic: 'oral-surgery',
    subtopic: 'Oroantral Communication',
    title: 'Oroantral Communication (OAC) – Definition & Signs/Symptoms',
    text: 'An oroantral communication (OAC) is an abnormal connection between the oral and antral cavities. When a communication is left open, epithelial tissue may develop in its track forming an oroantral fistula. Signs/symptoms include: unpleasant tasting discharge and odour, reflux of fluids and foods into the nose from the mouth, leakage of air, difficulty smoking. SOME PATIENTS CAN BE ASYMPTOMATIC.',
    keyPoints: [
      'OAC = abnormal connection between oral and antral (sinus) cavities',
      'If left open, epithelial tissue lines the track → oroantral fistula',
      'Symptoms: unpleasant tasting discharge, odour',
      'Reflux of fluids/foods into nose from mouth',
      'Leakage of air and difficulty smoking',
      'Some patients can be completely asymptomatic'
    ],
    keywords: ['oroantral communication', 'OAC', 'oroantral fistula', 'antral', 'sinus perforation', 'asymptomatic'],
    imageUrl: '/images/osce/page21_img01.webp',
    imageAlt: 'Diagram of oroantral communication showing incision and buccal advancement flap',
    pageRef: 21
  },
  {
    id: 'c21-02',
    topic: 'oral-surgery',
    subtopic: 'Oroantral Communication',
    title: 'OAC – Clinical Examination & Diagnosis',
    text: 'Clinical exam: inspection after haemostasis; gentle suctioning of the socket produces a hollow sound; leakage of air while blowing against closed nostrils; radiograph usually used for confirmation and to determine extent. DO NOT PROBE – probing can cause perforation.',
    keyPoints: [
      'Inspect socket after achieving haemostasis',
      'Gentle suctioning produces a hollow sound if OAC present',
      'Nose-blow test: leakage of air while blowing against closed nostrils',
      'Radiograph confirms diagnosis and determines extent',
      'DO NOT PROBE – can convert communication into a larger perforation'
    ],
    keywords: ['OAC diagnosis', 'hollow sound', 'nose-blow test', 'radiograph', 'do not probe', 'perforation'],
    pageRef: 21
  },
  {
    id: 'c21-03',
    topic: 'oral-surgery',
    subtopic: 'Oroantral Communication',
    title: 'OAC – Immediate Management & Surgery',
    text: 'Immediate management: closure and prevention of sinusitis through suturing or periodontal pack, rinse with saline, CHX rinse, antibiotic prophylaxis (amoxicillin 500 mg tds for 5 days). If <5 mm – spontaneous closure by blood clot. If >5 mm – surgical intervention required. Surgery: buccal advancement flap (looks like a 3-sided flap). Stabilise mobile bone with rigid fixation for 4-6 weeks (arch bar). Post-op instructions: avoid nose blowing, smoking, travelling on a plane. If infected consider antibiotics and decongestants.',
    keyPoints: [
      'Closure via suturing or periodontal pack; rinse with saline and CHX',
      'Antibiotic prophylaxis: amoxicillin 500 mg tds for 5 days',
      'OAC <5 mm → spontaneous closure by blood clot',
      'OAC >5 mm → surgical intervention required',
      'Buccal advancement flap (3-sided flap) is the surgical option',
      'Stabilise mobile bone with rigid fixation for 4–6 weeks (arch bar)',
      'Post-op: avoid nose blowing, smoking, travelling on a plane'
    ],
    keywords: ['OAC management', 'buccal advancement flap', 'amoxicillin', '5mm', 'blood clot', 'surgical intervention', 'arch bar'],
    pageRef: 21
  },
  {
    id: 'c21-04',
    topic: 'orthodontics',
    subtopic: 'IOTN',
    title: 'IOTN – Index of Treatment Need Overview',
    text: 'IOTN (Index of Treatment Need) is used to grade orthodontic treatment need. Example scenario: impacted canines, reverse overjet, patient unhappy with appearance. Identify main problem and 3 problems with the malocclusion. IOTN has grades 3 (borderline), 4 (treatment need), and 5 (great treatment need).',
    keyPoints: [
      'IOTN = Index of Treatment Need for orthodontic assessment',
      'Grades: 3 (borderline), 4 (treatment need), 5 (great need)',
      'Must identify the main problem and list 3 problems with the malocclusion'
    ],
    keywords: ['IOTN', 'index of treatment need', 'orthodontics', 'malocclusion', 'grade 3', 'grade 4', 'grade 5'],
    imageUrl: '/images/osce/page21_img02.webp',
    imageAlt: 'IOTN grading table showing grades 3, 4 and 5 criteria',
    pageRef: 21
  },
  {
    id: 'c21-05',
    topic: 'orthodontics',
    subtopic: 'IOTN Grade 3 – Borderline Treatment Need',
    title: 'IOTN Grade 3 – Borderline Treatment Need',
    text: 'Grade 3: Borderline treatment need. 3.a Overjet >3.5 mm and ≤6 mm (incompetent lip closing). 3.b Reverse overjet between 1 and ≤3.5 mm. 3.c Anterior or posterior crossbite with >1 mm and ≤2 mm discrepancy between RCP and ICP. 3.d Contact point displacements >2 mm and ≤4 mm. 3.e Lateral or anterior open bite >2 mm and ≤4 mm. 3.f Deep overbite with gingival contact or contact with palatal mucosa (but without trauma).',
    keyPoints: [
      '3.a – Overjet >3.5 mm and ≤6 mm with incompetent lip closure',
      '3.b – Reverse overjet 1–3.5 mm',
      '3.c – Anterior/posterior crossbite >1 mm and ≤2 mm RCP-ICP discrepancy',
      '3.d – Contact point displacements >2 mm and ≤4 mm',
      '3.e – Lateral/anterior open bite >2 mm and ≤4 mm',
      '3.f – Deep overbite with gingival/palatal mucosa contact but no trauma'
    ],
    keywords: ['IOTN grade 3', 'borderline', 'overjet', 'reverse overjet', 'crossbite', 'open bite', 'overbite', 'RCP', 'ICP'],
    pageRef: 21
  },
  {
    id: 'c21-06',
    topic: 'orthodontics',
    subtopic: 'IOTN Grade 4 – Treatment Need',
    title: 'IOTN Grade 4 – Treatment Need',
    text: 'Grade 4: Treatment need. 4.h Less severe hypodontia requiring prerestorative orthodontics or space closure. 4.a Overjet >6 mm and ≤9 mm. 4.b Reverse overjet >3.5 mm (without masticatory or speech problems). 4.m Reverse overjet >1 mm and ≤3.5 mm (without masticatory or speech problems). 4.c Anterior or posterior crossbite with >2 mm discrepancy between RCP and ICP. 4.l Posterior lingual crossbite with no functional occlusal contact in one or both buccal segments. 4.d Major contact point displacements >4 mm. 4.e Extreme lateral or anterior open bite >4 mm. 4.f Increased and complete overbite with gingival or palatal trauma. 4.t Partially erupted teeth, tipped and impacted against adjacent teeth. 4.x Existence of supernumerary teeth.',
    keyPoints: [
      '4.a – Overjet >6 mm and ≤9 mm',
      '4.b – Reverse overjet >3.5 mm (no masticatory/speech problems)',
      '4.c – Crossbite >2 mm RCP-ICP discrepancy',
      '4.d – Major contact point displacements >4 mm',
      '4.e – Extreme open bite >4 mm',
      '4.f – Overbite WITH gingival or palatal trauma (cf. 3.f without trauma)',
      '4.t – Partially erupted, tipped and impacted teeth',
      '4.x – Supernumerary teeth',
      '4.h – Less severe hypodontia needing prerestorative ortho'
    ],
    keywords: ['IOTN grade 4', 'treatment need', 'hypodontia', 'overjet', 'crossbite', 'supernumerary', 'impacted'],
    pageRef: 21
  },
  {
    id: 'c21-07',
    topic: 'orthodontics',
    subtopic: 'IOTN Grade 5 – Great Treatment Need',
    title: 'IOTN Grade 5 – Great Treatment Need',
    text: 'Grade 5: Great treatment need. 5.i Impeded tooth eruption (3rd molars) attributable to crowding, displacements, supernumerary teeth, retained deciduous teeth and all pathological reasons. 5.h Extensive hypodontia with restorative impact (more than 1 congenitally missing tooth in any quadrant) requiring prerestorative orthodontics. 5.a Increased overjet >9 mm. 5.m Reverse overjet >3.5 mm with masticatory problems and speech disorders. 5.p Cleft lip and palate and other craniofacial anomalies. 5.s Retained deciduous teeth.',
    keyPoints: [
      '5.i – Impeded eruption due to crowding, supernumeraries, retained deciduous teeth, pathology',
      '5.h – Extensive hypodontia (>1 congenitally missing tooth per quadrant)',
      '5.a – Increased overjet >9 mm',
      '5.m – Reverse overjet >3.5 mm with masticatory and speech problems',
      '5.p – Cleft lip and palate and other craniofacial anomalies',
      '5.s – Retained deciduous teeth'
    ],
    keywords: ['IOTN grade 5', 'great treatment need', 'impeded eruption', 'hypodontia', 'cleft lip', 'craniofacial'],
    pageRef: 21
  },
  {
    id: 'c21-08',
    topic: 'radiography',
    subtopic: 'Rearranging Radiographs',
    title: 'Rearranging Radiographs – Step-by-Step Method',
    text: 'Steps to rearrange radiographs: 1) Get rid of bite wings. 2) Sort out 7/8s into corners – uppers skinny, lowers fat; 3 roots uppers. 3) Bring in premolars to make pairs in corners. 4) Should be 5 PAs of anterior teeth left – 3 uppers 2 lowers; uppers fat, lowers skinny. FEEL THE DOT – should be convex towards you.',
    keyPoints: [
      'Step 1: Remove bite wings first',
      'Step 2: Sort 7/8s into corners – uppers skinny, lowers fat; upper molars have 3 roots',
      'Step 3: Bring premolars in to pair with corners',
      'Step 4: 5 anterior PAs remain – 3 upper (fat), 2 lower (skinny)',
      'Feel the dot – convex side faces towards you'
    ],
    keywords: ['rearranging radiographs', 'bite wings', 'uppers skinny', 'lowers fat', 'feel the dot', 'convex', '3 roots', 'PA'],
    imageUrl: '/images/osce/page22_img01.webp',
    imageAlt: 'Set of periapical radiographs arranged showing upper and lower teeth',
    pageRef: 22
  },
  {
    id: 'c21-09',
    topic: 'oral-surgery',
    subtopic: 'Wisdom Teeth Extraction',
    title: 'Wisdom Teeth XLA – Assessment & NICE Guidelines',
    text: 'Wisdom teeth erupt at 18-24 years. Impaction occurs when there is prevention of complete eruption due to lack of space. 70% lower 8s impacted, 45% upper 8s impacted. Use NICE guidelines and ARMHIT assessment (Angulation, Roots, Margin of bone, Height of tooth in bone, ID nerve, Trabeculation). Consent for: pain, bruising, swelling, days off work, paraesthesia. NICE guidelines for removal: 1) Unrestorable caries 2) Non-treatable pulpal/PA pathology 3) Cellulitis, abscess and osteomyelitis 4) Internal/external resorption of tooth/adjacent teeth, fracture of tooth 5) Disease of follicle including cyst/tumour 6) Tooth impeding surgery or within field of tumour resection. NB: Crowding of lower anteriors is NOT an indication for wisdom tooth removal.',
    keyPoints: [
      'Erupt 18–24 years; impaction from lack of space; 70% lower 8s, 45% upper 8s',
      'ARMHIT: Angulation, Roots, Margin of bone, Height in bone, ID nerve, Trabeculation',
      'Consent: pain, bruising, swelling, days off work, paraesthesia',
      'NICE: unrestorable caries, non-treatable pulpal/PA pathology, cellulitis/abscess/osteomyelitis',
      'NICE: resorption, disease of follicle (cyst/tumour), impeding surgery/tumour resection',
      'Crowding of lower anteriors is NOT an indication'
    ],
    keywords: ['wisdom teeth', 'third molar', 'NICE guidelines', 'ARMHIT', 'impaction', 'lower 8', 'upper 8', 'ID nerve'],
    imageUrl: '/images/osce/page22_img02.webp',
    imageAlt: 'Cross section and radiographic appearance of inferior dental canal relationship to roots',
    pageRef: 22
  },
  {
    id: 'c21-10',
    topic: 'oral-surgery',
    subtopic: 'Wisdom Teeth Extraction',
    title: 'Wisdom Teeth – Pericoronitis & Angulation',
    text: 'Symptoms must be related to 3rd molar state/position; exclude other causes (myofascial pain). Pericoronitis – one episode is NOT an indication for surgery. Second or subsequent episodes requiring antibiotics may be considered for surgery. Symptoms of pericoronitis: swelling, soreness, erythema, trismus, bad taste, facial swelling, increased temperature, regional lymphadenopathy, general malaise. Management: irrigate with saline/CHX under operculum. Antibiotics if systemic features: metronidazole 400 mg tds 1 week / 200 mg tds 3 days or amoxicillin 500 mg tds 1 week. Severe → admit to hospital. Analgesics. Consider removal of upper 8 or reduce cusp. Angulation types: mesioangular (most common), vertical, distoangular, horizontal.',
    keyPoints: [
      'Exclude other causes (myofascial pain) before attributing to 3rd molar',
      'One episode of pericoronitis is NOT an indication for surgery',
      'Second+ episodes requiring antibiotics → consider surgery',
      'Symptoms: swelling, soreness, erythema, trismus, bad taste, facial swelling, raised temp, lymphadenopathy',
      'Irrigate with saline/CHX under operculum',
      'Antibiotics: metronidazole 400 mg tds 1 wk or amoxicillin 500 mg tds 1 wk',
      'Severe → admit; analgesics; consider removing upper 8 or reducing cusp',
      'Angulation: mesioangular (most common), vertical, distoangular, horizontal'
    ],
    keywords: ['pericoronitis', 'trismus', 'metronidazole', 'amoxicillin', 'operculum', 'mesioangular', 'angulation'],
    imageUrl: '/images/osce/page22_img03.webp',
    imageAlt: 'Wisdom tooth angulation types: vertical, mesioangular, distoangular, horizontal',
    pageRef: 22
  },
];

export const questions_p21: Question[] = [
  // ── c21-01: OAC Definition & Signs/Symptoms ──
  {
    id: 'q21-001', contentId: 'c21-01', topic: 'oral-surgery', type: 'flashcard',
    question: 'What is an oroantral communication (OAC) and what happens if it is left open?',
    answer: 'An OAC is an abnormal connection between the oral and antral (sinus) cavities. If left open, epithelial tissue may develop in its track forming an oroantral fistula.',
    keywords: ['OAC', 'fistula', 'epithelial'], difficulty: 'easy'
  },
  {
    id: 'q21-002', contentId: 'c21-01', topic: 'oral-surgery', type: 'mcq',
    question: 'Which of the following is NOT a typical sign/symptom of OAC?',
    options: ['Unpleasant tasting discharge and odour', 'Reflux of fluids into the nose', 'Severe throbbing toothache', 'Leakage of air'],
    correctOptionIndex: 2,
    answer: 'Severe throbbing toothache',
    explanation: 'OAC symptoms include discharge, odour, nasal reflux, air leakage, and difficulty smoking. Some patients are asymptomatic.',
    keywords: ['OAC', 'symptoms'], difficulty: 'easy'
  },
  {
    id: 'q21-003', contentId: 'c21-01', topic: 'oral-surgery', type: 'fill-blank',
    question: 'When an OAC is left open, epithelial tissue may develop in its track forming an oroantral ___.',
    fullText: 'When an OAC is left open, epithelial tissue may develop in its track forming an oroantral fistula.',
    blankWord: 'fistula', answer: 'fistula',
    keywords: ['oroantral fistula', 'epithelial'], difficulty: 'easy'
  },
  {
    id: 'q21-004', contentId: 'c21-01', topic: 'oral-surgery', type: 'free-text',
    question: 'List 4 signs/symptoms of oroantral communication.',
    answer: 'Unpleasant tasting discharge and odour, reflux of fluids/foods into the nose, leakage of air, difficulty smoking. Some patients can be asymptomatic.',
    acceptableAnswers: ['discharge, nasal reflux, air leakage, difficulty smoking', 'odour, reflux of fluids into nose, leakage of air, difficulty smoking'],
    keywords: ['OAC', 'symptoms', 'discharge', 'reflux'], difficulty: 'medium'
  },

  // ── c21-02: OAC Clinical Exam ──
  {
    id: 'q21-005', contentId: 'c21-02', topic: 'oral-surgery', type: 'flashcard',
    question: 'How do you clinically examine for an OAC? What must you NOT do?',
    answer: 'Inspect after haemostasis; gentle suctioning produces a hollow sound; nose-blow test (air leakage against closed nostrils); radiograph for confirmation. DO NOT PROBE – can cause/enlarge perforation.',
    keywords: ['OAC', 'hollow sound', 'nose-blow', 'do not probe'], difficulty: 'medium'
  },
  {
    id: 'q21-006', contentId: 'c21-02', topic: 'oral-surgery', type: 'mcq',
    question: 'Why should you NOT probe a suspected oroantral communication?',
    options: ['It may cause an allergic reaction', 'It introduces bacteria into the bloodstream', 'It can cause or enlarge the perforation', 'It provides no useful information'],
    correctOptionIndex: 2, answer: 'It can cause or enlarge the perforation',
    keywords: ['OAC', 'probe', 'perforation'], difficulty: 'easy'
  },
  {
    id: 'q21-007', contentId: 'c21-02', topic: 'oral-surgery', type: 'fill-blank',
    question: 'Gentle suctioning of the socket in an OAC produces a ___ sound.',
    fullText: 'Gentle suctioning of the socket in an OAC produces a hollow sound.',
    blankWord: 'hollow', answer: 'hollow',
    keywords: ['OAC', 'suctioning', 'hollow sound'], difficulty: 'medium'
  },

  // ── c21-03: OAC Management ──
  {
    id: 'q21-008', contentId: 'c21-03', topic: 'oral-surgery', type: 'flashcard',
    question: 'What is the size threshold determining whether an OAC closes spontaneously or requires surgery?',
    answer: 'OAC <5 mm can close spontaneously by blood clot. OAC >5 mm requires surgical intervention (buccal advancement flap).',
    keywords: ['OAC', '5mm', 'spontaneous closure', 'surgical'], difficulty: 'easy'
  },
  {
    id: 'q21-009', contentId: 'c21-03', topic: 'oral-surgery', type: 'mcq',
    question: 'What antibiotic prophylaxis is recommended for OAC management?',
    options: ['Metronidazole 200 mg tds 3 days', 'Amoxicillin 500 mg tds 5 days', 'Amoxicillin 250 mg bd 7 days', 'Co-amoxiclav 625 mg tds 5 days'],
    correctOptionIndex: 1, answer: 'Amoxicillin 500 mg tds for 5 days',
    keywords: ['OAC', 'amoxicillin', '500mg', 'tds', '5 days'], difficulty: 'medium'
  },
  {
    id: 'q21-010', contentId: 'c21-03', topic: 'oral-surgery', type: 'fill-blank',
    question: 'The surgical option for OAC closure is a ___ advancement flap, which looks like a 3-sided flap.',
    fullText: 'The surgical option for OAC closure is a buccal advancement flap, which looks like a 3-sided flap.',
    blankWord: 'buccal', answer: 'buccal',
    keywords: ['buccal advancement flap', 'OAC'], difficulty: 'medium'
  },
  {
    id: 'q21-011', contentId: 'c21-03', topic: 'oral-surgery', type: 'mcq',
    question: 'Which post-op instruction should be given after OAC management?',
    options: ['Rinse vigorously with salt water hourly', 'Blow nose gently to check healing', 'Avoid nose blowing, smoking, and plane travel', 'Use a straw for drinks for 2 weeks'],
    correctOptionIndex: 2, answer: 'Avoid nose blowing, smoking, and travelling on a plane',
    keywords: ['OAC', 'post-op', 'nose blowing', 'smoking', 'plane'], difficulty: 'easy'
  },

  // ── c21-04: IOTN Overview ──
  {
    id: 'q21-012', contentId: 'c21-04', topic: 'orthodontics', type: 'flashcard',
    question: 'What does IOTN stand for and what are the three grade categories?',
    answer: 'IOTN = Index of Treatment Need. Grade 3 = borderline, Grade 4 = treatment need, Grade 5 = great treatment need.',
    keywords: ['IOTN', 'grade 3', 'grade 4', 'grade 5'], difficulty: 'easy'
  },
  {
    id: 'q21-013', contentId: 'c21-04', topic: 'orthodontics', type: 'mcq',
    question: 'Which IOTN grade indicates "borderline treatment need"?',
    options: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'],
    correctOptionIndex: 2, answer: 'Grade 3',
    keywords: ['IOTN', 'grade 3', 'borderline'], difficulty: 'easy'
  },
  {
    id: 'q21-014', contentId: 'c21-04', topic: 'orthodontics', type: 'free-text',
    question: 'A patient has impacted canines and a reverse overjet. What assessment tool would you use and what must you identify?',
    answer: 'Use IOTN (Index of Treatment Need). Identify the main problem and list 3 problems with the malocclusion. Classify into grade 3, 4, or 5.',
    acceptableAnswers: ['IOTN, identify main problem and 3 problems with malocclusion'],
    keywords: ['IOTN', 'malocclusion', 'impacted canines'], difficulty: 'medium'
  },

  // ── c21-05: IOTN Grade 3 ──
  {
    id: 'q21-015', contentId: 'c21-05', topic: 'orthodontics', type: 'flashcard',
    question: 'What overjet range classifies as IOTN Grade 3.a?',
    answer: 'Overjet >3.5 mm and ≤6 mm with incompetent lip closing.',
    keywords: ['IOTN', 'grade 3a', 'overjet', '3.5mm', '6mm'], difficulty: 'medium'
  },
  {
    id: 'q21-016', contentId: 'c21-05', topic: 'orthodontics', type: 'mcq',
    question: 'In IOTN Grade 3, what is the contact point displacement range?',
    options: ['>1 mm and ≤2 mm', '>2 mm and ≤4 mm', '>4 mm', '>0 mm and ≤1 mm'],
    correctOptionIndex: 1, answer: '>2 mm and ≤4 mm',
    explanation: 'IOTN 3.d: contact point displacements >2 mm and ≤4 mm. Greater than 4 mm = Grade 4.d.',
    keywords: ['IOTN', 'grade 3d', 'contact point displacement'], difficulty: 'hard'
  },
  {
    id: 'q21-017', contentId: 'c21-05', topic: 'orthodontics', type: 'fill-blank',
    question: 'IOTN 3.f: Deep overbite with gingival/palatal mucosa contact but without ___.',
    fullText: 'IOTN 3.f: Deep overbite with gingival/palatal mucosa contact but without trauma.',
    blankWord: 'trauma', answer: 'trauma',
    keywords: ['IOTN', 'grade 3f', 'overbite', 'trauma'], difficulty: 'medium'
  },

  // ── c21-06: IOTN Grade 4 ──
  {
    id: 'q21-018', contentId: 'c21-06', topic: 'orthodontics', type: 'flashcard',
    question: 'What overjet range classifies as IOTN Grade 4.a?',
    answer: 'Overjet >6 mm and ≤9 mm.',
    keywords: ['IOTN', 'grade 4a', 'overjet', '6mm', '9mm'], difficulty: 'medium'
  },
  {
    id: 'q21-019', contentId: 'c21-06', topic: 'orthodontics', type: 'mcq',
    question: 'Which IOTN Grade 4 criterion involves extra teeth?',
    options: ['4.h – Hypodontia', '4.t – Tipped/impacted teeth', '4.x – Supernumerary teeth', '4.l – Posterior lingual crossbite'],
    correctOptionIndex: 2, answer: '4.x – Supernumerary teeth',
    keywords: ['IOTN', 'grade 4x', 'supernumerary'], difficulty: 'medium'
  },
  {
    id: 'q21-020', contentId: 'c21-06', topic: 'orthodontics', type: 'free-text',
    question: 'What is the key difference between IOTN 3.f and 4.f regarding overbite?',
    answer: '3.f is deep overbite with gingival/palatal contact but WITHOUT trauma. 4.f is increased/complete overbite WITH gingival or palatal trauma. Trauma upgrades from grade 3 to grade 4.',
    acceptableAnswers: ['3f no trauma, 4f has trauma', 'trauma differentiates them - 3f without, 4f with'],
    keywords: ['IOTN', '3f', '4f', 'overbite', 'trauma'], difficulty: 'hard'
  },

  // ── c21-07: IOTN Grade 5 ──
  {
    id: 'q21-021', contentId: 'c21-07', topic: 'orthodontics', type: 'flashcard',
    question: 'What overjet value classifies as IOTN Grade 5.a?',
    answer: 'Increased overjet greater than 9 mm.',
    keywords: ['IOTN', 'grade 5a', 'overjet', '9mm'], difficulty: 'easy'
  },
  {
    id: 'q21-022', contentId: 'c21-07', topic: 'orthodontics', type: 'mcq',
    question: 'Which condition is classified under IOTN Grade 5.p?',
    options: ['Partially erupted teeth', 'Posterior lingual crossbite', 'Cleft lip and palate and other craniofacial anomalies', 'Retained deciduous teeth'],
    correctOptionIndex: 2, answer: 'Cleft lip and palate and other craniofacial anomalies',
    keywords: ['IOTN', 'grade 5p', 'cleft lip', 'craniofacial'], difficulty: 'medium'
  },
  {
    id: 'q21-023', contentId: 'c21-07', topic: 'orthodontics', type: 'fill-blank',
    question: 'IOTN 5.h: Extensive ___ with restorative impact (>1 congenitally missing tooth per quadrant) requiring prerestorative orthodontics.',
    fullText: 'IOTN 5.h: Extensive hypodontia with restorative impact (>1 congenitally missing tooth per quadrant) requiring prerestorative orthodontics.',
    blankWord: 'hypodontia', answer: 'hypodontia',
    keywords: ['IOTN', 'grade 5h', 'hypodontia'], difficulty: 'medium'
  },
  {
    id: 'q21-024', contentId: 'c21-07', topic: 'orthodontics', type: 'free-text',
    question: 'Compare the overjet thresholds across IOTN Grades 3, 4, and 5.',
    answer: 'Grade 3.a: >3.5–6 mm. Grade 4.a: >6–9 mm. Grade 5.a: >9 mm. Each grade reflects greater overjet and greater treatment need.',
    acceptableAnswers: ['3a: 3.5-6mm, 4a: 6-9mm, 5a: >9mm'],
    keywords: ['IOTN', 'overjet', 'grade 3', 'grade 4', 'grade 5'], difficulty: 'hard'
  },

  // ── c21-08: Rearranging Radiographs ──
  {
    id: 'q21-025', contentId: 'c21-08', topic: 'radiography', type: 'flashcard',
    question: 'What are the 4 steps to rearrange periapical radiographs?',
    answer: '1) Remove bite wings. 2) Sort 7/8s into corners – uppers skinny, lowers fat; upper molars 3 roots. 3) Bring premolars in to pair with corners. 4) 5 anterior PAs left – 3 uppers (fat), 2 lowers (skinny). Feel the dot – convex towards you.',
    keywords: ['rearranging radiographs', 'bite wings', 'uppers skinny', 'lowers fat', 'dot'], difficulty: 'medium'
  },
  {
    id: 'q21-026', contentId: 'c21-08', topic: 'radiography', type: 'mcq',
    question: 'When rearranging radiographs, how are upper and lower molar roots distinguished?',
    options: ['Uppers fat, lowers skinny', 'Uppers skinny, lowers fat; upper molars have 3 roots', 'Uppers 2 roots, lowers 3 roots', 'No difference – use the dot only'],
    correctOptionIndex: 1, answer: 'Uppers skinny, lowers fat; upper molars have 3 roots',
    keywords: ['radiograph', 'molar roots', 'uppers skinny', 'lowers fat', '3 roots'], difficulty: 'medium'
  },
  {
    id: 'q21-027', contentId: 'c21-08', topic: 'radiography', type: 'fill-blank',
    question: 'When rearranging radiographs, feel the dot – it should be ___ towards you.',
    fullText: 'When rearranging radiographs, feel the dot – it should be convex towards you.',
    blankWord: 'convex', answer: 'convex',
    keywords: ['dot', 'convex', 'radiograph'], difficulty: 'easy'
  },
  {
    id: 'q21-028', contentId: 'c21-08', topic: 'radiography', type: 'mcq',
    question: 'How many anterior PAs should remain after sorting molars and premolars?',
    options: ['4 – 2 upper and 2 lower', '5 – 3 upper and 2 lower', '6 – 3 upper and 3 lower', '5 – 2 upper and 3 lower'],
    correctOptionIndex: 1, answer: '5 – 3 upper and 2 lower',
    keywords: ['anterior PAs', '3 uppers', '2 lowers'], difficulty: 'medium'
  },

  // ── c21-09: Wisdom Teeth XLA & NICE Guidelines ──
  {
    id: 'q21-029', contentId: 'c21-09', topic: 'oral-surgery', type: 'flashcard',
    question: 'What does ARMHIT stand for in wisdom teeth assessment?',
    answer: 'Angulation, Roots, Margin of bone, Height of tooth in bone, ID nerve (proximity), Trabeculation.',
    keywords: ['ARMHIT', 'angulation', 'roots', 'margin', 'height', 'ID nerve', 'trabeculation'], difficulty: 'medium'
  },
  {
    id: 'q21-030', contentId: 'c21-09', topic: 'oral-surgery', type: 'mcq',
    question: 'What percentage of lower 8s are impacted?',
    options: ['45%', '55%', '70%', '85%'],
    correctOptionIndex: 2, answer: '70%',
    explanation: '70% of lower 8s and 45% of upper 8s are impacted due to lack of space.',
    keywords: ['impaction', 'lower 8', '70%', 'wisdom teeth'], difficulty: 'medium'
  },
  {
    id: 'q21-031', contentId: 'c21-09', topic: 'oral-surgery', type: 'mcq',
    question: 'Which is NOT a NICE indication for wisdom tooth removal?',
    options: ['Unrestorable caries', 'Crowding of lower anteriors', 'Cellulitis, abscess and osteomyelitis', 'Disease of follicle including cyst/tumour'],
    correctOptionIndex: 1, answer: 'Crowding of lower anteriors',
    explanation: 'Crowding of lower anteriors is explicitly NOT an indication per NICE guidelines.',
    keywords: ['NICE', 'wisdom teeth', 'crowding', 'lower anteriors'], difficulty: 'easy'
  },
  {
    id: 'q21-032', contentId: 'c21-09', topic: 'oral-surgery', type: 'free-text',
    question: 'List the 6 NICE guideline indications for wisdom tooth removal.',
    answer: '1) Unrestorable caries. 2) Non-treatable pulpal/PA pathology. 3) Cellulitis, abscess, osteomyelitis. 4) Internal/external resorption of tooth/adjacent teeth. 5) Disease of follicle (cyst/tumour). 6) Tooth impeding surgery or within tumour resection field.',
    acceptableAnswers: ['caries, pulpal pathology, cellulitis/abscess, resorption, follicular disease, impeding surgery'],
    keywords: ['NICE', 'wisdom teeth', 'indications', 'caries', 'pathology'], difficulty: 'hard'
  },
  {
    id: 'q21-033', contentId: 'c21-09', topic: 'oral-surgery', type: 'fill-blank',
    question: 'Wisdom teeth erupt at ___-24 years of age.',
    fullText: 'Wisdom teeth erupt at 18-24 years of age.',
    blankWord: '18', answer: '18',
    keywords: ['wisdom teeth', 'eruption', '18-24'], difficulty: 'easy'
  },

  // ── c21-10: Pericoronitis & Angulation ──
  {
    id: 'q21-034', contentId: 'c21-10', topic: 'oral-surgery', type: 'flashcard',
    question: 'Is one episode of pericoronitis an indication for wisdom tooth surgery?',
    answer: 'No. One episode is NOT an indication. Only second or subsequent episodes requiring antibiotics may be considered for surgery.',
    keywords: ['pericoronitis', 'one episode', 'not indication'], difficulty: 'easy'
  },
  {
    id: 'q21-035', contentId: 'c21-10', topic: 'oral-surgery', type: 'mcq',
    question: 'What is the most common angulation of impacted wisdom teeth?',
    options: ['Vertical', 'Horizontal', 'Mesioangular', 'Distoangular'],
    correctOptionIndex: 2, answer: 'Mesioangular',
    keywords: ['mesioangular', 'angulation', 'wisdom teeth'], difficulty: 'easy'
  },
  {
    id: 'q21-036', contentId: 'c21-10', topic: 'oral-surgery', type: 'mcq',
    question: 'What antibiotic regimen is used for pericoronitis with systemic features?',
    options: ['Amoxicillin 250 mg tds 3 days', 'Metronidazole 400 mg tds 1 week or amoxicillin 500 mg tds 1 week', 'Co-amoxiclav 375 mg bd 5 days', 'Erythromycin 500 mg qds 7 days'],
    correctOptionIndex: 1, answer: 'Metronidazole 400 mg tds 1 week or amoxicillin 500 mg tds 1 week',
    keywords: ['pericoronitis', 'metronidazole', 'amoxicillin', '400mg'], difficulty: 'medium'
  },
  {
    id: 'q21-037', contentId: 'c21-10', topic: 'oral-surgery', type: 'fill-blank',
    question: 'The first step in managing pericoronitis is to irrigate with saline/CHX under the ___.',
    fullText: 'The first step in managing pericoronitis is to irrigate with saline/CHX under the operculum.',
    blankWord: 'operculum', answer: 'operculum',
    keywords: ['pericoronitis', 'irrigate', 'operculum'], difficulty: 'medium'
  },
  {
    id: 'q21-038', contentId: 'c21-10', topic: 'oral-surgery', type: 'free-text',
    question: 'List the symptoms of pericoronitis.',
    answer: 'Swelling, soreness, erythema, trismus, bad taste, facial swelling, increased temperature, regional lymphadenopathy, general malaise.',
    acceptableAnswers: ['swelling, trismus, bad taste, erythema, fever, lymphadenopathy', 'soreness, swelling, trismus, erythema, bad taste, facial swelling'],
    keywords: ['pericoronitis', 'symptoms', 'trismus', 'erythema', 'lymphadenopathy'], difficulty: 'medium'
  },
];
