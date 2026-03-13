import { ContentItem, Question } from './types';

// Pages 41-42: Oral Surgery Instrument Recognition, Dental Anomalies, Pregnancy

export const content_p41: ContentItem[] = [
  {
    id: 'c41-01',
    topic: 'oral-surgery',
    subtopic: 'Instrument Recognition',
    title: 'Upper Forceps — Posteriors, Anteriors',
    text: 'Posterior upper forceps have a bend in the handle so blades align with the long axis of the tooth. Held with curved end in the palm, aligned with the arm — NOT at right angles. Upper premolar forceps: single beak (single root). Upper molar forceps: divided/compound beak (two roots). Upper third molar forceps: extra crank to reach third molars. Straight forceps are used for upper anteriors, held as an extension from the hand and arm forming a straight line with the forearm.',
    keyPoints: [
      'Posterior upper forceps: bend in handle, blades in line with long axis',
      'Held curved end in palm, aligned with arm — NOT at right angles',
      'Premolar: single beak. Molar: compound beak. Third molar: extra crank',
      'Upper anterior forceps are straight, held as extension of forearm'
    ],
    keywords: ['upper forceps', 'compound beak', 'crank', 'straight forceps', 'long axis'],
    imageUrl: '/images/osce/page41_img01.webp',
    imageAlt: 'Upper posterior forceps — premolar, molar, and third molar types',
    pageRef: 41
  },
  {
    id: 'c41-02',
    topic: 'oral-surgery',
    subtopic: 'Instrument Recognition',
    title: 'Lower Forceps Types',
    text: 'ALL lower forceps are right angled. Hold towards the end of the handle to optimise leverage and grip. Lower anterior/premolar: single beak for single root. Lower molar: compound beak to fit two roots. Cowhorn forceps: narrow beak designed to fit the furcation and lift the tooth.',
    keyPoints: [
      'ALL lower forceps are right angled',
      'Hold towards end of handle for leverage and grip',
      'Anterior/premolar: single beak. Molar: compound beak',
      'Cowhorn: narrow beak fits furcation to lift the tooth'
    ],
    keywords: ['lower forceps', 'right angled', 'cowhorn', 'furcation', 'compound beak'],
    imageUrl: '/images/osce/page41_img03.webp',
    imageAlt: 'Lower forceps — anterior/premolar, molar, and cowhorn types',
    pageRef: 41
  },
  {
    id: 'c41-03',
    topic: 'oral-medicine',
    subtopic: 'Dental Anomalies',
    title: 'Mesiodens',
    text: 'Most common supernumerary tooth. Peg-like tooth between maxillary centrals. Affects 0.1–3.8%. Treatment: extraction. Can interfere with eruption, cause alignment problems, and be associated with dentigerous cysts. Most common cause of delayed eruption of upper central incisors.',
    keyPoints: [
      'Most common supernumerary — peg-like, between maxillary centrals',
      'Prevalence 0.1–3.8%, treatment is extraction',
      'Associated with dentigerous cysts',
      'Most common cause of delayed eruption of upper centrals'
    ],
    keywords: ['mesiodens', 'supernumerary', 'peg-like', 'maxillary centrals', 'dentigerous cyst'],
    pageRef: 42
  },
  {
    id: 'c41-04',
    topic: 'oral-medicine',
    subtopic: 'Dental Anomalies',
    title: 'Hypodontia and Hyperdontia',
    text: 'Hypodontia: congenitally missing teeth from radiation exposure or hereditary disturbance like ectodermal dysplasia (thin hair, thick abnormal nails, lightly pigmented skin, lack of sweat glands, absent/peg-shaped teeth). Most commonly affects third molars, upper laterals, lower second premolars. Treatment: ortho/bridgework/implants/dentures. Hyperdontia: supernumerary teeth, 0.15–3.9%, usually maxillary anteriors. Associated with Gardner\'s syndrome (familial colorectal polyposis, skull tumours) and cleidocranial dysostosis (autosomal dominant, delayed midline ossification, clavicles can touch in middle of chest, prognathic mandible, short frames, frontal bossing, supernumerary teeth, vertebral anomalies).',
    keyPoints: [
      'Hypodontia most commonly affects third molars, upper laterals, lower second premolars',
      'Ectodermal dysplasia: thin hair, thick nails, no sweat glands, absent/peg-shaped teeth',
      'Hyperdontia: 0.15–3.9%, usually maxillary anteriors',
      'Gardner\'s syndrome: colorectal polyposis, skull tumours',
      'Cleidocranial dysostosis: autosomal dominant, clavicles affected, frontal bossing'
    ],
    keywords: ['hypodontia', 'hyperdontia', 'ectodermal dysplasia', 'Gardner syndrome', 'cleidocranial dysostosis'],
    pageRef: 42
  },
  {
    id: 'c41-05',
    topic: 'oral-medicine',
    subtopic: 'Dental Anomalies',
    title: 'Fusion, Germination, Dens Evaginatus, Talon Cusp',
    text: 'Fusion: two developing teeth merge into one; groove on back may decay; sometimes two independent pulp chambers visible. Germination: one tooth splits into two; groove may need filling; can interfere with permanent eruption if not exfoliated on time. Dens evaginatus: rare extra cusp/tubercle, premolars most affected, seen in Down\'s syndrome; may lose blood/nerve supply and need RCT. Talon cusp: eagle\'s talon-shaped cusp from cingulum of incisors; rarely in primary teeth; can interfere with occlusion; grinding risky as contains prominent pulp horn susceptible to exposure; may need RCT.',
    keyPoints: [
      'Fusion: two teeth merge, may show two pulp chambers',
      'Germination: one tooth splits, may interfere with permanent tooth eruption',
      'Dens evaginatus: extra cusp on premolars, Down\'s syndrome, may need RCT',
      'Talon cusp: from cingulum of incisors, grinding risky — prominent pulp horn'
    ],
    keywords: ['fusion', 'germination', 'dens evaginatus', 'talon cusp', 'pulp horn', 'cingulum'],
    pageRef: 42
  },
  {
    id: 'c41-06',
    topic: 'oral-medicine',
    subtopic: 'Dental Anomalies',
    title: 'Dens Invaginatus and Taurodontism',
    text: 'Dens invaginatus: "tooth within a tooth" — invagination of epithelium into pulp space during coronal development. Usually maxillary laterals. RCT difficult due to complex anatomy. Frequently causes early pulpal necrosis. Taurodontism: usually multirooted teeth, enlarged body and pulp chamber with short roots, tooth looks rectangular. Associated with type 4 amelogenesis imperfecta and Down\'s syndrome. Endo is challenging.',
    keyPoints: [
      'Dens invaginatus: "tooth within a tooth", usually maxillary laterals',
      'RCT difficult, frequently causes early pulpal necrosis',
      'Taurodontism: rectangular tooth, enlarged pulp chamber, short roots',
      'Taurodontism associated with type 4 AI and Down\'s syndrome'
    ],
    keywords: ['dens invaginatus', 'taurodontism', 'maxillary laterals', 'pulpal necrosis', 'rectangular'],
    pageRef: 42
  },
  {
    id: 'c41-07',
    topic: 'oral-medicine',
    subtopic: 'Dental Anomalies',
    title: 'Natal/Neonatal Teeth and Dilaceration',
    text: 'Natal teeth: present at birth, most commonly lower incisors — should be removed. Neonatal teeth: erupt in first few weeks of life, usually normal primary teeth — should be retained. Dilaceration: angulation/sharp bend or curve in root or crown. Usually due to trauma to deciduous predecessor during formation. No treatment but root morphology makes extraction complex.',
    keyPoints: [
      'Natal teeth (at birth): remove. Neonatal teeth (first weeks): retain',
      'Natal teeth most commonly lower incisors',
      'Dilaceration: sharp bend in root/crown from trauma to deciduous predecessor',
      'Dilaceration makes extraction complex'
    ],
    keywords: ['natal teeth', 'neonatal teeth', 'dilaceration', 'deciduous predecessor', 'lower incisors'],
    pageRef: 42
  },
  {
    id: 'c41-08',
    topic: 'oral-medicine',
    subtopic: 'Dental Anomalies',
    title: 'Amelogenesis Imperfecta and Dentinogenesis Imperfecta',
    text: 'Amelogenesis imperfecta: abnormal enamel formation, yellow/brown/grey teeth, higher caries risk, temperature hypersensitive, malfunction of enamel proteins. Children: stainless steel crowns; adults: porcelain crowns. Dentinogenesis imperfecta: blue-gray/yellow-blue translucent teeth, weaker than normal, prone to wear/breakage. Type 1: associated with Osteogenesis Imperfecta (blue sclera), collagen defect, obliterated pulp chambers, PA radiolucencies, bulbous crowns, root fractures. Type 2: same without OI. Type 3: shell-like, bell-shaped crowns. Autosomal dominant, 1 in 6,000–8,000. Treat with crowns — fillings fail as dentine too soft.',
    keyPoints: [
      'AI: abnormal enamel, yellow/brown/grey, SSC in children, porcelain in adults',
      'DI Type 1: Osteogenesis Imperfecta (blue sclera), obliterated pulp chambers',
      'DI Type 2: same as Type 1 without OI. Type 3: bell-shaped crowns',
      'DI: autosomal dominant, 1 in 6,000–8,000, fillings fail (soft dentine)'
    ],
    keywords: ['amelogenesis imperfecta', 'dentinogenesis imperfecta', 'osteogenesis imperfecta', 'blue sclera', 'enamel proteins'],
    pageRef: 42
  },
  {
    id: 'c41-09',
    topic: 'oral-medicine',
    subtopic: 'Dental Treatment & Pregnancy',
    title: 'Dental Treatment and Pregnancy — NHS Entitlements',
    text: 'Free NHS dental treatment during pregnancy and 12 months after birth. Requires MATB1 certificate (midwife/GP) and valid prescription maternity exemption certificate. Can apply for exemption up to 12 months after birth if not applied during pregnancy. Stillbirth after 24th week: still entitled to free NHS treatment — must show stillbirth certificate from local registrar or births/marriages/deaths.',
    keyPoints: [
      'Free NHS treatment during pregnancy + 12 months after birth',
      'Requires MATB1 certificate and maternity exemption certificate',
      'Can apply for exemption up to 12 months post-birth',
      'Stillbirth after 24 weeks: still entitled, show stillbirth certificate'
    ],
    keywords: ['pregnancy', 'NHS', 'MATB1', 'maternity exemption', '12 months', 'stillbirth', '24 weeks'],
    pageRef: 42
  }
];

