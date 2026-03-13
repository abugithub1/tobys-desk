import { ContentItem, Question } from './types';

// Pages 39-40: Assessing Sick Patients (ABCDE), Post-Op Instructions for XLA,
// Components of Clinical Governance (7 Domains), Management of Stained Teeth

export const content_p39: ContentItem[] = [
  {
    id: 'c39-01',
    topic: 'medical-emergencies',
    subtopic: 'Assessing Sick Patients',
    title: 'ABCDE Approach to Assessing Sick Patients',
    text: 'Ask about medical history – medications, how often they take them regularly, is their illness well controlled. 1) Check it is safe to approach. 2) Call for help. 3) Assess patient response – "hello, can you hear me?" 4) AIRWAY: silent airway is completely clear or totally obstructed. Check if they can talk, difficulty breathing, distressed, choking. Inspiration noisy – obstruction above larynx like vomit, expiration noisy – obstruction below the larynx. Manage with chin lift, suction, or oropharyngeal airway (Guedel or nasopharyngeal) in UNCONSCIOUS patient. 5) BREATHING: LOOK at accessory muscles, respiratory rate, chest deformity. LISTEN – noisy breathing? FEEL – expansion bilateral and equal? Pulse oximeter if available. RR should be 12-20/min. OXYGEN should always be given – 15L/min non-rebreather mask with reservoir. If not breathing use pocket mask or ventilate with bag/valve mask at 12/min. 6) CIRCULATION: colour – pink/grey/blue? Pulse – volume; is it easy to feel, regular/irregular, peripheral (wrist) and central (next to adam\'s apple). Peripheral perfusion – capillary refill time should be less than 3 secs. BP – very low or very high is a problem. Don\'t lie patient flat – increases work on the heart. Only put flat if unconscious. 7) DISABILITY: AVPU. Pupils – do they look the same? Do they react to light normally? Blood glucose – to distinguish between hypoglycaemia and epilepsy. 8) EXPOSURE: rash, ankle oedema. Avoid heat loss.',
    keyPoints: [
      'Always ask about medical history and medications first',
      'Check safe to approach, call for help, assess response',
      'AIRWAY: silent = clear or totally obstructed; inspiration noisy = above larynx; expiration noisy = below larynx',
      'Airway adjuncts: chin lift, suction, Guedel/nasopharyngeal airway (unconscious only)',
      'BREATHING: RR should be 12-20/min; give O2 at 15L/min via non-rebreather mask with reservoir',
      'If not breathing: pocket mask or bag/valve mask at 12/min',
      'CIRCULATION: check pulse, capillary refill <3 secs, BP',
      'Don\'t lie patient flat unless unconscious – increases cardiac workload',
      'DISABILITY: AVPU, pupil reaction, blood glucose (hypoglycaemia vs epilepsy)',
      'EXPOSURE: rash, ankle oedema, avoid heat loss'
    ],
    keywords: ['ABCDE', 'airway', 'breathing', 'circulation', 'disability', 'exposure', 'sick patient', 'non-rebreather', 'AVPU', 'capillary refill'],
    imageUrl: '/images/osce/page39_img01.webp',
    imageAlt: 'Airway management illustrations showing chin lift and oropharyngeal airway placement',
    pageRef: 39
  },
  {
    id: 'c39-02',
    topic: 'oral-surgery',
    subtopic: 'Post-Op Instructions',
    title: 'Written Post-Op Instructions for Extraction (XLA)',
    text: '1) Leave site for 24 hours – don\'t clean or anything. Avoid alcohol/smoking. 2) After 24 hours start warm salty mouthwashes ideally five times a day for 5 days – "this time tomorrow". 3) Brush teeth as normal – brush area gently. 4) Try to leave site alone – don\'t play with it with your tongue. 5) Normal painkillers – take before onset of pain. AVOID ASPIRIN – can increase bleeding. 6) If it bleeds again – bite down on clean handkerchief/provided gauze for 20 minutes. If it doesn\'t stop after that, call emergency number. 7) Take it easy for rest of day. Be careful eating/drinking as area may be numb. 8) Warn of risk of dry socket – blood clot breaking down, painful. Go back to dentist and they will pack it with a dressing.',
    keyPoints: [
      'Leave site undisturbed for 24 hours; avoid alcohol and smoking',
      'Warm salty mouthwashes 5 times/day for 5 days starting after 24 hours',
      'Brush teeth normally but area gently',
      'Don\'t play with extraction site with tongue',
      'Take painkillers before pain onset; AVOID ASPIRIN (increases bleeding)',
      'If bleeding: bite on gauze/handkerchief for 20 minutes; call if persists',
      'Take it easy rest of day; careful eating/drinking while numb',
      'Warn about dry socket risk – painful blood clot breakdown, needs packing'
    ],
    keywords: ['post-op', 'extraction', 'XLA', 'dry socket', 'mouthwash', 'aspirin', 'bleeding', 'gauze'],
    pageRef: 39
  },
  {
    id: 'c39-03',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    title: 'Components of Clinical Governance',
    text: 'Clinical governance is the framework through which NHS organisations are accountable for continuously improving the quality of their services and safeguarding high standards of care by creating an environment in which excellence in clinical care will flourish. 10 Components: 1) Quality improvement (includes clinical audit). 2) Leadership. 3) Evidence-based practice. 4) Dissemination of good practice, ideas and innovation. 5) Clinical risk reduction. 6) Detection of adverse events. 7) Learning lessons from complaints. 8) Addressing poor clinical performance. 9) Professional development programmes. 10) High-quality data and record keeping.',
    keyPoints: [
      'Clinical governance = framework for NHS accountability and continuous quality improvement',
      '10 components: quality improvement, leadership, evidence-based practice, dissemination of good practice, clinical risk reduction, detection of adverse events, learning from complaints, addressing poor performance, professional development, high-quality records',
      'Quality improvement includes clinical audit',
      'Aims to create environment where clinical excellence can flourish'
    ],
    keywords: ['clinical governance', 'NHS', 'quality improvement', 'clinical audit', 'leadership', 'evidence-based', 'risk reduction', 'complaints'],
    pageRef: 39
  },
  {
    id: 'c39-04',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    title: '7 Domains of Clinical Governance',
    text: '1) Safety: ensure staff work safely, minimising risk to patients and themselves. Learn from mistakes. High standard of hygiene reducing MRSA and hospital acquired infections. Medicines prescribed and handled safely and securely. 2) Clinical and cost effectiveness: patient care up to date based on latest evidence. Treatment suited to individual needs. All organisations work well together. 3) Governance: ensure money is not wasted, staff are well qualified and trained, staff can raise concerns and they are acted on, information kept confidential but available when needed. Everyone treated fairly, discrimination challenged. 4) Patient focus: treated with dignity and respect, proper explanation of all aspects of planned treatment and care, encouraged to take part in decisions, know how to raise concerns and make complaints, choice of balanced diet in hospital. 5) Accessible and responsive care: equal opportunity to access treatment, no unnecessary delay, as much choice as possible, services account for views of patients and carers, deal with local problems. 6) Environment and amenities: appropriate level of privacy, clean and well looked after, suited to patient needs, as comfortable as possible. 7) Public health: improve health of local people, prevent common illnesses, focus on smoking, healthy eating, drug abuse and STIs, work with local organisations, deal with major incidents.',
    keyPoints: [
      'Safety: minimise risk, learn from mistakes, reduce hospital-acquired infections',
      'Clinical and cost effectiveness: evidence-based, treatment suited to individual needs',
      'Governance: financial accountability, staff training, confidentiality, anti-discrimination',
      'Patient focus: dignity, respect, informed consent, involvement in decisions, complaints process',
      'Accessible and responsive care: equal access, no delay, patient choice, account for local needs',
      'Environment and amenities: privacy, cleanliness, comfort, suited to patient needs',
      'Public health: prevent illness, focus on smoking/diet/drugs/STIs, work with local organisations'
    ],
    keywords: ['7 domains', 'safety', 'clinical effectiveness', 'governance', 'patient focus', 'accessible care', 'environment', 'public health'],
    pageRef: 40
  },
  {
    id: 'c39-05',
    topic: 'crowns-restorations',
    subtopic: 'Stained Teeth Management',
    title: 'Management of Stained Teeth',
    text: 'Treatment options: bleaching vs composite vs direct veneers vs porcelain veneers. Contraindications to bleaching: patients with high expectations, decay/PA pathology, cracks/exposed dentine, sensitivity, existing crowns/large restorations anteriorly, elderly patients with visible recession and yellow roots, pregnant/breastfeeding. Microabrasion: removal of small amount of surface enamel – abrasion with dental instruments and erosion with acid mixture. Simple to perform, not much enamel removed. Indicated for fluorosis, post-ortho demineralisation, localised hypoplasia due to infection/trauma. Vital bleaching: in office around 30% carbamide peroxide (9% HP), at home 10% carbamide peroxide. Indicated for mild tetracycline staining, mild fluorosis, and single teeth with sclerosed pulp chambers/root canals. Non-vital bleaching: inside/outside using 10% carbamide peroxide. Indicated for non-vital endo treated teeth discoloured due to deposition of blood degradation products in dentinal tubules. Well condensed root filling must be present prior to starting. Composite: can camouflage/replace discrete localised areas of abnormal enamel or used as direct composite veneer. Indicated in hypoplasia, severe fluorosis, localised hypoplasia not responsive to microabrasion, tetracycline staining, discolouration due to loss of vitality not responsive to non-vital bleaching, amelogenesis/dentinogenesis imperfecta. Porcelain veneers: indicated for hypoplastic and discoloured teeth in patients aged 16 or over, where other techniques have failed. Veneers may be required if bleaching fails.',
    keyPoints: [
      'Options: bleaching, composite, direct veneers, porcelain veneers',
      'Bleaching contraindications: high expectations, decay, cracks, exposed dentine, sensitivity, existing crowns, recession with yellow roots, pregnancy',
      'Microabrasion: surface enamel removal with instruments and acid; for fluorosis, post-ortho demineralisation, localised hypoplasia',
      'Vital bleaching: in-office 30% carbamide peroxide (9% HP), home 10% carbamide peroxide; for mild tetracycline/fluorosis, sclerosed pulp chambers',
      'Non-vital bleaching: 10% carbamide peroxide inside/outside; for endo-treated discoloured teeth; needs well-condensed root filling first',
      'Composite: for hypoplasia, severe fluorosis, tetracycline staining, amelogenesis/dentinogenesis imperfecta',
      'Porcelain veneers: age 16+, when other techniques have failed'
    ],
    keywords: ['stained teeth', 'bleaching', 'microabrasion', 'vital bleaching', 'non-vital bleaching', 'composite veneer', 'porcelain veneer', 'carbamide peroxide', 'fluorosis', 'tetracycline'],
    pageRef: 40
  },
];

