import { ContentItem, Question } from './types';

export const content_p51: ContentItem[] = [
  {
    id: 'c51-01',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    title: 'AAE Endodontic Case Difficulty Assessment – Patient Considerations',
    text: 'The AAE Endodontic Case Difficulty Assessment Form categorises cases into Minimal, Moderate, and High difficulty across three sections: A. Patient Considerations, B. Diagnostic and Treatment Considerations, and C. Additional Considerations. Patient Considerations include: Medical History (Minimal = no medical problem ASA Class 1; Moderate = one or more medical problems ASA Class 2; High = complex medical history/serious illness/disability ASA Classes 3-5). Anesthesia (Minimal = no history of anesthesia problems; Moderate = vasoconstrictor intolerance; High = difficulty achieving anesthesia). Patient Disposition (Minimal = cooperative and compliant; Moderate = anxious but cooperative; High = uncooperative). Ability to Open Mouth (Minimal = no limitation; Moderate = slight limitation in opening; High = significant limitation in opening). Gag Reflex (Minimal = none; Moderate = gags occasionally with radiographs/treatment; High = extreme gag reflex which has compromised past dental care). Emergency Condition (Minimal = minimum pain or swelling; Moderate = moderate pain or swelling; High = severe pain or swelling).',
    keyPoints: [
      'Three difficulty levels: Minimal, Moderate, High',
      'ASA 1 = Minimal; ASA 2 = Moderate; ASA 3-5 = High',
      'Vasoconstrictor intolerance = Moderate; difficulty achieving anesthesia = High',
      'Anxious but cooperative = Moderate; Uncooperative = High',
      'Extreme gag reflex compromising past care = High difficulty'
    ],
    keywords: ['AAE', 'endodontic difficulty', 'ASA classification', 'patient considerations', 'gag reflex', 'anesthesia'],
    imageUrl: '/images/osce/page51_img01.webp',
    imageAlt: 'AAE Endodontic Case Difficulty Assessment Form',
    pageRef: 51
  },
  {
    id: 'c51-02',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    title: 'AAE Difficulty Assessment – Diagnostic and Treatment Considerations',
    text: 'Diagnostic and Treatment Considerations: Diagnosis (Minimal = signs and symptoms consistent with recognised pulpal and periapical conditions; Moderate = extensive differential diagnosis of usual signs and symptoms required; High = confusing and complex signs and symptoms, difficult diagnosis, history of chronic oral/facial pain). Radiographic Difficulties (Minimal = minimal difficulty obtaining/interpreting radiographs; Moderate = moderate difficulty e.g. high floor of mouth, narrow or low palatal vault, presence of tori; High = extreme difficulty e.g. superimposed anatomical structures). Position in the Arch (Minimal = anterior/premolar, slight inclination <10 degrees, slight rotation <10 degrees; Moderate = 1st molar, moderate inclination 10-30 degrees, moderate rotation 10-30 degrees; High = 2nd or 3rd molar, extreme inclination >30 degrees, extreme rotation >30 degrees). Tooth Isolation (Minimal = routine rubber dam placement; Moderate = simple pretreatment modification required; High = extensive pretreatment modification required). Crown Morphology (Minimal = normal original crown morphology; Moderate = full coverage restoration, porcelain restoration, bridge abutment, moderate deviation from normal tooth/root form e.g. taurodontism, microdens, teeth with extensive coronal destruction; High = restoration does not reflect original anatomy/alignment, significant deviation from normal tooth/root form e.g. fusion, dens in dente).',
    keyPoints: [
      'Chronic oral/facial pain = High difficulty diagnosis',
      'Tori or high floor of mouth = Moderate radiographic difficulty',
      'Anterior/premolar = Minimal; 1st molar = Moderate; 2nd/3rd molar = High',
      'Inclination/rotation >30deg = High; bridge abutment = Moderate crown morphology',
      'Dens in dente or fusion = High crown morphology difficulty'
    ],
    keywords: ['diagnosis', 'radiographic difficulty', 'tooth position', 'crown morphology', 'taurodontism', 'dens in dente'],
    imageUrl: '/images/osce/page51_img01.webp',
    imageAlt: 'AAE Endodontic Case Difficulty Assessment Form – Diagnostic section',
    pageRef: 51
  },
  {
    id: 'c51-03',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    title: 'AAE Difficulty Assessment – Canal/Root Morphology, Radiographic Appearance, and Resorption',
    text: 'Canal and Root Morphology: Minimal = slight or no curvature (<10 degrees), closed apex (<1 mm in diameter). Moderate = moderate curvature (10-30 degrees), crown axis differs moderately from root axis, apical opening 1-1.5 mm in diameter. High = extreme curvature (>30 degrees) or S-shaped curve, mandibular premolar or anterior with 2 roots, maxillary premolar with 3 roots, canal divides in the middle or apical third, very long tooth (>25 mm), open apex (>1.5 mm in diameter). Radiographic Appearance of Canal(s): Minimal = canal(s) visible and not reduced in size. Moderate = canal(s) and chamber visible but reduced in size, pulp stones present. High = indistinct canal path, canal(s) not visible. Resorption: Minimal = no resorption evident. Moderate = minimal apical resorption. High = extensive apical resorption, internal resorption, external resorption.',
    keyPoints: [
      'Canal curvature: <10deg Minimal; 10-30deg Moderate; >30deg/S-shaped = High',
      'Apex: <1mm closed = Minimal; 1-1.5mm = Moderate; >1.5mm open = High',
      'Mandibular premolar with 2 roots or maxillary premolar with 3 roots = High',
      'Very long tooth >25mm or canal divides mid/apical third = High',
      'Pulp stones = Moderate; indistinct/invisible canal = High',
      'Internal or external resorption = High difficulty'
    ],
    keywords: ['canal curvature', 'root morphology', 'open apex', 'S-shaped curve', 'pulp stones', 'resorption', 'canal visibility'],
    pageRef: 51
  },
  {
    id: 'c51-04',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    title: 'AAE Difficulty Assessment – Additional Considerations',
    text: 'C. Additional Considerations: Trauma History (Minimal = uncomplicated crown fracture of mature or immature teeth; Moderate = complicated crown fracture of mature teeth, subluxation; High = complicated crown fracture of immature teeth, horizontal root fracture, alveolar fracture, intrusive/extrusive or lateral luxation, avulsion). Endodontic Treatment History (Minimal = no previous treatment; Moderate = previous access without complications; High = previous access with complications e.g. perforation, non-negotiated canal, ledge, separated instrument, previous surgical or nonsurgical endodontic treatment completed). Periodontal-Endodontic Condition (Minimal = none or mild periodontal disease; Moderate = concurrent moderate periodontal disease; High = concurrent severe periodontal disease, cracked teeth with periodontal complications, combined endodontic/periodontic lesion, root amputation prior to endodontic treatment).',
    keyPoints: [
      'Uncomplicated crown fracture = Minimal; complicated mature = Moderate; complicated immature = High',
      'Root fracture, alveolar fracture, luxation, avulsion = High',
      'Previous access with perforation/ledge/separated instrument = High',
      'Previous completed endo = High; combined endo-perio lesion = High',
      'Cracked teeth with perio complications or root amputation = High'
    ],
    keywords: ['trauma history', 'crown fracture', 'avulsion', 'luxation', 'retreatment', 'perforation', 'separated instrument', 'endo-perio lesion'],
    pageRef: 51
  },
  {
    id: 'c51-05',
    topic: 'prescribing',
    subtopic: 'Prescription Matching – Infections',
    title: 'Prescriptions for Dental Infections',
    text: 'Acute dental abscess: Amoxicillin 500mg TDS 5 days AND Metronidazole 200mg TDS for 3 days. Acute dental abscess (allergic to penicillin): Erythromycin 250mg QDS for 5 days AND Metronidazole 200mg TDS for 3 days. ANUG: Metronidazole 200mg TDS for 3 days. Aggressive Perio: Doxycycline 100mg once a day for 21 days (not children) OR Metronidazole 200mg TDS for 7-10 days. Actinomycosis: Amoxicillin 500mg until resolves. Actinomycosis if allergic to penicillin: Minocycline 100mg BD. Acute bacterial sialadenitis: Flucloxacillin.',
    keyPoints: [
      'Acute dental abscess: Amoxicillin 500mg TDS 5 days + Metronidazole 200mg TDS 3 days',
      'Penicillin-allergic abscess: Erythromycin 250mg QDS 5 days + Metronidazole 200mg TDS 3 days',
      'ANUG: Metronidazole 200mg TDS for 3 days',
      'Aggressive Perio: Doxycycline 100mg OD 21 days (not children) OR Metronidazole 200mg TDS 7-10 days',
      'Actinomycosis: Amoxicillin 500mg until resolves; if allergic: Minocycline 100mg BD',
      'Acute bacterial sialadenitis: Flucloxacillin'
    ],
    keywords: ['amoxicillin', 'metronidazole', 'erythromycin', 'doxycycline', 'flucloxacillin', 'dental abscess', 'ANUG', 'actinomycosis', 'sialadenitis'],
    imageUrl: '/images/osce/page52_img01.webp',
    imageAlt: 'List of Prescriptions table for dental conditions',
    pageRef: 52
  },
  {
    id: 'c51-06',
    topic: 'prescribing',
    subtopic: 'Prescription Matching – Fungal and Viral',
    title: 'Prescriptions for Candida, Herpes, and Shingles',
    text: 'Candida intraoral treatment: I/O: Miconazole gel OR Nystatin suspension OR Amphotericin lozenges. E/O: Miconazole gel/cream, Nystatin cream. Staph Aureus (oral): Fusidic Acid cream. Mixed candida + staph aureus (or unknown): Miconazole gel. Herpes labialis: Topical aciclovir or penciclovir in prodromal phase. Shingles: High dose systemic aciclovir.',
    keyPoints: [
      'Intraoral candida: Miconazole gel, Nystatin suspension, or Amphotericin lozenges',
      'Extraoral candida: Miconazole gel/cream or Nystatin cream',
      'Staph Aureus: Fusidic Acid cream',
      'Mixed candida + staph or unknown: Miconazole gel',
      'Herpes labialis: Topical aciclovir or penciclovir in prodromal phase',
      'Shingles: High dose systemic aciclovir'
    ],
    keywords: ['miconazole', 'nystatin', 'amphotericin', 'fusidic acid', 'aciclovir', 'penciclovir', 'candida', 'herpes labialis', 'shingles'],
    pageRef: 52
  },
  {
    id: 'c51-07',
    topic: 'prescribing',
    subtopic: 'Prescription Matching – Mucosal Conditions',
    title: 'Prescriptions for RAS, Lichen Planus, and Vesiculobullous Diseases',
    text: 'Recurrent Aphthous Stomatitis (RAS): Varies – topical (sometimes systemic) steroids, immunomodulatory drugs e.g. prednisolone, anti-inflammatory drugs e.g. colchicine. Mild Lichen Planus: Chlorhexidine gluconate 0.2% m/w (Corsodyl), benzydamine hydrochloride 0.15% spray (Difflam), hydrocortisone sodium succinate 2.5mg (Corlan pellets). Moderate Lichen Planus: Topical steroids – betamethasone sodium phosphate 500ug (Betnesol), beclometasone dipropionate, budesonide (Rhinocort), triamcinolone rinse. Severe Lichen Planus: Systemic prednisolone, Azathioprine, other immunomodulators. Erythema Multiforme: Systemic corticosteroids, systemic antivirals e.g. Aciclovir, topical/systemic analgesics. Pemphigus Vulgaris: Systemic steroids +/- steroid sparing agent e.g. Azathioprine. Topically use m/w – steroid/analgesic/antiseptic/antimicrobial, improve OH. Mucous Membrane Pemphigoid (oral mucosal disease only): Improve OH, topical steroids, and analgesics. Mucous Membrane Pemphigoid (systemic disease): Systemic steroids, Dapsone, Azathioprine, Cyclophosphamide.',
    keyPoints: [
      'RAS: topical/systemic steroids, colchicine, immunomodulatory drugs',
      'Mild LP: Corsodyl, Difflam, Corlan pellets; Moderate: Betnesol, budesonide; Severe: systemic prednisolone/Azathioprine',
      'Erythema Multiforme: systemic corticosteroids + antivirals e.g. Aciclovir',
      'Pemphigus Vulgaris: systemic steroids +/- Azathioprine; topical steroid m/w',
      'MMP oral: topical steroids; MMP systemic: Dapsone, Azathioprine, Cyclophosphamide'
    ],
    keywords: ['RAS', 'lichen planus', 'Corlan', 'Betnesol', 'pemphigus vulgaris', 'pemphigoid', 'erythema multiforme', 'Azathioprine', 'Dapsone'],
    pageRef: 52
  },
  {
    id: 'c51-08',
    topic: 'prescribing',
    subtopic: 'Prescription Matching – Other Conditions',
    title: 'Prescriptions for Dermatitis Herpetiformis, Linear IgA, and Dry Mouth',
    text: 'Dermatitis Herpetiformis: Gluten-free diet, systemic Dapsone. Linear IgA disease: Systemic Dapsone. Dry Mouth (topical): Saliva substitutes/artificial saliva e.g. Saliva Orthana, oral gels – Biotene OralBalance Gel, BioXtra Oral Gel, salivary stimulators e.g. Salivix pastilles. Dry Mouth (systemic): Pilocarpine.',
    keyPoints: [
      'Dermatitis Herpetiformis: gluten-free diet + systemic Dapsone',
      'Linear IgA disease: systemic Dapsone',
      'Dry Mouth topical: Saliva Orthana, Biotene OralBalance Gel, BioXtra Oral Gel, Salivix pastilles',
      'Dry Mouth systemic: Pilocarpine'
    ],
    keywords: ['dermatitis herpetiformis', 'linear IgA', 'Dapsone', 'dry mouth', 'pilocarpine', 'Saliva Orthana', 'Biotene', 'Salivix'],
    pageRef: 52
  }
];

