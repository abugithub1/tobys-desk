import { ContentItem, Question } from './types';

// ── Pages 23–24: Warfarin/Bisphosphonates, Needlestick Policy, Waste Disposal, New Patient Radiographs ──

export const content_p23: ContentItem[] = [
  {
    id: 'c23-01',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    title: 'Warfarin – Mechanism and Bleeding Risk',
    text: 'Warfarin works by inhibiting synthesis of vitamin K dependent clotting factors: 2, 7, 9 and 10. Risk of significant bleeding in patients on oral anticoagulants with a stable INR in the therapeutic range (2-4) is VERY small. Risk of thrombosis may be increased if oral anticoagulants are discontinued. Wahl reviewed 26 papers of 2014 dental surgeries – more than 98% of patients had no serious bleeding problems. NO DEATHS. Risk of bleeding can be reduced by use of oxidised cellulose (Surgicel) or collagen sponges and sutures. 5% tranexamic acid mouthwashes used four times a day for 2 days can also reduce bleeding but is not readily available in most primary care dental practices.',
    keyPoints: [
      'Warfarin inhibits vitamin K dependent clotting factors 2, 7, 9 and 10',
      'Stable INR in therapeutic range (2-4) carries VERY small bleeding risk',
      'Discontinuing anticoagulants increases thrombosis risk',
      'Wahl study: 2014 dental surgeries, >98% had no serious bleeding, NO DEATHS',
      'Oxidised cellulose (Surgicel) or collagen sponges and sutures reduce bleeding',
      '5% tranexamic acid mouthwash QDS for 2 days reduces bleeding'
    ],
    keywords: ['warfarin', 'vitamin K', 'clotting factors', '2 7 9 10', 'INR', 'Surgicel', 'tranexamic acid', 'Wahl'],
    imageUrl: '/images/osce/page23_img01.webp',
    imageAlt: 'Warfarin and bisphosphonates OSCE station overview',
    pageRef: 23
  },
  {
    id: 'c23-02',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    title: 'Warfarin – Pre-operative INR, Drug Interactions and Invasive Procedures',
    text: 'For patients who are stably anticoagulated on warfarin, a check INR is recommended 72 hours prior to dental surgery. Patients on warfarin should NOT be prescribed non-selective NSAIDs and COX-2 inhibitors as analgesia following dental surgery. Patients on warfarin with co-existing medical problems such as liver disease, renal disease, thrombocytopenia should NOT have a surgical dental procedure in a primary care setting. Avoid nerve blocks if possible. Use an LA containing a vasoconstrictor. Potentially invasive procedures available in primary care include: endo, LA, XLA, MOS, perio surgery, biopsies, and RSI.',
    keyPoints: [
      'Check INR 72 hours prior to dental surgery for stably anticoagulated patients',
      'Do NOT prescribe non-selective NSAIDs or COX-2 inhibitors to warfarin patients',
      'Warfarin patients with liver disease, renal disease or thrombocytopenia: do NOT treat in primary care',
      'Avoid nerve blocks if possible; use LA containing a vasoconstrictor',
      'Potentially invasive procedures in primary care: endo, LA, XLA, MOS, perio surgery, biopsies, RSI'
    ],
    keywords: ['INR', '72 hours', 'NSAIDs', 'COX-2', 'nerve block', 'vasoconstrictor', 'liver disease', 'thrombocytopenia', 'endo', 'XLA', 'MOS'],
    pageRef: 23
  },
  {
    id: 'c23-03',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    title: 'Bisphosphonates – Mechanism and BRONJ',
    text: 'Bisphosphonates reduce bone resorption by hindering formation, recruitment and function of osteoclasts. Most commonly used in management of osteoporosis. Accumulate at sites of high bone turnover – such as in the jaw. Can reduce bone turnover and bone blood supply leading to osteonecrosis (BRONJ). BRONJ = exposed, necrotic bone in maxilla/mandible that persists for more than 8 weeks in patients on bisphosphonates where there is no history of radiation therapy. Delayed healing following XLA, pain, soft tissue infection/swelling, numbness, paraesthesia or exposed bone are signs.',
    keyPoints: [
      'Bisphosphonates hinder formation, recruitment and function of osteoclasts',
      'Most commonly used for osteoporosis',
      'Accumulate at sites of high bone turnover (e.g. the jaw)',
      'BRONJ: exposed necrotic bone in maxilla/mandible persisting >8 weeks, no radiation history',
      'Signs: delayed healing post-XLA, pain, soft tissue infection/swelling, numbness, paraesthesia, exposed bone'
    ],
    keywords: ['bisphosphonates', 'osteoclasts', 'BRONJ', 'osteonecrosis', 'osteoporosis', 'bone turnover', '8 weeks'],
    imageUrl: '/images/osce/page23_img01.webp',
    imageAlt: 'Table of bisphosphonate drug names, trade names and primary indications',
    pageRef: 23
  },
  {
    id: 'c23-04',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    title: 'Bisphosphonate Risk Assessment and Management',
    text: 'Patient is LOW RISK before they have started taking bisphosphonates for any condition, or are taking them for osteoporosis. Patient is at HIGHER RISK if they have had a previous diagnosis of BRONJ, are taking IV bisphosphonates to manage a malignant condition, have another non-malignant systemic condition affecting bone (Paget\'s), have a rare medical condition (osteogenesis imperfecta), concurrent use of systemic corticosteroids or other immunosuppressants, or are receiving coagulopathy, chemo or radiotherapy. Straightforward XLA for low risk patients should be carried out in primary care, as atraumatically as possible (avoid raising flaps, achieve good haemostasis). Review healing at 4 weeks. If surgery site fails to heal within 4-6 weeks refer to oral surgery department.',
    keyPoints: [
      'LOW RISK: not yet started bisphosphonates, or taking them for osteoporosis',
      'HIGHER RISK: previous BRONJ, IV bisphosphonates, malignant condition, Paget\'s disease',
      'HIGHER RISK also: osteogenesis imperfecta, systemic corticosteroids, immunosuppressants, chemo, radiotherapy',
      'Low risk: XLA in primary care, atraumatically, avoid raising flaps, good haemostasis',
      'Review healing at 4 weeks; if not healed in 4-6 weeks, refer to oral surgery'
    ],
    keywords: ['low risk', 'higher risk', 'BRONJ', 'IV bisphosphonates', 'Paget\'s', 'atraumatic', '4 weeks', 'haemostasis'],
    pageRef: 23
  },
  {
    id: 'c23-05',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    title: 'Bisphosphonate Antibiotic Prophylaxis and Drug Names',
    text: 'NO EVIDENCE SUPPORTING ANTIBIOTIC PROPHYLAXIS. However suggested regimen: Pre-op 1g amoxicillin 400mg metronidazole. If allergic: ciprofloxacin 250mg 1 hour before / clarithromycin 500mg 1 hour before. Post-op 500mg amoxicillin 200mg metronidazole TDS 5 days. If higher risk, contact oral surgery department for advice. Common bisphosphonates: Alendronic acid (Fosamax/Fosavance) – osteoporosis. Risedronate sodium (Actonel) – osteoporosis, Paget\'s disease. Zoledronic acid (Aclasta/Zometa/Reclast) – Paget\'s, skeletal events with bone metastases, hypercalcaemia. Etidronate disodium (Didronel) – osteoporosis, Paget\'s. Tiludronic acid (Skelid) – Paget\'s. Ibandronic acid (Bondronat/Bonviva) – osteoporosis, bone metastases, hypercalcaemia. Pamidronate disodium (Aredia) – Paget\'s, bone pain, metastases, hypercalcaemia. Sodium clodronate (Bonefos/Loron) – bone pain, metastases, hypercalcaemia.',
    keyPoints: [
      'No evidence supports antibiotic prophylaxis for bisphosphonate patients',
      'Pre-op: 1g amoxicillin + 400mg metronidazole',
      'If allergic: ciprofloxacin 250mg or clarithromycin 500mg 1 hour before',
      'Post-op: 500mg amoxicillin + 200mg metronidazole TDS for 5 days',
      'Alendronic acid (Fosamax) – osteoporosis; Risedronate (Actonel) – osteoporosis/Paget\'s',
      'Zoledronic acid (Zometa) – Paget\'s/metastases; Pamidronate (Aredia) – Paget\'s/pain/metastases'
    ],
    keywords: ['antibiotic prophylaxis', 'amoxicillin', 'metronidazole', 'ciprofloxacin', 'alendronic acid', 'Fosamax', 'zoledronic acid', 'Zometa', 'pamidronate', 'Aredia'],
    pageRef: 23
  },
  {
    id: 'c23-06',
    topic: 'infection-control',
    subtopic: 'Needlestick Policy',
    title: 'Needlestick Injury Policy – 10 Steps',
    text: 'Needlestick policy steps: 1) Stop all procedures. 2) Identify and examine the wound. 3) Wash but do not scrub the injury. MAKE IT BLEED. 4) Senior dental nurse/manager should contact Lead Sharps Injury Coordinator and allocate a member of dental nursing staff to support them. 5) Patient will be informed of the injury and asked to remain in the department. If dental treatment is incomplete a member of senior staff should allocate the patient to a clinician who has not been involved in the incident. 6) Sharps Injury Coordinator will risk assess the injury to a standard guidance. 7) If potential for blood borne virus transmission is considered insignificant, SIC will re-assure staff member and explain further action is not required. If staff member remains concerned, they can approach occupational health. 8) If potential is significant, on-call medical microbiologist will be contacted who will advise if further actions required. 9) Blood results and PEP if required. 10) Patient will have blood tests.',
    keyPoints: [
      'Step 1: Stop all procedures',
      'Step 2: Identify and examine the wound',
      'Step 3: Wash but do NOT scrub – MAKE IT BLEED',
      'Step 4: Contact Lead Sharps Injury Coordinator (SIC)',
      'Step 5: Inform patient, ask them to remain; reassign incomplete treatment',
      'Step 6: SIC risk assesses the injury',
      'Step 7: If insignificant risk, reassure staff; occupational health available if concerned',
      'Step 8: If significant risk, contact on-call medical microbiologist',
      'Step 9: Blood results and PEP (post-exposure prophylaxis) if required',
      'Step 10: Patient will have blood tests'
    ],
    keywords: ['needlestick', 'sharps injury', 'SIC', 'blood borne virus', 'PEP', 'microbiologist', 'occupational health'],
    imageUrl: '/images/osce/page24_img01.webp',
    imageAlt: 'Needlestick policy and waste disposal guidance',
    pageRef: 24
  },
  {
    id: 'c23-07',
    topic: 'infection-control',
    subtopic: 'Waste Disposal',
    title: 'Dental Waste Disposal Categories',
    text: 'Waste disposal in a dental setting covers where to put scalpels, teeth, sharps, amalgam, toothbox, and domestic waste. CLINICAL WASTE: contaminated with blood, saliva or other body fluids and may prove hazardous to any person coming into contact with it – goes IN YELLOW BAG. Needs incinerating. DOMESTIC WASTE: black bin bags. SHARPS: needles, scalpels, gates gladdens, matrix bands, k files. Container is YELLOW WITH BLACK RIM. Should never be overfilled – only to the line. AMALGAM: white container with red lid.',
    keyPoints: [
      'Clinical waste (blood/saliva contaminated) – YELLOW BAG, needs incinerating',
      'Domestic waste – black bin bags',
      'Sharps (needles, scalpels, gates gladdens, matrix bands, k files) – YELLOW container with BLACK RIM',
      'Sharps container should never be overfilled – only to the line',
      'Amalgam waste – white container with red lid'
    ],
    keywords: ['waste disposal', 'clinical waste', 'yellow bag', 'sharps', 'black rim', 'amalgam', 'red lid', 'domestic waste'],
    pageRef: 24
  },
  {
    id: 'c23-08',
    topic: 'radiography',
    subtopic: 'New Patient Radiographs',
    title: 'New Patient Radiograph Selection and Recall Intervals',
    text: 'When deciding what radiographs to take for a new patient, assess risk and age. Child with primary dentition: individualised exam of selected PAs/occlusals and/or posterior bitewings if proximal surfaces cannot be visualised. Patients without disease and open contacts may not need radiographs. Child with transitional dentition: posterior bitewings with panoramic or BWs + selected PAs. Adolescent/adult dentate: posterior BWs with panoramic or BWs + selected PAs. Full mouth intraoral preferred if generalised oral disease or extensive treatment history. Adult edentulous: individualised exam based on clinical signs and symptoms. For recall patients with caries/high risk: BWs at 6-12 months (children) or 6-18 months (adults). Low caries risk recall: BWs at 12-24 months (children), 18-36 months (adolescents), 24-36 months (adults). Radiograph recall not applicable for edentulous patients.',
    keyPoints: [
      'Assess risk and age when selecting radiographs for new patients',
      'Primary dentition: selected PAs/occlusals and/or posterior BWs if proximal surfaces not visible',
      'Transitional/adolescent/adult: posterior BWs with panoramic OR BWs + selected PAs',
      'Full mouth preferred if generalised oral disease or extensive treatment history',
      'Adult edentulous: individualised exam based on clinical signs and symptoms',
      'High caries risk recall: BWs at 6-12 months (children) or 6-18 months (adults)',
      'Low caries risk recall: 12-24 months (children), 18-36 months (adolescents), 24-36 months (adults)'
    ],
    keywords: ['new patient', 'radiographs', 'bitewings', 'panoramic', 'periapical', 'recall', 'caries risk', '6-12 months', '24-36 months'],
    imageUrl: '/images/osce/page24_img01.webp',
    imageAlt: 'Table showing radiograph selection guidelines by patient age and dental developmental stage',
    pageRef: 24
  },
];

