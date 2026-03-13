import { ContentItem, Question } from './types';

// Pages 29–30: Mental Capacity Act 2005, Parental Consent,
// DCP Scope of Practice, Trauma Chart, Radiographic Report

export const content_p29: ContentItem[] = [
  {
    id: 'c29-01',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    title: 'Mental Capacity Act 2005 – Key Principles',
    text: 'The MCA 2005 protects and empowers individuals who may lack mental capacity to make their own decisions about care/treatment. Applies to individuals aged 16 and over. People who may lack capacity: dementia, severe learning disability, brain injury, mental health condition, stroke, unconsciousness from anaesthetic/accident. Always assume capacity unless proved otherwise through a capacity assessment. Must give help to make decisions – provide info in understandable format. An "unwise" decision does NOT mean lack of capacity. If lacking capacity, decisions taken in their best interests. Treatment must be least restrictive of basic rights. Independent advocate should be provided in certain situations.',
    keyPoints: [
      'Applies to individuals aged 16 and over',
      'May lack capacity: dementia, severe learning disability, brain injury, mental health condition, stroke, unconsciousness',
      'Always assume capacity unless proved otherwise through capacity assessment',
      'Must help people make decisions – provide info in understandable format',
      'An "unwise" decision does NOT mean lack of capacity',
      'If lacking capacity, decisions taken in their best interests',
      'Treatment must be least restrictive of basic rights',
      'Independent advocate provided in certain situations'
    ],
    keywords: ['MCA 2005', 'mental capacity', 'capacity assessment', 'best interests', 'least restrictive', 'independent advocate', 'unwise decision'],
    imageUrl: '/images/osce/page29_img01.jpeg',
    imageAlt: 'DCP treatment plan example with diagnosis and prescriptions',
    pageRef: 29
  },
  {
    id: 'c29-02',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    title: 'MCA – Capacity Test and Lasting Power of Attorney',
    text: 'A person is unable to make a decision if they cannot: (1) understand the information relevant to the decision, (2) retain that information, (3) use/weigh up that info as part of decision-making. You can grant a Lasting Power of Attorney (LPA) to another person to make health/welfare decisions on your behalf.',
    keyPoints: [
      'Three-part capacity test: understand, retain, use/weigh information',
      'Lasting Power of Attorney (LPA) allows another person to make health/welfare decisions'
    ],
    keywords: ['capacity test', 'understand', 'retain', 'weigh up', 'LPA', 'Lasting Power of Attorney'],
    pageRef: 29
  },
  {
    id: 'c29-03',
    topic: 'professional-practice',
    subtopic: 'Parental Consent',
    title: 'Parental Consent in Children',
    text: 'If one person with parental responsibility gives consent and another does not, healthcare professionals can choose to accept the consent and perform treatment in most cases. In an emergency where treatment is vital and waiting to obtain parental consent would place the child at risk, treatment can proceed without consent.',
    keyPoints: [
      'One parent consenting is generally sufficient even if other refuses',
      'In emergencies, treatment can proceed without parental consent if delay places child at risk'
    ],
    keywords: ['parental consent', 'parental responsibility', 'emergency treatment', 'child consent'],
    pageRef: 29
  },
  {
    id: 'c29-04',
    topic: 'professional-practice',
    subtopic: 'Dental Nurse Scope',
    title: 'Dental Nurses – Scope of Practice',
    text: 'Dental nurses (if trained, competent, indemnified) can: prepare/maintain clinical environment and equipment; infection prevention and control; record dental charting and oral tissue assessment by other registrants; prepare, mix, handle materials; chairside support; keep full, accurate, contemporaneous records; prepare equipment/materials/patients for radiology; process radiographs; make referrals. Additional skills: sedation assistance, photography, study models, shade taking, tracing cephs. Under direction of other registrant: take radiographs, place rubber dam, plaque indices, remove sutures, construct reg rims/special trays, repair acrylic, apply topical anaesthetic, construct mouthguards/bleaching trays, take impressions, apply fluoride varnish. DENTAL NURSES DO NOT DIAGNOSE DISEASE OR TREATMENT PLAN.',
    keyPoints: [
      'Prepare/maintain clinical environment, infection control, chairside support',
      'Record charting and oral tissue assessment done by others',
      'Process radiographs, keep full accurate contemporaneous records',
      'Under direction: take radiographs, rubber dam, remove sutures, impressions, fluoride varnish, topical anaesthetic',
      'Additional: sedation assistance, photography, study models, shade taking, cephs',
      'CANNOT diagnose disease or create treatment plans'
    ],
    keywords: ['dental nurse', 'scope of practice', 'cannot diagnose', 'cannot treatment plan', 'under direction'],
    imageUrl: '/images/osce/page29_img01.jpeg',
    imageAlt: 'Treatment plan for DCP referral showing diagnosis and treatment steps',
    pageRef: 29
  },
  {
    id: 'c29-05',
    topic: 'professional-practice',
    subtopic: 'Dental Hygienist Scope',
    title: 'Dental Hygienists – Scope of Practice',
    text: 'Can: provide dental hygiene care; obtain history/evaluate medical history, clinical exam, perio exam, diagnose/treatment plan within competence; prescribe and take radiographs; scaling and RSI (anti-microbial therapy for plaque-related diseases); adjust restored surfaces for perio treatment; topical treatments/fissure sealants; give infiltrations/dental blocks; place temp dressings and re-cement crowns; place rubber dam; take impressions; refer to other dental professionals. Additional: tooth whitening (dentist prescription), inhalation sedation, removing sutures (wound checked by dentist). CANNOT: restore teeth, carry out pulp treatments, adjust unrestored surfaces, extract teeth.',
    keyPoints: [
      'Can diagnose and treatment plan within competence',
      'Prescribe and take radiographs',
      'Scaling, RSI, anti-microbial therapy for plaque-related diseases',
      'Give infiltrations and dental blocks',
      'Place temp dressings, re-cement crowns, rubber dam, impressions, fissure sealants',
      'CANNOT restore teeth, pulp treatments, adjust unrestored surfaces, extract teeth'
    ],
    keywords: ['dental hygienist', 'scaling', 'RSI', 'infiltrations', 'dental blocks', 'cannot restore', 'cannot extract'],
    pageRef: 30
  },
  {
    id: 'c29-06',
    topic: 'professional-practice',
    subtopic: 'Dental Therapist Scope',
    title: 'Dental Therapists – Scope of Practice',
    text: 'Same skills as hygienists plus extras: direct restorations on primary/secondary teeth; pulpotomies on primary teeth; extract primary teeth; place pre-formed crowns on primary teeth. Additional skills same as hygienists (tooth whitening, inhalation sedation, suture removal).',
    keyPoints: [
      'Same scope as hygienists PLUS additional skills',
      'Direct restorations on primary AND secondary teeth',
      'Pulpotomies on primary teeth',
      'Extract primary teeth',
      'Place pre-formed crowns on primary teeth'
    ],
    keywords: ['dental therapist', 'direct restorations', 'pulpotomy', 'extract primary', 'pre-formed crowns'],
    pageRef: 30
  },
  {
    id: 'c29-07',
    topic: 'professional-practice',
    subtopic: 'DCP Referral Letter',
    title: 'What to Write in a Referral to DCP',
    text: 'When referring to a DCP (e.g. smoker with BPEs of 3s and 4s), include: type of LA, dose and delivery method; treatment to be carried out e.g. RSI of all sites with PPD >= 4mm; request to refer back to you following treatment.',
    keyPoints: [
      'Specify type of LA, dose and delivery method',
      'Detail treatment e.g. RSI of all sites with PPD >= 4mm',
      'Request referral back following treatment completion'
    ],
    keywords: ['referral letter', 'DCP referral', 'LA dose', 'RSI', 'PPD', 'BPE', 'refer back'],
    pageRef: 30
  },
  {
    id: 'c29-08',
    topic: 'professional-practice',
    subtopic: 'DCP Treatment Plan',
    title: 'DCP Treatment Plan Example',
    text: 'Sample DH/DT treatment plan: Diagnosis – periodontal (generalised severe chronic periodontitis), pulpal/periapical, coronal (primary caries), prosthodontic. Steps: (1) BI, PI; (2) plaque control advice and monitor; (3) full periodontal assessment; (4) scaling and RSI >= 4mm; (5) diet analysis and advice; (6) restorations; (7) full periodontal assessment 3/12 post treatment. Dentist review in 1 year. Prescription: topical 5% lidocaine gel max 0.5ml/visit; LA 2% lidocaine 1:80,000 adrenaline max 2 x 2.2ml cartridges/visit.',
    keyPoints: [
      'Steps: BI/PI, plaque control, full perio assessment, scaling/RSI >=4mm, diet analysis, restorations, reassessment 3/12',
      'Dentist review in 1 year',
      'Topical: 5% lidocaine gel max 0.5ml/visit',
      'LA: 2% lidocaine 1:80,000 adrenaline max 2 x 2.2ml cartridges/visit'
    ],
    keywords: ['treatment plan', 'DH', 'DT', 'lidocaine', 'adrenaline', 'RSI', 'periodontal assessment'],
    imageUrl: '/images/osce/page29_img01.jpeg',
    imageAlt: 'Handwritten DCP treatment plan with diagnosis, treatment steps, and prescription details',
    pageRef: 29
  },
  {
    id: 'c29-09',
    topic: 'splinting-trauma',
    subtopic: 'Trauma Chart',
    title: 'Trauma Chart for Paediatric Trauma',
    text: 'A trauma chart records the prognosis of traumatised teeth, typically covering UR2, UR1, UL1, UL2 (upper anteriors). For each tooth record: vitality, mobility, tenderness to percussion (TTP), colour, and sinus.',
    keyPoints: [
      'Covers UR2, UR1, UL1, UL2',
      'Record: vitality, mobility, TTP, colour, sinus',
      'Used for prognosis and follow-up of traumatised teeth'
    ],
    keywords: ['trauma chart', 'vitality', 'mobility', 'TTP', 'colour', 'sinus', 'paediatric trauma'],
    imageUrl: '/images/osce/page30_img01.jpeg',
    imageAlt: 'Trauma chart table with columns for UR2, UR1, UL1, UL2 and rows for vitality, mobility, TTP, colour, sinus',
    pageRef: 30
  },
  {
    id: 'c29-10',
    topic: 'radiography',
    subtopic: 'Radiographic Report',
    title: 'Radiographic Report – What to Include',
    text: 'A radiographic report must include: patient\'s name, your name, and the radiographic view taken.',
    keyPoints: [
      'Patient\'s name',
      'Your (clinician\'s) name',
      'Radiographic view taken'
    ],
    keywords: ['radiographic report', 'patient name', 'clinician name', 'radiographic view'],
    pageRef: 30
  },
];