export const questions_p41: Question[] = [
  // ── c41-01: Upper Forceps ──
  {
    id: 'q41-001',
    contentId: 'c41-01',
    topic: 'oral-surgery',
    type: 'flashcard',
    question: 'How should posterior upper forceps be held?',
    answer: 'With the curved end in the palm of the hand, aligned with the arm — NOT at right angles. This ensures blades are in line with the long axis of the tooth.',
    keywords: ['upper forceps', 'palm', 'long axis'],
    difficulty: 'medium'
  },
  {
    id: 'q41-002',
    contentId: 'c41-01',
    topic: 'oral-surgery',
    type: 'mcq',
    question: 'What distinguishes upper molar forceps from upper premolar forceps?',
    options: [
      'Molar forceps have a divided/compound beak to fit two roots',
      'Molar forceps are straight while premolar forceps are angled',
      'Molar forceps have a single beak for a single root',
      'Molar forceps have an extra crank'
    ],
    correctOptionIndex: 0,
    answer: 'Upper molar forceps have a divided/compound beak to fit two roots, while premolar forceps have a single beak.',
    keywords: ['upper molar', 'compound beak', 'premolar', 'single beak'],
    difficulty: 'medium'
  },
  {
    id: 'q41-003',
    contentId: 'c41-01',
    topic: 'oral-surgery',
    type: 'fill-blank',
    question: 'Upper third molar forceps have an extra _____ to reach the third molars.',
    answer: 'crank',
    fullText: 'Upper third molar forceps have an extra crank to reach the third molars.',
    blankWord: 'crank',
    keywords: ['upper third molar', 'crank'],
    difficulty: 'easy'
  },
  {
    id: 'q41-004',
    contentId: 'c41-01',
    topic: 'oral-surgery',
    type: 'mcq',
    question: 'Which type of forceps is used for upper anterior teeth?',
    options: [
      'Angled forceps with a compound beak',
      'Straight forceps held as extension of the forearm',
      'Right-angled forceps held at end of handle',
      'Cowhorn forceps'
    ],
    correctOptionIndex: 1,
    answer: 'Straight forceps held as an extension from the hand and arm.',
    keywords: ['straight forceps', 'upper anteriors', 'forearm'],
    difficulty: 'easy'
  },
  // ── c41-02: Lower Forceps ──
  {
    id: 'q41-005',
    contentId: 'c41-02',
    topic: 'oral-surgery',
    type: 'flashcard',
    question: 'What angle are ALL lower forceps and where should you grip them?',
    answer: 'All lower forceps are right angled. Hold towards the end of the handle to optimise leverage and grip on the tooth.',
    keywords: ['lower forceps', 'right angled', 'leverage'],
    difficulty: 'easy'
  },
  {
    id: 'q41-006',
    contentId: 'c41-02',
    topic: 'oral-surgery',
    type: 'mcq',
    question: 'What is unique about cowhorn forceps?',
    options: [
      'Compound beak for two roots',
      'Straight for lower anterior teeth',
      'Narrow beak to fit the furcation and lift the tooth',
      'Extra crank for third molars'
    ],
    correctOptionIndex: 2,
    answer: 'Cowhorn forceps have a narrow beak designed to fit the furcation and lift the tooth.',
    keywords: ['cowhorn', 'furcation', 'narrow beak'],
    difficulty: 'medium'
  },
  {
    id: 'q41-007',
    contentId: 'c41-02',
    topic: 'oral-surgery',
    type: 'free-text',
    question: 'Name the three types of lower forceps and the beak design of each.',
    answer: 'Lower anterior/premolar: single beak (single root). Lower molar: compound beak (two roots). Cowhorn: narrow beak to fit the furcation and lift the tooth.',
    acceptableAnswers: [
      'anterior premolar single beak, molar compound beak, cowhorn narrow beak furcation',
      'single beak anterior, compound beak molar, cowhorn furcation'
    ],
    keywords: ['lower anterior', 'molar', 'cowhorn', 'furcation', 'compound beak'],
    difficulty: 'hard'
  },
  // ── c41-03: Mesiodens ──
  {
    id: 'q41-008',
    contentId: 'c41-03',
    topic: 'oral-medicine',
    type: 'flashcard',
    question: 'What is a mesiodens and where is it found?',
    answer: 'The most common supernumerary tooth — a peg-like tooth between maxillary central incisors. Affects 0.1–3.8%. Treatment: extraction. Most common cause of delayed eruption of upper centrals.',
    keywords: ['mesiodens', 'supernumerary', 'maxillary centrals'],
    difficulty: 'easy'
  },
  {
    id: 'q41-009',
    contentId: 'c41-03',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'Mesiodens is the most common cause of which clinical problem?',
    options: [
      'Enamel hypoplasia in lower premolars',
      'Delayed eruption of upper central incisors',
      'Premature exfoliation of primary canines',
      'Taurodontism of first molars'
    ],
    correctOptionIndex: 1,
    answer: 'Delayed eruption of upper central incisors.',
    keywords: ['mesiodens', 'delayed eruption', 'upper central incisors'],
    difficulty: 'medium'
  },
  {
    id: 'q41-010',
    contentId: 'c41-03',
    topic: 'oral-medicine',
    type: 'fill-blank',
    question: 'Mesiodens can be associated with _____ cysts.',
    answer: 'dentigerous',
    fullText: 'Mesiodens can be associated with dentigerous cysts.',
    blankWord: 'dentigerous',
    keywords: ['mesiodens', 'dentigerous cyst'],
    difficulty: 'medium'
  },
  // ── c41-04: Hypodontia & Hyperdontia ──
  {
    id: 'q41-011',
    contentId: 'c41-04',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'Which three teeth are most commonly affected by hypodontia?',
    options: [
      'Upper centrals, lower canines, upper first premolars',
      'Third molars, upper laterals, lower second premolars',
      'Lower centrals, upper canines, lower first molars',
      'Upper second premolars, lower laterals, upper third molars'
    ],
    correctOptionIndex: 1,
    answer: 'Third molars, upper laterals and lower second premolars.',
    keywords: ['hypodontia', 'third molars', 'upper laterals', 'lower second premolars'],
    difficulty: 'medium'
  },
  {
    id: 'q41-012',
    contentId: 'c41-04',
    topic: 'oral-medicine',
    type: 'free-text',
    question: 'List four clinical features of ectodermal dysplasia.',
    answer: 'Thin hair, thick abnormal nails, lightly pigmented skin, lack of sweat glands, congenitally absent teeth with peg-shaped teeth if present.',
    acceptableAnswers: [
      'thin hair, thick nails, pigmented skin, no sweat glands',
      'absent teeth, thin hair, abnormal nails, lack of sweat glands'
    ],
    keywords: ['ectodermal dysplasia', 'thin hair', 'abnormal nails', 'sweat glands', 'peg-shaped'],
    difficulty: 'hard'
  },
  {
    id: 'q41-013',
    contentId: 'c41-04',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'A patient with supernumerary teeth, delayed midline ossification, frontal bossing, and clavicles that can touch in the middle of the chest most likely has:',
    options: [
      'Gardner\'s syndrome',
      'Ectodermal dysplasia',
      'Cleidocranial dysostosis',
      'Osteogenesis imperfecta'
    ],
    correctOptionIndex: 2,
    answer: 'Cleidocranial dysostosis.',
    explanation: 'Key features: autosomal dominant, delayed midline ossification, affected clavicles, prognathic mandible, short frames, frontal bossing, vertebral anomalies.',
    keywords: ['cleidocranial dysostosis', 'clavicles', 'frontal bossing', 'supernumerary'],
    difficulty: 'medium'
  },
  {
    id: 'q41-014',
    contentId: 'c41-04',
    topic: 'oral-medicine',
    type: 'flashcard',
    question: 'What is Gardner\'s syndrome and how does it relate to hyperdontia?',
    answer: 'Gardner\'s syndrome involves familial colorectal polyposis (polyps in colon) with tumours often in the skull. It is associated with supernumerary teeth (hyperdontia).',
    keywords: ['Gardner syndrome', 'colorectal polyposis', 'hyperdontia', 'supernumerary'],
    difficulty: 'hard'
  },
  // ── c41-05: Fusion, Germination, Dens Evaginatus, Talon Cusp ──
  {
    id: 'q41-015',
    contentId: 'c41-05',
    topic: 'oral-medicine',
    type: 'flashcard',
    question: 'What is the difference between fusion and germination?',
    answer: 'Fusion: two developing teeth merge into one (may show two independent pulp chambers). Germination: one developing tooth splits into two. Both have a groove that may decay and need filling.',
    keywords: ['fusion', 'germination', 'merge', 'split', 'pulp chambers'],
    difficulty: 'medium'
  },
  {
    id: 'q41-016',
    contentId: 'c41-05',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'Why is grinding a talon cusp risky?',
    options: [
      'It may cause the tooth to fracture cervically',
      'It often contains a prominent pulp horn susceptible to exposure',
      'It will cause the tooth to become ankylosed',
      'It leads to external root resorption'
    ],
    correctOptionIndex: 1,
    answer: 'Talon cusps often contain a prominent pulp horn which is very susceptible to exposure.',
    keywords: ['talon cusp', 'grinding', 'pulp horn', 'exposure'],
    difficulty: 'medium'
  },
  {
    id: 'q41-017',
    contentId: 'c41-05',
    topic: 'oral-medicine',
    type: 'fill-blank',
    question: 'A talon cusp projects from the _____ of incisors.',
    answer: 'cingulum',
    fullText: 'A talon cusp projects from the cingulum of incisors.',
    blankWord: 'cingulum',
    keywords: ['talon cusp', 'cingulum', 'incisors'],
    difficulty: 'medium'
  },
  {
    id: 'q41-018',
    contentId: 'c41-05',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'Dens evaginatus is most commonly seen in which teeth and which patient group?',
    options: [
      'Incisors in patients with Turner syndrome',
      'Premolars in patients with Down\'s syndrome',
      'Molars in patients with cleidocranial dysostosis',
      'Canines in patients with Gardner\'s syndrome'
    ],
    correctOptionIndex: 1,
    answer: 'Premolars, in Down\'s syndrome patients. May lose blood/nerve supply and need RCT.',
    keywords: ['dens evaginatus', 'premolars', 'Down syndrome', 'RCT'],
    difficulty: 'hard'
  },
  // ── c41-06: Dens Invaginatus & Taurodontism ──
  {
    id: 'q41-019',
    contentId: 'c41-06',
    topic: 'oral-medicine',
    type: 'flashcard',
    question: 'What is dens invaginatus and which teeth are usually affected?',
    answer: '"Tooth within a tooth" — invagination of epithelium into pulp space during coronal development. Usually maxillary laterals. RCT difficult due to complex anatomy. Frequently causes early pulpal necrosis.',
    keywords: ['dens invaginatus', 'maxillary laterals', 'pulpal necrosis'],
    difficulty: 'medium'
  },
  {
    id: 'q41-020',
    contentId: 'c41-06',
    topic: 'oral-medicine',
    type: 'fill-blank',
    question: 'Dens invaginatus frequently results in early pulpal _____.',
    answer: 'necrosis',
    fullText: 'Dens invaginatus frequently results in early pulpal necrosis.',
    blankWord: 'necrosis',
    keywords: ['dens invaginatus', 'pulpal necrosis'],
    difficulty: 'easy'
  },
  {
    id: 'q41-021',
    contentId: 'c41-06',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'Taurodontism is associated with which type of amelogenesis imperfecta?',
    options: ['Type 1', 'Type 2', 'Type 3', 'Type 4'],
    correctOptionIndex: 3,
    answer: 'Type 4 amelogenesis imperfecta.',
    keywords: ['taurodontism', 'type 4', 'amelogenesis imperfecta'],
    difficulty: 'hard'
  },
  {
    id: 'q41-022',
    contentId: 'c41-06',
    topic: 'oral-medicine',
    type: 'fill-blank',
    question: 'In taurodontism the tooth looks _____ due to an enlarged body and pulp chamber with short roots.',
    answer: 'rectangular',
    fullText: 'In taurodontism the tooth looks rectangular due to an enlarged body and pulp chamber with short roots.',
    blankWord: 'rectangular',
    keywords: ['taurodontism', 'rectangular'],
    difficulty: 'easy'
  },
  // ── c41-07: Natal/Neonatal Teeth & Dilaceration ──
  {
    id: 'q41-023',
    contentId: 'c41-07',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'Which statement about natal and neonatal teeth is correct?',
    options: [
      'Natal teeth should be retained; neonatal teeth should be removed',
      'Both should be removed',
      'Natal teeth should be removed; neonatal teeth should be retained',
      'Both should be retained and monitored'
    ],
    correctOptionIndex: 2,
    answer: 'Natal teeth (present at birth, usually lower incisors) should be removed. Neonatal teeth (erupt first few weeks) are usually normal primary teeth and should be retained.',
    keywords: ['natal', 'neonatal', 'remove', 'retain'],
    difficulty: 'medium'
  },
  {
    id: 'q41-024',
    contentId: 'c41-07',
    topic: 'oral-medicine',
    type: 'fill-blank',
    question: 'Dilaceration is usually caused by trauma to a _____ predecessor as the permanent tooth is forming.',
    answer: 'deciduous',
    fullText: 'Dilaceration is usually caused by trauma to a deciduous predecessor as the permanent tooth is forming.',
    blankWord: 'deciduous',
    keywords: ['dilaceration', 'deciduous', 'trauma'],
    difficulty: 'easy'
  },
  {
    id: 'q41-025',
    contentId: 'c41-07',
    topic: 'oral-medicine',
    type: 'flashcard',
    question: 'What is dilaceration and what clinical complication does it cause?',
    answer: 'A developmental angulation/sharp bend or curve in the root or crown, usually from trauma to the deciduous predecessor. No treatment needed but root morphology makes extraction complex.',
    keywords: ['dilaceration', 'angulation', 'extraction', 'complex'],
    difficulty: 'medium'
  },
  // ── c41-08: AI & DI ──
  {
    id: 'q41-026',
    contentId: 'c41-08',
    topic: 'oral-medicine',
    type: 'flashcard',
    question: 'Describe the three types of dentinogenesis imperfecta.',
    answer: 'Type 1: associated with Osteogenesis Imperfecta (blue sclera), collagen defect, obliterated pulp chambers, PA radiolucencies, bulbous crowns, root fractures. Type 2: same without OI. Type 3: shell-like appearance, bell-shaped crowns. All autosomal dominant, 1 in 6,000–8,000.',
    keywords: ['dentinogenesis imperfecta', 'osteogenesis imperfecta', 'blue sclera', 'bell-shaped'],
    difficulty: 'hard'
  },
  {
    id: 'q41-027',
    contentId: 'c41-08',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'Why are fillings generally unsuccessful in dentinogenesis imperfecta?',
    options: [
      'The enamel is too thin to bond to',
      'The pulp chambers are obliterated',
      'The dentine is too soft',
      'The teeth are too translucent'
    ],
    correctOptionIndex: 2,
    answer: 'Fillings fail because the dentine is too soft. Crowns are the preferred treatment.',
    keywords: ['dentinogenesis imperfecta', 'soft dentine', 'crowns'],
    difficulty: 'medium'
  },
  {
    id: 'q41-028',
    contentId: 'c41-08',
    topic: 'oral-medicine',
    type: 'fill-blank',
    question: 'Dentinogenesis imperfecta Type 1 is associated with _____ Imperfecta, characterised by blue sclera.',
    answer: 'Osteogenesis',
    fullText: 'Dentinogenesis imperfecta Type 1 is associated with Osteogenesis Imperfecta, characterised by blue sclera.',
    blankWord: 'Osteogenesis',
    keywords: ['dentinogenesis imperfecta', 'osteogenesis imperfecta', 'blue sclera'],
    difficulty: 'medium'
  },
  {
    id: 'q41-029',
    contentId: 'c41-08',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'What is the recommended management of amelogenesis imperfecta in children?',
    options: [
      'Composite bonding',
      'Porcelain crowns',
      'Stainless steel crowns',
      'Glass ionomer restorations'
    ],
    correctOptionIndex: 2,
    answer: 'Stainless steel crowns in children, replaced with porcelain crowns in adult dentition.',
    keywords: ['amelogenesis imperfecta', 'stainless steel crowns', 'children'],
    difficulty: 'medium'
  },
  // ── c41-09: Pregnancy ──
  {
    id: 'q41-030',
    contentId: 'c41-09',
    topic: 'oral-medicine',
    type: 'flashcard',
    question: 'What certificates does a pregnant patient need for free NHS dental treatment?',
    answer: 'A MATB1 certificate issued by midwife/GP and a valid prescription maternity exemption certificate.',
    keywords: ['MATB1', 'maternity exemption', 'midwife', 'GP'],
    difficulty: 'medium'
  },
  {
    id: 'q41-031',
    contentId: 'c41-09',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'For how long after giving birth is a patient entitled to free NHS dental treatment?',
    options: ['6 months', '12 months', '18 months', '24 months'],
    correctOptionIndex: 1,
    answer: '12 months after the baby is born.',
    keywords: ['pregnancy', 'NHS', '12 months'],
    difficulty: 'easy'
  },
  {
    id: 'q41-032',
    contentId: 'c41-09',
    topic: 'oral-medicine',
    type: 'mcq',
    question: 'After what week of pregnancy does a stillbirth still entitle the patient to free NHS dental treatment?',
    options: ['12th week', '16th week', '20th week', '24th week'],
    correctOptionIndex: 3,
    answer: 'After the 24th week. Must show stillbirth certificate from local registrar.',
    keywords: ['stillbirth', '24th week', 'NHS'],
    difficulty: 'hard'
  },
  {
    id: 'q41-033',
    contentId: 'c41-09',
    topic: 'oral-medicine',
    type: 'fill-blank',
    question: 'A pregnant patient needs a _____ certificate issued by their midwife/GP for free NHS dental treatment.',
    answer: 'MATB1',
    fullText: 'A pregnant patient needs a MATB1 certificate issued by their midwife/GP for free NHS dental treatment.',
    blankWord: 'MATB1',
    keywords: ['MATB1', 'midwife', 'GP', 'pregnancy'],
    difficulty: 'medium'
  }
];