export const questions_p23: Question[] = [
  // ─── c23-01: Warfarin Mechanism and Bleeding ───
  {
    id: 'q23-001',
    contentId: 'c23-01',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    type: 'flashcard',
    question: 'What clotting factors does warfarin inhibit the synthesis of?',
    answer: 'Vitamin K dependent clotting factors 2, 7, 9 and 10.',
    explanation: 'Warfarin works by inhibiting the synthesis of these vitamin K dependent clotting factors.',
    keywords: ['warfarin', 'clotting factors', '2', '7', '9', '10', 'vitamin K'],
    difficulty: 'easy'
  },
  {
    id: 'q23-002',
    contentId: 'c23-01',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    type: 'mcq',
    question: 'According to the Wahl study of 2014 dental surgeries on anticoagulated patients, what percentage had no serious bleeding problems?',
    answer: 'More than 98%',
    options: ['More than 85%', 'More than 90%', 'More than 95%', 'More than 98%'],
    correctOptionIndex: 3,
    explanation: 'Wahl reviewed 26 papers covering 2014 dental surgeries. More than 98% had no serious bleeding problems and there were NO DEATHS.',
    keywords: ['Wahl', 'bleeding', '98%', 'dental surgery'],
    difficulty: 'medium'
  },
  {
    id: 'q23-003',
    contentId: 'c23-01',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    type: 'fill-blank',
    question: 'Risk of bleeding in warfarin patients can be reduced by use of oxidised cellulose (______) or collagen sponges and sutures.',
    answer: 'Surgicel',
    fullText: 'Risk of bleeding in warfarin patients can be reduced by use of oxidised cellulose (Surgicel) or collagen sponges and sutures.',
    blankWord: 'Surgicel',
    keywords: ['Surgicel', 'oxidised cellulose', 'bleeding', 'warfarin'],
    difficulty: 'medium'
  },
  {
    id: 'q23-004',
    contentId: 'c23-01',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    type: 'free-text',
    question: 'What concentration of tranexamic acid mouthwash can be used to reduce bleeding, and how often should it be used?',
    answer: '5% tranexamic acid mouthwash, used four times a day (QDS) for 2 days.',
    acceptableAnswers: ['5% tranexamic acid QDS for 2 days', '5% tranexamic acid four times a day for 2 days'],
    keywords: ['5%', 'tranexamic acid', 'QDS', '2 days'],
    difficulty: 'hard'
  },
  // ─── c23-02: INR, Drug Interactions, Invasive Procedures ───
  {
    id: 'q23-005',
    contentId: 'c23-02',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    type: 'flashcard',
    question: 'How long before dental surgery should INR be checked in a stably anticoagulated warfarin patient?',
    answer: '72 hours prior to dental surgery.',
    keywords: ['INR', '72 hours', 'warfarin', 'dental surgery'],
    difficulty: 'easy'
  },
  {
    id: 'q23-006',
    contentId: 'c23-02',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    type: 'mcq',
    question: 'Which analgesics should NOT be prescribed to patients on warfarin following dental surgery?',
    answer: 'Non-selective NSAIDs and COX-2 inhibitors',
    options: ['Paracetamol', 'Non-selective NSAIDs and COX-2 inhibitors', 'Codeine phosphate', 'Co-codamol'],
    correctOptionIndex: 1,
    explanation: 'NSAIDs and COX-2 inhibitors interact with anticoagulant therapy and increase bleeding risk.',
    keywords: ['NSAIDs', 'COX-2', 'warfarin', 'analgesia', 'contraindicated'],
    difficulty: 'easy'
  },
  {
    id: 'q23-007',
    contentId: 'c23-02',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    type: 'free-text',
    question: 'Name three co-existing medical problems in warfarin patients that preclude surgical dental procedures in primary care.',
    answer: 'Liver disease, renal disease, and thrombocytopenia.',
    acceptableAnswers: ['liver disease, renal disease, thrombocytopenia', 'liver renal thrombocytopenia'],
    keywords: ['liver disease', 'renal disease', 'thrombocytopenia', 'primary care'],
    difficulty: 'medium'
  },
  {
    id: 'q23-008',
    contentId: 'c23-02',
    topic: 'medical-conditions',
    subtopic: 'Warfarin Patients',
    type: 'mcq',
    question: 'When giving LA to a patient on warfarin, which two recommendations should be followed?',
    answer: 'Avoid nerve blocks if possible and use LA containing a vasoconstrictor.',
    options: [
      'Use nerve blocks preferentially and avoid vasoconstrictor',
      'Avoid nerve blocks if possible and use LA containing a vasoconstrictor',
      'Only use topical anaesthesia',
      'Use nerve blocks with articaine and no vasoconstrictor'
    ],
    correctOptionIndex: 1,
    keywords: ['nerve block', 'vasoconstrictor', 'LA', 'warfarin'],
    difficulty: 'medium'
  },
  // ─── c23-03: Bisphosphonates Mechanism and BRONJ ───
  {
    id: 'q23-009',
    contentId: 'c23-03',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'flashcard',
    question: 'How do bisphosphonates work and what condition are they most commonly used for?',
    answer: 'Bisphosphonates reduce bone resorption by hindering the formation, recruitment and function of osteoclasts. Most commonly used in management of osteoporosis.',
    keywords: ['bisphosphonates', 'osteoclasts', 'bone resorption', 'osteoporosis'],
    difficulty: 'easy'
  },
  {
    id: 'q23-010',
    contentId: 'c23-03',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'flashcard',
    question: 'What is the definition of BRONJ?',
    answer: 'BRONJ (bisphosphonate-related osteonecrosis of the jaw) is exposed, necrotic bone in the maxilla or mandible that persists for more than 8 weeks in patients on bisphosphonates where there is no history of radiation therapy.',
    keywords: ['BRONJ', 'osteonecrosis', 'necrotic bone', '8 weeks', 'radiation therapy'],
    difficulty: 'medium'
  },
  {
    id: 'q23-011',
    contentId: 'c23-03',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'mcq',
    question: 'For how long must exposed necrotic bone persist to meet the definition of BRONJ?',
    answer: 'More than 8 weeks',
    options: ['More than 2 weeks', 'More than 4 weeks', 'More than 6 weeks', 'More than 8 weeks'],
    correctOptionIndex: 3,
    keywords: ['BRONJ', '8 weeks', 'necrotic bone'],
    difficulty: 'easy'
  },
  {
    id: 'q23-012',
    contentId: 'c23-03',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'free-text',
    question: 'Why do bisphosphonates particularly affect the jaw?',
    answer: 'Bisphosphonates accumulate at sites of high bone turnover, such as the jaw. They reduce bone turnover and bone blood supply, leading to osteonecrosis.',
    acceptableAnswers: ['accumulate at sites of high bone turnover like the jaw', 'high bone turnover in jaw'],
    keywords: ['high bone turnover', 'jaw', 'accumulate', 'blood supply', 'osteonecrosis'],
    difficulty: 'medium'
  },
  // ─── c23-04: Risk Assessment ───
  {
    id: 'q23-013',
    contentId: 'c23-04',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'mcq',
    question: 'Which of the following patients is considered LOW risk for BRONJ?',
    answer: 'A patient taking oral bisphosphonates for osteoporosis.',
    options: [
      'A patient with a previous diagnosis of BRONJ',
      'A patient taking IV bisphosphonates for bone metastases',
      'A patient taking oral bisphosphonates for osteoporosis',
      'A patient on bisphosphonates with concurrent systemic corticosteroids'
    ],
    correctOptionIndex: 2,
    explanation: 'Low risk = not yet started bisphosphonates or taking them for osteoporosis. Higher risk includes previous BRONJ, IV bisphosphonates, malignancy, Paget\'s, OI, concurrent corticosteroids/immunosuppressants, chemo/radiotherapy.',
    keywords: ['low risk', 'osteoporosis', 'BRONJ', 'bisphosphonates'],
    difficulty: 'medium'
  },
  {
    id: 'q23-014',
    contentId: 'c23-04',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'flashcard',
    question: 'How should XLA be performed in a low risk bisphosphonate patient, and when should healing be reviewed?',
    answer: 'XLA should be carried out in primary care, as atraumatically as possible (avoid raising flaps, achieve good haemostasis). Review healing at 4 weeks. If site fails to heal within 4-6 weeks, refer to oral surgery.',
    keywords: ['atraumatic', 'flaps', 'haemostasis', '4 weeks', '4-6 weeks', 'refer'],
    difficulty: 'medium'
  },
  {
    id: 'q23-015',
    contentId: 'c23-04',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'fill-blank',
    question: 'If a surgery site in a bisphosphonate patient fails to heal within ______ weeks, refer to an oral surgery department.',
    answer: '4-6',
    fullText: 'If a surgery site in a bisphosphonate patient fails to heal within 4-6 weeks, refer to an oral surgery department.',
    blankWord: '4-6',
    keywords: ['4-6 weeks', 'healing', 'refer', 'oral surgery'],
    difficulty: 'medium'
  },
  // ─── c23-05: Antibiotic Prophylaxis and Drug Names ───
  {
    id: 'q23-016',
    contentId: 'c23-05',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'flashcard',
    question: 'Is there evidence supporting antibiotic prophylaxis for bisphosphonate patients undergoing dental surgery?',
    answer: 'No. There is NO EVIDENCE supporting antibiotic prophylaxis. However, a suggested regimen exists: Pre-op 1g amoxicillin + 400mg metronidazole. Post-op 500mg amoxicillin + 200mg metronidazole TDS for 5 days.',
    keywords: ['no evidence', 'antibiotic prophylaxis', 'amoxicillin', 'metronidazole'],
    difficulty: 'medium'
  },
  {
    id: 'q23-017',
    contentId: 'c23-05',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'mcq',
    question: 'What is the suggested pre-operative antibiotic regimen for bisphosphonate patients (despite no supporting evidence)?',
    answer: '1g amoxicillin + 400mg metronidazole',
    options: [
      '500mg amoxicillin + 200mg metronidazole',
      '1g amoxicillin + 400mg metronidazole',
      '3g amoxicillin alone',
      '250mg ciprofloxacin + 500mg clarithromycin'
    ],
    correctOptionIndex: 1,
    explanation: 'Pre-op: 1g amoxicillin + 400mg metronidazole. Post-op: 500mg amoxicillin + 200mg metronidazole TDS for 5 days. If penicillin-allergic: ciprofloxacin 250mg or clarithromycin 500mg 1 hour before.',
    keywords: ['1g amoxicillin', '400mg metronidazole', 'pre-op', 'bisphosphonates'],
    difficulty: 'hard'
  },
  {
    id: 'q23-018',
    contentId: 'c23-05',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'fill-blank',
    question: 'For penicillin-allergic bisphosphonate patients, use ______ 250mg or clarithromycin 500mg 1 hour before surgery.',
    answer: 'ciprofloxacin',
    fullText: 'For penicillin-allergic bisphosphonate patients, use ciprofloxacin 250mg or clarithromycin 500mg 1 hour before surgery.',
    blankWord: 'ciprofloxacin',
    keywords: ['ciprofloxacin', 'clarithromycin', 'penicillin allergy', 'bisphosphonates'],
    difficulty: 'hard'
  },
  {
    id: 'q23-019',
    contentId: 'c23-05',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'mcq',
    question: 'Which bisphosphonate has the trade name Fosamax and is primarily indicated for osteoporosis?',
    answer: 'Alendronic acid',
    options: ['Risedronate sodium', 'Alendronic acid', 'Zoledronic acid', 'Ibandronic acid'],
    correctOptionIndex: 1,
    keywords: ['alendronic acid', 'Fosamax', 'osteoporosis'],
    difficulty: 'medium'
  },
  {
    id: 'q23-020',
    contentId: 'c23-05',
    topic: 'medical-conditions',
    subtopic: 'Bisphosphonates',
    type: 'fill-blank',
    question: 'Pamidronate disodium has the trade name ______ and is indicated for Paget\'s disease, bone pain, skeletal events with bone metastases, and hypercalcaemia.',
    answer: 'Aredia',
    fullText: 'Pamidronate disodium has the trade name Aredia and is indicated for Paget\'s disease, bone pain, skeletal events with bone metastases, and hypercalcaemia.',
    blankWord: 'Aredia',
    keywords: ['pamidronate', 'Aredia', 'Paget\'s', 'bone metastases'],
    difficulty: 'hard'
  },
  // ─── c23-06: Needlestick Policy ───
  {
    id: 'q23-021',
    contentId: 'c23-06',
    topic: 'infection-control',
    subtopic: 'Needlestick Policy',
    type: 'flashcard',
    question: 'What are the first three steps of the needlestick injury policy?',
    answer: '1) Stop all procedures. 2) Identify and examine the wound. 3) Wash but do NOT scrub the injury – MAKE IT BLEED.',
    keywords: ['needlestick', 'stop', 'examine', 'wash', 'make it bleed'],
    difficulty: 'easy'
  },
  {
    id: 'q23-022',
    contentId: 'c23-06',
    topic: 'infection-control',
    subtopic: 'Needlestick Policy',
    type: 'mcq',
    question: 'After a needlestick injury, what should you do with the wound?',
    answer: 'Wash but do not scrub, and make it bleed.',
    options: [
      'Scrub vigorously with antiseptic and apply pressure to stop bleeding',
      'Wash but do not scrub, and make it bleed',
      'Apply alcohol gel and cover with a plaster immediately',
      'Squeeze the wound tightly to expel blood, then apply iodine'
    ],
    correctOptionIndex: 1,
    keywords: ['needlestick', 'wash', 'do not scrub', 'make it bleed'],
    difficulty: 'easy'
  },
  {
    id: 'q23-023',
    contentId: 'c23-06',
    topic: 'infection-control',
    subtopic: 'Needlestick Policy',
    type: 'free-text',
    question: 'Who should be contacted after a needlestick injury, and what happens if the risk of blood-borne virus transmission is significant?',
    answer: 'The Lead Sharps Injury Coordinator (SIC) should be contacted. If risk is significant, the on-call medical microbiologist will be contacted. Blood results and PEP (post-exposure prophylaxis) may be required.',
    acceptableAnswers: ['Sharps Injury Coordinator then medical microbiologist if significant, PEP if required', 'SIC then microbiologist, PEP'],
    keywords: ['Sharps Injury Coordinator', 'microbiologist', 'PEP', 'blood-borne virus'],
    difficulty: 'medium'
  },
  {
    id: 'q23-024',
    contentId: 'c23-06',
    topic: 'infection-control',
    subtopic: 'Needlestick Policy',
    type: 'fill-blank',
    question: 'If a staff member remains concerned after a needlestick injury deemed insignificant, they can approach ______ for further information and advice.',
    answer: 'occupational health',
    fullText: 'If a staff member remains concerned after a needlestick injury deemed insignificant, they can approach occupational health for further information and advice.',
    blankWord: 'occupational health',
    keywords: ['occupational health', 'needlestick', 'concerned', 'advice'],
    difficulty: 'medium'
  },
  // ─── c23-07: Waste Disposal ───
  {
    id: 'q23-025',
    contentId: 'c23-07',
    topic: 'infection-control',
    subtopic: 'Waste Disposal',
    type: 'flashcard',
    question: 'What colour bag/container is used for clinical waste in a dental setting?',
    answer: 'YELLOW BAG. Clinical waste is contaminated with blood, saliva or other body fluids and needs incinerating.',
    keywords: ['yellow bag', 'clinical waste', 'incinerating'],
    difficulty: 'easy'
  },
  {
    id: 'q23-026',
    contentId: 'c23-07',
    topic: 'infection-control',
    subtopic: 'Waste Disposal',
    type: 'mcq',
    question: 'What colour is the sharps disposal container?',
    answer: 'Yellow with black rim',
    options: ['Yellow with red rim', 'Yellow with black rim', 'White with red lid', 'Black bin bag'],
    correctOptionIndex: 1,
    explanation: 'Sharps containers (needles, scalpels, gates gladdens, matrix bands, k files) are YELLOW with BLACK RIM. Never overfill – only to the line.',
    keywords: ['sharps', 'yellow', 'black rim', 'container'],
    difficulty: 'easy'
  },
  {
    id: 'q23-027',
    contentId: 'c23-07',
    topic: 'infection-control',
    subtopic: 'Waste Disposal',
    type: 'fill-blank',
    question: 'Amalgam waste goes in a ______ container with a red lid.',
    answer: 'white',
    fullText: 'Amalgam waste goes in a white container with a red lid.',
    blankWord: 'white',
    keywords: ['amalgam', 'white', 'red lid'],
    difficulty: 'easy'
  },
  {
    id: 'q23-028',
    contentId: 'c23-07',
    topic: 'infection-control',
    subtopic: 'Waste Disposal',
    type: 'free-text',
    question: 'Give five examples of items that go in the sharps container.',
    answer: 'Needles, scalpels, gates gladdens, matrix bands, and k files.',
    acceptableAnswers: ['needles scalpels gates gladdens matrix bands k files', 'needles, scalpels, gates gladdens, matrix bands, k files'],
    keywords: ['needles', 'scalpels', 'gates gladdens', 'matrix bands', 'k files'],
    difficulty: 'medium'
  },
  // ─── c23-08: Radiographs and Recall ───
  {
    id: 'q23-029',
    contentId: 'c23-08',
    topic: 'radiography',
    subtopic: 'New Patient Radiographs',
    type: 'flashcard',
    question: 'What two things should you assess when deciding what radiographs to take for a new patient?',
    answer: 'Assess the patient\'s risk and age (dental developmental stage).',
    keywords: ['risk', 'age', 'new patient', 'radiographs'],
    difficulty: 'easy'
  },
  {
    id: 'q23-030',
    contentId: 'c23-08',
    topic: 'radiography',
    subtopic: 'New Patient Radiographs',
    type: 'mcq',
    question: 'What radiographic exam is recommended for a new adolescent patient with permanent dentition?',
    answer: 'Posterior bitewings with panoramic exam, or posterior bitewings and selected periapical images.',
    options: [
      'Full mouth periapical radiographs only',
      'Panoramic radiograph only',
      'Posterior bitewings with panoramic exam, or bitewings and selected periapicals',
      'No radiographs needed at first visit'
    ],
    correctOptionIndex: 2,
    keywords: ['adolescent', 'bitewings', 'panoramic', 'periapical', 'new patient'],
    difficulty: 'medium'
  },
  {
    id: 'q23-031',
    contentId: 'c23-08',
    topic: 'radiography',
    subtopic: 'New Patient Radiographs',
    type: 'free-text',
    question: 'When is a full mouth intraoral radiographic exam preferred for a new patient?',
    answer: 'When the patient has clinical evidence of generalised oral disease or a history of extensive dental treatment.',
    acceptableAnswers: ['generalised oral disease or extensive dental treatment history', 'generalised oral disease or extensive treatment'],
    keywords: ['full mouth', 'generalised oral disease', 'extensive dental treatment'],
    difficulty: 'medium'
  },
  {
    id: 'q23-032',
    contentId: 'c23-08',
    topic: 'radiography',
    subtopic: 'Recall Radiograph Intervals',
    type: 'mcq',
    question: 'What is the recommended bitewing interval for a low-caries-risk adult recall patient?',
    answer: '24-36 month intervals',
    options: ['6-12 month intervals', '12-24 month intervals', '18-36 month intervals', '24-36 month intervals'],
    correctOptionIndex: 3,
    explanation: 'Low caries risk recall intervals: 12-24 months (children), 18-36 months (adolescents), 24-36 months (adults). Not applicable for edentulous patients.',
    keywords: ['recall', 'low caries risk', '24-36 months', 'adult', 'bitewing'],
    difficulty: 'medium'
  },
  {
    id: 'q23-033',
    contentId: 'c23-08',
    topic: 'radiography',
    subtopic: 'Recall Radiograph Intervals',
    type: 'fill-blank',
    question: 'For adolescents with no clinical caries and low caries risk, posterior bitewing exams should be taken at ______ month intervals.',
    answer: '18-36',
    fullText: 'For adolescents with no clinical caries and low caries risk, posterior bitewing exams should be taken at 18-36 month intervals.',
    blankWord: '18-36',
    keywords: ['18-36 months', 'adolescents', 'low caries risk', 'bitewing'],
    difficulty: 'hard'
  },
];
