import { ContentItem, Question } from './types';

// Pages 15-16: Missing Tooth, Child Extractions, Cysts, Emergency Drugs

export const content_p15: ContentItem[] = [
  {
    id: 'c15-01',
    topic: 'missing-tooth',
    subtopic: 'Treatment Options',
    title: 'Missing/Unrestorable Tooth – Treatment Options Overview',
    text: 'Treatment options for a missing or unrestorable tooth: (1) Do Nothing – often good for back molars. No cost/chair-time. Consider biological cost of prepping other teeth vs loss of function/aesthetics. (2) Partials – cheap, easy, removable, easily maintained, can be aesthetic. Disadvantages: increased plaque and caries, lack of retention, trauma to underlying tissues, quite a few stages of chairtime. (3) Bridgework – uses one or two adjacent teeth prepared to hold a pontic. Conventional bridge: aesthetic, functional, fixed but not often done due to high biological cost (mainly to pulp and periodontium), increased stress on abutments, difficult maintenance (superfloss), expensive. Adhesive bridge: aesthetic, functional, fixed, relatively cheap, minimal tooth substance removed, 7-12 year longevity, prone to debond (though shouldn\'t if done correctly), increased caries risk (cantilever better due to silent caries in fixed-fixed), metal wings may darken abutment teeth. (4) Overdentures – complete set of false teeth over remaining teeth for stability. Less resorption around abutments, easy to maintain, increased stability. Risk of caries and perio diseases affecting abutments, more expensive than normal dentures, technically challenging, increased fracture risk. (5) Implants – screw into bone, looks and acts like normal tooth. No prep of abutment teeth, maintains bone, feels natural, eliminates need for dentures. Proven success rate 97-98% in right cases, good aesthetics. Depends on adequate bone quantity and quality, involves surgical procedures, highly operator dependent, requires referral, high initial expense, long treatment time, significant maintenance. Contraindicated if patient smokes or is diabetic.',
    keyPoints: [
      'Do nothing is valid for back molars – weigh biological cost vs benefit',
      'Partials: cheap, removable, but increased plaque/caries risk',
      'Conventional bridge: high biological cost to pulp and periodontium',
      'Adhesive bridge: minimal prep, 7-12 year longevity, cantilever better than fixed-fixed to avoid silent caries',
      'Overdentures sit over remaining teeth for stability',
      'Implants: 97-98% success rate, contraindicated in smokers/diabetics',
      'Implants require referral, adequate bone, and significant maintenance'
    ],
    keywords: ['missing tooth', 'partials', 'bridge', 'adhesive bridge', 'overdenture', 'implants', 'cantilever', 'biological cost'],
    pageRef: 15
  },
  {
    id: 'c15-02',
    topic: 'paediatrics',
    subtopic: 'Child Extractions – Anaesthesia Options',
    title: 'Actor Station: Child Extractions – Discussing Options',
    text: 'Scenario: child requires all 5s extracted for ortho. Child anxious, father wants GA. Discuss treatment options. (1) Local Anaesthetic (LA): easiest and quickest for practitioner, works towards systematic desensitisation for future procedures, shortest waiting list, no referral needed, no recovery time, short half-life, no hospital setting required, no starvation required. Patient can still feel initial pain and sensations of pressure/drilling. Will be completely awake and aware. (2) Inhalation Sedation: analgesic, reduces anxiety, weak anaesthetic agent, goes in and out of body easily via breathing. Patient feels happy, giggly, floaty, tingly, relaxed. Dentist can control sedation throughout. Patient still awake with verbal communication. Risk of oversedation. Cannot be used if patient has a cold or cannot breathe through nose. Negative behaviour or nervousness can cause resistance. Requires mask which some children cannot tolerate. Likely referral to community or hospital setting. (3) IV Sedation: patient must be over 13. Still awake, verbal contact maintained. Higher sedation level than inhalation. Quick onset, adjustable dose. Requires referral to community or hospital. Requires venous access – phobic patients may resist. Risk of over-sedation and respiratory depression. Rare allergy to medication. (4) General Anaesthetic (GA): usually younger than 4-5 years. Completely asleep, unaware of procedure, no pain, completely relieves anxiety, all treatment done in one go. Does NOT relieve dental phobia. 1/250,000 risk of death. Must be admitted to hospital, post-op recovery needed, long waiting list, must fast. Conclusion: better and LESS RISKY to attempt an alternative form of anaesthesia before jumping straight to GA.',
    keyPoints: [
      'LA: easiest, quickest, no referral, works towards desensitisation',
      'Inhalation sedation: analgesic + anxiolytic, weak anaesthetic, via breathing, needs nasal breathing',
      'IV sedation: must be over 13, quick onset, adjustable, requires venous access',
      'GA: completely asleep, 1/250,000 risk of death, must be in hospital, does NOT relieve dental phobia',
      'Always attempt alternative anaesthesia before GA',
      'Inhalation sedation patient still awake with verbal communication',
      'IV sedation risk: over-sedation, respiratory depression'
    ],
    keywords: ['child extraction', 'LA', 'inhalation sedation', 'IV sedation', 'general anaesthetic', 'GA', 'desensitisation', 'anxious child'],
    pageRef: 15
  },
  {
    id: 'c15-03',
    topic: 'oral-surgery',
    subtopic: 'Cysts – Description & Referral',
    title: 'Cysts: Urgent Referrals and Describing Features',
    text: 'Which cysts require urgent referrals? Check referral guidelines. If prognosis would be significantly worse by delaying consultation – URGENT REFERRAL. IF IN DOUBT – REFER! Describing cysts on imaging: radiolucency, opacity, size, location, shape and margins (well-defined or ragged – ragged = NASTY), effects on surrounding structure (bony expansion/erosion/tooth resorption/delayed eruption/displacement/sunburst – NASTY), unilocular vs multilocular, resorption/separation of teeth, aggressive features (destroys everything).',
    keyPoints: [
      'If in doubt – REFER',
      'Urgent referral if prognosis significantly worse with delayed consultation',
      'Describe: radiolucency, opacity, size, location, shape, margins',
      'Ragged margins = suspicious/nasty lesion',
      'Bony expansion, erosion, tooth resorption, sunburst pattern = concerning',
      'Note unilocular vs multilocular',
      'Aggressive cyst: destroys everything around it'
    ],
    keywords: ['cyst', 'referral', 'radiolucency', 'margins', 'unilocular', 'multilocular', 'aggressive', 'sunburst'],
    pageRef: 15
  },
  {
    id: 'c15-04',
    topic: 'oral-surgery',
    subtopic: 'Non-Aggressive Cysts',
    title: 'Non-Aggressive Cysts – Types and Management',
    text: 'Non-aggressive cysts: (1) Nasopalatine duct cyst: can just remove. (2) Globulomaxillary cyst: pear-shaped between upper lateral and canine, can cause roots to diverge, enucleate. (3) Nasolabial cyst: developmental, can cause resorption of underlying bone, surgically excise. (4) Solitary bone cyst: body of mandible, teeth VITAL, usually asymptomatic OPT finding, empty cavity. (5) Aneurysmal bone cyst: multilocular ballooning radiolucency, painless, blood filled. (6) Stafne\'s bone cavity: idiopathic, ectopic salivary tissue, usually asymptomatic OPT finding, always below ID canal, no treatment required. (7) Thyroglossal duct cyst: developmental along route of thyroglossal tract, mobile, midline swelling of neck, moves on swallowing, surgically excise. (8) Branchial cyst: lateral neck mass, developmental, removal difficult – do MRI, can be difficult to distinguish from cystic lymph node metastasis. (9) Dermoid cyst: developmental, will not move with skin, need to reflect a flap to remove, often sublingual, can cause elevation of tongue, enucleate. (10) Sebaceous cyst: lumps in skin, hair bearing areas, punctum present, moves with skin, excise. (11) Mucocele: collection of mucin, ruptured salivary gland duct, excise. (12) Cyst in major salivary gland: can occur in any gland, should be squishy (distinguishes from tumour), slowly enlarging lump, excise. (13) Ranula: large mucocele from sublingual gland, bluish, can displace tongue, excise. (14) Antral mucous retention cyst: often routine finding on OPT, asymptomatic, sure of diagnosis – no treatment. (15) Eruption cyst: bluish colour, usually ruptures spontaneously.',
    keyPoints: [
      'Nasopalatine duct cyst: simply remove',
      'Globulomaxillary cyst: pear-shaped between upper lateral and canine',
      'Solitary bone cyst: mandible body, teeth VITAL, empty cavity on exploration',
      'Stafne\'s bone cavity: always below ID canal, no treatment needed',
      'Thyroglossal duct cyst: midline neck, moves on swallowing',
      'Branchial cyst: lateral neck mass, do MRI, DDx cystic lymph node metastasis',
      'Dermoid cyst: does NOT move with skin, often sublingual',
      'Sebaceous cyst: HAS punctum, moves WITH skin',
      'Ranula: large mucocele from sublingual gland, bluish',
      'Antral mucous retention cyst: incidental OPT finding, no treatment'
    ],
    keywords: ['nasopalatine', 'globulomaxillary', 'solitary bone cyst', 'Stafne', 'thyroglossal', 'branchial', 'dermoid', 'mucocele', 'ranula', 'eruption cyst'],
    pageRef: 16
  },
  {
    id: 'c15-05',
    topic: 'oral-surgery',
    subtopic: 'Odontogenic Cysts',
    title: 'Radicular, Residual, and Dentigerous Cysts',
    text: 'Radicular cyst: NON VITAL tooth around apical area. Enucleate during surgical endo/extraction. Caused by pulpal necrosis. Can get cholesterol deposits. Residual cyst: a radicular cyst that was not removed (tooth extracted but cyst left behind). Dentigerous cyst: crown of an unerupted tooth. Enucleated and tooth removed, or marsupialised if wishing to retain tooth.',
    keyPoints: [
      'Radicular cyst: non-vital tooth, apical, caused by pulpal necrosis, cholesterol deposits possible',
      'Residual cyst: radicular cyst left after tooth extraction',
      'Dentigerous cyst: surrounds crown of unerupted tooth',
      'Dentigerous cyst treatment: enucleate + extract, or marsupialise to retain tooth'
    ],
    keywords: ['radicular cyst', 'residual cyst', 'dentigerous cyst', 'pulpal necrosis', 'enucleate', 'marsupialise', 'unerupted'],
    pageRef: 16
  },
  {
    id: 'c15-06',
    topic: 'oral-surgery',
    subtopic: 'Aggressive Cysts and Tumours',
    title: 'Nasty Cysts/Tumours to Look Out For',
    text: 'Odontogenic keratocyst (OKC): NASTY and AGGRESSIVE, can be fatal. Typically in 20-30s age group. Need to aspirate contents to confirm – HIGH level of protein. Can infiltrate into bone and spread into soft tissues, base of skull, and even brain. Ensure it\'s not ameloblastoma – MUST be removed with margin of bone. Ameloblastoma: usually in posterior mandible/ramus. Will resorb teeth. Treat with WIDE surgical excision – can recur. Osteosarcoma: aggressive, malignant neoplasm producing malignant osteoid. Pain may be worse at night. Usually mandible of males aged 30. Painful swelling, rapid growth. Distortion of alveolus, loosening of teeth and bleeding. SUNRAY APPEARANCE on radiograph. Will need radical excision and chemo as they metastasise early.',
    keyPoints: [
      'OKC: nasty/aggressive, can be fatal, 20-30s age group, high protein on aspiration',
      'OKC can infiltrate bone, soft tissue, skull base, brain – remove with bone margin',
      'Ameloblastoma: posterior mandible/ramus, resorbs teeth, wide surgical excision, can recur',
      'Osteosarcoma: malignant, sunray appearance, males aged 30, mandible',
      'Osteosarcoma: pain worse at night, rapid growth, loosening of teeth, metastasises early'
    ],
    keywords: ['OKC', 'odontogenic keratocyst', 'ameloblastoma', 'osteosarcoma', 'sunray', 'aggressive', 'malignant', 'aspiration'],
    imageUrl: '/images/osce/page16_img01.webp',
    imageAlt: 'Radiograph showing aggressive jaw lesion with irregular margins',
    pageRef: 16
  },
  {
    id: 'c15-07',
    topic: 'medical-emergencies',
    subtopic: 'Emergency Drugs Kit',
    title: 'Emergency Drugs Kit – Contents',
    text: 'List what should be present in the emergency drugs kit (may be asked to list what is missing). Mnemonic: GGGA AA. Contents: GTN spray (400mcg/dose), Glucagon IM injection (1mg), Glucose gel (oral), Adrenaline pre-filled syringe IM (1:1000, 1mg/ml) – minijet/epipen/ampules, Aspirin dispersible (300mg).',
    keyPoints: [
      'GTN spray: 400mcg/dose',
      'Glucagon IM injection: 1mg',
      'Glucose gel: oral administration',
      'Adrenaline pre-filled syringe IM: 1:1000 (1mg/ml) – minijet/epipen/ampules',
      'Aspirin dispersible: 300mg',
      'Mnemonic: GGGA AA (GTN, Glucagon, Glucose, Adrenaline, Aspirin)'
    ],
    keywords: ['emergency drugs', 'GTN', 'glucagon', 'glucose', 'adrenaline', 'aspirin', 'emergency kit', '1:1000'],
    pageRef: 16
  }
];

