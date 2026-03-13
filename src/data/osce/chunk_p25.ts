import { ContentItem, Question } from './types';

// =============================================================================
// Pages 25-26: Periodontics (BPE/LOA continued), Assessing X-rays for XLA/MOS,
//              Extraction case examples, Options for Failed Endo
// =============================================================================

export const content_p25: ContentItem[] = [
  // ── Page 25: Periodontal Classification & BPE Exam Tips ──────────────────
  {
    id: 'c25-01',
    topic: 'periodontics',
    subtopic: 'Periodontal Classification & BPE',
    title: 'Periodontal Classification Severity & Distribution',
    text: 'May have a picture of BPE probe in pocket. Example: LOA chart shows 67 year old patient with lower teeth and pockets. What tooth has poorest prognosis? One with mobility and large pockets. What would you put on prescription to hygienist: OHI, smoking cessation, RSI, removal of plaque retentive factors, review compliance, S&P, tell them the max dose of LA – half as he is over 65. Mild: clinical attachment loss 1-2mm. Moderate: clinical attachment loss 3-4mm. Severe: clinical attachment loss 5mm+. Localised: less than 30% sites affected. Generalised: more than 30% sites affected. Bone levels 2mm apically from CEJ.',
    keyPoints: [
      'Mild periodontitis: clinical attachment loss 1-2mm',
      'Moderate periodontitis: clinical attachment loss 3-4mm',
      'Severe periodontitis: clinical attachment loss 5mm+',
      'Localised: less than 30% of sites affected',
      'Generalised: more than 30% of sites affected',
      'Bone levels measured 2mm apically from CEJ',
      'Tooth with worst prognosis = mobility + large pockets',
      'Hygienist prescription: OHI, smoking cessation, RSI, remove plaque retentive factors, review compliance, S&P',
      'Max dose of LA halved for patients over 65'
    ],
    keywords: ['BPE', 'periodontitis', 'attachment loss', 'mild', 'moderate', 'severe', 'localised', 'generalised', 'CEJ', 'hygienist prescription'],
    pageRef: 25
  },

  // ── Page 25: Assessing X-rays for XLA/MOS ────────────────────────────────
  {
    id: 'c25-02',
    topic: 'oral-surgery',
    subtopic: 'Assessing X-rays for XLA/MOS',
    title: 'Assessing X-rays for Extraction or Surgical Removal',
    text: 'Four-step assessment: 1) ASSESS ACCESS – if you can\'t see it don\'t try to extract. Good visibility crucial. Patients with severe trismus are problematic. Opening reduced by 50% may contra-indicate extraction. 2) ASSESS TOOTH STRUCTURE – tooth needs structural integrity to allow you to apply pressure with forceps. Enough crown left = ROUTINE EXTRACTION with forceps. Subgingival caries – crown MAY crush but if using narrow forceps should avoid problem – take past caries to sound tissue. LOT OF APICAL PRESSURE. If they\'re just roots and are carious below gingival margin/subcrestal – will probably require surgical extraction – no access to root to apply an instrument. Heavily restored teeth do NOT have same structural integrity as sound teeth. 3) ASSESS RADIOGRAPH – root pattern, root number, bone support, bone density, PDL. 4) ASSESS SURROUNDING STRUCTURES – consider teeth adjacent and surrounding anatomy.',
    keyPoints: [
      'Step 1: Assess ACCESS – good visibility crucial, severe trismus problematic',
      'Opening reduced by 50% may contra-indicate extraction',
      'Step 2: Assess TOOTH STRUCTURE – needs structural integrity for forceps pressure',
      'Enough crown remaining = routine extraction with forceps',
      'Subgingival caries: crown may crush; use narrow forceps, apply LOT OF APICAL PRESSURE',
      'Roots carious below gingival margin/subcrestal = surgical extraction needed',
      'Heavily restored teeth lack structural integrity of sound teeth',
      'Step 3: Assess RADIOGRAPH – root pattern, root number, bone support, bone density, PDL',
      'Step 4: Assess SURROUNDING STRUCTURES – adjacent teeth and anatomy'
    ],
    keywords: ['XLA', 'MOS', 'extraction assessment', 'access', 'tooth structure', 'surgical extraction', 'trismus', 'forceps', 'apical pressure'],
    pageRef: 25
  },
  {
    id: 'c25-03',
    topic: 'oral-surgery',
    subtopic: 'Radiograph Assessment for Extraction',
    title: 'Radiograph Assessment: Root Pattern, Bone Support & Density',
    text: 'Root pattern – complex root patterns (convergent/divergent/eccentric) all increase difficulty. Require surgical extraction. Very long roots also difficult. Root number – multiple roots = difficulty. Three roots in a lower molar significantly increases difficulty and may lead to surgical extraction. Bone support – reduced bone support beneficial = reduced force necessary. Bone density – denser bone = more difficult. Bone denser and harder in older men. Trabeculation important – many trabeculae close together indicates a lot of bone holding root in place. Wide open trabeculae more favourable for extraction. Thick trabeculae less favourable. Quality of bone important – rigid bones problematic. Patients on BISPHOSPHONATES will show increased bone density and rigidity. PDL – visible PDL helpful. Loss of PDL may indicate ankylosis or fusion of bone & cementum.',
    keyPoints: [
      'Complex root patterns (convergent/divergent/eccentric) increase extraction difficulty',
      'Very long roots are also difficult to extract',
      'Three roots in a lower molar significantly increases difficulty',
      'Reduced bone support = reduced force needed (beneficial)',
      'Denser bone = more difficult extraction; bone denser in older men',
      'Many trabeculae close together = more bone holding root (unfavourable)',
      'Wide open trabeculae = more favourable for extraction',
      'Bisphosphonate patients show increased bone density and rigidity',
      'Visible PDL on radiograph is helpful',
      'Loss of PDL may indicate ankylosis or bone-cementum fusion'
    ],
    keywords: ['root pattern', 'convergent', 'divergent', 'eccentric', 'bone density', 'trabeculation', 'bisphosphonates', 'PDL', 'ankylosis'],
    imageUrl: '/images/osce/page25_img01.jpeg',
    imageAlt: 'Lower first molar radiograph showing convergent roots and heavy restoration – difficult extraction requiring surgery',
    pageRef: 25
  },
  {
    id: 'c25-04',
    topic: 'oral-surgery',
    subtopic: 'Surrounding Structures Assessment',
    title: 'Assessing Surrounding Structures Before Extraction',
    text: 'Consider teeth adjacent and surrounding anatomy. Upper arch – concerned with maxillary sinus and maxillary tuberosity. If you can see the PDL around the tooth it lessens the risk. Lower arch concerned with mental foramen & nerve, lingual nerve, ID nerve and mandible itself. Adjacent teeth may be at risk of mobilisation, displacement, fracture or loss of restoration.',
    keyPoints: [
      'Upper arch: concern with maxillary sinus and maxillary tuberosity',
      'Visible PDL around the tooth lessens risk of sinus complications',
      'Lower arch: concern with mental foramen & nerve, lingual nerve, ID nerve, mandible',
      'Adjacent teeth at risk of mobilisation, displacement, fracture, or loss of restoration'
    ],
    keywords: ['surrounding structures', 'maxillary sinus', 'maxillary tuberosity', 'mental foramen', 'ID nerve', 'lingual nerve', 'adjacent teeth'],
    pageRef: 25
  },
  {
    id: 'c25-05',
    topic: 'oral-surgery',
    subtopic: 'Extraction Examples',
    title: 'Extraction Example: Lower First Molar Difficult Case',
    text: 'Lower first molar example: Crown is likely to be lost. Roots are convergent – unfavourable. Apical changes – possibly helpful. Very heavily restored and root filled – very unfavourable; high risk of fracture. Large adjacent restorations – significant risk of displacement. Difficult extraction – NEED SURGERY.',
    keyPoints: [
      'Crown likely to be lost = cannot grip with forceps',
      'Convergent roots = unfavourable for extraction',
      'Apical changes (radiolucency) may be helpful – weakened bone around apex',
      'Heavily restored and root-filled = very unfavourable, high fracture risk',
      'Large adjacent restorations = significant risk of displacement',
      'Conclusion: difficult extraction requiring surgical approach'
    ],
    keywords: ['lower first molar', 'convergent roots', 'root filled', 'fracture risk', 'surgical extraction'],
    imageUrl: '/images/osce/page25_img01.jpeg',
    imageAlt: 'Radiograph of lower first molar with convergent roots, heavy restoration and root filling requiring surgical extraction',
    pageRef: 25
  },

  // ── Page 26: OPG example with third and second molar problems ────────────
  {
    id: 'c25-06',
    topic: 'oral-surgery',
    subtopic: 'Extraction Examples',
    title: 'OPG Example: Lower Left Third & Second Molars',
    text: 'Problems with lower left third & second molars. Extraction of second molar is probably treatment of choice. Retention of second molar is poor as prognosis is poor, and third molar is in a very poor position.',
    keyPoints: [
      'Lower left third and second molars both problematic on OPG',
      'Extraction of second molar is probably treatment of choice',
      'Retention of second molar not advisable – poor prognosis',
      'Third molar in very poor position'
    ],
    keywords: ['OPG', 'third molar', 'second molar', 'extraction', 'prognosis'],
    imageUrl: '/images/osce/page26_img01.jpeg',
    imageAlt: 'OPG showing lower left third and second molars with poor prognosis',
    pageRef: 26
  },

  // ── Page 26: Case 1 – Extraction Assessment ──────────────────────────────
  {
    id: 'c25-07',
    topic: 'oral-surgery',
    subtopic: 'Extraction Case Assessment',
    title: 'Case 1: Lower Second Premolar Extraction in Ischaemic Heart Disease Patient',
    text: 'Lower second premolar requires extraction. Patient is 65 years of age with ischaemic heart disease. Factors to consider: STATE OF TOOTH – not much caries, restoration at cervical margin may make fracture more likely, brittle as it is non-vital. SUPPORT OF TOOTH – about 30% bone loss and significant mid-root radiolucency; this is favourable. ROOT PATTERN – simple straight root. ADJACENT STRUCTURES – none to be worried about, perhaps take care with 1st premolar. GENERAL HEALTH – ischaemic heart disease, maybe check/modify warfarinisation. METHOD OF ANAESTHESIA – older patient with ischaemic heart disease, limit dose to 150mg maximum.',
    keyPoints: [
      'Non-vital tooth – brittle, restoration at cervical margin increases fracture risk',
      '30% bone loss + mid-root radiolucency = favourable for extraction (less force needed)',
      'Simple straight root = favourable root pattern',
      'Adjacent structures: take care with 1st premolar',
      'Ischaemic heart disease: check/modify warfarinisation',
      'LA dose limited to 150mg maximum for older patient with ischaemic heart disease'
    ],
    keywords: ['extraction assessment', 'ischaemic heart disease', 'non-vital', 'bone loss', 'warfarin', 'LA dose', '150mg'],
    imageUrl: '/images/osce/page26_img02.jpeg',
    imageAlt: 'Radiographs of lower second premolar case with ischaemic heart disease patient showing bone loss and radiolucency',
    pageRef: 26
  },

  // ── Page 26: Options for Failed Endo ──────────────────────────────────────
  {
    id: 'c25-08',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    title: 'Reasons for Endodontic Failure',
    text: 'Reasons for failure: Insufficient apical obturation. Insufficient coronal obturation. Insufficient disinfection of root canal. Specific microbial infection (e.g. E. faecalis). Iatrogenic damage. Success rates for re-endo vary: Re-RCT with AP (apical periodontitis) = 62%. GDP re-endo = 77% success rate. Specialist re-endo = 86% success rate.',
    keyPoints: [
      'Insufficient apical obturation causes endo failure',
      'Insufficient coronal obturation causes endo failure',
      'Insufficient disinfection of root canal causes endo failure',
      'Specific microbial infection (E. faecalis) causes endo failure',
      'Iatrogenic damage causes endo failure',
      'Re-RCT with apical periodontitis: 62% success',
      'GDP re-endo: 77% success rate',
      'Specialist re-endo: 86% success rate'
    ],
    keywords: ['failed endo', 'obturation', 'E. faecalis', 'iatrogenic', 'success rate', 're-endo', 'apical periodontitis'],
    pageRef: 26
  },
  {
    id: 'c25-09',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    title: 'Four Treatment Options for Failed Endodontics',
    text: 'Example: PA of UL2 with MCC, periapical radiolucency, already root filled, severe bone loss. Four treatment options: 1) XLA – have tooth extracted, will leave space and loss of function/aesthetics (see replacing missing tooth station). More likely to fracture during extraction due to being brittle from root filling. Normal risks of extractions – pain/swelling/bruising/bleeding/dry socket. However will completely remove pain and infection. 2) RE-ENDO – gives another chance to save natural tooth, no need to fill space. Risk that infection will remain leading to pain/discomfort and inevitable extraction anyway. 3) APICECTOMY – endo surgery, top of root removed and filling placed to seal end of root. Requires incision in gum and maybe some removal of bone. Post-op swelling/bruising/pain/bleeding. May not work leading to XLA. Posterior maxillary tooth = risk of OAC. Posterior mandibular tooth = risk of paresthesia from IDB nerve. 4) DO NOTHING – pain/infection could spread/become worse.',
    keyPoints: [
      'XLA: removes pain/infection but leaves space; root-filled teeth brittle so higher fracture risk during extraction',
      'Re-endo: saves natural tooth, no space to fill; infection may remain',
      'Apicectomy: root end removed and sealed; risks include OAC (maxillary) or IDB nerve paresthesia (mandibular)',
      'Do nothing: pain/infection may spread or worsen',
      'Root-filled teeth are brittle – increased fracture risk during extraction',
      'Normal extraction risks: pain, swelling, bruising, bleeding, dry socket'
    ],
    keywords: ['failed endo', 'XLA', 're-endo', 'apicectomy', 'do nothing', 'OAC', 'IDB nerve', 'paresthesia', 'brittle'],
    pageRef: 26
  },
];

