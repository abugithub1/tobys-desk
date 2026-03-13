import { ContentItem, Question } from './types';

export const content_p13: ContentItem[] = [
  {
    id: 'c13-01',
    topic: 'radiography',
    subtopic: 'Audit Cycle',
    title: 'Radiograph Audit Cycle',
    text: 'The audit cycle involves assessing radiograph quality against set standards. Criteria to audit include: repeat/unnecessary imaging, dose exposure, and diagnostic accuracy. Steps: 1) Identify need for change. 2) Set criteria and standards (minimum standard, optimum standard, and ideal standard). 3) Collect data on performance. 4) Assess performance against criteria and standards. 5) Analyse audit results. The cycle has 4 stages: Stage 1 – Preparation and Planning (including for re-audit), Stage 2 – Measuring Performance, Stage 3 – Implementing Change, Stage 4 – Sustaining Improvement (including re-audit).',
    keyPoints: [
      'Audit criteria: repeat/unnecessary imaging, dose exposure, diagnostic accuracy',
      '5 steps: identify need, set criteria/standards, collect data, assess performance, analyse results',
      'Standards have 3 levels: minimum, optimum, and ideal',
      '4 stages: Preparation & Planning, Measuring Performance, Implementing Change, Sustaining Improvement',
      'Stage 4 includes re-audit to sustain improvement'
    ],
    keywords: ['audit cycle', 'radiograph quality', 'dose exposure', 'diagnostic accuracy', 'minimum standard', 'optimum standard', 'ideal standard'],
    imageUrl: '/images/osce/page13_img01.webp',
    imageAlt: 'Radiograph audit cycle diagram showing 4 stages',
    pageRef: 13
  },
  {
    id: 'c13-02',
    topic: 'radiology-regulations',
    subtopic: 'Ionising Radiation Regulations',
    title: 'Ionising Radiation Regulations & Key Roles',
    text: 'Ionising Radiation Regulations form the main legal requirements for use and control of ionising radiation in the UK. IRR99 protects staff and working environment. RPA (Radiation Protection Adviser) advises on compliance of regulation of \'99 regarding staff and working environment. Usually a physicist and expert in field – MANDATORY to have one. RPS (Radiation Protection Supervisor) is usually a dentist. IRR2000 protects patients. Medical Physics Expert advises on measurement and organisation of patient dose – not mandatory. This is who you would contact if you had problems on an audit with Grade 3s etc. Exposure must follow ALARP – As Low As Reasonably Practical – and must not exceed dose limits specified for individuals. Involves authorisation of use of x-ray machines, appointment of Radiation Protection Supervisors and Advisors, control/restriction of exposure to ionising radiation, and a requirement for local rules (designation of controlled areas etc). All practices should have a Radiation Protection File – must contain local rules (IRR99), written procedures (IRR2000) and selection criteria (IRR2000).',
    keyPoints: [
      'IRR99 protects STAFF and working environment',
      'IRR2000 protects PATIENTS',
      'RPA (Radiation Protection Adviser) – usually a physicist, MANDATORY',
      'RPS (Radiation Protection Supervisor) – usually a dentist',
      'Medical Physics Expert advises on patient dose measurement – NOT mandatory',
      'Contact Medical Physics Expert for audit problems with Grade 3s',
      'ALARP: As Low As Reasonably Practical',
      'Radiation Protection File must contain: local rules (IRR99), written procedures (IRR2000), selection criteria (IRR2000)'
    ],
    keywords: ['IRR99', 'IRR2000', 'RPA', 'RPS', 'ALARP', 'Medical Physics Expert', 'Radiation Protection File', 'local rules', 'selection criteria'],
    pageRef: 13
  },
  {
    id: 'c13-03',
    topic: 'radiology-regulations',
    subtopic: 'Dose Limits & Roles',
    title: 'Dose Limits and Referrer/Practitioner/Operator Roles',
    text: 'Dose limits: Employees aged 18 or over – 20 mSv. Trainees aged 16-18 – 6 mSv. Anyone else – 1 mSv. Key roles in radiography: Referrer refers for medical exposure. Practitioner has responsibility for exposure and must justify it. Operator carries out practical aspects and can be a dental nurse.',
    keyPoints: [
      'Employees 18+: 20 mSv dose limit',
      'Trainees 16-18: 6 mSv dose limit',
      'Anyone else: 1 mSv dose limit',
      'Referrer: refers for medical exposure',
      'Practitioner: responsible for exposure, must justify it',
      'Operator: carries out practical aspects, can be a dental nurse'
    ],
    keywords: ['dose limits', '20 mSv', '6 mSv', '1 mSv', 'referrer', 'practitioner', 'operator'],
    pageRef: 13
  },
  {
    id: 'c13-04',
    topic: 'radiology-regulations',
    subtopic: 'ICRP Principles & Dose Types',
    title: 'ICRP Principles of Dose Limitation & Dose Types',
    text: 'ICRP\'s Principles of Dose Limitation: 1) JUSTIFICATION – don\'t adopt procedures unless produces benefit (benefit v. risk). 2) OPTIMISATION – all exposures ALARP, social/economic factors into account. 3) LIMITATION – equivalent dose shouldn\'t exceed recommended limits. Dose types: Radiation absorbed dose (D) – amount absorbed per mass of tissue (J/kg). Equivalent dose (H) – allows radiobiological effectiveness of different types of radiation to be compared; doses on different parts of body are compared, converts all doses to equivalent whole body dose. Effective dose (E) – dose we give to patients. Reducing dose: E/F speed (rather than D speed), 70kV (rather than 50/60), 20cm cone (rather than 10cm cone), rectangular collimation (rather than round collimation). Risk of cancer from panoramic – 1 in 1,000,000. Risk from intra-oral – 1 in 2,000,000/20,000,000 (0.002-0.0016 mSv dose).',
    keyPoints: [
      'JUSTIFICATION: benefit must outweigh risk',
      'OPTIMISATION: all exposures ALARP with social/economic factors considered',
      'LIMITATION: equivalent dose must not exceed recommended limits',
      'Radiation absorbed dose (D) = amount absorbed per mass of tissue (J/kg)',
      'Equivalent dose (H) = compares radiobiological effectiveness of different radiation types',
      'Effective dose (E) = dose given to patients',
      'Reduce dose: E/F speed film, 70kV, 20cm cone, rectangular collimation',
      'Cancer risk: panoramic 1 in 1,000,000; intra-oral 1 in 2,000,000-20,000,000'
    ],
    keywords: ['ICRP', 'justification', 'optimisation', 'limitation', 'absorbed dose', 'equivalent dose', 'effective dose', '70kV', 'rectangular collimation', 'cancer risk'],
    pageRef: 13
  },
  {
    id: 'c13-05',
    topic: 'radiology-regulations',
    subtopic: 'Film Faults',
    title: 'Film Faults (Non-Digital)',
    text: 'Film faults for non-digital radiographs: DARK – overexposed, overdeveloped (too much time/temp/concentration). FOGGING – due to storage, radiation or temperature. PALE – underexposed, underdeveloped (not enough time/temp/concentration). BROWN – fixer not washed off properly, silver sulphide forms. MARKS ON FILM – film bent, chemicals splashed on film before processing, black marks due to developer left on too long, white marks due to fixer, static, dirt speckles.',
    keyPoints: [
      'DARK: overexposed or overdeveloped (too much time/temp/concentration)',
      'FOGGING: storage, radiation, or temperature issues',
      'PALE: underexposed or underdeveloped (not enough time/temp/concentration)',
      'BROWN: fixer not washed off properly, silver sulphide forms',
      'MARKS: film bent, chemical splashes, black marks from developer too long, white marks from fixer, static, dirt'
    ],
    keywords: ['film faults', 'dark', 'fogging', 'pale', 'brown', 'silver sulphide', 'overexposed', 'underdeveloped'],
    pageRef: 13
  },
  {
    id: 'c13-06',
    topic: 'prescribing',
    subtopic: 'Writing Prescriptions',
    title: 'Writing Prescriptions & Antibiotic Regimens',
    text: 'Common prescriptions: Duraphat, amoxicillin, metronidazole, nystatin (patient with stomatitis on warfarin). WHENEVER PRESCRIBING METRONIDAZOLE, BE SURE TO WRITE ON PRESCRIPTION TO AVOID ALCOHOL. AMOXICILLIN – CAPSULES. EVERYTHING ELSE – TABLETS. Regimens: ABSCESS – only if systemic: Amoxicillin 500mg + Metronidazole 200mg tds 5-7 days (Von Winklehoff cocktail). If allergic to amoxicillin: erythromycin 250mg 4 times a day for 5 days. ANUG – metronidazole 200mg tds for 3 days. PERICORONITIS – metronidazole 200mg tds for 3 days. AGGRESSIVE PERIO – doxycycline 100mg once a day for 21 days OR metronidazole 200mg tds 7-10 days. ABC BRONJ – pre-op 1g amoxicillin + 400mg metronidazole. If allergic: ciprofloxacin 250mg 1 hour before/clarithromycin 500mg 1 hour before. Post-op: 500mg amoxicillin + 200mg metronidazole tds 5 days. AVULSION – if over 12 years old: doxycycline 200mg twice a day for day 1, 100mg once a day for next 10 days. If under 12: penicillin/amoxicillin 500mg tds 5-7 days. ACTINOMYCOSIS – amoxicillin 500mg tds until resolves. If allergic: minocycline 300mg. ORO-ANTRAL FISTULA – amoxicillin 500mg tds 5 days. If allergic: doxycycline 200mg STAT and 100mg daily for 5 days. ORAL CANDIDOSIS – amphotericin lozenges 10mg 4 times a day OR miconazole gel 5ml 4 times a day after food. If on warfarin – NYSTATIN oral suspension 100,000 units/ml, 30ml – 1ml after food 4 times a day for 7 days. Remove dentures before using. RINSE SUSPENSION around mouth for 5 minutes before swallowing. Continue use for 48 hours after lesions have healed.',
    keyPoints: [
      'Metronidazole: ALWAYS write "avoid alcohol" on prescription',
      'Amoxicillin = CAPSULES; everything else = TABLETS',
      'Abscess (systemic): Amoxicillin 500mg + Metronidazole 200mg tds 5-7 days (Von Winklehoff cocktail)',
      'ANUG/Pericoronitis: Metronidazole 200mg tds 3 days',
      'Aggressive perio: Doxycycline 100mg od 21 days OR Metronidazole 200mg tds 7-10 days',
      'ABC BRONJ pre-op: 1g amoxicillin + 400mg metronidazole',
      'Avulsion >12yr: Doxycycline 200mg bd day 1 then 100mg od 10 days',
      'Avulsion <12yr: Penicillin/amoxicillin 500mg tds 5-7 days',
      'Oral candidosis on warfarin: NYSTATIN 100,000 units/ml, rinse 5 mins before swallowing',
      'Actinomycosis: Amoxicillin 500mg tds until resolves; if allergic minocycline 300mg'
    ],
    keywords: ['prescription', 'amoxicillin', 'metronidazole', 'Von Winklehoff', 'doxycycline', 'nystatin', 'BRONJ', 'avulsion', 'candidosis', 'pericoronitis', 'ANUG'],
    imageUrl: '/images/osce/page14_img01.webp',
    imageAlt: 'Example dental prescription form with patient details and medication',
    pageRef: 14
  },
  {
    id: 'c13-07',
    topic: 'prescribing',
    subtopic: 'Prescription Rules',
    title: 'What to Write on Prescriptions',
    text: 'Rules for writing prescriptions: 1) Write in BLOCK CAPITALS. 2) Do not write more than one item per line. Do not continue outside the boxes provided. 3) Don\'t use brand names. 4) Include how often medicine is to be taken. 5) Don\'t use abbreviations.',
    keyPoints: [
      'Write in BLOCK CAPITALS',
      'One item per line only',
      'Do not continue outside the boxes',
      'Use generic names, NOT brand names',
      'Include frequency of medication',
      'No abbreviations'
    ],
    keywords: ['prescription rules', 'block capitals', 'generic names', 'no abbreviations'],
    imageUrl: '/images/osce/page14_img01.webp',
    imageAlt: 'Example completed dental prescription form',
    pageRef: 14
  },
  {
    id: 'c13-08',
    topic: 'infection-control',
    subtopic: 'Health & Safety',
    title: 'Health & Safety / Infection Control Issues',
    text: 'Health and safety: need to include fault and area. Example: dentist wearing watch (bare below elbows). Blood spillages and disposal of sharps – look out for. Blood spillage: spilled blood should be completely covered by disposable towels treated with 10,000ppm sodium hypochlorite solution or sodium dichloroisocyanurate granules. At least 5 minutes must pass before towels/granules are cleared and disposed of as clinical waste. Dental health care worker dealing with spillage must wear appropriate protective clothing – household gloves, protective eyewear and a disposable apron and, in case of extensive floor spillage, protective footwear. Good ventilation essential. Disposal of materials/teeth – tooth thrown in sink has been on past questions. Ayliffe technique for handwashing. Setting up a unit aseptically – blue roll in right place. ZONING. Putting gloves on last – after PPD. Opening packets without gloves on, touch what\'s inside with gloves on. Cleaning a unit – use separate wipes for everything just to be safe.',
    keyPoints: [
      'Bare below elbows: no watches, jewellery',
      'Blood spillage: cover with disposable towels + 10,000ppm sodium hypochlorite or sodium dichloroisocyanurate granules',
      'Wait at least 5 minutes before clearing; dispose as clinical waste',
      'PPE for spillage: household gloves, eyewear, disposable apron, protective footwear if extensive',
      'Tooth thrown in sink has been on past exam questions',
      'Ayliffe technique for handwashing',
      'ZONING when setting up unit aseptically',
      'Put gloves on LAST after PPD; open packets without gloves, touch inside with gloves'
    ],
    keywords: ['infection control', 'blood spillage', 'sodium hypochlorite', '10000ppm', 'clinical waste', 'Ayliffe', 'zoning', 'bare below elbows', 'PPD'],
    imageUrl: '/images/osce/page14_img02.webp',
    imageAlt: 'NHS alcohol handrub hand hygiene technique poster',
    pageRef: 14
  }
];

