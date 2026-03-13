import { ContentItem, Question } from './types';

// ============================================================
// Pages 33-34: Diet Advice, Charting Deciduous Teeth,
// Inhalation Sedation, Patient Confidentiality,
// Pain History & Diagnosis (Pulpitis, Periapical conditions)
// ============================================================

export const content_p33: ContentItem[] = [
  {
    id: 'c33-01',
    topic: 'paediatrics',
    subtopic: 'Diet & Prevention Advice',
    title: 'Diet Advice and Fluoride Application',
    text: 'Advice should be relevant to diet history and should include advice about optimum times for toothbrushing if appropriate. Highlight diary of foods which are cariogenic. Other advice: brush twice a day and apply fluoride 2x a year or 2+ x a year if high risk.',
    keyPoints: [
      'Diet advice must be relevant to the patient\'s own diet history',
      'Include advice on optimum times for toothbrushing',
      'Highlight cariogenic foods from diet diary',
      'Brush twice a day',
      'Fluoride varnish 2x a year, or more than 2x if high risk'
    ],
    keywords: ['diet advice', 'cariogenic', 'fluoride', 'toothbrushing', 'prevention'],
    pageRef: 33
  },
  {
    id: 'c33-02',
    topic: 'paediatrics',
    subtopic: 'Charting Deciduous Teeth',
    title: 'Conditions Requiring Charting of Deciduous Teeth',
    text: 'Charting deciduous teeth is important in conditions including: Cleidocranial dysostosis, Ectodermal dysplasia, Down\'s syndrome, and Cleft lip/palate. These conditions may affect the number, morphology and eruption of deciduous teeth.',
    keyPoints: [
      'Cleidocranial dysostosis – supernumerary teeth, delayed exfoliation',
      'Ectodermal dysplasia – hypodontia, conical teeth',
      'Down\'s syndrome – delayed eruption, hypodontia',
      'Cleft lip/palate – missing/malformed teeth in cleft area'
    ],
    keywords: ['deciduous teeth', 'cleidocranial dysostosis', 'ectodermal dysplasia', 'Down syndrome', 'cleft lip palate', 'charting'],
    pageRef: 33
  },
  {
    id: 'c33-03',
    topic: 'paediatrics',
    subtopic: 'Inhalation Sedation',
    title: 'Inhalation Sedation Protocol',
    text: 'Pre-op checks: medical history – anything relevant (cold/asthma/URTI)? Have they eaten? Check O2 sats with pulse oximeter on finger – keep on for treatment. BLUE = NO2. WHITE = O2. Apply nasal hood – check it\'s not leaking out. Flow rate to 6L/min. Start at 100% oxygen – bring down to maximum of 60%. Patient should be relaxed, may be giggly, should still be responsive and be able to hold mouth open. Check responsiveness throughout treatment. Check bag isn\'t deflated – may need to increase flow rate. 100% oxygen for 2 minutes at the end.',
    keyPoints: [
      'Pre-op: check medical history for cold/asthma/URTI, check if eaten',
      'Pulse oximeter on finger throughout treatment',
      'BLUE = NO2 (nitrous oxide), WHITE = O2 (oxygen)',
      'Check nasal hood for leaks',
      'Flow rate 6L/min',
      'Start at 100% O2, bring down to maximum 60% NO2',
      'Patient should be relaxed, giggly, still responsive and able to hold mouth open',
      'Check responsiveness and bag throughout treatment',
      'If bag deflated, increase flow rate',
      '100% oxygen for 2 minutes at the end'
    ],
    keywords: ['inhalation sedation', 'nitrous oxide', 'NO2', 'O2', 'pulse oximeter', 'nasal hood', '6L/min', '60%'],
    pageRef: 33
  },
  {
    id: 'c33-04',
    topic: 'professional-practice',
    subtopic: 'Patient Confidentiality',
    title: 'Actor Station: Patient Confidentiality – Pregnant Minor',
    text: 'Scenario: Pregnant 15 year old – needs 2 restorations under LA. Had 2 XLAs under GA – need to discuss with mother. DO NOT tell mother about pregnancy! Mother also asks whether she can override decision – she CANNOT as daughter is Gillick competent to make her own decisions.',
    keyPoints: [
      'Patient is 15 years old and pregnant',
      'Needs 2 restorations under LA',
      'Had 2 XLAs (extractions under GA) previously',
      'Must discuss treatment with mother but DO NOT reveal pregnancy',
      'Mother cannot override patient\'s decisions',
      'Patient is Gillick competent – can make own decisions',
      'Confidentiality must be maintained even from parents for Gillick competent minors'
    ],
    keywords: ['confidentiality', 'Gillick competent', 'pregnant minor', 'consent', 'parental override', 'XLA'],
    pageRef: 33
  },
  {
    id: 'c33-05',
    topic: 'pain-diagnosis',
    subtopic: 'Pain History',
    title: 'Taking a Pain History – 9 Key Questions',
    text: 'Pain history involves 9 systematic questions: 1) Site – can patient localise tooth? In pulpitis "it\'s around here". 2) Radiation – does it travel anywhere? Trismus? Cellulitis? Pulpal pain never crosses midline. 3) Character – sharp, throbbing, dull. 4) Severity – how much does it hurt? 1-10. 5) Duration – how long does it last? Is it as long as the stimulus is applied? 6) Periodicity – transient? Intermittent? Continuous? 7) Provoking factors – TTP/not TTP, hot/cold. 8) Relieving factors – analgesic, heat/cold. 9) Associated factors – trismus, fever, swelling.',
    keyPoints: [
      'Site – can patient localise? Pulpitis is diffuse',
      'Radiation – pulpal pain NEVER crosses midline',
      'Character – sharp, throbbing, dull',
      'Severity – scale 1-10',
      'Duration – how long, related to stimulus?',
      'Periodicity – transient, intermittent, continuous',
      'Provoking factors – TTP, hot, cold',
      'Relieving factors – analgesic, heat/cold',
      'Associated factors – trismus, fever, swelling'
    ],
    keywords: ['pain history', 'site', 'radiation', 'character', 'severity', 'duration', 'periodicity', 'provoking', 'relieving', 'associated factors'],
    imageUrl: '/images/osce/page33_img01.jpeg',
    imageAlt: 'Mind map for clinical diagnosis of pain – dental vs non-dental origin flowchart',
    pageRef: 33
  },
  {
    id: 'c33-06',
    topic: 'pain-diagnosis',
    subtopic: 'Pain Diagnosis Flowchart',
    title: 'Clinical Diagnosis of Pain – Non-Dental Origin Flowchart',
    text: 'Pain of non-dental origin differential diagnosis flowchart. Pain types: Throbbing or Shooting → sensitive to hot/cold/sweet? If single adjacent tooth TTP → dental cause → instigate management. If burning pain → female >40? If yes, consider MS (multiple sclerosis); if no, watch burning mouth. Facial pain → pathological cause? If yes → watch neoplasms. If no and affecting teeth → watch sinusitis. Posterior maxillary teeth TTP with trigger zone → watch trigeminal neuralgia. Pain in temporal/TMJ region → sudden onset Pt >50? If yes → watch temporal arteritis. If no → watch TMJPDS. Atypical odontalgia → watch chronic idiopathic facial pain.',
    keyPoints: [
      'Throbbing/shooting with hot/cold/sweet sensitivity → likely dental origin',
      'Single adjacent tooth TTP → dental cause → manage accordingly',
      'Burning pain in female >40 → consider MS or burning mouth syndrome',
      'Facial pain with pathological cause → neoplasms',
      'Facial pain affecting teeth without pathological cause → sinusitis',
      'Posterior maxillary teeth TTP + trigger zone → trigeminal neuralgia',
      'Temporal/TMJ pain + sudden onset >50 → temporal arteritis',
      'Temporal/TMJ pain without sudden onset → TMJPDS',
      'Atypical odontalgia → chronic idiopathic facial pain'
    ],
    keywords: ['pain flowchart', 'non-dental origin', 'burning mouth', 'trigeminal neuralgia', 'temporal arteritis', 'TMJPDS', 'sinusitis', 'neoplasm'],
    imageUrl: '/images/osce/page33_img01.jpeg',
    imageAlt: 'Mind map for clinical diagnosis of pain – non-dental pain differential diagnosis',
    pageRef: 33
  },
  {
    id: 'c33-07',
    topic: 'pain-diagnosis',
    subtopic: 'Reversible Pulpitis',
    title: 'Reversible Pulpitis – Diagnosis',
    text: 'Reversible pulpitis: Generalised, diffuse, difficult to locate. Widespread. Sharp, non-throbbing. Mild-moderate severity. Few seconds to 10 minutes, lasts as long as stimulus. Intermittent, initiated by stimulus, does not keep awake at night. Cold, hot, sweet brings it on. Eased by painkillers/LA. No associated factors. Look for obviously carious tooth in mouth or on radiographs, traumatic occlusion (high spots on restorations), cracked cusp, exposed dentine (toothwear). Exaggerated response to vitality test.',
    keyPoints: [
      'Generalised, diffuse, difficult to locate',
      'Sharp, non-throbbing pain',
      'Mild-moderate severity',
      'Lasts few seconds to 10 minutes – as long as stimulus',
      'Intermittent, stimulus-initiated, does NOT keep awake at night',
      'Cold, hot, sweet provoke pain',
      'Eased by painkillers/LA',
      'No associated factors (no swelling/trismus/fever)',
      'Look for: caries, traumatic occlusion, cracked cusp, exposed dentine',
      'Exaggerated response to vitality test'
    ],
    keywords: ['reversible pulpitis', 'sharp', 'non-throbbing', 'stimulus', 'vitality test', 'exaggerated response'],
    pageRef: 34
  },
  {
    id: 'c33-08',
    topic: 'pain-diagnosis',
    subtopic: 'Irreversible Pulpitis',
    title: 'Irreversible Pulpitis – Diagnosis',
    text: 'Irreversible pulpitis: Generalised, diffuse, may or may not be difficult to locate. Widespread. Dull, throbbing ache. Severe. Several minutes to many hours, definite onset. Intermittent, spontaneous, keeps patient awake. Hot, cold, sweet brings it on. Strong analgesics may relieve. No associated factors. Grossly carious teeth, heavily restored or crowned, cracked tooth. Exaggerated response to vitality test – as pulp becomes necrotic this reduces.',
    keyPoints: [
      'Generalised, diffuse, may or may not be difficult to locate',
      'Dull, throbbing ache – severe',
      'Lasts several minutes to many hours, definite onset',
      'Intermittent, spontaneous, KEEPS patient awake at night',
      'Hot, cold, sweet provoke pain',
      'Strong analgesics may relieve',
      'No associated factors',
      'Grossly carious, heavily restored/crowned, cracked tooth',
      'Exaggerated response to vitality test – reduces as pulp becomes necrotic'
    ],
    keywords: ['irreversible pulpitis', 'throbbing', 'spontaneous', 'keeps awake', 'necrotic', 'vitality test'],
    pageRef: 34
  },
  {
    id: 'c33-09',
    topic: 'pain-diagnosis',
    subtopic: 'Acute Periapical Periodontitis',
    title: 'Acute Periapical Periodontitis – Diagnosis',
    text: 'Acute periapical periodontitis: Localised, patient able to identify tooth. Pain may radiate. Dull, throbbing ache. Severe. Continuous, lasts hours, gradual onset often preceded by sharp pain some weeks before. Intermittent, spontaneous, keeps patient awake. Pressure, biting can bring it on but may start on its own. Relieved but may not be dispelled by analgesics. May be associated lymphadenopathy and malaise, redness in buccal sulcus. Grossly carious, heavily restored or crowned tooth, cracked tooth. Negative response to vitality test. TTP! May be tender in buccal sulcus. May see widening of PDL.',
    keyPoints: [
      'Localised – patient can identify the tooth',
      'Pain may radiate, dull throbbing ache, severe',
      'Continuous, lasts hours, gradual onset preceded by sharp pain weeks before',
      'Spontaneous, keeps patient awake',
      'Pressure/biting provokes but can start spontaneously',
      'Analgesics may relieve but not dispel pain',
      'Associated: lymphadenopathy, malaise, redness in buccal sulcus',
      'Grossly carious, heavily restored/crowned, cracked tooth',
      'NEGATIVE response to vitality test',
      'TTP (tender to percussion)',
      'May be tender in buccal sulcus',
      'Widening of PDL on radiograph'
    ],
    keywords: ['acute periapical periodontitis', 'localised', 'TTP', 'negative vitality', 'PDL widening', 'lymphadenopathy'],
    pageRef: 34
  },
  {
    id: 'c33-10',
    topic: 'pain-diagnosis',
    subtopic: 'Acute Periapical Abscess',
    title: 'Acute Periapical Abscess – Diagnosis',
    text: 'Acute periapical abscess: Infection trying to drain and instead of forming sinus tract it just forms a big area of inflammatory cells – pus. Near/adjacent to tooth; mostly in buccal sulcus. Localised, patient able to identify tooth. Pain may radiate. Dull, throbbing ache. Severe. Continuous – lasts hours, gradual onset often preceded by sharp pain some weeks before. Intermittent, spontaneous, keeps patient awake. Pressure and biting bring it on. Relieved but not dispelled by analgesics. May be lymphadenopathy and malaise, redness in buccal sulcus.',
    keyPoints: [
      'Infection trying to drain – forms area of inflammatory cells (pus) instead of sinus tract',
      'Located near/adjacent to tooth, mostly in buccal sulcus',
      'Localised – patient can identify the tooth',
      'Pain may radiate, dull throbbing ache, severe',
      'Continuous, lasts hours, gradual onset preceded by sharp pain weeks before',
      'Spontaneous, keeps patient awake',
      'Pressure and biting provoke pain',
      'Analgesics relieve but do NOT dispel pain',
      'Associated: lymphadenopathy, malaise, redness in buccal sulcus'
    ],
    keywords: ['acute periapical abscess', 'pus', 'sinus tract', 'buccal sulcus', 'lymphadenopathy', 'infection'],
    pageRef: 34
  },
];