// =============================================================================
// Questions
// =============================================================================

export const questions_p25: Question[] = [
  // ── c25-01: Periodontal Classification ────────────────────────────────────
  {
    id: 'q25-001',
    contentId: 'c25-01',
    topic: 'periodontics',
    subtopic: 'Periodontal Classification & BPE',
    type: 'mcq',
    question: 'What clinical attachment loss defines SEVERE periodontitis?',
    answer: '5mm or more',
    explanation: 'Mild = 1-2mm, Moderate = 3-4mm, Severe = 5mm+.',
    options: ['1-2mm', '3-4mm', '5mm+', '7mm+'],
    correctOptionIndex: 2,
    keywords: ['periodontitis', 'severe', 'attachment loss', '5mm'],
    difficulty: 'easy'
  },
  {
    id: 'q25-002',
    contentId: 'c25-01',
    topic: 'periodontics',
    subtopic: 'Periodontal Classification & BPE',
    type: 'fill-blank',
    question: 'Periodontitis is classified as generalised when more than ___% of sites are affected.',
    answer: '30',
    fullText: 'Periodontitis is classified as generalised when more than 30% of sites are affected.',
    blankWord: '30',
    keywords: ['generalised', 'periodontitis', '30%'],
    difficulty: 'easy'
  },
  {
    id: 'q25-003',
    contentId: 'c25-01',
    topic: 'periodontics',
    subtopic: 'Periodontal Classification & BPE',
    type: 'free-text',
    question: 'What items should you include on a prescription/referral to a hygienist for a periodontal patient?',
    answer: 'OHI, smoking cessation, RSI, removal of plaque retentive factors, review compliance, S&P, and max dose of LA (halved if over 65)',
    acceptableAnswers: [
      'OHI, smoking cessation, RSI, removal of plaque retentive factors, review compliance, S&P',
      'oral hygiene instruction, smoking cessation, removal of plaque retentive factors, scale and polish',
      'OHI smoking cessation RSI remove plaque retentive factors compliance S&P LA dose'
    ],
    keywords: ['hygienist', 'prescription', 'OHI', 'smoking cessation', 'RSI', 'S&P'],
    difficulty: 'medium'
  },
  {
    id: 'q25-004',
    contentId: 'c25-01',
    topic: 'periodontics',
    subtopic: 'Periodontal Classification & BPE',
    type: 'flashcard',
    question: 'Where are bone levels measured from on a radiograph in periodontitis assessment?',
    answer: '2mm apically from the CEJ (cemento-enamel junction)',
    keywords: ['bone levels', 'CEJ', '2mm', 'periodontitis'],
    difficulty: 'easy'
  },
  {
    id: 'q25-005',
    contentId: 'c25-01',
    topic: 'periodontics',
    subtopic: 'Periodontal Classification & BPE',
    type: 'mcq',
    question: 'Clinical attachment loss of 3-4mm classifies periodontitis as:',
    answer: 'Moderate',
    options: ['Mild', 'Moderate', 'Severe', 'Advanced'],
    correctOptionIndex: 1,
    keywords: ['moderate', 'periodontitis', 'attachment loss', '3-4mm'],
    difficulty: 'easy'
  },

  // ── c25-02: Assessing X-rays for XLA/MOS ─────────────────────────────────
  {
    id: 'q25-006',
    contentId: 'c25-02',
    topic: 'oral-surgery',
    subtopic: 'Assessing X-rays for XLA/MOS',
    type: 'free-text',
    question: 'List the four steps for assessing an X-ray before extraction (XLA/MOS).',
    answer: '1) Assess Access, 2) Assess Tooth Structure, 3) Assess Radiograph, 4) Assess Surrounding Structures',
    acceptableAnswers: [
      'access, tooth structure, radiograph, surrounding structures',
      'assess access, assess tooth structure, assess radiograph, assess surrounding structures',
      'access tooth structure radiograph surrounding structures'
    ],
    keywords: ['XLA', 'assessment', 'access', 'tooth structure', 'radiograph', 'surrounding structures'],
    difficulty: 'medium'
  },
  {
    id: 'q25-007',
    contentId: 'c25-02',
    topic: 'oral-surgery',
    subtopic: 'Assessing X-rays for XLA/MOS',
    type: 'flashcard',
    question: 'When assessing tooth structure for extraction, what finding below the gingival margin/subcrestal level indicates surgical extraction is likely needed?',
    answer: 'Roots that are carious below the gingival margin/subcrestal level – no access to apply an instrument to the root, so surgical extraction is required.',
    keywords: ['surgical extraction', 'subcrestal', 'carious roots', 'gingival margin'],
    difficulty: 'medium'
  },
  {
    id: 'q25-008',
    contentId: 'c25-02',
    topic: 'oral-surgery',
    subtopic: 'Assessing X-rays for XLA/MOS',
    type: 'mcq',
    question: 'What percentage reduction in mouth opening may contra-indicate extraction?',
    answer: '50%',
    explanation: 'If mouth opening is reduced by 50%, extraction may be contra-indicated because of inadequate access and visibility.',
    options: ['25%', '50%', '75%', '90%'],
    correctOptionIndex: 1,
    keywords: ['trismus', 'mouth opening', 'contra-indicate', '50%'],
    difficulty: 'medium'
  },
  {
    id: 'q25-009',
    contentId: 'c25-02',
    topic: 'oral-surgery',
    subtopic: 'Assessing X-rays for XLA/MOS',
    type: 'fill-blank',
    question: 'For subgingival caries with enough crown, use narrow forceps and apply a lot of ___ pressure.',
    answer: 'apical',
    fullText: 'For subgingival caries with enough crown, use narrow forceps and apply a lot of apical pressure.',
    blankWord: 'apical',
    keywords: ['apical pressure', 'narrow forceps', 'subgingival caries'],
    difficulty: 'easy'
  },

  // ── c25-03: Radiograph Assessment ─────────────────────────────────────────
  {
    id: 'q25-010',
    contentId: 'c25-03',
    topic: 'oral-surgery',
    subtopic: 'Radiograph Assessment for Extraction',
    type: 'mcq',
    question: 'Which trabeculation pattern is MORE favourable for extraction?',
    answer: 'Wide open trabeculae',
    explanation: 'Wide open trabeculae are more favourable. Many trabeculae close together (thick trabeculation) means more bone holding the root in place, making extraction harder.',
    options: ['Thick trabeculae close together', 'Wide open trabeculae', 'Dense cortical bone', 'No visible trabeculae'],
    correctOptionIndex: 1,
    keywords: ['trabeculation', 'bone density', 'extraction difficulty'],
    difficulty: 'medium'
  },
  {
    id: 'q25-011',
    contentId: 'c25-03',
    topic: 'oral-surgery',
    subtopic: 'Radiograph Assessment for Extraction',
    type: 'flashcard',
    question: 'What does loss of PDL space on a radiograph indicate and why does it matter for extraction?',
    answer: 'Loss of PDL may indicate ankylosis or fusion of bone and cementum. This makes extraction significantly more difficult as there is no periodontal ligament space to expand.',
    keywords: ['PDL', 'ankylosis', 'cementum', 'extraction difficulty'],
    difficulty: 'medium'
  },
  {
    id: 'q25-012',
    contentId: 'c25-03',
    topic: 'oral-surgery',
    subtopic: 'Radiograph Assessment for Extraction',
    type: 'free-text',
    question: 'Why do patients on bisphosphonates present increased difficulty for extraction?',
    answer: 'Bisphosphonates increase bone density and rigidity, making extraction more difficult. There is also the risk of BRONJ (bisphosphonate-related osteonecrosis of the jaw).',
    acceptableAnswers: [
      'increased bone density and rigidity',
      'bisphosphonates increase bone density making extraction harder',
      'denser more rigid bone, risk of BRONJ'
    ],
    keywords: ['bisphosphonates', 'bone density', 'rigidity', 'BRONJ'],
    difficulty: 'medium'
  },
  {
    id: 'q25-013',
    contentId: 'c25-03',
    topic: 'oral-surgery',
    subtopic: 'Radiograph Assessment for Extraction',
    type: 'fill-blank',
    question: 'Three roots in a lower molar significantly increases difficulty and may lead to ___ extraction.',
    answer: 'surgical',
    fullText: 'Three roots in a lower molar significantly increases difficulty and may lead to surgical extraction.',
    blankWord: 'surgical',
    keywords: ['three roots', 'lower molar', 'surgical extraction'],
    difficulty: 'easy'
  },

  // ── c25-04: Surrounding Structures ────────────────────────────────────────
  {
    id: 'q25-014',
    contentId: 'c25-04',
    topic: 'oral-surgery',
    subtopic: 'Surrounding Structures Assessment',
    type: 'mcq',
    question: 'Which structures are you primarily concerned about when extracting an UPPER tooth?',
    answer: 'Maxillary sinus and maxillary tuberosity',
    options: ['Mental foramen and ID nerve', 'Maxillary sinus and maxillary tuberosity', 'Lingual nerve and sublingual gland', 'Carotid artery and jugular vein'],
    correctOptionIndex: 1,
    keywords: ['upper arch', 'maxillary sinus', 'maxillary tuberosity'],
    difficulty: 'easy'
  },
  {
    id: 'q25-015',
    contentId: 'c25-04',
    topic: 'oral-surgery',
    subtopic: 'Surrounding Structures Assessment',
    type: 'free-text',
    question: 'What structures are at risk when extracting lower teeth?',
    answer: 'Mental foramen & nerve, lingual nerve, inferior dental (ID) nerve, and the mandible itself. Adjacent teeth may be at risk of mobilisation, displacement, fracture, or loss of restoration.',
    acceptableAnswers: [
      'mental foramen, lingual nerve, ID nerve, mandible',
      'mental nerve, lingual nerve, inferior dental nerve',
      'mental foramen lingual nerve ID nerve mandible adjacent teeth'
    ],
    keywords: ['lower arch', 'mental foramen', 'lingual nerve', 'ID nerve', 'mandible'],
    difficulty: 'medium'
  },
  {
    id: 'q25-016',
    contentId: 'c25-04',
    topic: 'oral-surgery',
    subtopic: 'Surrounding Structures Assessment',
    type: 'flashcard',
    question: 'What radiographic sign around an upper tooth lessens the risk of maxillary sinus complications during extraction?',
    answer: 'If you can see the PDL (periodontal ligament) around the tooth on the radiograph, it lessens the risk of creating an oro-antral communication.',
    keywords: ['PDL', 'maxillary sinus', 'OAC', 'radiograph'],
    difficulty: 'medium'
  },

  // ── c25-05: Lower First Molar Difficult Example ──────────────────────────
  {
    id: 'q25-017',
    contentId: 'c25-05',
    topic: 'oral-surgery',
    subtopic: 'Extraction Examples',
    type: 'free-text',
    question: 'A lower first molar has convergent roots, is heavily restored and root filled, with crown likely to be lost and large adjacent restorations. List the unfavourable factors and the conclusion.',
    answer: 'Unfavourable factors: crown likely to be lost (no grip for forceps), convergent roots (unfavourable), heavily restored and root filled (high fracture risk, very unfavourable), large adjacent restorations (significant risk of displacement). Conclusion: difficult extraction – NEED SURGERY.',
    acceptableAnswers: [
      'convergent roots, heavily restored, root filled, crown loss, adjacent restorations, needs surgery',
      'crown loss convergent roots root filled fracture risk adjacent restorations surgical extraction'
    ],
    keywords: ['convergent roots', 'root filled', 'fracture risk', 'surgical extraction', 'displacement'],
    difficulty: 'hard'
  },
  {
    id: 'q25-018',
    contentId: 'c25-05',
    topic: 'oral-surgery',
    subtopic: 'Extraction Examples',
    type: 'mcq',
    question: 'Why might apical changes (radiolucency) be HELPFUL when extracting a tooth?',
    answer: 'Bone around the apex is weakened/resorbed, requiring less force for extraction',
    explanation: 'Apical pathology means bone resorption around the apex, which means less bone holding the root tip – potentially making extraction slightly easier.',
    options: [
      'It indicates the tooth is vital and healthy',
      'Bone around the apex is weakened/resorbed, requiring less force for extraction',
      'It means the roots are divergent',
      'It confirms the tooth has a simple root pattern'
    ],
    correctOptionIndex: 1,
    keywords: ['apical changes', 'radiolucency', 'bone resorption', 'extraction'],
    difficulty: 'medium'
  },

  // ── c25-06: OPG Third/Second Molar ────────────────────────────────────────
  {
    id: 'q25-019',
    contentId: 'c25-06',
    topic: 'oral-surgery',
    subtopic: 'Extraction Examples',
    type: 'flashcard',
    question: 'On an OPG showing problems with the lower left third and second molars, what is the likely treatment of choice?',
    answer: 'Extraction of the second molar. Retention of the second molar is poor as prognosis is poor, and the third molar is in a very poor position.',
    imageUrl: '/images/osce/page26_img01.jpeg',
    imageAlt: 'OPG showing lower left third and second molars with poor prognosis',
    keywords: ['OPG', 'second molar extraction', 'third molar', 'poor prognosis'],
    difficulty: 'medium'
  },
  {
    id: 'q25-020',
    contentId: 'c25-06',
    topic: 'oral-surgery',
    subtopic: 'Extraction Examples',
    type: 'mcq',
    question: 'When both the lower left second and third molars are problematic, which tooth is typically extracted?',
    answer: 'Second molar',
    explanation: 'Extraction of the second molar is probably treatment of choice as its retention prognosis is poor, and the third molar is in a very poor position.',
    options: ['Third molar only', 'Second molar', 'Both teeth', 'Neither – monitor only'],
    correctOptionIndex: 1,
    keywords: ['second molar', 'third molar', 'extraction choice'],
    difficulty: 'medium'
  },

  // ── c25-07: Case 1 – Premolar Extraction ──────────────────────────────────
  {
    id: 'q25-021',
    contentId: 'c25-07',
    topic: 'oral-surgery',
    subtopic: 'Extraction Case Assessment',
    type: 'free-text',
    question: 'A 65-year-old patient with ischaemic heart disease requires extraction of a lower second premolar. What is the maximum LA dose?',
    answer: '150mg maximum. As an older patient with ischaemic heart disease, the LA dose must be limited.',
    acceptableAnswers: ['150mg', '150 mg', '150mg maximum', '150 mg maximum'],
    keywords: ['LA dose', '150mg', 'ischaemic heart disease', 'older patient'],
    difficulty: 'hard'
  },
  {
    id: 'q25-022',
    contentId: 'c25-07',
    topic: 'oral-surgery',
    subtopic: 'Extraction Case Assessment',
    type: 'mcq',
    question: 'In a patient with ischaemic heart disease needing an extraction, what medication consideration is important?',
    answer: 'Check and possibly modify warfarinisation',
    explanation: 'Ischaemic heart disease patients may be on warfarin or other anticoagulants. You should check and possibly modify warfarinisation before extraction.',
    options: [
      'Start the patient on bisphosphonates',
      'Check and possibly modify warfarinisation',
      'Prescribe prophylactic steroids',
      'Switch to general anaesthesia'
    ],
    correctOptionIndex: 1,
    keywords: ['ischaemic heart disease', 'warfarin', 'anticoagulant', 'extraction'],
    difficulty: 'medium'
  },
  {
    id: 'q25-023',
    contentId: 'c25-07',
    topic: 'oral-surgery',
    subtopic: 'Extraction Case Assessment',
    type: 'flashcard',
    question: 'In Case 1 (lower second premolar, 65yo with IHD), list the favourable and unfavourable factors.',
    answer: 'Favourable: about 30% bone loss with mid-root radiolucency (less force needed), simple straight root, no concerning adjacent structures. Unfavourable: non-vital and brittle, cervical margin restoration increases fracture risk. General health: IHD – check warfarin, limit LA to 150mg.',
    imageUrl: '/images/osce/page26_img02.jpeg',
    imageAlt: 'Radiographs of lower second premolar case in patient with ischaemic heart disease',
    keywords: ['extraction assessment', 'favourable', 'unfavourable', 'IHD', 'non-vital'],
    difficulty: 'hard'
  },

  // ── c25-08: Reasons for Endo Failure ──────────────────────────────────────
  {
    id: 'q25-024',
    contentId: 'c25-08',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'free-text',
    question: 'List 5 reasons for endodontic failure.',
    answer: '1) Insufficient apical obturation, 2) Insufficient coronal obturation, 3) Insufficient disinfection of root canal, 4) Specific microbial infection (e.g. E. faecalis), 5) Iatrogenic damage.',
    acceptableAnswers: [
      'insufficient apical obturation, insufficient coronal obturation, insufficient disinfection, microbial infection, iatrogenic damage',
      'apical obturation coronal obturation disinfection E faecalis iatrogenic',
      'poor apical seal, poor coronal seal, inadequate disinfection, E. faecalis, iatrogenic damage'
    ],
    keywords: ['endo failure', 'obturation', 'disinfection', 'E. faecalis', 'iatrogenic'],
    difficulty: 'medium'
  },
  {
    id: 'q25-025',
    contentId: 'c25-08',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'mcq',
    question: 'What is the success rate for specialist re-endodontic treatment?',
    answer: '86%',
    explanation: 'Re-RCT with apical periodontitis = 62%, GDP re-endo = 77%, Specialist re-endo = 86%.',
    options: ['62%', '72%', '77%', '86%'],
    correctOptionIndex: 3,
    keywords: ['specialist', 're-endo', 'success rate', '86%'],
    difficulty: 'medium'
  },
  {
    id: 'q25-026',
    contentId: 'c25-08',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'fill-blank',
    question: 'The success rate for re-RCT in the presence of apical periodontitis is ___% .',
    answer: '62',
    fullText: 'The success rate for re-RCT in the presence of apical periodontitis is 62%.',
    blankWord: '62',
    keywords: ['re-RCT', 'apical periodontitis', '62%', 'success rate'],
    difficulty: 'hard'
  },
  {
    id: 'q25-027',
    contentId: 'c25-08',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'flashcard',
    question: 'Which specific microorganism is associated with persistent endodontic infection/failure?',
    answer: 'Enterococcus faecalis (E. faecalis). It is resistant to many intracanal medicaments and can survive in the root canal system even after treatment.',
    keywords: ['E. faecalis', 'Enterococcus', 'endo failure', 'persistent infection'],
    difficulty: 'medium'
  },

  // ── c25-09: Four Treatment Options for Failed Endo ────────────────────────
  {
    id: 'q25-028',
    contentId: 'c25-09',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'free-text',
    question: 'What are the four treatment options for a tooth with failed endodontics?',
    answer: '1) XLA (extraction), 2) Re-endo (retreatment), 3) Apicectomy (surgical endodontics), 4) Do nothing (monitor).',
    acceptableAnswers: [
      'extraction, re-endo, apicectomy, do nothing',
      'XLA re-endo apicectomy do nothing',
      'extract, retreat, apicectomy, monitor'
    ],
    keywords: ['failed endo', 'XLA', 're-endo', 'apicectomy', 'do nothing'],
    difficulty: 'medium'
  },
  {
    id: 'q25-029',
    contentId: 'c25-09',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'mcq',
    question: 'What is the specific risk of apicectomy on a posterior MAXILLARY tooth?',
    answer: 'Oro-antral communication (OAC)',
    explanation: 'Apicectomy on a posterior maxillary tooth risks creating an oro-antral communication. On posterior mandibular teeth, the risk is paresthesia from IDB nerve damage.',
    options: [
      'Lingual nerve damage',
      'Oro-antral communication (OAC)',
      'Mandibular fracture',
      'Cavernous sinus thrombosis'
    ],
    correctOptionIndex: 1,
    keywords: ['apicectomy', 'OAC', 'maxillary', 'posterior'],
    difficulty: 'medium'
  },
  {
    id: 'q25-030',
    contentId: 'c25-09',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'flashcard',
    question: 'Why are root-filled teeth more likely to fracture during extraction?',
    answer: 'Root-filled teeth are brittle because the pulp has been removed and the tooth is no longer vital. The root filling material and access cavity preparation further weaken the tooth structure, increasing fracture risk during extraction.',
    keywords: ['root filled', 'brittle', 'fracture', 'extraction', 'non-vital'],
    difficulty: 'easy'
  },
  {
    id: 'q25-031',
    contentId: 'c25-09',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'mcq',
    question: 'What is the specific risk of apicectomy on a posterior MANDIBULAR tooth?',
    answer: 'Paresthesia from inferior dental (IDB) nerve damage',
    explanation: 'Posterior mandibular apicectomy risks IDB nerve paresthesia. Posterior maxillary apicectomy risks OAC.',
    options: [
      'Oro-antral communication',
      'Maxillary sinus perforation',
      'Paresthesia from inferior dental (IDB) nerve damage',
      'Fracture of the maxillary tuberosity'
    ],
    correctOptionIndex: 2,
    keywords: ['apicectomy', 'mandibular', 'IDB nerve', 'paresthesia'],
    difficulty: 'medium'
  },
  {
    id: 'q25-032',
    contentId: 'c25-09',
    topic: 'endodontics',
    subtopic: 'Options for Failed Endo',
    type: 'fill-blank',
    question: 'An apicectomy involves removing the ___ of the root and placing a filling to seal the end.',
    answer: 'top',
    fullText: 'An apicectomy involves removing the top of the root and placing a filling to seal the end.',
    blankWord: 'top',
    keywords: ['apicectomy', 'root end', 'retrograde filling'],
    difficulty: 'easy'
  },
];