export const questions_p15: Question[] = [
  {
    id: 'q15-001',
    contentId: 'c15-01',
    topic: 'missing-tooth',
    subtopic: 'Treatment Options',
    type: 'flashcard',
    question: 'What are the 5 main treatment options for a missing/unrestorable tooth?',
    answer: '1) Do nothing, 2) Partial denture, 3) Bridgework (conventional or adhesive), 4) Overdenture, 5) Implant.',
    keywords: ['missing tooth', 'treatment options', 'partial', 'bridge', 'implant', 'overdenture'],
    difficulty: 'easy'
  },
  {
    id: 'q15-002',
    contentId: 'c15-01',
    topic: 'missing-tooth',
    subtopic: 'Adhesive Bridge',
    type: 'mcq',
    question: 'What is the typical longevity of an adhesive (resin-bonded) bridge?',
    answer: '7-12 years',
    options: ['2-5 years', '7-12 years', '15-20 years', '25+ years'],
    correctOptionIndex: 1,
    explanation: 'Adhesive bridges have a longevity of 7-12 years. They are relatively cheap with minimal tooth substance removed.',
    keywords: ['adhesive bridge', 'longevity', 'resin-bonded'],
    difficulty: 'medium'
  },
  {
    id: 'q15-003',
    contentId: 'c15-01',
    topic: 'missing-tooth',
    subtopic: 'Implants',
    type: 'fill-blank',
    question: 'Implants have a proven success rate of ___% in the right cases.',
    answer: '97-98',
    fullText: 'Implants have a proven success rate of 97-98% in the right cases.',
    blankWord: '97-98',
    keywords: ['implant', 'success rate'],
    difficulty: 'medium'
  },
  {
    id: 'q15-004',
    contentId: 'c15-01',
    topic: 'missing-tooth',
    subtopic: 'Implants',
    type: 'mcq',
    question: 'Which patient factors may CONTRAINDICATE dental implants?',
    answer: 'Smoking and diabetes',
    options: [
      'Smoking and diabetes',
      'High blood pressure and asthma',
      'Epilepsy and anaemia',
      'Pregnancy and breastfeeding'
    ],
    correctOptionIndex: 0,
    explanation: 'If a patient smokes or is diabetic, implants may be contra-indicated due to impaired healing and increased failure risk.',
    keywords: ['implant', 'contraindication', 'smoking', 'diabetes'],
    difficulty: 'easy'
  },
  {
    id: 'q15-005',
    contentId: 'c15-01',
    topic: 'missing-tooth',
    subtopic: 'Bridge Types',
    type: 'free-text',
    question: 'Why is a cantilever adhesive bridge often preferred over a fixed-fixed adhesive bridge?',
    answer: 'Cantilever adhesive bridges are preferred because fixed-fixed adhesive bridges carry a risk of silent caries developing undetected under a debonded retainer while the other retainer remains bonded.',
    acceptableAnswers: [
      'silent caries risk',
      'fixed-fixed can debond on one side causing silent caries',
      'cantilever avoids silent caries under debonded retainer',
      'risk of undetected caries if one wing debonds'
    ],
    keywords: ['cantilever', 'fixed-fixed', 'silent caries', 'adhesive bridge'],
    difficulty: 'hard'
  },
  {
    id: 'q15-007',
    contentId: 'c15-02',
    topic: 'paediatrics',
    subtopic: 'LA for Children',
    type: 'flashcard',
    question: 'What are the advantages of using LA for child extractions?',
    answer: 'Easiest and quickest, works towards systematic desensitisation for future procedures, shortest waiting list, no referral needed, no recovery time, short half-life, no hospital setting needed, no starvation required. Child will be completely awake and aware.',
    keywords: ['LA', 'child extraction', 'desensitisation', 'advantages'],
    difficulty: 'easy'
  },
  {
    id: 'q15-008',
    contentId: 'c15-02',
    topic: 'paediatrics',
    subtopic: 'IV Sedation',
    type: 'fill-blank',
    question: 'IV sedation in children requires the patient to be over ___ years old.',
    answer: '13',
    fullText: 'IV sedation in children requires the patient to be over 13 years old.',
    blankWord: '13',
    keywords: ['IV sedation', 'age', 'child'],
    difficulty: 'medium'
  },
  {
    id: 'q15-009',
    contentId: 'c15-02',
    topic: 'paediatrics',
    subtopic: 'General Anaesthetic',
    type: 'fill-blank',
    question: 'General anaesthetic carries a ___ risk of death.',
    answer: '1/250,000',
    fullText: 'General anaesthetic carries a 1/250,000 risk of death.',
    blankWord: '1/250,000',
    keywords: ['GA', 'general anaesthetic', 'risk', 'death'],
    difficulty: 'medium'
  },
  {
    id: 'q15-010',
    contentId: 'c15-02',
    topic: 'paediatrics',
    subtopic: 'Inhalation Sedation',
    type: 'mcq',
    question: 'Which is NOT a feature of inhalation sedation?',
    answer: 'Patient is unconscious throughout the procedure',
    options: [
      'Patient feels happy, giggly, floaty, tingly, relaxed',
      'Goes in and out of the body easily via breathing',
      'Patient is unconscious throughout the procedure',
      'Cannot be used if the patient has a cold or cannot breathe through nose'
    ],
    correctOptionIndex: 2,
    explanation: 'With inhalation sedation the patient is still awake with verbal communication maintained throughout. They are NOT unconscious.',
    keywords: ['inhalation sedation', 'features', 'conscious'],
    difficulty: 'easy'
  },
  {
    id: 'q15-012',
    contentId: 'c15-03',
    topic: 'oral-surgery',
    subtopic: 'Cyst Referral',
    type: 'flashcard',
    question: 'When should a cyst be urgently referred?',
    answer: 'If prognosis would be significantly worse by delaying consultation – URGENT REFERRAL. If in doubt – REFER! Always check referral guidelines.',
    keywords: ['cyst', 'referral', 'urgent', 'prognosis'],
    difficulty: 'easy'
  },
  {
    id: 'q15-013',
    contentId: 'c15-03',
    topic: 'oral-surgery',
    subtopic: 'Cyst Description',
    type: 'free-text',
    question: 'List the features you should describe when assessing a cyst on imaging.',
    answer: 'Radiolucency, opacity, size, location, shape and margins (well-defined or ragged), effects on surrounding structures (bony expansion, erosion, tooth resorption, delayed eruption, displacement, sunburst pattern), unilocular vs multilocular, resorption/separation of teeth, aggressive features.',
    acceptableAnswers: [
      'radiolucency, opacity, size, location, margins, effects on surrounding structures, unilocular/multilocular',
      'size location margins effects on surrounding teeth unilocular multilocular',
      'radiolucency opacity size location shape margins surrounding structures'
    ],
    keywords: ['cyst', 'imaging', 'description', 'radiolucency', 'margins'],
    difficulty: 'medium'
  },
  {
    id: 'q15-014',
    contentId: 'c15-03',
    topic: 'oral-surgery',
    subtopic: 'Cyst Description',
    type: 'mcq',
    question: 'What do ragged margins on a cyst radiograph suggest?',
    answer: 'A nasty/aggressive lesion',
    options: [
      'A benign developmental cyst',
      'A nasty/aggressive lesion',
      'A residual cyst',
      'Normal anatomical variation'
    ],
    correctOptionIndex: 1,
    explanation: 'Ragged, ill-defined margins are a sign of an aggressive or potentially malignant lesion. Well-defined margins are more typical of benign cysts.',
    keywords: ['ragged margins', 'aggressive', 'nasty', 'cyst'],
    difficulty: 'easy'
  },

  {
    id: 'q15-015',
    contentId: 'c15-04',
    topic: 'oral-surgery',
    subtopic: 'Non-Aggressive Cysts',
    type: 'flashcard',
    question: 'Describe the Stafne\'s bone cavity – location, features, and treatment.',
    answer: 'Idiopathic cavity containing ectopic salivary tissue. Usually asymptomatic OPT finding. ALWAYS located below the ID canal. No treatment required.',
    keywords: ['Stafne', 'bone cavity', 'ID canal', 'salivary', 'no treatment'],
    difficulty: 'medium'
  },
  {
    id: 'q15-016',
    contentId: 'c15-04',
    topic: 'oral-surgery',
    subtopic: 'Non-Aggressive Cysts',
    type: 'mcq',
    question: 'Which cyst is pear-shaped and located between the upper lateral incisor and canine?',
    answer: 'Globulomaxillary cyst',
    options: [
      'Nasopalatine duct cyst',
      'Globulomaxillary cyst',
      'Nasolabial cyst',
      'Dentigerous cyst'
    ],
    correctOptionIndex: 1,
    explanation: 'The globulomaxillary cyst is classically pear-shaped and located between the upper lateral incisor and canine. It can cause the roots to diverge.',
    keywords: ['globulomaxillary', 'pear-shaped', 'lateral', 'canine'],
    difficulty: 'medium'
  },
  {
    id: 'q15-017',
    contentId: 'c15-04',
    topic: 'oral-surgery',
    subtopic: 'Non-Aggressive Cysts',
    type: 'mcq',
    question: 'A solitary bone cyst of the mandible is explored surgically. What is found inside?',
    answer: 'An empty cavity',
    options: [
      'Pus and granulation tissue',
      'An empty cavity',
      'Blood-filled space',
      'Keratinised material'
    ],
    correctOptionIndex: 1,
    explanation: 'Solitary bone cyst of the mandible has teeth that are VITAL and presents as an empty cavity on surgical exploration. It is usually an asymptomatic OPT finding.',
    keywords: ['solitary bone cyst', 'empty cavity', 'mandible', 'vital teeth'],
    difficulty: 'medium'
  },
  {
    id: 'q15-018',
    contentId: 'c15-04',
    topic: 'oral-surgery',
    subtopic: 'Non-Aggressive Cysts',
    type: 'free-text',
    question: 'How do you distinguish a dermoid cyst from a sebaceous cyst clinically?',
    answer: 'A dermoid cyst does NOT move with the skin (need to reflect a flap to remove, often sublingual). A sebaceous cyst HAS a punctum and MOVES with the skin. Sebaceous cysts occur in hair-bearing areas.',
    acceptableAnswers: [
      'dermoid does not move with skin, sebaceous moves with skin and has punctum',
      'sebaceous has punctum and moves with skin, dermoid does not move with skin',
      'dermoid fixed to deeper structures, sebaceous moves with skin'
    ],
    keywords: ['dermoid', 'sebaceous', 'punctum', 'moves with skin'],
    difficulty: 'hard'
  },
  {
    id: 'q15-020',
    contentId: 'c15-04',
    topic: 'oral-surgery',
    subtopic: 'Non-Aggressive Cysts',
    type: 'mcq',
    question: 'What is a ranula?',
    answer: 'A large mucocele from the sublingual gland',
    options: [
      'A cyst of the parotid gland',
      'A large mucocele from the sublingual gland',
      'An eruption cyst of a premolar',
      'A radicular cyst of a mandibular molar'
    ],
    correctOptionIndex: 1,
    explanation: 'A ranula is a large mucocele arising from the sublingual gland. It appears bluish and can displace the tongue. Treatment is excision.',
    keywords: ['ranula', 'mucocele', 'sublingual', 'bluish'],
    difficulty: 'easy'
  },

  {
    id: 'q15-021',
    contentId: 'c15-05',
    topic: 'oral-surgery',
    subtopic: 'Radicular Cyst',
    type: 'flashcard',
    question: 'What causes a radicular cyst and where is it found?',
    answer: 'Caused by pulpal necrosis. Found around the apical area of a NON-VITAL tooth. Can contain cholesterol deposits. Enucleated during surgical endo or extraction.',
    keywords: ['radicular', 'pulpal necrosis', 'non-vital', 'apical', 'cholesterol'],
    difficulty: 'easy'
  },
  {
    id: 'q15-022',
    contentId: 'c15-05',
    topic: 'oral-surgery',
    subtopic: 'Residual Cyst',
    type: 'fill-blank',
    question: 'A residual cyst is a ___ cyst that was not removed when the tooth was extracted.',
    answer: 'radicular',
    fullText: 'A residual cyst is a radicular cyst that was not removed when the tooth was extracted.',
    blankWord: 'radicular',
    keywords: ['residual cyst', 'radicular'],
    difficulty: 'easy'
  },
  {
    id: 'q15-023',
    contentId: 'c15-05',
    topic: 'oral-surgery',
    subtopic: 'Dentigerous Cyst',
    type: 'mcq',
    question: 'A dentigerous cyst is associated with which part of a tooth?',
    answer: 'The crown of an unerupted tooth',
    options: [
      'The root apex of a vital tooth',
      'The crown of an unerupted tooth',
      'The furcation area of a molar',
      'The cervical margin of an erupted tooth'
    ],
    correctOptionIndex: 1,
    explanation: 'A dentigerous cyst surrounds the crown of an unerupted tooth. Treatment is enucleation with tooth removal, or marsupialisation if the tooth is to be retained.',
    keywords: ['dentigerous', 'unerupted', 'crown'],
    difficulty: 'easy'
  },
  {
    id: 'q15-024',
    contentId: 'c15-05',
    topic: 'oral-surgery',
    subtopic: 'Dentigerous Cyst',
    type: 'free-text',
    question: 'What are the two treatment options for a dentigerous cyst?',
    answer: 'Enucleation with removal of the associated tooth, or marsupialisation if wishing to retain the tooth.',
    acceptableAnswers: [
      'enucleation and extraction or marsupialisation',
      'enucleate and remove tooth or marsupialise to keep tooth',
      'remove cyst and tooth or marsupialise'
    ],
    keywords: ['dentigerous', 'enucleation', 'marsupialisation', 'treatment'],
    difficulty: 'medium'
  },

  {
    id: 'q15-025',
    contentId: 'c15-06',
    topic: 'oral-surgery',
    subtopic: 'OKC',
    type: 'flashcard',
    question: 'Describe the odontogenic keratocyst (OKC) – features, diagnosis, and treatment.',
    answer: 'Nasty and aggressive, can be fatal. Typically 20-30s age group. Diagnose by aspirating contents – HIGH level of protein. Can infiltrate into bone, soft tissues, skull base, and even brain. Must ensure it\'s not ameloblastoma. Must be removed with a margin of bone.',
    imageUrl: '/images/osce/page16_img01.webp',
    imageAlt: 'Radiograph showing aggressive jaw lesion',
    keywords: ['OKC', 'keratocyst', 'protein', 'aspiration', 'bone margin'],
    difficulty: 'hard'
  },
  {
    id: 'q15-026',
    contentId: 'c15-06',
    topic: 'oral-surgery',
    subtopic: 'Osteosarcoma',
    type: 'fill-blank',
    question: 'Osteosarcoma of the jaw classically shows a ___ appearance on radiograph.',
    answer: 'sunray',
    fullText: 'Osteosarcoma of the jaw classically shows a sunray appearance on radiograph.',
    blankWord: 'sunray',
    imageUrl: '/images/osce/page16_img02.webp',
    imageAlt: 'Radiograph showing sunray appearance of osteosarcoma',
    keywords: ['osteosarcoma', 'sunray', 'radiograph'],
    difficulty: 'medium'
  },
  {
    id: 'q15-027',
    contentId: 'c15-06',
    topic: 'oral-surgery',
    subtopic: 'Ameloblastoma',
    type: 'mcq',
    question: 'Where does an ameloblastoma most commonly occur?',
    answer: 'Posterior mandible/ramus',
    options: [
      'Anterior maxilla',
      'Posterior mandible/ramus',
      'Floor of mouth',
      'Hard palate'
    ],
    correctOptionIndex: 1,
    explanation: 'Ameloblastoma usually occurs in the posterior mandible/ramus. It will resorb teeth and is treated with wide surgical excision. It can recur.',
    keywords: ['ameloblastoma', 'posterior mandible', 'ramus', 'recur'],
    difficulty: 'medium'
  },
  {
    id: 'q15-028',
    contentId: 'c15-06',
    topic: 'oral-surgery',
    subtopic: 'OKC',
    type: 'mcq',
    question: 'How is an odontogenic keratocyst (OKC) confirmed on aspiration?',
    answer: 'High level of protein in aspirated contents',
    options: [
      'High level of cholesterol crystals',
      'Presence of blood only',
      'High level of protein in aspirated contents',
      'Straw-coloured fluid with low viscosity'
    ],
    correctOptionIndex: 2,
    explanation: 'OKC aspirate shows a HIGH level of protein. This helps distinguish it from other cystic lesions.',
    keywords: ['OKC', 'aspiration', 'protein', 'diagnosis'],
    difficulty: 'hard'
  },
  {
    id: 'q15-029',
    contentId: 'c15-06',
    topic: 'oral-surgery',
    subtopic: 'Osteosarcoma',
    type: 'free-text',
    question: 'Describe the clinical presentation and typical demographics of osteosarcoma of the jaw.',
    answer: 'Usually affects males aged around 30, in the mandible. Presents with painful swelling, rapid growth, pain worse at night. Causes distortion of alveolus, loosening of teeth, and bleeding. Shows sunray appearance on radiograph. Aggressive malignant neoplasm producing malignant osteoid. Needs radical excision and chemotherapy as it metastasises early.',
    acceptableAnswers: [
      'males aged 30 mandible painful swelling rapid growth sunray appearance',
      'painful swelling rapid growth night pain loosening teeth sunray radiograph',
      'mandible males 30 pain worse at night sunray appearance metastasises early'
    ],
    keywords: ['osteosarcoma', 'males', '30', 'mandible', 'sunray', 'night pain', 'metastasis'],
    difficulty: 'hard'
  },

  {
    id: 'q15-030',
    contentId: 'c15-07',
    topic: 'medical-emergencies',
    subtopic: 'Emergency Drugs Kit',
    type: 'free-text',
    question: 'List the contents of the dental emergency drugs kit with their doses/concentrations.',
    answer: 'GTN spray (400mcg/dose), Glucagon IM injection (1mg), Glucose gel (oral), Adrenaline pre-filled syringe IM (1:1000, 1mg/ml) – minijet/epipen/ampules, Aspirin dispersible (300mg).',
    acceptableAnswers: [
      'GTN glucagon glucose adrenaline aspirin',
      'GTN spray glucagon injection glucose gel adrenaline aspirin dispersible',
      'GTN 400mcg glucagon 1mg glucose gel adrenaline 1:1000 aspirin 300mg'
    ],
    keywords: ['emergency drugs', 'GTN', 'glucagon', 'glucose', 'adrenaline', 'aspirin'],
    difficulty: 'medium'
  },
  {
    id: 'q15-031',
    contentId: 'c15-07',
    topic: 'medical-emergencies',
    subtopic: 'Emergency Drugs Kit',
    type: 'fill-blank',
    question: 'Adrenaline in the emergency drugs kit is supplied as a pre-filled syringe for IM use at a concentration of ___ (1mg/ml).',
    answer: '1:1000',
    fullText: 'Adrenaline in the emergency drugs kit is supplied as a pre-filled syringe for IM use at a concentration of 1:1000 (1mg/ml).',
    blankWord: '1:1000',
    keywords: ['adrenaline', '1:1000', 'emergency', 'IM'],
    difficulty: 'medium'
  },
  {
    id: 'q15-032',
    contentId: 'c15-07',
    topic: 'medical-emergencies',
    subtopic: 'Emergency Drugs Kit',
    type: 'mcq',
    question: 'What dose of aspirin (dispersible) should be in the dental emergency drugs kit?',
    answer: '300mg',
    options: ['75mg', '150mg', '300mg', '600mg'],
    correctOptionIndex: 2,
    explanation: 'Aspirin dispersible 300mg is the standard dose kept in the dental emergency drugs kit, given in suspected myocardial infarction.',
    keywords: ['aspirin', '300mg', 'emergency drugs'],
    difficulty: 'easy'
  },
  {
    id: 'q15-033',
    contentId: 'c15-07',
    topic: 'medical-emergencies',
    subtopic: 'Emergency Drugs Kit',
    type: 'flashcard',
    question: 'What is the mnemonic for remembering the dental emergency drugs kit contents?',
    answer: 'GGGA AA – GTN spray (400mcg/dose), Glucagon IM (1mg), Glucose gel (oral), Adrenaline IM (1:1000, 1mg/ml), Aspirin dispersible (300mg).',
    keywords: ['mnemonic', 'GGGA AA', 'emergency drugs'],
    difficulty: 'easy'
  }
];