export const questions_p33: Question[] = [
  // === DIET ADVICE (c33-01) ===
  {
    id: 'q33-001', contentId: 'c33-01', topic: 'paediatrics', subtopic: 'Diet & Prevention Advice',
    type: 'flashcard',
    question: 'How often should fluoride varnish be applied for a high-risk patient?',
    answer: 'More than 2 times a year (2+ x a year).',
    keywords: ['fluoride', 'high risk', 'varnish'], difficulty: 'easy'
  },
  {
    id: 'q33-002', contentId: 'c33-01', topic: 'paediatrics', subtopic: 'Diet & Prevention Advice',
    type: 'mcq',
    question: 'How often should fluoride varnish be applied for a standard-risk patient?',
    options: ['Once a year', 'Twice a year', 'Three times a year', 'Four times a year'],
    correctOptionIndex: 1,
    answer: 'Twice a year.',
    keywords: ['fluoride', 'varnish', 'standard risk'], difficulty: 'easy'
  },
  {
    id: 'q33-003', contentId: 'c33-01', topic: 'paediatrics', subtopic: 'Diet & Prevention Advice',
    type: 'free-text',
    question: 'What three things should diet advice include for a dental patient?',
    answer: 'Relevant diet history review, advice on optimum toothbrushing times, and highlighting cariogenic foods from the diet diary.',
    acceptableAnswers: ['Diet history, toothbrushing times, highlight cariogenic foods', 'Review diet, advise on brushing, identify cariogenic foods'],
    keywords: ['diet advice', 'cariogenic', 'toothbrushing'], difficulty: 'medium'
  },

  // === CHARTING DECIDUOUS TEETH (c33-02) ===
  {
    id: 'q33-004', contentId: 'c33-02', topic: 'paediatrics', subtopic: 'Charting Deciduous Teeth',
    type: 'flashcard',
    question: 'Name four conditions where charting deciduous teeth is particularly important.',
    answer: 'Cleidocranial dysostosis, Ectodermal dysplasia, Down\'s syndrome, and Cleft lip/palate.',
    keywords: ['deciduous teeth', 'charting', 'cleidocranial', 'ectodermal'], difficulty: 'medium'
  },
  {
    id: 'q33-005', contentId: 'c33-02', topic: 'paediatrics', subtopic: 'Charting Deciduous Teeth',
    type: 'mcq',
    question: 'Which of the following conditions is NOT specifically listed as requiring charting of deciduous teeth?',
    options: ['Cleidocranial dysostosis', 'Ectodermal dysplasia', 'Amelogenesis imperfecta', 'Cleft lip/palate'],
    correctOptionIndex: 2,
    answer: 'Amelogenesis imperfecta is not listed. The four listed conditions are: Cleidocranial dysostosis, Ectodermal dysplasia, Down\'s syndrome, and Cleft lip/palate.',
    keywords: ['deciduous', 'charting', 'conditions'], difficulty: 'medium'
  },
  {
    id: 'q33-006', contentId: 'c33-02', topic: 'paediatrics', subtopic: 'Charting Deciduous Teeth',
    type: 'fill-blank',
    question: 'Complete: Conditions requiring charting deciduous teeth include Cleidocranial dysostosis, Ectodermal dysplasia, _____ syndrome, and Cleft lip/palate.',
    fullText: 'Conditions requiring charting deciduous teeth include Cleidocranial dysostosis, Ectodermal dysplasia, Down\'s syndrome, and Cleft lip/palate.',
    blankWord: 'Down\'s',
    answer: 'Down\'s',
    keywords: ['Down syndrome', 'deciduous', 'charting'], difficulty: 'easy'
  },

  // === INHALATION SEDATION (c33-03) ===
  {
    id: 'q33-007', contentId: 'c33-03', topic: 'paediatrics', subtopic: 'Inhalation Sedation',
    type: 'flashcard',
    question: 'What colour coding is used for nitrous oxide and oxygen cylinders in inhalation sedation?',
    answer: 'BLUE = NO2 (nitrous oxide). WHITE = O2 (oxygen).',
    keywords: ['blue', 'white', 'NO2', 'O2', 'cylinder colours'], difficulty: 'easy'
  },
  {
    id: 'q33-008', contentId: 'c33-03', topic: 'paediatrics', subtopic: 'Inhalation Sedation',
    type: 'mcq',
    question: 'What is the maximum percentage of nitrous oxide that should be administered during inhalation sedation?',
    options: ['40%', '50%', '60%', '70%'],
    correctOptionIndex: 2,
    answer: '60%. Start at 100% oxygen and bring down to a maximum of 60% nitrous oxide.',
    keywords: ['nitrous oxide', 'maximum', '60%'], difficulty: 'medium'
  },
  {
    id: 'q33-009', contentId: 'c33-03', topic: 'paediatrics', subtopic: 'Inhalation Sedation',
    type: 'fill-blank',
    question: 'Complete: Flow rate for inhalation sedation is set to _____L/min.',
    fullText: 'Flow rate for inhalation sedation is set to 6L/min.',
    blankWord: '6',
    answer: '6',
    keywords: ['flow rate', '6L/min', 'sedation'], difficulty: 'medium'
  },
  {
    id: 'q33-010', contentId: 'c33-03', topic: 'paediatrics', subtopic: 'Inhalation Sedation',
    type: 'free-text',
    question: 'What should you do at the end of an inhalation sedation session?',
    answer: 'Administer 100% oxygen for 2 minutes.',
    acceptableAnswers: ['100% oxygen for 2 minutes', 'Give pure oxygen for 2 minutes at the end', '2 minutes of 100% O2'],
    keywords: ['100% oxygen', '2 minutes', 'end of sedation'], difficulty: 'easy'
  },
  {
    id: 'q33-011', contentId: 'c33-03', topic: 'paediatrics', subtopic: 'Inhalation Sedation',
    type: 'mcq',
    question: 'What pre-operative checks should be done before inhalation sedation?',
    options: [
      'Check blood pressure and ECG',
      'Medical history (cold/asthma/URTI), have they eaten, check O2 sats with pulse oximeter',
      'Blood tests and urine sample',
      'Chest X-ray and spirometry'
    ],
    correctOptionIndex: 1,
    answer: 'Check medical history for cold/asthma/URTI, whether they have eaten, and O2 sats with pulse oximeter on finger.',
    keywords: ['pre-op', 'medical history', 'pulse oximeter', 'URTI'], difficulty: 'medium'
  },
  {
    id: 'q33-012', contentId: 'c33-03', topic: 'paediatrics', subtopic: 'Inhalation Sedation',
    type: 'flashcard',
    question: 'How should a patient behave under appropriate inhalation sedation?',
    answer: 'Patient should be relaxed, may be giggly, should still be responsive and be able to hold mouth open.',
    keywords: ['relaxed', 'giggly', 'responsive', 'mouth open'], difficulty: 'easy'
  },

  // === PATIENT CONFIDENTIALITY (c33-04) ===
  {
    id: 'q33-013', contentId: 'c33-04', topic: 'professional-practice', subtopic: 'Patient Confidentiality',
    type: 'flashcard',
    question: 'In the OSCE scenario with a pregnant 15-year-old, can the mother override her daughter\'s treatment decisions?',
    answer: 'No. The daughter is Gillick competent and can make her own decisions. The mother cannot override them.',
    keywords: ['Gillick competent', 'override', 'parental rights'], difficulty: 'easy'
  },
  {
    id: 'q33-014', contentId: 'c33-04', topic: 'professional-practice', subtopic: 'Patient Confidentiality',
    type: 'mcq',
    question: 'A pregnant 15-year-old attends with her mother. What information must NOT be disclosed to the mother?',
    options: [
      'The need for restorations under LA',
      'The patient\'s pregnancy',
      'Previous extractions under GA',
      'The patient\'s BPE scores'
    ],
    correctOptionIndex: 1,
    answer: 'The pregnancy must NOT be disclosed. The patient is Gillick competent and her confidentiality must be maintained.',
    keywords: ['confidentiality', 'pregnancy', 'Gillick competent', 'disclosure'], difficulty: 'medium'
  },
  {
    id: 'q33-015', contentId: 'c33-04', topic: 'professional-practice', subtopic: 'Patient Confidentiality',
    type: 'free-text',
    question: 'What does Gillick competence mean in the context of a minor\'s dental treatment?',
    answer: 'A minor who is Gillick competent has sufficient understanding and intelligence to fully understand the treatment proposed, and can therefore consent to or refuse treatment without parental involvement.',
    acceptableAnswers: ['Child has enough understanding to make own decisions', 'Minor can consent without parental override if they understand the treatment', 'Sufficient maturity and understanding to make own medical decisions'],
    keywords: ['Gillick competent', 'consent', 'minor', 'understanding'], difficulty: 'medium'
  },
  {
    id: 'q33-016', contentId: 'c33-04', topic: 'professional-practice', subtopic: 'Patient Confidentiality',
    type: 'fill-blank',
    question: 'Complete: The mother cannot override the patient\'s decisions because the daughter is _____ competent.',
    fullText: 'The mother cannot override the patient\'s decisions because the daughter is Gillick competent.',
    blankWord: 'Gillick',
    answer: 'Gillick',
    keywords: ['Gillick', 'competent', 'consent'], difficulty: 'easy'
  },

  // === PAIN HISTORY (c33-05) ===
  {
    id: 'q33-017', contentId: 'c33-05', topic: 'pain-diagnosis', subtopic: 'Pain History',
    type: 'flashcard',
    question: 'List the 9 questions in a systematic pain history.',
    answer: '1) Site, 2) Radiation, 3) Character, 4) Severity, 5) Duration, 6) Periodicity, 7) Provoking factors, 8) Relieving factors, 9) Associated factors.',
    keywords: ['pain history', 'nine questions', 'systematic'], difficulty: 'hard'
  },
  {
    id: 'q33-018', contentId: 'c33-05', topic: 'pain-diagnosis', subtopic: 'Pain History',
    type: 'mcq',
    question: 'Which statement about pulpal pain radiation is correct?',
    options: [
      'Pulpal pain always radiates to the ear',
      'Pulpal pain never crosses the midline',
      'Pulpal pain always crosses the midline',
      'Pulpal pain only radiates to the contralateral side'
    ],
    correctOptionIndex: 1,
    answer: 'Pulpal pain never crosses the midline.',
    keywords: ['pulpal pain', 'midline', 'radiation'], difficulty: 'medium'
  },
  {
    id: 'q33-019', contentId: 'c33-05', topic: 'pain-diagnosis', subtopic: 'Pain History',
    type: 'fill-blank',
    question: 'Complete: Associated factors in a pain history include trismus, _____, and swelling.',
    fullText: 'Associated factors in a pain history include trismus, fever, and swelling.',
    blankWord: 'fever',
    answer: 'fever',
    keywords: ['associated factors', 'fever', 'trismus', 'swelling'], difficulty: 'easy'
  },
  {
    id: 'q33-020', contentId: 'c33-05', topic: 'pain-diagnosis', subtopic: 'Pain History',
    type: 'free-text',
    question: 'What provoking and relieving factors should you ask about in a pain history?',
    answer: 'Provoking factors: TTP (tender to percussion) or not, hot, cold. Relieving factors: analgesic, heat/cold.',
    acceptableAnswers: ['TTP, hot, cold for provoking; analgesics and heat/cold for relieving', 'Provoking: percussion, thermal. Relieving: painkillers, temperature'],
    keywords: ['provoking', 'relieving', 'TTP', 'hot', 'cold', 'analgesic'], difficulty: 'medium'
  },

  // === PAIN DIAGNOSIS FLOWCHART (c33-06) ===
  {
    id: 'q33-021', contentId: 'c33-06', topic: 'pain-diagnosis', subtopic: 'Pain Diagnosis Flowchart',
    type: 'flashcard',
    question: 'In the pain diagnosis flowchart, what should you suspect with posterior maxillary teeth TTP and a trigger zone?',
    answer: 'Trigeminal neuralgia.',
    keywords: ['trigeminal neuralgia', 'trigger zone', 'posterior maxillary'], difficulty: 'medium'
  },
  {
    id: 'q33-022', contentId: 'c33-06', topic: 'pain-diagnosis', subtopic: 'Pain Diagnosis Flowchart',
    type: 'mcq',
    question: 'A patient over 50 presents with sudden onset pain in the temporal/TMJ region. What should be considered?',
    options: ['TMJPDS', 'Temporal arteritis', 'Trigeminal neuralgia', 'Burning mouth syndrome'],
    correctOptionIndex: 1,
    answer: 'Temporal arteritis. Sudden onset temporal/TMJ pain in a patient over 50 warrants investigation for temporal arteritis.',
    keywords: ['temporal arteritis', 'sudden onset', 'over 50'], difficulty: 'hard'
  },
  {
    id: 'q33-023', contentId: 'c33-06', topic: 'pain-diagnosis', subtopic: 'Pain Diagnosis Flowchart',
    type: 'free-text',
    question: 'In the pain diagnosis flowchart, what differential should be considered for burning pain in a female over 40?',
    answer: 'Multiple sclerosis (MS) should be considered. If not MS, consider burning mouth syndrome.',
    acceptableAnswers: ['MS or burning mouth syndrome', 'Multiple sclerosis', 'MS, and if not then burning mouth'],
    keywords: ['burning pain', 'female', 'over 40', 'MS', 'burning mouth'], difficulty: 'hard'
  },
  {
    id: 'q33-024', contentId: 'c33-06', topic: 'pain-diagnosis', subtopic: 'Pain Diagnosis Flowchart',
    type: 'fill-blank',
    question: 'Complete: Facial pain affecting teeth without a pathological cause should raise suspicion of _____.',
    fullText: 'Facial pain affecting teeth without a pathological cause should raise suspicion of sinusitis.',
    blankWord: 'sinusitis',
    answer: 'sinusitis',
    keywords: ['sinusitis', 'facial pain', 'teeth'], difficulty: 'medium'
  },

  // === REVERSIBLE PULPITIS (c33-07) ===
  {
    id: 'q33-025', contentId: 'c33-07', topic: 'pain-diagnosis', subtopic: 'Reversible Pulpitis',
    type: 'flashcard',
    question: 'Describe the character, severity and duration of reversible pulpitis pain.',
    answer: 'Sharp, non-throbbing pain. Mild-moderate severity. Lasts few seconds to 10 minutes, as long as the stimulus is applied.',
    keywords: ['reversible pulpitis', 'sharp', 'non-throbbing', 'mild-moderate'], difficulty: 'medium'
  },
  {
    id: 'q33-026', contentId: 'c33-07', topic: 'pain-diagnosis', subtopic: 'Reversible Pulpitis',
    type: 'mcq',
    question: 'Which feature distinguishes reversible pulpitis from irreversible pulpitis regarding sleep?',
    options: [
      'Reversible pulpitis keeps patient awake at night',
      'Reversible pulpitis does NOT keep patient awake at night',
      'Both types keep patients awake at night',
      'Neither type affects sleep'
    ],
    correctOptionIndex: 1,
    answer: 'Reversible pulpitis does NOT keep the patient awake at night – the pain is stimulus-initiated and intermittent.',
    keywords: ['reversible pulpitis', 'sleep', 'awake at night'], difficulty: 'medium'
  },
  {
    id: 'q33-027', contentId: 'c33-07', topic: 'pain-diagnosis', subtopic: 'Reversible Pulpitis',
    type: 'free-text',
    question: 'What clinical findings might you see in a tooth with reversible pulpitis?',
    answer: 'Obviously carious tooth, traumatic occlusion (high spots on restorations), cracked cusp, exposed dentine (toothwear). Exaggerated response to vitality test.',
    acceptableAnswers: ['Caries, high restorations, cracked cusp, exposed dentine, exaggerated vitality test', 'Carious tooth, traumatic occlusion, cracked cusp, exposed dentine'],
    keywords: ['caries', 'traumatic occlusion', 'cracked cusp', 'vitality test', 'exaggerated'], difficulty: 'hard'
  },
  {
    id: 'q33-028', contentId: 'c33-07', topic: 'pain-diagnosis', subtopic: 'Reversible Pulpitis',
    type: 'fill-blank',
    question: 'Complete: Reversible pulpitis shows an _____ response to vitality test.',
    fullText: 'Reversible pulpitis shows an exaggerated response to vitality test.',
    blankWord: 'exaggerated',
    answer: 'exaggerated',
    keywords: ['exaggerated', 'vitality test', 'reversible pulpitis'], difficulty: 'easy'
  },

  // === IRREVERSIBLE PULPITIS (c33-08) ===
  {
    id: 'q33-029', contentId: 'c33-08', topic: 'pain-diagnosis', subtopic: 'Irreversible Pulpitis',
    type: 'flashcard',
    question: 'What are the key distinguishing features of irreversible pulpitis compared to reversible pulpitis?',
    answer: 'Dull, throbbing (not sharp), severe (not mild-moderate), spontaneous (not just stimulus-initiated), keeps patient awake at night, lasts several minutes to many hours.',
    keywords: ['irreversible pulpitis', 'throbbing', 'spontaneous', 'keeps awake'], difficulty: 'medium'
  },
  {
    id: 'q33-030', contentId: 'c33-08', topic: 'pain-diagnosis', subtopic: 'Irreversible Pulpitis',
    type: 'mcq',
    question: 'What happens to the vitality test response as pulp becomes necrotic in irreversible pulpitis?',
    options: [
      'Response becomes more exaggerated',
      'Response stays the same',
      'Response reduces/diminishes',
      'Response becomes negative immediately'
    ],
    correctOptionIndex: 2,
    answer: 'The exaggerated response to vitality test reduces as the pulp becomes necrotic.',
    keywords: ['vitality test', 'necrotic', 'reduces'], difficulty: 'hard'
  },
  {
    id: 'q33-031', contentId: 'c33-08', topic: 'pain-diagnosis', subtopic: 'Irreversible Pulpitis',
    type: 'fill-blank',
    question: 'Complete: Irreversible pulpitis pain is _____, spontaneous, and keeps the patient awake at night.',
    fullText: 'Irreversible pulpitis pain is intermittent, spontaneous, and keeps the patient awake at night.',
    blankWord: 'intermittent',
    answer: 'intermittent',
    keywords: ['intermittent', 'spontaneous', 'keeps awake'], difficulty: 'medium'
  },
  {
    id: 'q33-032', contentId: 'c33-08', topic: 'pain-diagnosis', subtopic: 'Irreversible Pulpitis',
    type: 'free-text',
    question: 'What type of teeth are typically associated with irreversible pulpitis?',
    answer: 'Grossly carious teeth, heavily restored or crowned teeth, and cracked teeth.',
    acceptableAnswers: ['Grossly carious, heavily restored, crowned or cracked teeth', 'Carious teeth, restored teeth, crowned teeth, cracked teeth'],
    keywords: ['grossly carious', 'heavily restored', 'crowned', 'cracked'], difficulty: 'easy'
  },

  // === ACUTE PERIAPICAL PERIODONTITIS (c33-09) ===
  {
    id: 'q33-033', contentId: 'c33-09', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Periodontitis',
    type: 'flashcard',
    question: 'How does the localisation of acute periapical periodontitis differ from pulpitis?',
    answer: 'Acute periapical periodontitis is localised – the patient can identify the tooth. Pulpitis is generalised and diffuse, making localisation difficult.',
    keywords: ['periapical periodontitis', 'localised', 'identify tooth'], difficulty: 'medium'
  },
  {
    id: 'q33-034', contentId: 'c33-09', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Periodontitis',
    type: 'mcq',
    question: 'What is the vitality test response in acute periapical periodontitis?',
    options: [
      'Exaggerated positive response',
      'Normal response',
      'Negative response',
      'Delayed positive response'
    ],
    correctOptionIndex: 2,
    answer: 'Negative response to vitality test. The tooth is non-vital. The tooth is also TTP (tender to percussion).',
    keywords: ['negative vitality', 'non-vital', 'TTP', 'periapical periodontitis'], difficulty: 'medium'
  },
  {
    id: 'q33-035', contentId: 'c33-09', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Periodontitis',
    type: 'free-text',
    question: 'What radiographic sign may be seen in acute periapical periodontitis?',
    answer: 'Widening of the periodontal ligament (PDL).',
    acceptableAnswers: ['Widening of PDL', 'PDL widening', 'Widened periodontal ligament space'],
    keywords: ['widening', 'PDL', 'radiograph', 'periodontal ligament'], difficulty: 'medium'
  },
  {
    id: 'q33-036', contentId: 'c33-09', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Periodontitis',
    type: 'fill-blank',
    question: 'Complete: Acute periapical periodontitis may be associated with _____, malaise, and redness in the buccal sulcus.',
    fullText: 'Acute periapical periodontitis may be associated with lymphadenopathy, malaise, and redness in the buccal sulcus.',
    blankWord: 'lymphadenopathy',
    answer: 'lymphadenopathy',
    keywords: ['lymphadenopathy', 'malaise', 'buccal sulcus'], difficulty: 'hard'
  },
  {
    id: 'q33-037', contentId: 'c33-09', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Periodontitis',
    type: 'mcq',
    question: 'What typically precedes the onset of acute periapical periodontitis?',
    options: [
      'Sudden onset with no prior symptoms',
      'Sharp pain some weeks before, followed by gradual onset of continuous dull ache',
      'Burning sensation for months',
      'Tingling in the lip region'
    ],
    correctOptionIndex: 1,
    answer: 'Gradual onset, often preceded by sharp pain some weeks before. This sharp pain likely represents the earlier pulpitis stage.',
    keywords: ['gradual onset', 'preceded', 'sharp pain', 'weeks before'], difficulty: 'hard'
  },

  // === ACUTE PERIAPICAL ABSCESS (c33-10) ===
  {
    id: 'q33-038', contentId: 'c33-10', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Abscess',
    type: 'flashcard',
    question: 'What is the pathology behind an acute periapical abscess?',
    answer: 'Infection trying to drain, but instead of forming a sinus tract it forms a big area of inflammatory cells – pus. Located near/adjacent to the tooth, mostly in the buccal sulcus.',
    keywords: ['periapical abscess', 'infection', 'pus', 'sinus tract', 'buccal sulcus'], difficulty: 'medium'
  },
  {
    id: 'q33-039', contentId: 'c33-10', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Abscess',
    type: 'mcq',
    question: 'How does an acute periapical abscess differ from a sinus tract?',
    options: [
      'An abscess always drains through the skin',
      'An abscess forms a large area of pus instead of forming a sinus tract to drain',
      'A sinus tract contains more pus than an abscess',
      'There is no difference'
    ],
    correctOptionIndex: 1,
    answer: 'In an abscess, the infection tries to drain but instead of forming a sinus tract it forms a big area of inflammatory cells (pus).',
    keywords: ['abscess', 'sinus tract', 'pus', 'inflammatory cells'], difficulty: 'medium'
  },
  {
    id: 'q33-040', contentId: 'c33-10', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Abscess',
    type: 'fill-blank',
    question: 'Complete: Acute periapical abscess is located near/adjacent to the tooth, mostly in the _____ sulcus.',
    fullText: 'Acute periapical abscess is located near/adjacent to the tooth, mostly in the buccal sulcus.',
    blankWord: 'buccal',
    answer: 'buccal',
    keywords: ['buccal sulcus', 'periapical abscess', 'location'], difficulty: 'easy'
  },
  {
    id: 'q33-041', contentId: 'c33-10', topic: 'pain-diagnosis', subtopic: 'Acute Periapical Abscess',
    type: 'free-text',
    question: 'Can analgesics fully resolve the pain from an acute periapical abscess?',
    answer: 'No. Analgesics may relieve the pain but do NOT fully dispel it. The underlying infection must be treated.',
    acceptableAnswers: ['No, analgesics relieve but do not dispel the pain', 'No, they relieve but cannot fully eliminate abscess pain', 'Relieved but not dispelled by analgesics'],
    keywords: ['analgesics', 'relieve', 'not dispelled', 'abscess'], difficulty: 'easy'
  },
];
