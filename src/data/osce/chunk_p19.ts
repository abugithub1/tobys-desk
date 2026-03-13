import { ContentItem, Question } from './types';

// ── Pages 19–20: Safeguarding actions, Broken Endo File, Delayed Eruption,
//    SLOB Rule, Broken Tooth, Fractured Tuberosity ──

export const content_p19: ContentItem[] = [
  // ─── c19-01  Safeguarding – Ongoing Concerns & Actions ───
  {
    id: 'c19-01',
    topic: 'professional-practice',
    subtopic: 'Safeguarding',
    title: 'Safeguarding – No Longer Have Concerns vs Still Have Concerns',
    text: 'If you NO LONGER HAVE CONCERNS: no further child protection action needed. Provide necessary dental care, keep full clinical records, provide info about local support services for children if appropriate. If YOU STILL HAVE CONCERNS: (a) Action needed immediately – provide EMERGENCY dental care, talk to child and parents, explain concerns, inform of your intention to refer and seek consent to share information. Very rarely informing parents could put child in further danger – DISCUSS WITH DEFENCE ORGANISATION BEFORE PROCEEDING. Refer for medical exam if necessary. Keep FULL clinical records. (b) Refer to social services, follow up in writing within 48 hours – they will acknowledge receipt of referral, decide on next course of action within one working day and feedback to you. (c) Further action later: confirm referral has been received and acted upon. Arrange dental follow up as indicated. Be prepared to write a report for case conference if requested. Talk experiences through with trusted colleague or seek counselling if needed.',
    keyPoints: [
      'No longer concerned → provide dental care, keep full records, signpost local support',
      'Still concerned → provide emergency dental care, explain concerns to parents, seek consent to refer',
      'Rarely, informing parents may increase danger – discuss with defence organisation first',
      'Refer to social services; follow up in writing within 48 hours',
      'Social services acknowledge receipt and decide next steps within 1 working day',
      'Be prepared to write a report for case conference',
      'Seek support from trusted colleague or counselling if needed'
    ],
    keywords: ['safeguarding', 'child protection', 'social services', 'referral', 'defence organisation', '48 hours'],
    imageUrl: '/images/osce/page19_img01.png',
    imageAlt: 'Table showing safeguarding actions, responsibilities and team members',
    pageRef: 19
  },

  // ─── c19-02  Broken Endo File ───
  {
    id: 'c19-02',
    topic: 'endodontics',
    subtopic: 'Broken Endo File',
    title: 'Actor Station: Broken Endo File – Management',
    text: 'Treatment options: inform patient, can extract or refer to specialist. Can keep in place and obturate on top if tooth is asymptomatic and canal is clean. Options with specialist: limited success if broken file is beyond curvature of the root. Specialist may use ultrasonic and a special file removing instrument to remove the file – possibility of removing more dentine/perforating/root fracture. Can be filled up to the point of the broken file (bypass). Endodontic surgery (apicectomy) can be an option if file cannot be retrieved – can suffer bleeding, swelling, pain, discomfort, infection, may even fail leading to extraction. If it cannot be removed: cannot remove necrotic pulp properly so it can lead to an infection. Apical third – several studies showing not much difference in prognosis between a canal with a broken file vs a clean one.',
    keyPoints: [
      'Inform patient – tell truth and apologise; it is a common problem with curved roots',
      'If tooth asymptomatic and canal clean: can keep file in place and obturate on top',
      'Limited success retrieving file beyond root curvature',
      'Specialist may use ultrasonic or special file-removing instrument – risks: perforation, root fracture',
      'Bypass option: fill up to point of broken file',
      'Apicectomy if retrieval fails – risks: bleeding, swelling, pain, infection, possible extraction',
      'Broken file in apical third has similar prognosis to clean canal (several studies)',
      'Show X-ray to patient – keep them fully informed',
      'Emphasise complexities of RCT: very small structures, flexible instruments sometimes cannot negotiate canals'
    ],
    keywords: ['broken endo file', 'apicectomy', 'bypass', 'ultrasonic', 'root fracture', 'perforation', 'specialist referral'],
    pageRef: 19
  },

  // ─── c19-03  Delayed Eruption – Causes ───
  {
    id: 'c19-03',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    title: 'Delayed Eruption: Causes and Referral Criteria',
    text: 'Refer if no teeth have erupted past 12 months. Refer if contralateral tooth has not erupted within 6 months. GENDER: permanent teeth erupt earlier in girls than boys; difference can be 4-6 months. PRETERM BIRTH: preterm babies can have delayed eruption in primary AND permanent teeth. SUPERNUMERARY TEETH: can cause crowding/displacement/rotation/impaction or delayed eruption. Most common is mesiodens, followed by a fourth molar in the maxillary arch. Centrals, laterals and canines are most frequently affected. INJURIES TO DECIDUOUS TEETH: can lead to disruption in normal odontogenesis – dilacerations or physical displacement of permanent tooth germ. Traumatised deciduous teeth can be ankylosed or delayed in root resorption leading to over-retention and disruption in eruption of permanent successor. ARCH LENGTH DEFICIENCY: can lead to delayed eruption but most often the tooth erupts ectopically. SYSTEMIC CONDITIONS: disturbance of endocrine glands has a profound effect – hypothyroidism, hypopituitarism, hypoparathyroidism are the most associated endocrine disorders. GENETIC DISORDERS: cleidocranial dysostosis, Gardner\'s syndrome etc can affect periodontal tissue development, ankyloses etc. Gorlin Goltz, cherubism and Gardner\'s syndrome can result in multiple tumours/cysts in the jaws causing generalised delayed eruption. If concerned, a panoramic radiograph is important to evaluate position of teeth/extent of tooth development.',
    keyPoints: [
      'Refer if no teeth erupted past 12 months',
      'Refer if contralateral tooth not erupted within 6 months',
      'Girls\' permanent teeth erupt 4-6 months earlier than boys\'',
      'Preterm birth delays both primary AND permanent teeth',
      'Most common supernumerary is mesiodens, then fourth molar in maxillary arch',
      'Deciduous tooth trauma → dilacerations/displacement of permanent germ, ankylosis, over-retention',
      'Arch length deficiency usually causes ectopic eruption rather than true delay',
      'Endocrine: hypothyroidism, hypopituitarism, hypoparathyroidism',
      'Genetic: cleidocranial dysostosis, Gardner\'s syndrome, Gorlin Goltz, cherubism',
      'OPG is the investigation of choice to evaluate delayed eruption'
    ],
    keywords: ['delayed eruption', 'mesiodens', 'supernumerary', 'cleidocranial dysostosis', 'hypothyroidism', 'preterm birth', 'ectopic eruption', 'OPG'],
    imageUrl: '/images/osce/page20_img01.png',
    imageAlt: 'Flowchart showing normal vs abnormal tooth development and causes of delayed eruption',
    pageRef: 19
  },

  // ─── c19-04  Delayed Eruption – Radiographic & Other Causes ───
  {
    id: 'c19-04',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    title: 'Delayed Eruption: Radiographic vs Non-Radiographic Causes & Other Factors',
    text: 'Radiographically evident causes: supernumerary tooth, tumour, cyst, eruption sequestrum, ectopic eruption. Not evident radiographically: scar from trauma, scar from surgery, ankylosis, gingival hyperplasia, premature loss of primary teeth. OTHER causes of delayed eruption: nutritional deficiency, radiation damage, traumatic displacement of tooth germ, cleidocranial dysplasia, arch length deficiency, sclerosteosis, HIV infection, genetic predisposition. Abnormal tooth development can cause defects in shape, structure and colour. Conditions include amelogenesis imperfecta, dentinogenesis imperfecta, regional odontodysplasia, dilacerations, dentin dysplasia. Systemic factors contributing to delayed eruption include preterm birth/low birth weight, nutrition, Vitamin D resistant rickets, Down\'s syndrome, hypopituitarism. Physical obstruction is another category of delayed eruption cause.',
    keyPoints: [
      'Radiographically evident: supernumerary, tumour, cyst, eruption sequestrum, ectopic eruption',
      'Not radiographically evident: scar from trauma/surgery, ankylosis, gingival hyperplasia, premature primary tooth loss',
      'Other causes: nutritional deficiency, radiation damage, HIV infection, sclerosteosis, genetic predisposition',
      'Abnormal tooth development: amelogenesis imperfecta, dentinogenesis imperfecta, regional odontodysplasia, dilacerations, dentin dysplasia',
      'Systemic factors: preterm/low birth weight, nutrition, Vit D resistant rickets, Down\'s syndrome, hypopituitarism'
    ],
    keywords: ['eruption sequestrum', 'amelogenesis imperfecta', 'dentinogenesis imperfecta', 'regional odontodysplasia', 'ankylosis', 'gingival hyperplasia'],
    imageUrl: '/images/osce/page20_img01.png',
    imageAlt: 'Table of radiographically evident vs non-evident causes of delayed eruption',
    pageRef: 20
  },

  // ─── c19-05  SLOB Rule ───
  {
    id: 'c19-05',
    topic: 'radiography',
    subtopic: 'SLOB Rule',
    title: 'SLOB Rule – Localisation of Impacted Teeth',
    text: 'SLOB = Same Lingual, Opposite Buccal. Parallax technique used to detect position of impacted teeth usually. X-ray tube moves down → tooth moves down = LINGUAL/PALATAL. X-ray tube moves up → tooth moves down = BUCCAL. Usually used horizontally with two PAs. Steps: 1) Select two things visible on both images – a fixed or known object (e.g. mandibular first premolar) and an unknown object (e.g. supernumerary tooth labelled A). 2) Determine which direction images appear to move from image 1 to image 2 – e.g. moving mesial/anterior. 3) Determine which direction the unknown object moves in relation to the fixed object – e.g. moves mesial/anterior. 4) If unknown object moves in the SAME direction as the x-ray tube → it is LINGUAL. If it moves in the OPPOSITE direction → it is BUCCAL. Example: supernumerary moves mesial (same as tube) → therefore it is lingual of the mandibular first premolar.',
    keyPoints: [
      'SLOB = Same Lingual, Opposite Buccal',
      'Parallax technique for detecting position of impacted teeth',
      'Tube moves down + tooth moves down = LINGUAL/PALATAL',
      'Tube moves up + tooth moves down = BUCCAL',
      'Usually used horizontally with two PAs',
      'Compare a known fixed object with the unknown object across both images',
      'Same direction as tube = lingual; opposite direction = buccal'
    ],
    keywords: ['SLOB', 'parallax', 'lingual', 'buccal', 'impacted teeth', 'periapical', 'localisation'],
    imageUrl: '/images/osce/page20_img02.jpeg',
    imageAlt: 'Two periapical radiographs showing SLOB rule with supernumerary tooth labelled A',
    pageRef: 20
  },

  // ─── c19-06  Broken Tooth ───
  {
    id: 'c19-06',
    topic: 'splinting-trauma',
    subtopic: 'Broken Tooth',
    title: 'Broken Tooth – Initial Management',
    text: 'Scenario: subgingival, bruxist, smoker. Does not want a gap – what is your initial management? DO NOT BE AFRAID TO SAY XLA – UNRESTORABLE! Be empathetic. Explain advantage and disadvantage of all different options for filling a gap – see missing tooth heading. The key is to be honest about the prognosis while being empathetic about the patient\'s concerns.',
    keyPoints: [
      'Do not be afraid to say extraction if tooth is unrestorable',
      'Be empathetic when delivering this news',
      'Explain all options for replacing the gap with advantages and disadvantages',
      'Consider patient factors: subgingival fracture, bruxism, smoking all worsen prognosis',
      'Refer to missing tooth options for replacement discussion'
    ],
    keywords: ['broken tooth', 'unrestorable', 'extraction', 'subgingival', 'bruxist', 'missing tooth options'],
    pageRef: 20
  },

  // ─── c19-07  Fractured Tuberosity ───
  {
    id: 'c19-07',
    topic: 'oral-surgery',
    subtopic: 'Fractured Tuberosity',
    title: 'Fractured Tuberosity – Risk Factors, Signs, Symptoms & Management',
    text: 'Occurs during upper molar extraction. Risk factors: long/bulbous roots, multi-rooted teeth, lone standing upper molars, ankylosis, osteoporosis, elevator use. Signs: crunch/loud crack of bone breaking, sudden loosening of tooth and bone together with segment still attached to soft tissue, bone comes away with tooth during extraction, observable opening into maxillary sinus, hollow sound when using suction. Symptoms: patients may complain of sharp pain at time of fracture or may be completely asymptomatic. If sinus perforation has occurred may complain of reflux of fluids from mouth to nose. Investigation: gently assess degree of mobility across suspected fracture site, determine size of fractured segment, determine size of communication into sinus, document situation with periapical/OPTs. Treatment: refer to OMFS. For small fracture without sinus perforation – dissect segment from gingiva and periosteum and suture. For small fracture WITH sinus perforation (3-4mm) – dissect segment, close socket.',
    keyPoints: [
      'Occurs during upper molar extraction',
      'Risk factors: long/bulbous roots, multi-rooted teeth, lone standing molars, ankylosis, osteoporosis, elevator use',
      'Signs: crunch/crack, bone + tooth move together, observable sinus opening, hollow suction sound',
      'May be asymptomatic or sharp pain; sinus perforation → reflux of fluids mouth to nose',
      'Investigate: assess mobility, size of fragment, size of sinus communication, take radiographs',
      'Small fracture no sinus perf → dissect from gingiva/periosteum and suture',
      'Small fracture with sinus perf (3-4mm) → dissect segment, close socket',
      'Refer to OMFS'
    ],
    keywords: ['fractured tuberosity', 'upper molar', 'sinus perforation', 'OMFS', 'ankylosis', 'osteoporosis', 'elevator'],
    pageRef: 20
  },
];