export const questions_p39: Question[] = [
  // ── ABCDE Assessment (c39-01) ──
  {
    id: 'q39-001',
    contentId: 'c39-01',
    topic: 'medical-emergencies',
    subtopic: 'Assessing Sick Patients',
    type: 'flashcard',
    question: 'What does ABCDE stand for in the assessment of a sick patient?',
    answer: 'A = Airway, B = Breathing, C = Circulation, D = Disability, E = Exposure',
    explanation: 'The ABCDE approach is a systematic method for assessing and treating acutely unwell patients, addressing the most life-threatening problems first.',
    keywords: ['ABCDE', 'airway', 'breathing', 'circulation', 'disability', 'exposure'],
    difficulty: 'easy'
  },
  {
    id: 'q39-002',
    contentId: 'c39-01',
    topic: 'medical-emergencies',
    subtopic: 'Assessing Sick Patients',
    type: 'mcq',
    question: 'Noisy inspiration (stridor) indicates obstruction at which level?',
    options: [
      'Below the larynx',
      'Above the larynx',
      'At the level of the bronchi',
      'In the alveoli'
    ],
    correctOptionIndex: 1,
    answer: 'Above the larynx',
    explanation: 'Noisy inspiration indicates obstruction above the larynx (e.g. vomit, tongue), while noisy expiration indicates obstruction below the larynx.',
    keywords: ['inspiration', 'expiration', 'stridor', 'larynx', 'obstruction'],
    difficulty: 'medium'
  },
  {
    id: 'q39-003',
    contentId: 'c39-01',
    topic: 'medical-emergencies',
    subtopic: 'Assessing Sick Patients',
    type: 'fill-blank',
    question: 'Oxygen should always be given at ___L/min via a non-rebreather mask with reservoir.',
    answer: '15',
    fullText: 'Oxygen should always be given at 15L/min via a non-rebreather mask with reservoir.',
    blankWord: '15',
    explanation: 'In an emergency, high-flow oxygen at 15L/min via a non-rebreather mask with reservoir is the standard initial treatment.',
    keywords: ['oxygen', '15L/min', 'non-rebreather', 'reservoir'],
    difficulty: 'easy'
  },
  {
    id: 'q39-004',
    contentId: 'c39-01',
    topic: 'medical-emergencies',
    subtopic: 'Assessing Sick Patients',
    type: 'free-text',
    question: 'What is the normal respiratory rate range, and what should you do if the patient is not breathing?',
    answer: 'Normal RR is 12-20/min. If not breathing, use a pocket mask or ventilate with a bag/valve mask at 12/min.',
    acceptableAnswers: [
      '12-20 per minute',
      '12 to 20 breaths per minute',
      'RR 12-20/min, ventilate with bag valve mask at 12/min',
      'pocket mask or bag valve mask 12 per minute'
    ],
    explanation: 'A normal respiratory rate is 12-20 breaths per minute. If the patient is not breathing, ventilate using a pocket mask or bag/valve mask at a rate of 12 breaths per minute.',
    keywords: ['respiratory rate', '12-20', 'bag valve mask', 'pocket mask', 'ventilation'],
    difficulty: 'medium'
  },
  {
    id: 'q39-005',
    contentId: 'c39-01',
    topic: 'medical-emergencies',
    subtopic: 'Assessing Sick Patients',
    type: 'mcq',
    question: 'What is the maximum acceptable capillary refill time?',
    options: [
      'Less than 1 second',
      'Less than 2 seconds',
      'Less than 3 seconds',
      'Less than 5 seconds'
    ],
    correctOptionIndex: 2,
    answer: 'Less than 3 seconds',
    explanation: 'Capillary refill time should be less than 3 seconds. Prolonged refill indicates poor peripheral perfusion.',
    keywords: ['capillary refill', 'circulation', 'perfusion', '3 seconds'],
    difficulty: 'easy'
  },
  {
    id: 'q39-006',
    contentId: 'c39-01',
    topic: 'medical-emergencies',
    subtopic: 'Assessing Sick Patients',
    type: 'flashcard',
    question: 'Why should you check blood glucose under "Disability" in the ABCDE assessment?',
    answer: 'To distinguish between hypoglycaemia and epilepsy, as both can cause unconsciousness/fitting but require different treatment.',
    explanation: 'Blood glucose measurement helps differentiate between a hypoglycaemic episode and an epileptic seizure, guiding appropriate management.',
    keywords: ['blood glucose', 'disability', 'hypoglycaemia', 'epilepsy', 'AVPU'],
    difficulty: 'medium'
  },
  {
    id: 'q39-007',
    contentId: 'c39-01',
    topic: 'medical-emergencies',
    subtopic: 'Assessing Sick Patients',
    type: 'mcq',
    question: 'When should you lie a sick patient flat?',
    options: [
      'Always, to improve blood flow',
      'When they have chest pain',
      'Only when they are unconscious',
      'When their blood pressure is high'
    ],
    correctOptionIndex: 2,
    answer: 'Only when they are unconscious',
    explanation: 'Lying a patient flat increases work on the heart. Only put them flat if unconscious.',
    keywords: ['patient position', 'flat', 'unconscious', 'cardiac workload'],
    difficulty: 'medium'
  },

  // ── Post-Op Instructions for XLA (c39-02) ──
  {
    id: 'q39-008',
    contentId: 'c39-02',
    topic: 'oral-surgery',
    subtopic: 'Post-Op Instructions',
    type: 'flashcard',
    question: 'What are the key post-op instructions after a dental extraction (XLA)?',
    answer: 'Leave site 24 hours (no cleaning, no alcohol/smoking). After 24h: warm salty mouthwashes 5x/day for 5 days. Brush normally but gently over site. Don\'t play with site. Take painkillers before pain onset, AVOID ASPIRIN. If bleeding, bite gauze 20 mins. Rest, careful eating while numb. Warn about dry socket.',
    keywords: ['post-op', 'extraction', 'XLA', 'mouthwash', 'dry socket', 'aspirin'],
    difficulty: 'medium'
  },
  {
    id: 'q39-009',
    contentId: 'c39-02',
    topic: 'oral-surgery',
    subtopic: 'Post-Op Instructions',
    type: 'mcq',
    question: 'Why should aspirin be avoided after a dental extraction?',
    options: [
      'It causes nausea',
      'It can increase bleeding',
      'It delays wound healing',
      'It interacts with local anaesthetic'
    ],
    correctOptionIndex: 1,
    answer: 'It can increase bleeding',
    explanation: 'Aspirin is an antiplatelet drug that inhibits thromboxane A2 production, which can increase bleeding from the extraction socket.',
    keywords: ['aspirin', 'bleeding', 'extraction', 'antiplatelet'],
    difficulty: 'easy'
  },
  {
    id: 'q39-010',
    contentId: 'c39-02',
    topic: 'oral-surgery',
    subtopic: 'Post-Op Instructions',
    type: 'fill-blank',
    question: 'After 24 hours, patients should start warm salty mouthwashes ___ times a day for ___ days.',
    answer: 'five (5) times a day for 5 days',
    fullText: 'After 24 hours, patients should start warm salty mouthwashes five times a day for 5 days.',
    blankWord: 'five',
    explanation: 'Warm salty mouthwashes are started 24 hours post-extraction, used five times a day for 5 days to help keep the socket clean and promote healing.',
    keywords: ['mouthwash', 'salty', 'five times', '5 days', 'extraction'],
    difficulty: 'easy'
  },
  {
    id: 'q39-011',
    contentId: 'c39-02',
    topic: 'oral-surgery',
    subtopic: 'Post-Op Instructions',
    type: 'free-text',
    question: 'What is dry socket and what should the patient do if they suspect it?',
    answer: 'Dry socket is when the blood clot in the extraction socket breaks down, causing significant pain. The patient should go back to the dentist, who will pack it with a dressing.',
    acceptableAnswers: [
      'blood clot breaks down causing pain',
      'blood clot breaking down, painful, needs packing',
      'loss of blood clot, return to dentist for dressing',
      'alveolar osteitis, go back to dentist for packing'
    ],
    explanation: 'Dry socket (alveolar osteitis) occurs when the blood clot in the socket breaks down or is dislodged, exposing bone and causing intense pain. Treatment involves the dentist packing the socket with a medicated dressing.',
    keywords: ['dry socket', 'blood clot', 'packing', 'dressing', 'alveolar osteitis'],
    difficulty: 'medium'
  },
  {
    id: 'q39-012',
    contentId: 'c39-02',
    topic: 'oral-surgery',
    subtopic: 'Post-Op Instructions',
    type: 'mcq',
    question: 'If post-extraction bleeding occurs, how long should the patient bite on gauze before seeking help?',
    options: [
      '5 minutes',
      '10 minutes',
      '20 minutes',
      '30 minutes'
    ],
    correctOptionIndex: 2,
    answer: '20 minutes',
    explanation: 'The patient should bite down on a clean handkerchief or provided gauze for 20 minutes. If bleeding persists after that, they should call the emergency number.',
    keywords: ['bleeding', 'gauze', '20 minutes', 'post-extraction'],
    difficulty: 'easy'
  },

  // ── Clinical Governance (c39-03) ──
  {
    id: 'q39-013',
    contentId: 'c39-03',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    type: 'flashcard',
    question: 'Define clinical governance.',
    answer: 'Clinical governance is the framework through which NHS organisations are accountable for continuously improving the quality of their services and safeguarding high standards of care by creating an environment in which excellence in clinical care will flourish.',
    keywords: ['clinical governance', 'NHS', 'quality', 'accountability', 'standards'],
    difficulty: 'medium'
  },
  {
    id: 'q39-014',
    contentId: 'c39-03',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    type: 'free-text',
    question: 'List the 10 components of clinical governance.',
    answer: '1) Quality improvement (includes clinical audit), 2) Leadership, 3) Evidence-based practice, 4) Dissemination of good practice, ideas and innovation, 5) Clinical risk reduction, 6) Detection of adverse events, 7) Learning lessons from complaints, 8) Addressing poor clinical performance, 9) Professional development programmes, 10) High-quality data and record keeping.',
    acceptableAnswers: [
      'quality improvement, leadership, evidence-based practice, dissemination, risk reduction, adverse events, complaints, poor performance, professional development, record keeping',
      'clinical audit, leadership, evidence based, good practice, risk, adverse events, complaints, performance, development, records'
    ],
    explanation: 'The 10 components provide a comprehensive framework covering quality, accountability, learning, and professional standards within the NHS.',
    keywords: ['10 components', 'clinical governance', 'clinical audit', 'quality improvement', 'leadership'],
    difficulty: 'hard'
  },
  {
    id: 'q39-015',
    contentId: 'c39-03',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    type: 'mcq',
    question: 'Which component of clinical governance includes clinical audit?',
    options: [
      'Evidence-based practice',
      'Quality improvement',
      'Clinical risk reduction',
      'Detection of adverse events'
    ],
    correctOptionIndex: 1,
    answer: 'Quality improvement',
    explanation: 'Clinical audit sits under the Quality Improvement component of clinical governance.',
    keywords: ['clinical audit', 'quality improvement', 'clinical governance'],
    difficulty: 'easy'
  },

  // ── 7 Domains of Clinical Governance (c39-04) ──
  {
    id: 'q39-016',
    contentId: 'c39-04',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    type: 'flashcard',
    question: 'Name the 7 domains of clinical governance.',
    answer: '1) Safety, 2) Clinical and cost effectiveness, 3) Governance, 4) Patient focus, 5) Accessible and responsive care, 6) Environment and amenities, 7) Public health.',
    keywords: ['7 domains', 'safety', 'clinical effectiveness', 'governance', 'patient focus', 'accessible care', 'environment', 'public health'],
    difficulty: 'medium'
  },
  {
    id: 'q39-017',
    contentId: 'c39-04',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    type: 'mcq',
    question: 'Under which domain does "reducing MRSA and hospital-acquired infections" fall?',
    options: [
      'Public health',
      'Environment and amenities',
      'Safety',
      'Governance'
    ],
    correctOptionIndex: 2,
    answer: 'Safety',
    explanation: 'The Safety domain covers ensuring staff work safely, minimising risk, learning from mistakes, and maintaining high standards of hygiene to reduce MRSA and hospital-acquired infections.',
    keywords: ['safety', 'MRSA', 'hospital acquired infections', 'hygiene'],
    difficulty: 'medium'
  },
  {
    id: 'q39-018',
    contentId: 'c39-04',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    type: 'fill-blank',
    question: 'The "Patient focus" domain states that patients should be treated with ___ and ___, given proper explanations, and encouraged to participate in decisions about their care.',
    answer: 'dignity and respect',
    fullText: 'The "Patient focus" domain states that patients should be treated with dignity and respect, given proper explanations, and encouraged to participate in decisions about their care.',
    blankWord: 'dignity',
    explanation: 'Patient focus emphasises dignity, respect, informed consent, and active patient involvement in care decisions.',
    keywords: ['patient focus', 'dignity', 'respect', 'decisions', 'informed consent'],
    difficulty: 'easy'
  },
  {
    id: 'q39-019',
    contentId: 'c39-04',
    topic: 'professional-practice',
    subtopic: 'Clinical Governance',
    type: 'free-text',
    question: 'What does the "Public health" domain of clinical governance focus on?',
    answer: 'Improving the health of local people and preventing common illnesses, concentrating on smoking, healthy eating, drug abuse, and sexually transmitted infections. Working with local organisations and dealing with major incidents.',
    acceptableAnswers: [
      'improve health of local people, prevent illness, smoking, healthy eating, drug abuse, STIs',
      'prevent common illnesses, focus on smoking diet drugs STIs, work with local organisations',
      'improving local health, preventing illness, smoking cessation, healthy eating, drug abuse, STI prevention'
    ],
    keywords: ['public health', 'smoking', 'healthy eating', 'drug abuse', 'STIs', 'prevention'],
    difficulty: 'medium'
  },

  // ── Management of Stained Teeth (c39-05) ──
  {
    id: 'q39-020',
    contentId: 'c39-05',
    topic: 'crowns-restorations',
    subtopic: 'Stained Teeth Management',
    type: 'flashcard',
    question: 'What are the treatment options for management of stained teeth?',
    answer: 'Bleaching (vital and non-vital), microabrasion, composite (direct veneer), and porcelain veneers.',
    explanation: 'Treatment choice depends on the cause and severity of staining and the patient\'s age and expectations.',
    keywords: ['stained teeth', 'bleaching', 'microabrasion', 'composite', 'porcelain veneer'],
    difficulty: 'easy'
  },
  {
    id: 'q39-021',
    contentId: 'c39-05',
    topic: 'crowns-restorations',
    subtopic: 'Stained Teeth Management',
    type: 'mcq',
    question: 'Which is a contraindication to tooth bleaching?',
    options: [
      'Mild fluorosis',
      'Tetracycline staining',
      'Cracks and exposed dentine',
      'Sclerosed pulp chambers'
    ],
    correctOptionIndex: 2,
    answer: 'Cracks and exposed dentine',
    explanation: 'Contraindications to bleaching include: high expectations, decay/PA pathology, cracks/exposed dentine, sensitivity, existing crowns/large anterior restorations, elderly with recession and yellow roots, and pregnancy/breastfeeding.',
    keywords: ['bleaching', 'contraindications', 'cracks', 'exposed dentine', 'sensitivity'],
    difficulty: 'medium'
  },
  {
    id: 'q39-022',
    contentId: 'c39-05',
    topic: 'crowns-restorations',
    subtopic: 'Stained Teeth Management',
    type: 'fill-blank',
    question: 'In-office vital bleaching uses around ___% carbamide peroxide (9% HP), while home bleaching uses ___% carbamide peroxide.',
    answer: '30% in-office and 10% at home',
    fullText: 'In-office vital bleaching uses around 30% carbamide peroxide (9% HP), while home bleaching uses 10% carbamide peroxide.',
    blankWord: '30',
    explanation: '30% carbamide peroxide (equivalent to 9% hydrogen peroxide) is used in-office under professional supervision, while 10% carbamide peroxide is used for home bleaching with custom trays.',
    keywords: ['vital bleaching', '30%', '10%', 'carbamide peroxide', 'hydrogen peroxide', 'in-office', 'home'],
    difficulty: 'medium'
  },
  {
    id: 'q39-023',
    contentId: 'c39-05',
    topic: 'crowns-restorations',
    subtopic: 'Stained Teeth Management',
    type: 'mcq',
    question: 'What is microabrasion indicated for?',
    options: [
      'Severe tetracycline staining and amelogenesis imperfecta',
      'Fluorosis, post-orthodontic demineralisation, and localised hypoplasia from infection/trauma',
      'Non-vital teeth discoloured by blood degradation products',
      'Hypoplastic teeth in patients aged 16 and over'
    ],
    correctOptionIndex: 1,
    answer: 'Fluorosis, post-orthodontic demineralisation, and localised hypoplasia from infection/trauma',
    explanation: 'Microabrasion removes a small amount of surface enamel using abrasion with dental instruments and erosion with acid mixture. It is simple and indicated for superficial staining conditions.',
    keywords: ['microabrasion', 'fluorosis', 'demineralisation', 'hypoplasia', 'enamel'],
    difficulty: 'medium'
  },
  {
    id: 'q39-024',
    contentId: 'c39-05',
    topic: 'crowns-restorations',
    subtopic: 'Stained Teeth Management',
    type: 'free-text',
    question: 'What is non-vital bleaching and what must be confirmed before starting it?',
    answer: 'Non-vital bleaching uses 10% carbamide peroxide placed inside/outside the tooth. It is indicated for non-vital, endodontically treated teeth discoloured due to deposition of blood degradation products in dentinal tubules. A well-condensed root filling must be present before starting.',
    acceptableAnswers: [
      'bleaching of endo treated teeth using 10% carbamide peroxide, needs well condensed root filling',
      'inside outside bleaching with 10% carbamide peroxide for non-vital teeth, root filling must be present',
      'internal bleaching for endo treated teeth discoloured by blood products, requires good root filling'
    ],
    explanation: 'Non-vital bleaching addresses intrinsic discolouration from blood breakdown products in the dentinal tubules of endodontically treated teeth. The root filling must be intact to prevent peroxide from reaching the periapical tissues.',
    keywords: ['non-vital bleaching', '10% carbamide peroxide', 'root filling', 'blood degradation', 'dentinal tubules'],
    difficulty: 'hard'
  },
  {
    id: 'q39-025',
    contentId: 'c39-05',
    topic: 'crowns-restorations',
    subtopic: 'Stained Teeth Management',
    type: 'mcq',
    question: 'At what minimum age are porcelain veneers indicated for discoloured teeth?',
    options: [
      '12 years',
      '14 years',
      '16 years',
      '18 years'
    ],
    correctOptionIndex: 2,
    answer: '16 years',
    explanation: 'Porcelain veneers are indicated for hypoplastic and discoloured teeth in patients aged 16 or over, where other techniques such as bleaching and microabrasion have failed.',
    keywords: ['porcelain veneer', 'age 16', 'discoloured teeth', 'hypoplastic'],
    difficulty: 'medium'
  },
  {
    id: 'q39-026',
    contentId: 'c39-05',
    topic: 'crowns-restorations',
    subtopic: 'Stained Teeth Management',
    type: 'flashcard',
    question: 'What conditions are composite veneers indicated for in stained teeth management?',
    answer: 'Hypoplasia, severe fluorosis, localised hypoplasia not responsive to microabrasion, tetracycline staining, discolouration due to loss of vitality not responsive to non-vital bleaching, and amelogenesis/dentinogenesis imperfecta.',
    explanation: 'Composite can camouflage or replace discrete localised areas of abnormal enamel or be used as a direct composite veneer, making it versatile for various causes of discolouration.',
    keywords: ['composite veneer', 'hypoplasia', 'fluorosis', 'tetracycline', 'amelogenesis imperfecta', 'dentinogenesis imperfecta'],
    difficulty: 'hard'
  },
];