export const questions_p51: Question[] = [
  // === c51-01: AAE Patient Considerations ===
  {
    id: 'q51-001',
    contentId: 'c51-01',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'mcq',
    question: 'In the AAE Endodontic Case Difficulty Assessment, a patient classified as ASA Class 2 falls under which difficulty level?',
    answer: 'Moderate difficulty',
    explanation: 'ASA 1 = Minimal. ASA 2 = Moderate. ASA 3-5 = High.',
    options: ['Minimal difficulty', 'Moderate difficulty', 'High difficulty', 'Not assessed in the AAE form'],
    correctOptionIndex: 1,
    keywords: ['AAE', 'ASA classification', 'medical history', 'moderate difficulty'],
    difficulty: 'medium'
  },
  {
    id: 'q51-002',
    contentId: 'c51-01',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'flashcard',
    question: 'What are the three difficulty levels in the AAE Endodontic Case Difficulty Assessment Form?',
    answer: 'Minimal, Moderate, and High difficulty.',
    keywords: ['AAE', 'difficulty levels', 'case assessment'],
    difficulty: 'easy'
  },
  {
    id: 'q51-003',
    contentId: 'c51-01',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'mcq',
    question: 'A patient with vasoconstrictor intolerance is classified as which difficulty level for anesthesia in the AAE assessment?',
    answer: 'Moderate difficulty',
    explanation: 'No problems = Minimal. Vasoconstrictor intolerance = Moderate. Difficulty achieving = High.',
    options: ['Minimal difficulty', 'Moderate difficulty', 'High difficulty', 'Excluded from assessment'],
    correctOptionIndex: 1,
    keywords: ['vasoconstrictor', 'anesthesia', 'AAE', 'moderate'],
    difficulty: 'medium'
  },
  {
    id: 'q51-004',
    contentId: 'c51-01',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'fill-blank',
    question: 'In the AAE assessment, an extreme gag reflex that has compromised past dental care is classified as _____ difficulty.',
    answer: 'High',
    fullText: 'In the AAE assessment, an extreme gag reflex that has compromised past dental care is classified as High difficulty.',
    blankWord: 'High',
    keywords: ['gag reflex', 'AAE', 'high difficulty'],
    difficulty: 'easy'
  },

  // === c51-02: Diagnostic and Treatment Considerations ===
  {
    id: 'q51-005',
    contentId: 'c51-02',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'mcq',
    question: 'A 2nd molar with 35 degrees of inclination would be classified as which difficulty level in the AAE assessment?',
    answer: 'High difficulty',
    explanation: 'Anterior/premolar <10deg = Minimal. 1st molar 10-30deg = Moderate. 2nd/3rd molar >30deg = High.',
    options: ['Minimal difficulty', 'Moderate difficulty', 'High difficulty', 'Cannot be assessed'],
    correctOptionIndex: 2,
    keywords: ['tooth position', 'inclination', '2nd molar', 'high difficulty'],
    difficulty: 'medium'
  },
  {
    id: 'q51-006',
    contentId: 'c51-02',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'flashcard',
    question: 'What radiographic difficulties classify as Moderate in the AAE assessment?',
    answer: 'Moderate difficulty obtaining/interpreting radiographs, e.g. high floor of mouth, narrow or low palatal vault, presence of tori.',
    keywords: ['radiographic', 'moderate', 'tori', 'palatal vault', 'floor of mouth'],
    difficulty: 'medium'
  },
  {
    id: 'q51-007',
    contentId: 'c51-02',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'mcq',
    question: 'In the AAE assessment, which crown morphology finding is classified as Moderate difficulty?',
    answer: 'A bridge abutment',
    explanation: 'Normal crown = Minimal. Bridge abutment/taurodontism/microdens = Moderate. Fusion/dens in dente = High.',
    options: ['Normal original crown morphology', 'A bridge abutment', 'Dens in dente', 'Slight deviation from normal'],
    correctOptionIndex: 1,
    keywords: ['crown morphology', 'bridge abutment', 'moderate', 'AAE'],
    difficulty: 'medium'
  },
  // === c51-03: Canal/Root Morphology ===
  {
    id: 'q51-009',
    contentId: 'c51-03',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'mcq',
    question: 'Which canal morphology finding is classified as High difficulty in the AAE assessment?',
    answer: 'S-shaped curve',
    explanation: '<10deg = Minimal. 10-30deg = Moderate. >30deg/S-shaped/2-rooted mand premolar/3-rooted max premolar/>25mm/open apex >1.5mm = High.',
    options: ['Moderate curvature of 20 degrees', 'Closed apex <1 mm', 'S-shaped curve', 'Apical opening 1.2 mm in diameter'],
    correctOptionIndex: 2,
    keywords: ['S-shaped', 'canal morphology', 'high difficulty', 'curvature'],
    difficulty: 'medium'
  },
  {
    id: 'q51-010',
    contentId: 'c51-03',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'fill-blank',
    question: 'A very long tooth measuring over _____ mm is classified as High difficulty in the AAE assessment.',
    answer: '25',
    fullText: 'A very long tooth measuring over 25 mm is classified as High difficulty in the AAE assessment.',
    blankWord: '25',
    keywords: ['long tooth', '25 mm', 'high difficulty'],
    difficulty: 'medium'
  },
  {
    id: 'q51-011',
    contentId: 'c51-03',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'flashcard',
    question: 'What apical opening diameters correspond to Minimal, Moderate, and High difficulty in the AAE assessment?',
    answer: 'Minimal: closed apex <1 mm diameter. Moderate: apical opening 1-1.5 mm diameter. High: open apex >1.5 mm diameter.',
    keywords: ['apical opening', 'apex diameter', 'minimal', 'moderate', 'high'],
    difficulty: 'hard'
  },
  {
    id: 'q51-012',
    contentId: 'c51-03',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'mcq',
    question: 'Pulp stones present in the canal on radiograph indicate which AAE difficulty level for radiographic appearance?',
    answer: 'Moderate difficulty',
    explanation: 'Visible/not reduced = Minimal. Visible but reduced + pulp stones = Moderate. Indistinct/not visible = High.',
    options: ['Minimal difficulty', 'Moderate difficulty', 'High difficulty', 'Not relevant to AAE assessment'],
    correctOptionIndex: 1,
    keywords: ['pulp stones', 'radiographic appearance', 'moderate difficulty'],
    difficulty: 'medium'
  },

  // === c51-04: Additional Considerations ===
  {
    id: 'q51-013',
    contentId: 'c51-04',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'mcq',
    question: 'In the AAE assessment, which trauma history is classified as Moderate difficulty?',
    answer: 'Complicated crown fracture of mature teeth',
    explanation: 'Uncomplicated = Minimal. Complicated mature/subluxation = Moderate. Complicated immature/root fracture/alveolar fracture/luxation/avulsion = High.',
    options: ['Uncomplicated crown fracture', 'Complicated crown fracture of mature teeth', 'Horizontal root fracture', 'Avulsion'],
    correctOptionIndex: 1,
    keywords: ['trauma', 'crown fracture', 'moderate', 'mature teeth'],
    difficulty: 'medium'
  },
  {
    id: 'q51-014',
    contentId: 'c51-04',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'free-text',
    question: 'List at least 3 trauma types classified as High difficulty in the AAE endodontic assessment.',
    answer: 'Complicated crown fracture of immature teeth, horizontal root fracture, alveolar fracture, intrusive/extrusive or lateral luxation, avulsion.',
    acceptableAnswers: [
      'Complicated crown fracture immature teeth, horizontal root fracture, avulsion',
      'Alveolar fracture, lateral luxation, avulsion'
    ],
    keywords: ['trauma', 'high difficulty', 'avulsion', 'root fracture', 'luxation', 'alveolar fracture'],
    difficulty: 'hard'
  },
  {
    id: 'q51-015',
    contentId: 'c51-04',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'flashcard',
    question: 'What endodontic treatment history findings classify as High difficulty in the AAE assessment?',
    answer: 'Previous access with complications (e.g. perforation, non-negotiated canal, ledge, separated instrument), or previous surgical or nonsurgical endodontic treatment completed.',
    keywords: ['retreatment', 'perforation', 'separated instrument', 'ledge', 'high difficulty'],
    difficulty: 'hard'
  },
  {
    id: 'q51-016',
    contentId: 'c51-04',
    topic: 'endodontics',
    subtopic: 'AAE Case Difficulty Assessment',
    type: 'fill-blank',
    question: 'A combined endodontic/_____ lesion is classified as High difficulty in the AAE additional considerations.',
    answer: 'periodontic',
    fullText: 'A combined endodontic/periodontic lesion is classified as High difficulty in the AAE additional considerations.',
    blankWord: 'periodontic',
    keywords: ['endo-perio', 'combined lesion', 'high difficulty'],
    difficulty: 'easy'
  },

  // === c51-05: Prescriptions – Dental Infections ===
  {
    id: 'q51-017',
    contentId: 'c51-05',
    topic: 'prescribing',
    subtopic: 'Dental Infections',
    type: 'flashcard',
    question: 'What is the antibiotic regimen for an acute dental abscess?',
    answer: 'Amoxicillin 500mg TDS for 5 days AND Metronidazole 200mg TDS for 3 days.',
    keywords: ['amoxicillin', 'metronidazole', 'dental abscess', '500mg', '200mg'],
    difficulty: 'medium'
  },
  {
    id: 'q51-018',
    contentId: 'c51-05',
    topic: 'prescribing',
    subtopic: 'Dental Infections',
    type: 'mcq',
    question: 'What antibiotic regimen is prescribed for an acute dental abscess in a patient allergic to penicillin?',
    answer: 'Erythromycin 250mg QDS for 5 days AND Metronidazole 200mg TDS for 3 days',
    explanation: 'Erythromycin replaces Amoxicillin in penicillin-allergic patients. Metronidazole remains unchanged.',
    options: [
      'Amoxicillin 500mg TDS for 5 days + Metronidazole 200mg TDS for 3 days',
      'Erythromycin 250mg QDS for 5 days + Metronidazole 200mg TDS for 3 days',
      'Doxycycline 100mg OD for 21 days',
      'Flucloxacillin 500mg QDS for 7 days'
    ],
    correctOptionIndex: 1,
    keywords: ['erythromycin', 'penicillin allergy', 'dental abscess', 'metronidazole'],
    difficulty: 'medium'
  },
  {
    id: 'q51-019',
    contentId: 'c51-05',
    topic: 'prescribing',
    subtopic: 'Dental Infections',
    type: 'fill-blank',
    question: 'The antibiotic regimen for ANUG is _____ 200mg TDS for 3 days.',
    answer: 'Metronidazole',
    fullText: 'The antibiotic regimen for ANUG is Metronidazole 200mg TDS for 3 days.',
    blankWord: 'Metronidazole',
    keywords: ['ANUG', 'metronidazole', '200mg', 'TDS'],
    difficulty: 'easy'
  },
  {
    id: 'q51-020',
    contentId: 'c51-05',
    topic: 'prescribing',
    subtopic: 'Dental Infections',
    type: 'mcq',
    question: 'What is the antibiotic regimen for aggressive periodontal disease?',
    answer: 'Doxycycline 100mg OD for 21 days (not children) OR Metronidazole 200mg TDS for 7-10 days',
    explanation: 'Doxycycline is contraindicated in children. Metronidazole is an alternative for all patients.',
    options: [
      'Amoxicillin 500mg TDS for 5 days',
      'Doxycycline 100mg OD for 21 days OR Metronidazole 200mg TDS for 7-10 days',
      'Erythromycin 250mg QDS for 7 days',
      'Flucloxacillin 500mg QDS for 5 days'
    ],
    correctOptionIndex: 1,
    keywords: ['aggressive perio', 'doxycycline', 'metronidazole', '21 days'],
    difficulty: 'medium'
  },
  // === c51-06: Prescriptions – Fungal and Viral ===
  {
    id: 'q51-022',
    contentId: 'c51-06',
    topic: 'prescribing',
    subtopic: 'Fungal and Viral Infections',
    type: 'flashcard',
    question: 'What are the intraoral treatment options for oral candidiasis?',
    answer: 'Miconazole gel, Nystatin suspension, or Amphotericin lozenges. For extraoral: Miconazole gel/cream or Nystatin cream.',
    keywords: ['candida', 'miconazole', 'nystatin', 'amphotericin', 'intraoral'],
    difficulty: 'medium'
  },
  {
    id: 'q51-023',
    contentId: 'c51-06',
    topic: 'prescribing',
    subtopic: 'Fungal and Viral Infections',
    type: 'mcq',
    question: 'What is the treatment for herpes labialis?',
    answer: 'Topical aciclovir or penciclovir in the prodromal phase',
    explanation: 'Must be applied during prodromal phase (tingling). Systemic aciclovir is for shingles.',
    options: [
      'High dose systemic aciclovir',
      'Topical aciclovir or penciclovir in the prodromal phase',
      'Miconazole gel',
      'Fusidic acid cream'
    ],
    correctOptionIndex: 1,
    keywords: ['herpes labialis', 'aciclovir', 'penciclovir', 'prodromal'],
    difficulty: 'easy'
  },
  {
    id: 'q51-024',
    contentId: 'c51-06',
    topic: 'prescribing',
    subtopic: 'Fungal and Viral Infections',
    type: 'fill-blank',
    question: 'Shingles is treated with high dose systemic _____.',
    answer: 'aciclovir',
    fullText: 'Shingles is treated with high dose systemic aciclovir.',
    blankWord: 'aciclovir',
    keywords: ['shingles', 'aciclovir', 'systemic'],
    difficulty: 'easy'
  },
  {
    id: 'q51-025',
    contentId: 'c51-06',
    topic: 'prescribing',
    subtopic: 'Fungal and Viral Infections',
    type: 'mcq',
    question: 'What is the treatment for oral Staph Aureus infection?',
    answer: 'Fusidic Acid cream',
    explanation: 'Fusidic acid targets Staph Aureus. Mixed candida + staph or unknown = Miconazole gel.',
    options: ['Miconazole gel', 'Nystatin suspension', 'Fusidic Acid cream', 'Amphotericin lozenges'],
    correctOptionIndex: 2,
    keywords: ['Staph Aureus', 'fusidic acid', 'cream'],
    difficulty: 'medium'
  },

  // === c51-07: Prescriptions – Mucosal Conditions ===
  {
    id: 'q51-026',
    contentId: 'c51-07',
    topic: 'prescribing',
    subtopic: 'Mucosal Conditions',
    type: 'flashcard',
    question: 'What medications are used for mild Lichen Planus?',
    answer: 'Chlorhexidine gluconate 0.2% mouthwash (Corsodyl), benzydamine hydrochloride 0.15% spray (Difflam), and hydrocortisone sodium succinate 2.5mg (Corlan pellets).',
    keywords: ['lichen planus', 'mild', 'Corsodyl', 'Difflam', 'Corlan pellets'],
    difficulty: 'hard'
  },
  {
    id: 'q51-027',
    contentId: 'c51-07',
    topic: 'prescribing',
    subtopic: 'Mucosal Conditions',
    type: 'mcq',
    question: 'Which treatment escalation is correct for Lichen Planus severity?',
    answer: 'Mild: Corsodyl/Difflam/Corlan pellets; Moderate: topical steroids (Betnesol); Severe: systemic prednisolone/Azathioprine',
    explanation: 'Escalates from symptomatic relief to topical steroids to systemic immunosuppressants.',
    options: [
      'Mild: systemic steroids; Moderate: topical steroids; Severe: mouthwash only',
      'Mild: Corsodyl/Difflam/Corlan pellets; Moderate: topical steroids (Betnesol); Severe: systemic prednisolone/Azathioprine',
      'Mild: Azathioprine; Moderate: Betnesol; Severe: Corsodyl',
      'Mild: Dapsone; Moderate: Cyclophosphamide; Severe: Pilocarpine'
    ],
    correctOptionIndex: 1,
    keywords: ['lichen planus', 'treatment escalation', 'Betnesol', 'prednisolone'],
    difficulty: 'hard'
  },
  {
    id: 'q51-028',
    contentId: 'c51-07',
    topic: 'prescribing',
    subtopic: 'Mucosal Conditions',
    type: 'free-text',
    question: 'What is the treatment for Pemphigus Vulgaris?',
    answer: 'Systemic steroids +/- steroid sparing agent e.g. Azathioprine. Topically use mouthwash with steroid/analgesic/antiseptic/antimicrobial, and improve oral hygiene.',
    acceptableAnswers: [
      'Systemic steroids and Azathioprine, topical steroid mouthwash, improve OH',
      'Systemic steroids plus or minus steroid sparing agent like Azathioprine'
    ],
    keywords: ['pemphigus vulgaris', 'systemic steroids', 'Azathioprine', 'steroid sparing'],
    difficulty: 'hard'
  },
  {
    id: 'q51-029',
    contentId: 'c51-07',
    topic: 'prescribing',
    subtopic: 'Mucosal Conditions',
    type: 'mcq',
    question: 'What is the treatment for Mucous Membrane Pemphigoid with systemic disease involvement?',
    answer: 'Systemic steroids, Dapsone, Azathioprine, Cyclophosphamide',
    explanation: 'Oral-only MMP = topical steroids/analgesics. Systemic MMP requires aggressive immunosuppression.',
    options: [
      'Topical steroids and analgesics only',
      'Improve oral hygiene only',
      'Systemic steroids, Dapsone, Azathioprine, Cyclophosphamide',
      'Chlorhexidine mouthwash and Difflam spray'
    ],
    correctOptionIndex: 2,
    keywords: ['MMP', 'pemphigoid', 'systemic', 'Dapsone', 'Cyclophosphamide'],
    difficulty: 'hard'
  },
  // === c51-08: Other Prescriptions ===
  {
    id: 'q51-031',
    contentId: 'c51-08',
    topic: 'prescribing',
    subtopic: 'Other Conditions',
    type: 'flashcard',
    question: 'What is the treatment for Dermatitis Herpetiformis?',
    answer: 'Gluten-free diet and systemic Dapsone.',
    keywords: ['dermatitis herpetiformis', 'gluten-free', 'Dapsone'],
    difficulty: 'medium'
  },
  {
    id: 'q51-032',
    contentId: 'c51-08',
    topic: 'prescribing',
    subtopic: 'Other Conditions',
    type: 'mcq',
    question: 'What systemic medication is used for dry mouth?',
    answer: 'Pilocarpine',
    explanation: 'Topical: Saliva Orthana, Biotene, BioXtra, Salivix. Systemic: Pilocarpine (parasympathomimetic).',
    options: ['Dapsone', 'Azathioprine', 'Pilocarpine', 'Flucloxacillin'],
    correctOptionIndex: 2,
    keywords: ['dry mouth', 'pilocarpine', 'systemic', 'xerostomia'],
    difficulty: 'easy'
  },
  {
    id: 'q51-033',
    contentId: 'c51-08',
    topic: 'prescribing',
    subtopic: 'Other Conditions',
    type: 'free-text',
    question: 'Name three topical products used for dry mouth management.',
    answer: 'Saliva Orthana (artificial saliva), Biotene OralBalance Gel, BioXtra Oral Gel, Salivix pastilles (salivary stimulators).',
    acceptableAnswers: [
      'Saliva Orthana, Biotene, BioXtra',
      'Saliva Orthana, Biotene OralBalance Gel, Salivix pastilles'
    ],
    keywords: ['Saliva Orthana', 'Biotene', 'BioXtra', 'Salivix', 'dry mouth topical'],
    difficulty: 'medium'
  },
  {
    id: 'q51-034',
    contentId: 'c51-08',
    topic: 'prescribing',
    subtopic: 'Other Conditions',
    type: 'fill-blank',
    question: 'Linear IgA disease is treated with systemic _____.',
    answer: 'Dapsone',
    fullText: 'Linear IgA disease is treated with systemic Dapsone.',
    blankWord: 'Dapsone',
    keywords: ['linear IgA', 'Dapsone', 'systemic'],
    difficulty: 'medium'
  }
];