export const questions_p13: Question[] = [
  // c13-01: Audit Cycle
  {
    id: 'q13-001',
    contentId: 'c13-01',
    topic: 'radiography',
    subtopic: 'Audit Cycle',
    type: 'flashcard',
    question: 'What are the 5 steps of the radiograph audit cycle?',
    answer: '1) Identify need for change. 2) Set criteria and standards (minimum, optimum, ideal). 3) Collect data on performance. 4) Assess performance against criteria and standards. 5) Analyse audit results.',
    keywords: ['audit cycle', 'criteria', 'standards', 'performance'],
    difficulty: 'medium'
  },
  {
    id: 'q13-002',
    contentId: 'c13-01',
    topic: 'radiography',
    subtopic: 'Audit Cycle',
    type: 'mcq',
    question: 'What are the three criteria commonly audited for radiographs?',
    options: [
      'Repeat/unnecessary imaging, dose exposure, diagnostic accuracy',
      'Film speed, patient age, exposure time',
      'Cone size, collimation type, developer temperature',
      'Image contrast, brightness, resolution'
    ],
    correctOptionIndex: 0,
    answer: 'Repeat/unnecessary imaging, dose exposure, diagnostic accuracy',
    explanation: 'These three criteria form the basis for auditing radiograph quality in dental practice.',
    keywords: ['audit', 'radiograph', 'criteria'],
    difficulty: 'easy'
  },
  {
    id: 'q13-003',
    contentId: 'c13-01',
    topic: 'radiography',
    subtopic: 'Audit Cycle',
    type: 'fill-blank',
    question: 'The audit cycle has 3 levels of standard: minimum, _____, and ideal.',
    fullText: 'The audit cycle has 3 levels of standard: minimum, optimum, and ideal.',
    blankWord: 'optimum',
    answer: 'optimum',
    keywords: ['audit', 'standards', 'optimum'],
    difficulty: 'easy'
  },
  // c13-02: Ionising Radiation Regulations
  {
    id: 'q13-005',
    contentId: 'c13-02',
    topic: 'radiology-regulations',
    subtopic: 'Ionising Radiation Regulations',
    type: 'flashcard',
    question: 'What is the difference between IRR99 and IRR2000?',
    answer: 'IRR99 protects STAFF and the working environment. IRR2000 protects PATIENTS.',
    keywords: ['IRR99', 'IRR2000', 'staff', 'patients'],
    difficulty: 'medium'
  },
  {
    id: 'q13-006',
    contentId: 'c13-02',
    topic: 'radiology-regulations',
    subtopic: 'Ionising Radiation Regulations',
    type: 'mcq',
    question: 'Which role is MANDATORY for all dental practices using ionising radiation?',
    options: [
      'Medical Physics Expert',
      'Radiation Protection Adviser (RPA)',
      'Radiation Protection Supervisor (RPS)',
      'Both RPA and Medical Physics Expert'
    ],
    correctOptionIndex: 1,
    answer: 'Radiation Protection Adviser (RPA)',
    explanation: 'The RPA is usually a physicist and is MANDATORY. The Medical Physics Expert is NOT mandatory. The RPS is usually a dentist.',
    keywords: ['RPA', 'mandatory', 'physicist'],
    difficulty: 'medium'
  },
  {
    id: 'q13-007',
    contentId: 'c13-02',
    topic: 'radiology-regulations',
    subtopic: 'Ionising Radiation Regulations',
    type: 'free-text',
    question: 'What must the Radiation Protection File contain?',
    answer: 'Local rules (IRR99), written procedures (IRR2000), and selection criteria (IRR2000).',
    acceptableAnswers: [
      'local rules, written procedures, selection criteria',
      'local rules from IRR99, written procedures from IRR2000, selection criteria from IRR2000',
      'local rules IRR99 written procedures IRR2000 selection criteria IRR2000'
    ],
    keywords: ['Radiation Protection File', 'local rules', 'written procedures', 'selection criteria'],
    difficulty: 'hard'
  },
  {
    id: 'q13-008',
    contentId: 'c13-02',
    topic: 'radiology-regulations',
    subtopic: 'Ionising Radiation Regulations',
    type: 'mcq',
    question: 'Who would you contact if you had problems on a radiograph audit with Grade 3s?',
    options: [
      'Radiation Protection Adviser (RPA)',
      'Radiation Protection Supervisor (RPS)',
      'Medical Physics Expert',
      'General Dental Council'
    ],
    correctOptionIndex: 2,
    answer: 'Medical Physics Expert',
    explanation: 'The Medical Physics Expert advises on measurement and organisation of patient dose and is who you contact for audit problems with Grade 3s.',
    keywords: ['Medical Physics Expert', 'audit', 'Grade 3'],
    difficulty: 'hard'
  },

  // c13-03: Dose Limits
  {
    id: 'q13-010',
    contentId: 'c13-03',
    topic: 'radiology-regulations',
    subtopic: 'Dose Limits & Roles',
    type: 'flashcard',
    question: 'What are the annual dose limits for employees, trainees (16-18), and anyone else?',
    answer: 'Employees aged 18+: 20 mSv. Trainees aged 16-18: 6 mSv. Anyone else: 1 mSv.',
    keywords: ['dose limits', '20 mSv', '6 mSv', '1 mSv'],
    difficulty: 'medium'
  },
  {
    id: 'q13-011',
    contentId: 'c13-03',
    topic: 'radiology-regulations',
    subtopic: 'Dose Limits & Roles',
    type: 'mcq',
    question: 'What is the annual dose limit for a trainee aged 16-18?',
    options: ['1 mSv', '6 mSv', '10 mSv', '20 mSv'],
    correctOptionIndex: 1,
    answer: '6 mSv',
    explanation: 'Trainees aged 16-18 have a dose limit of 6 mSv, compared to 20 mSv for employees 18+ and 1 mSv for anyone else.',
    keywords: ['dose limit', 'trainee', '6 mSv'],
    difficulty: 'easy'
  },
  {
    id: 'q13-012',
    contentId: 'c13-03',
    topic: 'radiology-regulations',
    subtopic: 'Dose Limits & Roles',
    type: 'fill-blank',
    question: 'The _____ carries out practical aspects of radiography and can be a dental nurse.',
    fullText: 'The operator carries out practical aspects of radiography and can be a dental nurse.',
    blankWord: 'operator',
    answer: 'operator',
    keywords: ['operator', 'dental nurse', 'practical aspects'],
    difficulty: 'easy'
  },
  // c13-04: ICRP Principles & Dose Types
  {
    id: 'q13-014',
    contentId: 'c13-04',
    topic: 'radiology-regulations',
    subtopic: 'ICRP Principles & Dose Types',
    type: 'flashcard',
    question: 'What are the 3 ICRP Principles of Dose Limitation?',
    answer: '1) JUSTIFICATION – don\'t adopt procedures unless benefit outweighs risk. 2) OPTIMISATION – all exposures ALARP, considering social/economic factors. 3) LIMITATION – equivalent dose should not exceed recommended limits.',
    keywords: ['ICRP', 'justification', 'optimisation', 'limitation'],
    difficulty: 'medium'
  },
  {
    id: 'q13-015',
    contentId: 'c13-04',
    topic: 'radiology-regulations',
    subtopic: 'ICRP Principles & Dose Types',
    type: 'mcq',
    question: 'Which measures reduce radiation dose to the patient?',
    options: [
      'E/F speed film, 70kV, 20cm cone, rectangular collimation',
      'D speed film, 50kV, 10cm cone, round collimation',
      'E/F speed film, 50kV, 10cm cone, rectangular collimation',
      'D speed film, 70kV, 20cm cone, round collimation'
    ],
    correctOptionIndex: 0,
    answer: 'E/F speed film, 70kV, 20cm cone, rectangular collimation',
    explanation: 'Dose reduction uses faster film (E/F not D), higher kV (70 not 50/60), longer cone (20cm not 10cm), and rectangular collimation (not round).',
    keywords: ['dose reduction', 'E/F speed', '70kV', '20cm cone', 'rectangular collimation'],
    difficulty: 'medium'
  },
  {
    id: 'q13-016',
    contentId: 'c13-04',
    topic: 'radiology-regulations',
    subtopic: 'ICRP Principles & Dose Types',
    type: 'fill-blank',
    question: 'Effective dose (E) is the dose we give to _____.',
    fullText: 'Effective dose (E) is the dose we give to patients.',
    blankWord: 'patients',
    answer: 'patients',
    keywords: ['effective dose', 'patients'],
    difficulty: 'easy'
  },
  {
    id: 'q13-017',
    contentId: 'c13-04',
    topic: 'radiology-regulations',
    subtopic: 'ICRP Principles & Dose Types',
    type: 'mcq',
    question: 'What is the risk of cancer from a dental panoramic radiograph?',
    options: [
      '1 in 100,000',
      '1 in 1,000,000',
      '1 in 10,000,000',
      '1 in 100'
    ],
    correctOptionIndex: 1,
    answer: '1 in 1,000,000',
    explanation: 'Cancer risk from panoramic is 1 in 1,000,000. Risk from intra-oral is even lower at 1 in 2,000,000 to 20,000,000.',
    keywords: ['cancer risk', 'panoramic', '1 in 1000000'],
    difficulty: 'hard'
  },

  // c13-05: Film Faults
  {
    id: 'q13-019',
    contentId: 'c13-05',
    topic: 'radiology-regulations',
    subtopic: 'Film Faults',
    type: 'flashcard',
    question: 'What causes a DARK radiograph film?',
    answer: 'Overexposed or overdeveloped (too much time, temperature, or concentration).',
    keywords: ['dark', 'overexposed', 'overdeveloped'],
    difficulty: 'easy'
  },
  {
    id: 'q13-020',
    contentId: 'c13-05',
    topic: 'radiology-regulations',
    subtopic: 'Film Faults',
    type: 'mcq',
    question: 'What causes a BROWN appearance on a non-digital radiograph?',
    options: [
      'Overexposure to radiation',
      'Fixer not washed off properly – silver sulphide forms',
      'Underexposure to radiation',
      'Storage issues causing fogging'
    ],
    correctOptionIndex: 1,
    answer: 'Fixer not washed off properly – silver sulphide forms',
    explanation: 'Brown discolouration is caused by silver sulphide forming when fixer is not properly washed off the film.',
    keywords: ['brown', 'fixer', 'silver sulphide'],
    difficulty: 'medium'
  },
  {
    id: 'q13-021',
    contentId: 'c13-05',
    topic: 'radiology-regulations',
    subtopic: 'Film Faults',
    type: 'fill-blank',
    question: 'A PALE radiograph is caused by _____ or underdevelopment.',
    fullText: 'A PALE radiograph is caused by underexposure or underdevelopment.',
    blankWord: 'underexposure',
    answer: 'underexposure',
    keywords: ['pale', 'underexposure', 'underdeveloped'],
    difficulty: 'easy'
  },
  // c13-06: Writing Prescriptions
  {
    id: 'q13-023',
    contentId: 'c13-06',
    topic: 'prescribing',
    subtopic: 'Writing Prescriptions',
    type: 'flashcard',
    question: 'What is the Von Winklehoff cocktail and when is it prescribed?',
    answer: 'Amoxicillin 500mg + Metronidazole 200mg tds for 5-7 days. Prescribed for dental abscess (only if systemic symptoms present).',
    keywords: ['Von Winklehoff', 'amoxicillin', 'metronidazole', 'abscess'],
    difficulty: 'medium'
  },
  {
    id: 'q13-024',
    contentId: 'c13-06',
    topic: 'prescribing',
    subtopic: 'Writing Prescriptions',
    type: 'mcq',
    question: 'What must ALWAYS be written on a prescription for metronidazole?',
    options: [
      'Take with food',
      'Avoid alcohol',
      'Take before bed',
      'Avoid dairy products'
    ],
    correctOptionIndex: 1,
    answer: 'Avoid alcohol',
    explanation: 'Whenever prescribing metronidazole, you must ALWAYS write "avoid alcohol" on the prescription due to the severe interaction.',
    keywords: ['metronidazole', 'avoid alcohol'],
    difficulty: 'easy'
  },
  {
    id: 'q13-025',
    contentId: 'c13-06',
    topic: 'prescribing',
    subtopic: 'Writing Prescriptions',
    type: 'fill-blank',
    question: 'Amoxicillin comes as _____, while everything else comes as tablets.',
    fullText: 'Amoxicillin comes as capsules, while everything else comes as tablets.',
    blankWord: 'capsules',
    answer: 'capsules',
    keywords: ['amoxicillin', 'capsules', 'tablets'],
    difficulty: 'easy'
  },
  {
    id: 'q13-026',
    contentId: 'c13-06',
    topic: 'prescribing',
    subtopic: 'Writing Prescriptions',
    type: 'mcq',
    question: 'What is the antibiotic regimen for ANUG?',
    options: [
      'Amoxicillin 500mg tds for 5 days',
      'Metronidazole 200mg tds for 3 days',
      'Doxycycline 100mg od for 21 days',
      'Erythromycin 250mg qds for 5 days'
    ],
    correctOptionIndex: 1,
    answer: 'Metronidazole 200mg tds for 3 days',
    explanation: 'ANUG and pericoronitis share the same regimen: metronidazole 200mg tds for 3 days.',
    keywords: ['ANUG', 'metronidazole', '200mg', '3 days'],
    difficulty: 'medium'
  },
  {
    id: 'q13-027',
    contentId: 'c13-06',
    topic: 'prescribing',
    subtopic: 'Writing Prescriptions',
    type: 'free-text',
    question: 'What is the antibiotic regimen for avulsion in a patient over 12 years old?',
    answer: 'Doxycycline 200mg twice a day for day 1, then 100mg once a day for next 10 days.',
    acceptableAnswers: [
      'doxycycline 200mg bd day 1 then 100mg od for 10 days',
      'doxycycline 200mg twice day 1, 100mg once daily 10 days',
      'doxycycline 200mg bd day 1 100mg od 10 days'
    ],
    keywords: ['avulsion', 'doxycycline', '200mg', '100mg', '10 days'],
    difficulty: 'hard'
  },
  {
    id: 'q13-028',
    contentId: 'c13-06',
    topic: 'prescribing',
    subtopic: 'Writing Prescriptions',
    type: 'mcq',
    question: 'What should be prescribed for oral candidosis in a patient on warfarin?',
    options: [
      'Amphotericin lozenges 10mg 4 times a day',
      'Miconazole gel 5ml 4 times a day after food',
      'Nystatin oral suspension 100,000 units/ml, 1ml after food 4 times a day for 7 days',
      'Fluconazole 50mg once daily for 7 days'
    ],
    correctOptionIndex: 2,
    answer: 'Nystatin oral suspension 100,000 units/ml, 30ml – 1ml after food 4 times a day for 7 days',
    explanation: 'For patients on warfarin, nystatin is used instead of amphotericin or miconazole. Remove dentures before using, rinse suspension around mouth for 5 minutes before swallowing, continue 48 hours after lesions healed.',
    keywords: ['candidosis', 'warfarin', 'nystatin', '100000 units/ml'],
    difficulty: 'hard'
  },

  // c13-07: Prescription Rules
  {
    id: 'q13-030',
    contentId: 'c13-07',
    topic: 'prescribing',
    subtopic: 'Prescription Rules',
    type: 'flashcard',
    question: 'What are the 5 rules for writing dental prescriptions?',
    answer: '1) Write in BLOCK CAPITALS. 2) Do not write more than one item per line; do not continue outside the boxes. 3) Don\'t use brand names (use generic names). 4) Include how often medicine is to be taken. 5) Don\'t use abbreviations.',
    keywords: ['prescription rules', 'block capitals', 'generic', 'no abbreviations'],
    difficulty: 'medium'
  },
  {
    id: 'q13-031',
    contentId: 'c13-07',
    topic: 'prescribing',
    subtopic: 'Prescription Rules',
    type: 'fill-blank',
    question: 'On a dental prescription you must use _____ names, not brand names.',
    fullText: 'On a dental prescription you must use generic names, not brand names.',
    blankWord: 'generic',
    answer: 'generic',
    keywords: ['generic', 'brand names', 'prescription'],
    difficulty: 'easy'
  },

  // c13-08: Infection Control
  {
    id: 'q13-033',
    contentId: 'c13-08',
    topic: 'infection-control',
    subtopic: 'Health & Safety',
    type: 'flashcard',
    question: 'How should a blood spillage be managed in a dental practice?',
    answer: 'Cover completely with disposable towels treated with 10,000ppm sodium hypochlorite solution or sodium dichloroisocyanurate granules. Wait at least 5 minutes. Clear and dispose as clinical waste. Wear household gloves, protective eyewear, disposable apron, and protective footwear if extensive floor spillage. Good ventilation essential.',
    keywords: ['blood spillage', 'sodium hypochlorite', '10000ppm', 'clinical waste', '5 minutes'],
    difficulty: 'medium'
  },
  {
    id: 'q13-034',
    contentId: 'c13-08',
    topic: 'infection-control',
    subtopic: 'Health & Safety',
    type: 'mcq',
    question: 'What concentration of sodium hypochlorite is used for blood spillage decontamination?',
    options: [
      '1,000 ppm',
      '5,000 ppm',
      '10,000 ppm',
      '50,000 ppm'
    ],
    correctOptionIndex: 2,
    answer: '10,000 ppm',
    explanation: 'Blood spillages are treated with 10,000ppm sodium hypochlorite solution or sodium dichloroisocyanurate granules.',
    keywords: ['sodium hypochlorite', '10000ppm', 'blood spillage'],
    difficulty: 'medium'
  },
  {
    id: 'q13-035',
    contentId: 'c13-08',
    topic: 'infection-control',
    subtopic: 'Health & Safety',
    type: 'mcq',
    question: 'What PPE should be worn when dealing with a blood spillage?',
    options: [
      'Clinical gloves and mask only',
      'Household gloves, protective eyewear, disposable apron, and protective footwear if extensive',
      'Double clinical gloves and face shield only',
      'Standard clinical gloves and apron only'
    ],
    correctOptionIndex: 1,
    answer: 'Household gloves, protective eyewear, disposable apron, and protective footwear if extensive floor spillage',
    explanation: 'Note: household gloves are specified (not clinical gloves), plus eyewear, disposable apron, and protective footwear for extensive floor spillages.',
    keywords: ['blood spillage', 'PPE', 'household gloves', 'eyewear', 'apron'],
    difficulty: 'medium'
  }
];