export const questions_p29: Question[] = [
  // c29-01: MCA 2005 Key Principles
  {
    id: 'q29-001',
    contentId: 'c29-01',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    type: 'flashcard',
    question: 'What age group does the Mental Capacity Act 2005 apply to?',
    answer: 'Individuals aged 16 and over.',
    keywords: ['MCA 2005', 'age 16', 'mental capacity'],
    difficulty: 'easy'
  },
  {
    id: 'q29-002',
    contentId: 'c29-01',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    type: 'mcq',
    question: 'Which of the following is NOT a condition that may cause lack of capacity under the MCA 2005?',
    options: ['Dementia', 'Severe learning disability', 'Mild anxiety disorder', 'Unconsciousness from anaesthetic'],
    correctOptionIndex: 2,
    answer: 'Mild anxiety disorder',
    explanation: 'People who may lack capacity include those with dementia, severe learning disability, brain injury, mental health conditions, stroke, or unconsciousness from anaesthetic/accident.',
    keywords: ['MCA', 'lack capacity', 'dementia', 'learning disability'],
    difficulty: 'medium'
  },
  {
    id: 'q29-003',
    contentId: 'c29-01',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    type: 'fill-blank',
    question: 'Treatment for someone lacking capacity should be the _____ of their basic rights while still providing required care.',
    fullText: 'Treatment for someone lacking capacity should be the least restrictive of their basic rights while still providing required care.',
    blankWord: 'least restrictive',
    answer: 'least restrictive',
    keywords: ['least restrictive', 'MCA', 'basic rights'],
    difficulty: 'medium'
  },
  {
    id: 'q29-004',
    contentId: 'c29-01',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    type: 'free-text',
    question: 'Under the MCA, what should healthcare professionals always assume about a patient\'s capacity?',
    answer: 'Always assume an individual has capacity unless proved otherwise through a capacity assessment.',
    acceptableAnswers: ['assume capacity unless proved otherwise', 'assume the individual has capacity', 'presume capacity'],
    keywords: ['assume capacity', 'capacity assessment', 'MCA'],
    difficulty: 'easy'
  },
  // c29-02: Capacity Test & LPA
  {
    id: 'q29-005',
    contentId: 'c29-02',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    type: 'free-text',
    question: 'What three things must a person be able to do with information to demonstrate capacity under the MCA?',
    answer: '(1) Understand the information relevant to the decision, (2) retain that information, (3) use/weigh up that information as part of decision-making.',
    acceptableAnswers: ['understand, retain, use/weigh the information', 'understand retain and weigh up information'],
    keywords: ['understand', 'retain', 'weigh up', 'capacity test'],
    difficulty: 'medium'
  },
  {
    id: 'q29-006',
    contentId: 'c29-02',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    type: 'flashcard',
    question: 'What is a Lasting Power of Attorney (LPA)?',
    answer: 'A legal arrangement granting another person authority to make health/welfare decisions on your behalf.',
    keywords: ['Lasting Power of Attorney', 'LPA', 'health welfare'],
    difficulty: 'easy'
  },
  {
    id: 'q29-007',
    contentId: 'c29-02',
    topic: 'professional-practice',
    subtopic: 'Mental Capacity Act 2005',
    type: 'mcq',
    question: 'Under the MCA, a person is unable to make a decision if they cannot:',
    options: [
      'Understand, retain, and use/weigh the relevant information',
      'Read, write, and speak about the information',
      'Discuss the decision with a family member',
      'Provide written consent within 24 hours'
    ],
    correctOptionIndex: 0,
    answer: 'Understand, retain, and use/weigh the relevant information',
    keywords: ['capacity test', 'understand', 'retain', 'weigh'],
    difficulty: 'easy'
  },

  // c29-03: Parental Consent
  {
    id: 'q29-008',
    contentId: 'c29-03',
    topic: 'professional-practice',
    subtopic: 'Parental Consent',
    type: 'flashcard',
    question: 'If one parent consents but the other refuses, can treatment proceed?',
    answer: 'Yes. Healthcare professionals can accept one parent\'s consent and perform treatment in most cases.',
    keywords: ['parental consent', 'one parent', 'treatment'],
    difficulty: 'medium'
  },
  {
    id: 'q29-009',
    contentId: 'c29-03',
    topic: 'professional-practice',
    subtopic: 'Parental Consent',
    type: 'mcq',
    question: 'When can treatment proceed without parental consent for a child?',
    options: [
      'Never – parental consent is always required',
      'When waiting to obtain consent would place the child at risk',
      'When two healthcare professionals agree',
      'Only if a court order is obtained'
    ],
    correctOptionIndex: 1,
    answer: 'When waiting to obtain consent would place the child at risk',
    keywords: ['emergency', 'parental consent', 'child at risk'],
    difficulty: 'easy'
  },
  {
    id: 'q29-010',
    contentId: 'c29-03',
    topic: 'professional-practice',
    subtopic: 'Parental Consent',
    type: 'fill-blank',
    question: 'In an emergency where waiting for parental consent would place the child at _____, treatment can proceed without consent.',
    fullText: 'In an emergency where waiting for parental consent would place the child at risk, treatment can proceed without consent.',
    blankWord: 'risk',
    answer: 'risk',
    keywords: ['emergency', 'child', 'risk', 'consent'],
    difficulty: 'easy'
  },

  // c29-04: Dental Nurse Scope
  {
    id: 'q29-011',
    contentId: 'c29-04',
    topic: 'professional-practice',
    subtopic: 'Dental Nurse Scope',
    type: 'flashcard',
    question: 'What is the key restriction on dental nurses regarding diagnosis?',
    answer: 'Dental nurses DO NOT diagnose disease or create treatment plans.',
    keywords: ['dental nurse', 'cannot diagnose', 'cannot treatment plan'],
    difficulty: 'easy'
  },
  {
    id: 'q29-012',
    contentId: 'c29-04',
    topic: 'professional-practice',
    subtopic: 'Dental Nurse Scope',
    type: 'mcq',
    question: 'Which can a dental nurse do ONLY under direction of another registrant?',
    options: [
      'Keep full and accurate records',
      'Process radiographs',
      'Take radiographs and place rubber dam',
      'Prepare the clinical environment'
    ],
    correctOptionIndex: 2,
    answer: 'Take radiographs and place rubber dam',
    explanation: 'Under direction: take radiographs, place rubber dam, plaque indices, remove sutures, construct reg rims/special trays, repair acrylic, topical anaesthetic, mouthguards/bleaching trays, impressions, fluoride varnish.',
    keywords: ['dental nurse', 'under direction', 'radiographs', 'rubber dam'],
    difficulty: 'medium'
  },
  {
    id: 'q29-013',
    contentId: 'c29-04',
    topic: 'professional-practice',
    subtopic: 'Dental Nurse Scope',
    type: 'free-text',
    question: 'List four things a dental nurse can do under direction of another registrant.',
    answer: 'Any four of: take radiographs, place rubber dam, plaque indices, remove sutures, construct reg rims/special trays, repair acrylic, apply topical anaesthetic, construct mouthguards/bleaching trays, take impressions, apply fluoride varnish.',
    acceptableAnswers: [
      'take radiographs, place rubber dam, remove sutures, take impressions',
      'apply fluoride varnish, take radiographs, place rubber dam, topical anaesthetic'
    ],
    keywords: ['dental nurse', 'under direction', 'radiographs', 'rubber dam', 'sutures', 'impressions'],
    difficulty: 'medium'
  },

  // c29-05: Dental Hygienist Scope
  {
    id: 'q29-014',
    contentId: 'c29-05',
    topic: 'professional-practice',
    subtopic: 'Dental Hygienist Scope',
    type: 'flashcard',
    question: 'What four things can dental hygienists NOT do?',
    answer: 'Cannot: (1) restore teeth, (2) carry out pulp treatments, (3) adjust unrestored surfaces, (4) extract teeth.',
    keywords: ['dental hygienist', 'cannot restore', 'cannot extract', 'cannot pulp treatment'],
    difficulty: 'medium'
  },
  {
    id: 'q29-015',
    contentId: 'c29-05',
    topic: 'professional-practice',
    subtopic: 'Dental Hygienist Scope',
    type: 'mcq',
    question: 'Which CAN a dental hygienist perform?',
    options: ['Extract a primary molar', 'Place a composite restoration', 'Give infiltrations and dental blocks', 'Carry out a pulpotomy'],
    correctOptionIndex: 2,
    answer: 'Give infiltrations and dental blocks',
    keywords: ['dental hygienist', 'infiltrations', 'dental blocks', 'scope'],
    difficulty: 'medium'
  },
  {
    id: 'q29-016',
    contentId: 'c29-05',
    topic: 'professional-practice',
    subtopic: 'Dental Hygienist Scope',
    type: 'fill-blank',
    question: 'Dental hygienists DO NOT restore teeth, carry out _____ treatments, adjust unrestored surfaces, or extract teeth.',
    fullText: 'Dental hygienists DO NOT restore teeth, carry out pulp treatments, adjust unrestored surfaces, or extract teeth.',
    blankWord: 'pulp',
    answer: 'pulp',
    keywords: ['hygienist', 'pulp treatments', 'scope'],
    difficulty: 'easy'
  },

  // c29-06: Dental Therapist Scope
  {
    id: 'q29-017',
    contentId: 'c29-06',
    topic: 'professional-practice',
    subtopic: 'Dental Therapist Scope',
    type: 'flashcard',
    question: 'What additional skills do dental therapists have compared to hygienists?',
    answer: 'Direct restorations on primary/secondary teeth, pulpotomies on primary teeth, extract primary teeth, place pre-formed crowns on primary teeth.',
    keywords: ['dental therapist', 'restorations', 'pulpotomy', 'extract primary', 'pre-formed crowns'],
    difficulty: 'medium'
  },
  {
    id: 'q29-018',
    contentId: 'c29-06',
    topic: 'professional-practice',
    subtopic: 'Dental Therapist Scope',
    type: 'mcq',
    question: 'A dental therapist can extract which type of teeth?',
    options: ['Any permanent tooth', 'Only primary teeth', 'Primary and secondary premolars', 'Only permanent incisors'],
    correctOptionIndex: 1,
    answer: 'Only primary teeth',
    keywords: ['dental therapist', 'extract', 'primary teeth'],
    difficulty: 'easy'
  },
  {
    id: 'q29-019',
    contentId: 'c29-06',
    topic: 'professional-practice',
    subtopic: 'Dental Therapist Scope',
    type: 'mcq',
    question: 'Which DCP can carry out direct restorations on permanent teeth?',
    options: ['Dental nurse', 'Dental hygienist', 'Dental therapist', 'None – only dentists can'],
    correctOptionIndex: 2,
    answer: 'Dental therapist',
    keywords: ['dental therapist', 'direct restorations', 'permanent teeth'],
    difficulty: 'medium'
  },
  {
    id: 'q29-020',
    contentId: 'c29-06',
    topic: 'professional-practice',
    subtopic: 'Dental Therapist Scope',
    type: 'fill-blank',
    question: 'Dental therapists can carry out _____ on primary teeth, a procedure hygienists cannot perform.',
    fullText: 'Dental therapists can carry out pulpotomies on primary teeth, a procedure hygienists cannot perform.',
    blankWord: 'pulpotomies',
    answer: 'pulpotomies',
    keywords: ['dental therapist', 'pulpotomies', 'primary teeth'],
    difficulty: 'medium'
  },

  // c29-07: DCP Referral Letter
  {
    id: 'q29-021',
    contentId: 'c29-07',
    topic: 'professional-practice',
    subtopic: 'DCP Referral Letter',
    type: 'free-text',
    question: 'What three things should you include when writing a referral to a DCP (e.g. smoker with BPEs of 3s and 4s)?',
    answer: '(1) Type of LA, dose, and delivery method; (2) treatment to carry out, e.g. RSI of all sites with PPD >= 4mm; (3) request to refer back following treatment.',
    acceptableAnswers: ['LA type and dose, treatment to carry out, refer back', 'local anaesthetic details, treatment details, request referral back'],
    keywords: ['referral', 'DCP', 'LA dose', 'RSI', 'PPD', 'refer back'],
    difficulty: 'medium'
  },
  {
    id: 'q29-022',
    contentId: 'c29-07',
    topic: 'professional-practice',
    subtopic: 'DCP Referral Letter',
    type: 'mcq',
    question: 'When referring a patient with BPEs of 3s and 4s to a hygienist, what treatment should you specify?',
    options: ['Extraction of affected teeth', 'RSI of all sites with PPD >= 4mm', 'Full mouth debridement under GA', 'Pulpotomy of affected teeth'],
    correctOptionIndex: 1,
    answer: 'RSI of all sites with PPD >= 4mm',
    keywords: ['referral', 'BPE', 'RSI', 'PPD', '4mm'],
    difficulty: 'medium'
  },

  // c29-08: DCP Treatment Plan Example
  {
    id: 'q29-023',
    contentId: 'c29-08',
    topic: 'professional-practice',
    subtopic: 'DCP Treatment Plan',
    type: 'flashcard',
    question: 'What is the max topical lidocaine gel dose per visit in a DCP treatment plan?',
    answer: 'Topical 5% lidocaine gel: max 0.5ml per visit.',
    keywords: ['topical', 'lidocaine', '5%', '0.5ml'],
    difficulty: 'hard'
  },
  {
    id: 'q29-024',
    contentId: 'c29-08',
    topic: 'professional-practice',
    subtopic: 'DCP Treatment Plan',
    type: 'flashcard',
    question: 'What is the max LA dose per visit for 2% lidocaine with adrenaline in a DCP treatment plan?',
    answer: '2% lidocaine with 1:80,000 adrenaline – max 2 x 2.2ml cartridges per visit.',
    keywords: ['lidocaine', '2%', 'adrenaline', '1:80000', '2.2ml'],
    difficulty: 'hard'
  },
  {
    id: 'q29-025',
    contentId: 'c29-08',
    topic: 'professional-practice',
    subtopic: 'DCP Treatment Plan',
    type: 'mcq',
    question: 'After scaling and RSI, when should a full periodontal reassessment be performed?',
    options: ['1 month post treatment', '3 months (3/12) post treatment', '6 months post treatment', '12 months post treatment'],
    correctOptionIndex: 1,
    answer: '3 months (3/12) post treatment',
    keywords: ['periodontal reassessment', '3 months', '3/12'],
    difficulty: 'medium'
  },
  {
    id: 'q29-026',
    contentId: 'c29-08',
    topic: 'professional-practice',
    subtopic: 'DCP Treatment Plan',
    type: 'free-text',
    question: 'List the 7 steps in a DCP treatment plan for generalised severe chronic periodontitis.',
    answer: '(1) BI, PI; (2) Plaque control advice and monitor; (3) Full periodontal assessment; (4) Scaling and RSI >= 4mm; (5) Diet analysis and advice; (6) Restorations; (7) Full periodontal assessment 3/12 post treatment.',
    acceptableAnswers: ['BI PI, plaque control, full perio assessment, scaling RSI, diet analysis, restorations, reassessment at 3 months'],
    keywords: ['treatment plan', 'BI', 'PI', 'plaque control', 'scaling', 'RSI', 'diet analysis'],
    difficulty: 'hard'
  },

  // c29-09: Trauma Chart
  {
    id: 'q29-027',
    contentId: 'c29-09',
    topic: 'splinting-trauma',
    subtopic: 'Trauma Chart',
    type: 'free-text',
    question: 'What five clinical findings are recorded for each tooth on a trauma chart?',
    answer: 'Vitality, mobility, tenderness to percussion (TTP), colour, and sinus.',
    acceptableAnswers: ['vitality, mobility, TTP, colour, sinus', 'vitality mobility tenderness to percussion colour sinus'],
    keywords: ['trauma chart', 'vitality', 'mobility', 'TTP', 'colour', 'sinus'],
    difficulty: 'medium'
  },
  {
    id: 'q29-028',
    contentId: 'c29-09',
    topic: 'splinting-trauma',
    subtopic: 'Trauma Chart',
    type: 'mcq',
    question: 'Which teeth are typically recorded on a trauma chart?',
    options: ['All upper and lower teeth', 'UR2, UR1, UL1, UL2', 'Lower anterior teeth only', 'Upper and lower first molars'],
    correctOptionIndex: 1,
    answer: 'UR2, UR1, UL1, UL2',
    keywords: ['trauma chart', 'UR2', 'UR1', 'UL1', 'UL2'],
    difficulty: 'easy'
  },
  {
    id: 'q29-029',
    contentId: 'c29-09',
    topic: 'splinting-trauma',
    subtopic: 'Trauma Chart',
    type: 'fill-blank',
    question: 'A trauma chart records: vitality, mobility, _____, colour, and sinus for each traumatised tooth.',
    fullText: 'A trauma chart records: vitality, mobility, TTP (tenderness to percussion), colour, and sinus for each traumatised tooth.',
    blankWord: 'TTP',
    answer: 'TTP (tenderness to percussion)',
    acceptableAnswers: ['TTP', 'tenderness to percussion'],
    keywords: ['trauma chart', 'TTP', 'tenderness to percussion'],
    difficulty: 'easy'
  },

  // c29-10: Radiographic Report
  {
    id: 'q29-030',
    contentId: 'c29-10',
    topic: 'radiography',
    subtopic: 'Radiographic Report',
    type: 'free-text',
    question: 'What three essential elements must appear on every radiographic report?',
    answer: 'Patient\'s name, your (clinician\'s) name, and the radiographic view taken.',
    acceptableAnswers: ['patient name, your name, radiographic view', 'patient name, clinician name, radiographic view'],
    keywords: ['radiographic report', 'patient name', 'clinician name', 'radiographic view'],
    difficulty: 'easy'
  },
  // Cross-topic DCP comparison
  {
    id: 'q29-031',
    contentId: 'c29-06',
    topic: 'professional-practice',
    subtopic: 'DCP Scope Comparison',
    type: 'mcq',
    question: 'Which correctly distinguishes a dental therapist from a dental hygienist?',
    options: [
      'Therapists can prescribe radiographs but hygienists cannot',
      'Therapists can extract primary teeth and place pre-formed crowns',
      'Therapists can give dental blocks but hygienists cannot',
      'Therapists can diagnose disease but hygienists cannot'
    ],
    correctOptionIndex: 1,
    answer: 'Therapists can extract primary teeth and place pre-formed crowns',
    explanation: 'Both can prescribe radiographs, give dental blocks, and diagnose within competence. Therapist extras: direct restorations, pulpotomies, extracting primary teeth, pre-formed crowns on primary teeth.',
    keywords: ['therapist vs hygienist', 'extract primary', 'pre-formed crowns', 'scope comparison'],
    difficulty: 'hard'
  },
  {
    id: 'q29-032',
    contentId: 'c29-05',
    topic: 'professional-practice',
    subtopic: 'DCP Scope Comparison',
    type: 'flashcard',
    question: 'Compare: can dental nurses, hygienists, and therapists each diagnose disease?',
    answer: 'Dental nurses CANNOT diagnose at all. Hygienists CAN diagnose/treatment plan within competence. Therapists CAN diagnose/treatment plan within competence (same as hygienists plus extra skills).',
    keywords: ['dental nurse', 'hygienist', 'therapist', 'diagnose', 'scope comparison'],
    difficulty: 'medium'
  },
];