export const questions_p19: Question[] = [
  // ════════ c19-01 Safeguarding ════════
  {
    id: 'q19-001',
    contentId: 'c19-01',
    topic: 'professional-practice',
    subtopic: 'Safeguarding',
    type: 'mcq',
    question: 'If you still have safeguarding concerns and action is needed immediately, what should you do BEFORE proceeding if informing parents could put the child in further danger?',
    answer: 'Discuss with your defence organisation before proceeding',
    options: [
      'Proceed with referral to social services immediately',
      'Contact the police directly',
      'Discuss with your defence organisation before proceeding',
      'Wait 48 hours to reassess the situation'
    ],
    correctOptionIndex: 2,
    explanation: 'Very rarely, informing parents could put the child in further danger. In these cases you must discuss with your defence organisation before proceeding with any referral.',
    keywords: ['safeguarding', 'defence organisation', 'child protection'],
    difficulty: 'medium'
  },
  {
    id: 'q19-002',
    contentId: 'c19-01',
    topic: 'professional-practice',
    subtopic: 'Safeguarding',
    type: 'fill-blank',
    question: 'After referring to social services, you should follow up in writing within ___ hours.',
    answer: '48',
    fullText: 'After referring to social services, you should follow up in writing within 48 hours.',
    blankWord: '48',
    explanation: 'Social services will acknowledge receipt of referral and decide on next course of action within one working day, but you must follow up in writing within 48 hours.',
    keywords: ['safeguarding', 'social services', '48 hours', 'referral'],
    difficulty: 'easy'
  },
  {
    id: 'q19-003',
    contentId: 'c19-01',
    topic: 'professional-practice',
    subtopic: 'Safeguarding',
    type: 'flashcard',
    question: 'What are the key steps when you still have safeguarding concerns and action is needed immediately?',
    answer: '1. Provide EMERGENCY dental care\n2. Talk to child and parents, explain concerns\n3. Inform of your intention to refer and seek consent to share information\n4. Discuss with defence organisation if informing parents may increase danger\n5. Refer for medical exam if necessary\n6. Keep FULL clinical records',
    keywords: ['safeguarding', 'emergency dental care', 'consent', 'clinical records'],
    difficulty: 'medium'
  },
  {
    id: 'q19-004',
    contentId: 'c19-01',
    topic: 'professional-practice',
    subtopic: 'Safeguarding',
    type: 'free-text',
    question: 'Within what timeframe will social services acknowledge receipt of referral and decide on the next course of action?',
    answer: 'One working day',
    acceptableAnswers: ['one working day', '1 working day', 'within one working day', 'within 1 working day'],
    keywords: ['safeguarding', 'social services', 'working day'],
    difficulty: 'medium'
  },

  // ════════ c19-02 Broken Endo File ════════
  {
    id: 'q19-005',
    contentId: 'c19-02',
    topic: 'endodontics',
    subtopic: 'Broken Endo File',
    type: 'flashcard',
    question: 'What are the management options for a broken endodontic file?',
    answer: '1. Keep in place and obturate on top (if asymptomatic and canal clean)\n2. Specialist retrieval with ultrasonic / file-removing instrument (risk of perforation/root fracture)\n3. Bypass: fill up to the point of the broken file\n4. Apicectomy (endodontic surgery) if retrieval fails\n5. Extraction if all else fails\n\nBroken file in apical third has similar prognosis to clean canal.',
    keywords: ['broken endo file', 'obturate', 'bypass', 'apicectomy', 'ultrasonic'],
    difficulty: 'medium'
  },
  {
    id: 'q19-006',
    contentId: 'c19-02',
    topic: 'endodontics',
    subtopic: 'Broken Endo File',
    type: 'mcq',
    question: 'What is the prognosis when a broken endodontic file is in the apical third of the canal?',
    answer: 'Several studies show not much difference in prognosis between a canal with a broken file in the apical third versus a clean canal',
    options: [
      'The tooth always requires extraction',
      'Prognosis is significantly worse than a clean canal',
      'Not much difference in prognosis compared to a clean canal',
      'The file must always be retrieved before obturation'
    ],
    correctOptionIndex: 2,
    explanation: 'Several studies show not much difference in prognosis between a canal with a broken file in the apical third and a clean one.',
    keywords: ['broken endo file', 'apical third', 'prognosis'],
    difficulty: 'medium'
  },
  {
    id: 'q19-007',
    contentId: 'c19-02',
    topic: 'endodontics',
    subtopic: 'Broken Endo File',
    type: 'mcq',
    question: 'What risks are associated with specialist retrieval of a broken endo file using ultrasonic instruments?',
    answer: 'Removing more dentine, perforation, and root fracture',
    options: [
      'Tooth discolouration and sensitivity only',
      'Removing more dentine, perforation, and root fracture',
      'Only gingival recession',
      'Allergic reaction to the ultrasonic waves'
    ],
    correctOptionIndex: 1,
    explanation: 'Specialist may use ultrasonic and a special file-removing instrument but there is a possibility of removing more dentine, perforating the root, or causing root fracture.',
    keywords: ['ultrasonic', 'perforation', 'root fracture', 'dentine removal'],
    difficulty: 'medium'
  },
  {
    id: 'q19-008',
    contentId: 'c19-02',
    topic: 'endodontics',
    subtopic: 'Broken Endo File',
    type: 'free-text',
    question: 'What should you tell the patient when you have broken an endodontic file in their root canal?',
    answer: 'Tell them the truth and apologise. Explain it is a common problem especially with curved roots. Show them the X-ray to keep them fully informed. Emphasise the complexities of root canal treatment – dealing with very small structures and flexible instruments that sometimes cannot negotiate canals properly.',
    acceptableAnswers: [
      'tell the truth and apologise',
      'be honest and apologise',
      'tell them truth, apologise, show x-ray',
      'apologise, explain it is common with curved roots, show x-ray'
    ],
    keywords: ['broken endo file', 'patient communication', 'apologise', 'curved roots', 'x-ray'],
    difficulty: 'medium'
  },

  // ════════ c19-03 Delayed Eruption ════════
  {
    id: 'q19-009',
    contentId: 'c19-03',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    type: 'flashcard',
    question: 'What are the referral criteria for delayed eruption?',
    answer: '1. No teeth erupted past 12 months of age\n2. Contralateral tooth has not erupted within 6 months of its counterpart',
    keywords: ['delayed eruption', 'referral', '12 months', '6 months'],
    difficulty: 'easy'
  },
  {
    id: 'q19-010',
    contentId: 'c19-03',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    type: 'mcq',
    question: 'What is the most common supernumerary tooth, and what is the second most common?',
    answer: 'Mesiodens is the most common, followed by a fourth molar in the maxillary arch',
    options: [
      'Fourth molar, then mesiodens',
      'Mesiodens, then fourth molar in the maxillary arch',
      'Paramolar, then mesiodens',
      'Distomolar, then supplemental lateral incisor'
    ],
    correctOptionIndex: 1,
    explanation: 'The most common supernumerary tooth is a mesiodens, followed by a fourth molar in the maxillary arch. Centrals, laterals and canines are most frequently affected by supernumeraries.',
    keywords: ['mesiodens', 'supernumerary', 'fourth molar', 'maxillary arch'],
    difficulty: 'medium'
  },
  {
    id: 'q19-011',
    contentId: 'c19-03',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    type: 'mcq',
    question: 'Which endocrine disorders are most associated with delayed eruption?',
    answer: 'Hypothyroidism, hypopituitarism, and hypoparathyroidism',
    options: [
      'Hyperthyroidism, Cushing\'s syndrome, Addison\'s disease',
      'Hypothyroidism, hypopituitarism, and hypoparathyroidism',
      'Diabetes mellitus, hyperparathyroidism, and acromegaly',
      'Graves\' disease, Conn\'s syndrome, and phaeochromocytoma'
    ],
    correctOptionIndex: 1,
    explanation: 'Disturbance of the endocrine glands usually has a profound effect on eruption. Hypothyroidism, hypopituitarism, and hypoparathyroidism are the most associated endocrine disorders.',
    keywords: ['hypothyroidism', 'hypopituitarism', 'hypoparathyroidism', 'delayed eruption', 'endocrine'],
    difficulty: 'hard'
  },
  {
    id: 'q19-012',
    contentId: 'c19-03',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    type: 'fill-blank',
    question: 'Permanent teeth erupt earlier in girls than boys, with the difference being ___ months.',
    answer: '4-6',
    fullText: 'Permanent teeth erupt earlier in girls than boys, with the difference being 4-6 months.',
    blankWord: '4-6',
    explanation: 'Gender differences in eruption timing mean girls\' permanent teeth erupt approximately 4-6 months before boys\' permanent teeth.',
    keywords: ['gender', 'eruption', 'girls', 'boys', '4-6 months'],
    difficulty: 'easy'
  },
  {
    id: 'q19-013',
    contentId: 'c19-03',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    type: 'free-text',
    question: 'Name three genetic disorders that can cause delayed eruption of teeth.',
    answer: 'Cleidocranial dysostosis, Gardner\'s syndrome, Gorlin Goltz syndrome, and cherubism',
    acceptableAnswers: [
      'cleidocranial dysostosis, gardner\'s syndrome, gorlin goltz',
      'cleidocranial dysostosis, gardners syndrome, cherubism',
      'gorlin goltz, cherubism, gardner\'s syndrome',
      'cleidocranial dysplasia, gardner syndrome, gorlin goltz syndrome'
    ],
    keywords: ['cleidocranial dysostosis', 'Gardner\'s syndrome', 'Gorlin Goltz', 'cherubism', 'genetic', 'delayed eruption'],
    difficulty: 'hard'
  },

  // ════════ c19-04 Delayed Eruption – Radiographic causes ════════
  {
    id: 'q19-014',
    contentId: 'c19-04',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    type: 'flashcard',
    question: 'What causes of delayed eruption are radiographically evident vs not radiographically evident?',
    answer: 'Radiographically evident: supernumerary tooth, tumour, cyst, eruption sequestrum, ectopic eruption.\n\nNot radiographically evident: scar from trauma, scar from surgery, ankylosis, gingival hyperplasia, premature loss of primary teeth.',
    keywords: ['radiographic', 'supernumerary', 'eruption sequestrum', 'ankylosis', 'gingival hyperplasia'],
    difficulty: 'medium'
  },
  {
    id: 'q19-015',
    contentId: 'c19-04',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    type: 'mcq',
    question: 'Which of the following causes of delayed eruption is NOT radiographically evident?',
    answer: 'Gingival hyperplasia',
    options: [
      'Supernumerary tooth',
      'Cyst',
      'Gingival hyperplasia',
      'Ectopic eruption'
    ],
    correctOptionIndex: 2,
    explanation: 'Gingival hyperplasia is not radiographically evident. Supernumerary teeth, cysts, eruption sequestrum and ectopic eruption are all visible on radiographs.',
    keywords: ['gingival hyperplasia', 'radiographic', 'delayed eruption'],
    difficulty: 'medium'
  },
  {
    id: 'q19-016',
    contentId: 'c19-04',
    topic: 'paediatrics',
    subtopic: 'Delayed Eruption',
    type: 'free-text',
    question: 'Name the conditions that can cause abnormal tooth development (defects in shape, structure and colour).',
    answer: 'Amelogenesis imperfecta, dentinogenesis imperfecta, regional odontodysplasia, dilacerations, and dentin dysplasia.',
    acceptableAnswers: [
      'amelogenesis imperfecta, dentinogenesis imperfecta, regional odontodysplasia',
      'amelogenesis imperfecta, dentinogenesis imperfecta, dilacerations, dentin dysplasia',
      'AI, DI, regional odontodysplasia, dilacerations, dentin dysplasia'
    ],
    keywords: ['amelogenesis imperfecta', 'dentinogenesis imperfecta', 'regional odontodysplasia', 'dilacerations', 'dentin dysplasia'],
    difficulty: 'hard'
  },

  // ════════ c19-05 SLOB Rule ════════
  {
    id: 'q19-017',
    contentId: 'c19-05',
    topic: 'radiography',
    subtopic: 'SLOB Rule',
    type: 'flashcard',
    question: 'Explain the SLOB rule and how it is used.',
    answer: 'SLOB = Same Lingual, Opposite Buccal.\n\nParallax technique using two PAs to localise impacted teeth:\n1. Select a known fixed object and an unknown object visible on both images\n2. Determine direction the X-ray tube has moved\n3. Determine direction unknown object moves relative to fixed object\n4. If unknown moves SAME direction as tube → LINGUAL\n5. If unknown moves OPPOSITE direction to tube → BUCCAL\n\nVertically: tube down + tooth down = lingual; tube up + tooth down = buccal.',
    imageUrl: '/images/osce/page20_img02.jpeg',
    imageAlt: 'Two periapical radiographs demonstrating the SLOB rule',
    keywords: ['SLOB', 'parallax', 'lingual', 'buccal', 'impacted'],
    difficulty: 'medium'
  },
  {
    id: 'q19-018',
    contentId: 'c19-05',
    topic: 'radiography',
    subtopic: 'SLOB Rule',
    type: 'fill-blank',
    question: 'SLOB stands for Same ___, Opposite Buccal.',
    answer: 'Lingual',
    fullText: 'SLOB stands for Same Lingual, Opposite Buccal.',
    blankWord: 'Lingual',
    keywords: ['SLOB', 'lingual', 'buccal'],
    difficulty: 'easy'
  },
  {
    id: 'q19-019',
    contentId: 'c19-05',
    topic: 'radiography',
    subtopic: 'SLOB Rule',
    type: 'mcq',
    question: 'When using the SLOB rule, if the X-ray tube moves down and the tooth also moves down, where is the tooth located?',
    answer: 'Lingual/Palatal',
    options: [
      'Buccal',
      'Lingual/Palatal',
      'Mesial',
      'Distal'
    ],
    correctOptionIndex: 1,
    explanation: 'SLOB = Same Lingual, Opposite Buccal. If the tube moves down and the tooth moves down (same direction), the tooth is lingual/palatal.',
    keywords: ['SLOB', 'lingual', 'palatal', 'tube movement'],
    difficulty: 'easy'
  },
  {
    id: 'q19-020',
    contentId: 'c19-05',
    topic: 'radiography',
    subtopic: 'SLOB Rule',
    type: 'mcq',
    question: 'How is the SLOB rule usually applied clinically?',
    answer: 'Horizontally using two periapical radiographs',
    options: [
      'Vertically using an OPG and a lateral ceph',
      'Horizontally using two periapical radiographs',
      'Using a single occlusal radiograph',
      'Comparing an OPG with an upper standard occlusal'
    ],
    correctOptionIndex: 1,
    explanation: 'The SLOB rule (parallax technique) is usually used horizontally with two periapical radiographs taken with different horizontal tube positions.',
    keywords: ['SLOB', 'parallax', 'periapical', 'horizontal'],
    difficulty: 'easy'
  },

  // ════════ c19-06 Broken Tooth ════════
  {
    id: 'q19-021',
    contentId: 'c19-06',
    topic: 'splinting-trauma',
    subtopic: 'Broken Tooth',
    type: 'flashcard',
    question: 'A patient presents with a broken tooth (subgingival fracture, bruxist, smoker) and does not want a gap. What is the key management principle?',
    answer: 'Do NOT be afraid to say the tooth requires extraction if it is UNRESTORABLE. Be empathetic when delivering this news. Explain the advantages and disadvantages of ALL options for replacing the gap (do nothing, partial denture, bridge, overdenture, implant). Patient factors (subgingival fracture, bruxism, smoking) all worsen the prognosis.',
    keywords: ['broken tooth', 'unrestorable', 'extraction', 'empathetic', 'missing tooth options'],
    difficulty: 'medium'
  },
  {
    id: 'q19-022',
    contentId: 'c19-06',
    topic: 'splinting-trauma',
    subtopic: 'Broken Tooth',
    type: 'mcq',
    question: 'A bruxist smoker presents with a subgingival fracture and does not want a gap. What is the MOST important initial management step?',
    answer: 'Be honest that the tooth is unrestorable and needs extraction, while being empathetic',
    options: [
      'Attempt a composite restoration and review in 6 months',
      'Refer for crown lengthening to salvage the tooth',
      'Be honest that the tooth is unrestorable and needs extraction, while being empathetic',
      'Place a temporary crown and monitor'
    ],
    correctOptionIndex: 2,
    explanation: 'The OSCE guidance states: DO NOT BE AFRAID TO SAY XLA – UNRESTORABLE! Be empathetic. Then explain all options for replacing the gap with their advantages and disadvantages.',
    keywords: ['broken tooth', 'unrestorable', 'extraction', 'empathetic'],
    difficulty: 'medium'
  },

  // ════════ c19-07 Fractured Tuberosity ════════
  {
    id: 'q19-023',
    contentId: 'c19-07',
    topic: 'oral-surgery',
    subtopic: 'Fractured Tuberosity',
    type: 'flashcard',
    question: 'What are the risk factors for a fractured tuberosity?',
    answer: '1. Long/bulbous roots\n2. Multi-rooted teeth\n3. Lone standing upper molars\n4. Ankylosis\n5. Osteoporosis\n6. Elevator use',
    keywords: ['fractured tuberosity', 'risk factors', 'bulbous roots', 'ankylosis', 'osteoporosis'],
    difficulty: 'medium'
  },
  {
    id: 'q19-024',
    contentId: 'c19-07',
    topic: 'oral-surgery',
    subtopic: 'Fractured Tuberosity',
    type: 'mcq',
    question: 'Which of the following is NOT a risk factor for fractured tuberosity?',
    answer: 'Young patient with immature roots',
    options: [
      'Lone standing upper molars',
      'Ankylosis',
      'Young patient with immature roots',
      'Osteoporosis'
    ],
    correctOptionIndex: 2,
    explanation: 'Risk factors include long/bulbous roots, multi-rooted teeth, lone standing upper molars, ankylosis, osteoporosis, and elevator use. Young patients with immature roots are not a listed risk factor.',
    keywords: ['fractured tuberosity', 'risk factors'],
    difficulty: 'easy'
  },
  {
    id: 'q19-025',
    contentId: 'c19-07',
    topic: 'oral-surgery',
    subtopic: 'Fractured Tuberosity',
    type: 'flashcard',
    question: 'What are the signs and symptoms of a fractured tuberosity?',
    answer: 'Signs:\n- Crunch/loud crack of bone breaking\n- Sudden loosening of tooth and bone together, segment still attached to soft tissue\n- Bone comes away with tooth during extraction\n- Observable opening into maxillary sinus\n- Hollow sound when using suction\n\nSymptoms:\n- Sharp pain at time of fracture (or may be asymptomatic)\n- If sinus perforation occurred: reflux of fluids from mouth to nose',
    keywords: ['fractured tuberosity', 'signs', 'symptoms', 'sinus perforation', 'crunch'],
    difficulty: 'medium'
  },
  {
    id: 'q19-026',
    contentId: 'c19-07',
    topic: 'oral-surgery',
    subtopic: 'Fractured Tuberosity',
    type: 'mcq',
    question: 'How should a small fractured tuberosity WITHOUT sinus perforation be managed?',
    answer: 'Dissect segment from gingiva and periosteum and suture',
    options: [
      'Leave in situ and monitor with radiographs',
      'Dissect segment from gingiva and periosteum and suture',
      'Pack with Whitehead\'s varnish and place a buccal advancement flap',
      'Immediate referral for general anaesthetic'
    ],
    correctOptionIndex: 1,
    explanation: 'For a small fracture without sinus perforation, the management is to dissect the segment from gingiva and periosteum and suture. Refer to OMFS.',
    keywords: ['fractured tuberosity', 'management', 'dissect', 'suture'],
    difficulty: 'medium'
  },
  {
    id: 'q19-027',
    contentId: 'c19-07',
    topic: 'oral-surgery',
    subtopic: 'Fractured Tuberosity',
    type: 'free-text',
    question: 'What investigations should be carried out when a fractured tuberosity is suspected?',
    answer: 'Gently assess degree of mobility across suspected fracture site. Determine size of fractured segment. Determine size of communication into sinus. Document situation with periapical radiographs or OPTs.',
    acceptableAnswers: [
      'assess mobility, determine size of fragment, determine sinus communication, take radiographs',
      'assess mobility, size of fragment, sinus communication size, PA or OPT',
      'gently assess mobility, determine fracture size, sinus communication, radiograph'
    ],
    keywords: ['fractured tuberosity', 'investigation', 'mobility', 'sinus communication', 'radiograph'],
    difficulty: 'medium'
  },
  {
    id: 'q19-028',
    contentId: 'c19-07',
    topic: 'oral-surgery',
    subtopic: 'Fractured Tuberosity',
    type: 'fill-blank',
    question: 'For a small fractured tuberosity WITH sinus perforation of ___ mm, dissect the segment and close the socket.',
    answer: '3-4',
    fullText: 'For a small fractured tuberosity WITH sinus perforation of 3-4 mm, dissect the segment and close the socket.',
    blankWord: '3-4',
    explanation: 'A small sinus perforation of 3-4mm associated with a fractured tuberosity is managed by dissecting the segment and closing the socket.',
    keywords: ['fractured tuberosity', 'sinus perforation', '3-4mm'],
    difficulty: 'hard'
  },
];
