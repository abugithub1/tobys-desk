import { ContentItem, Question } from './types';

export const content1: ContentItem[] = [
  {
    id: 'c1-01',
    topic: 'splinting-trauma',
    subtopic: 'Placing a Splint',
    title: 'Placing a Splint for Avulsed Upper Central Incisor',
    text: 'Patient has avulsed upper central incisor – place a splint. Make sure you put GLASSES ON MODEL AND GLOVES ON. Sit down without touching chair with gloves. Splint one tooth either side. Composite and wire splint – easiest and cheapest. Stabilise tooth by getting patient to bite on gauze. Clean teeth as much as possible. Prepare everything: roll 6 small balls of composite ready. Cut wire and bend to fit teeth – near the incisal third. Wire = 0.6 thickness. Hold both ends with finger to prevent loose parts falling. Acid etch, wash, bond. Choose darker shade of composite to aid removal. Apply first composite layer with flat plastic – apply wire and cure. Apply second composite layer and cure. Smooth away from gingival margin. Make sure all tips of wire are covered – no sharp edges.',
    keyPoints: [
      'Splint one tooth either side of avulsed tooth',
      'Use composite and wire splint – easiest and cheapest',
      'Wire thickness is 0.6mm, placed near incisal third',
      'Roll 6 small balls of composite ready before starting',
      'Acid etch, wash, bond before placing composite',
      'Choose darker shade composite to aid later removal',
      'Apply two layers of composite, curing each',
      'Smooth away from gingival margin, cover all wire tips',
      'Wear glasses and gloves, stabilise tooth with gauze'
    ],
    keywords: ['splint', 'avulsed', 'composite', 'wire', '0.6mm', 'incisal third', 'acid etch'],
    imageUrl: '/images/osce/page01_img01.webp',
    imageAlt: 'Bridge types shown on dental models',
    pageRef: 1
  },
  {
    id: 'c1-02',
    topic: 'bridges',
    subtopic: 'Bridge Types',
    title: 'Fixed-Fixed Bridge',
    text: 'Both abutments crowned. Rigid connectors at either end of edentulous area. Preps need to be parallel.',
    keyPoints: [
      'Both abutment teeth are crowned',
      'Rigid connectors at either end of edentulous area',
      'Preparations need to be parallel'
    ],
    keywords: ['fixed-fixed', 'bridge', 'abutment', 'rigid connector', 'parallel'],
    imageUrl: '/images/osce/page01_img01.webp',
    imageAlt: 'Fixed-fixed bridge before and after',
    pageRef: 1
  },
  {
    id: 'c1-03',
    topic: 'bridges',
    subtopic: 'Bridge Types',
    title: 'Fixed-Moveable Bridge',
    text: 'Pontic anchored rigidly at one end and via a moveable joint at minor retainer. Preps don\'t need to be parallel.',
    keyPoints: [
      'Pontic anchored rigidly at one end',
      'Moveable joint at minor retainer end',
      'Preps do not need to be parallel'
    ],
    keywords: ['fixed-moveable', 'bridge', 'pontic', 'moveable joint', 'minor retainer'],
    pageRef: 1
  },
  {
    id: 'c1-04',
    topic: 'bridges',
    subtopic: 'Bridge Types',
    title: 'Cantilever Bridge',
    text: 'Pontic anchored at one end of edentulous area only.',
    keyPoints: [
      'Pontic anchored at one end only',
      'Only one abutment tooth used'
    ],
    keywords: ['cantilever', 'bridge', 'pontic', 'one end'],
    pageRef: 1
  },
  {
    id: 'c1-05',
    topic: 'bridges',
    subtopic: 'Bridge Types',
    title: 'Resin-Bonded Bridge',
    text: 'Bonded with adhesive resin. Most minimal prep. Easiest to rebond. Used for short-span single tooth edentulous area.',
    keyPoints: [
      'Bonded with adhesive resin',
      'Most minimal tooth preparation of all bridge types',
      'Easiest to rebond if debonded',
      'Used for short-span single tooth edentulous areas'
    ],
    keywords: ['resin-bonded', 'Maryland', 'bridge', 'adhesive', 'minimal prep'],
    pageRef: 1
  },
  {
    id: 'c1-06',
    topic: 'bridges',
    subtopic: 'Bridge Faults',
    title: 'Bridge Fault Assessment Checklist',
    text: 'When assessing a bridge for faults check: Appearance – does tooth resemble type it\'s replacing (upper/lower molar)? Shade match? Margins – over-extended/under-extended, chipped. Interproximal contacts – tight? Loose? Evidence of damage to adjacent teeth on model when sectioning? Embrasures – too big/small? Plaque trap? Occlusion – high contact in ICP/non-working side interference/working-side interference/protrusion? Width of connector. Right prep for the crown? No die spacer – die spacer provides enough space for cement; if not applied it will affect the fit. Prep not parallel. Undercut/marginal discrepancy. Occlusion not balanced against opposing model. No gingival clearance on pontic.',
    keyPoints: [
      'Check appearance and shade match',
      'Check margins for over/under-extension and chips',
      'Check interproximal contacts – tight or loose',
      'Check embrasures for plaque traps',
      'Check occlusion in ICP, lateral and protrusive movements',
      'Check width of connector',
      'Verify correct prep for crown type',
      'Die spacer needed for cement space',
      'Preps must be parallel with no undercuts',
      'Check gingival clearance on pontic',
      'Balance occlusion against opposing model'
    ],
    keywords: ['bridge faults', 'margins', 'occlusion', 'die spacer', 'embrasures', 'connector'],
    pageRef: 1
  },
  {
    id: 'c1-07',
    topic: 'bridges',
    subtopic: 'Bridge Decision Tree',
    title: 'Strategically Important Tooth Lost – Decision Tree',
    text: 'If strategically important tooth lost: Yes → Restoration. Check for general contraindications to bridgework and active pulpal/periradicular/periodontal disease. If no contraindications: Young patient, intact adjacent teeth, short span (1 pontic), simple saddle, good ridge form, moderate loading, long clinical crowns → Resin bonded bridge. Moderate to heavily restored abutment teeth, good ridge form, longer spans (max 4 pontics), moderate to high loading, long clinical crowns → Conventional bridge. Design: Simple cantilever viable? What alternative design is least destructive? Long span, multiple saddles, resorbed ridge, parafunction/heavy function, contact sports → Partial denture. If general/specific contraindication to bridgework but no contraindication to implant → Implant. If No (not strategically important) → No Restoration.',
    keyPoints: [
      'First decide if tooth is strategically important',
      'Check for contraindications to bridgework',
      'Resin bonded: young patient, intact teeth, short span, 1 pontic',
      'Conventional bridge: heavily restored abutments, longer spans up to 4 pontics',
      'Partial denture: long span, multiple saddles, resorbed ridge, parafunction',
      'Implant: if contraindicated for bridge but not implant',
      'Always consider least destructive design'
    ],
    keywords: ['bridge decision', 'resin bonded', 'conventional', 'cantilever', 'implant', 'partial denture'],
    imageUrl: '/images/osce/page02_img01.webp',
    imageAlt: 'Bridge decision flowchart',
    pageRef: 2
  },
  {
    id: 'c1-08',
    topic: 'bridges',
    subtopic: 'Bridge Repair',
    title: 'Bridge Repair Methods',
    text: 'Repair – leave or review, can refer if hard to do. Repair occlusal defects with amalgam. Margins with GIC if small – perio flap if subgingival. Porcelain with silane coupling agent and composite. If terminal dentition – extract and no replacement → dentures/overdentures or implants with or without bone graft.',
    keyPoints: [
      'Can leave, review, or refer for repair',
      'Occlusal defects repaired with amalgam',
      'Marginal defects repaired with GIC if small',
      'Subgingival margins may need perio flap',
      'Porcelain repaired with silane coupling agent and composite',
      'Terminal dentition: extract → dentures/overdentures/implants'
    ],
    keywords: ['bridge repair', 'amalgam', 'GIC', 'silane', 'porcelain repair'],
    pageRef: 2
  },
  {
    id: 'c1-09',
    topic: 'bridges',
    subtopic: 'Bridge Failure',
    title: 'Reasons for Bridge Failure',
    text: 'Reasons for bridge failure: Not cemented properly (GIC instead of Panavia). Loss of retention – post & core failure, retainer under tension → secondary caries. Mechanical failure – cement failure, precision attachment breakage, fractured porcelain; usually occlusal forces; avoid by having adequate rigidity of framework, good bonding alloy, suitably treated porcelain. Abutment failure – caries (fixed fixed only one may loosen → caries), perio (mobility, migration, tooth loss), pulp (difficult access), trauma (crown/root fracture). Distortion. Occlusal wear/perforation – could happen if crown too high. Failure of soldered joint. Design failure – poor prep, poor clinical technique. Check margins of bridge for caries. Try to rock bridge on abutments – loss of seal → saliva bubbles. Bad taste.',
    keyPoints: [
      'Not cemented properly (e.g., GIC instead of Panavia)',
      'Loss of retention: post & core failure, secondary caries',
      'Mechanical failure: cement, precision attachment, fractured porcelain',
      'Abutment failure: caries, perio, pulp, trauma',
      'Distortion of the framework',
      'Occlusal wear/perforation if crown too high',
      'Failure of soldered joint',
      'Design failure: poor prep, poor clinical technique',
      'Rock bridge to check seal – saliva bubbles indicate loss of seal',
      'Bad taste may indicate failure'
    ],
    keywords: ['bridge failure', 'cementation', 'retention', 'mechanical failure', 'abutment failure', 'Panavia'],
    pageRef: 2
  },
  {
    id: 'c1-10',
    topic: 'dentures',
    subtopic: 'Acrylic Faults',
    title: 'Denture Acrylic Faults',
    text: 'Gaseous porosity: bubbles, monomer temperature too high (shouldn\'t be over 103 degrees). Contraction porosity: looks bleached, not enough acrylic dough in mould. Granular porosity: too much powder (polymer) not enough liquid (monomer), looks like clumps of powder. Flash: increases OVD, not fully trimming acrylic flash/flask not fully closed. Rough surfaces: insufficient separating medium (cold-mould-seal). Pink acrylic covering teeth – usually from wax being left on teeth. Acrylic pearls: check for these on fitting surface. Denture fails to seat: acrylic may have entered undercuts. Over-extended flange: can cause soreness. Assess extension, stability and appearance. Check OVD. Large voids usually from insufficiently packing acrylic.',
    keyPoints: [
      'Gaseous porosity: monomer temp too high (>103°C), causes bubbles',
      'Contraction porosity: not enough acrylic dough, looks bleached',
      'Granular porosity: too much polymer, not enough monomer, clumps',
      'Flash: increases OVD, flask not fully closed',
      'Rough surfaces: insufficient separating medium (cold-mould-seal)',
      'Pink acrylic on teeth: wax left on teeth',
      'Acrylic pearls on fitting surface',
      'Denture fails to seat: acrylic entered undercuts',
      'Over-extended flange causes soreness',
      'Large voids from insufficient packing'
    ],
    keywords: ['gaseous porosity', 'contraction porosity', 'granular porosity', 'flash', 'acrylic', 'denture faults'],
    pageRef: 2
  },
  {
    id: 'c1-11',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Generalised Discomfort Over Denture Bearing Areas',
    text: 'Complaint: Generalised discomfort over denture bearing areas. Probable causes: 1. Increased occlusal face height → occlusal grinding or remake. 2. Occlusal interference in lateral and protrusive movements → occlusal grinding. 3. Movement of denture bases over basal tissues → soft or hard reline. 4. Incorrect anterior-posterior relationship of dentures (non-coincidence of tooth and muscular positions) → occlusal grinding. 5. Increased free monomer → remake with correct curing cycle.',
    keyPoints: [
      'Increased OFH treated by occlusal grinding or remake',
      'Occlusal interference treated by occlusal grinding',
      'Denture base movement treated by soft or hard reline',
      'Incorrect AP relationship treated by occlusal grinding',
      'Increased free monomer treated by remake with correct curing cycle'
    ],
    keywords: ['denture complaints', 'generalised discomfort', 'occlusal grinding', 'reline', 'OFH'],
    pageRef: 3
  },
  {
    id: 'c1-12',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Lack of Chewing Pressure / Collapsed Face',
    text: 'Complaint: Lack of chewing pressure, collapsed face, generalised facial discomfort. Cause: Decreased occlusal face height. Treatment: Using cold cure or splint to build up occlusal surfaces, then remake one or both dentures.',
    keyPoints: [
      'Decreased OFH causes collapsed face appearance',
      'Build up occlusal surfaces with cold cure or splint',
      'May need to remake one or both dentures'
    ],
    keywords: ['collapsed face', 'decreased OFH', 'chewing pressure', 'cold cure'],
    pageRef: 3
  },
  {
    id: 'c1-13',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Angular Cheilitis from Dentures',
    text: 'Complaint: Angular cheilitis. Cause: Lack of facial support (rarely occlusal face height). Treatment: Build up canine prominence or move anterior teeth forward. Antimicrobial cream.',
    keyPoints: [
      'Angular cheilitis caused by lack of facial support',
      'Treat by building up canine prominence',
      'Move anterior teeth forward',
      'Apply antimicrobial cream'
    ],
    keywords: ['angular cheilitis', 'facial support', 'canine prominence', 'antimicrobial'],
    pageRef: 3
  },
  {
    id: 'c1-14',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Pain Over Crest of Ridge',
    text: 'Complaint: Pain over crest of ridge (especially lower anterior region). Causes: 1. Irregular bony contour following abnormal healing pattern. 2. Irregular soft tissue contour following socketted immediate dentures. Treatment: 1. Surgery. 2. Resilient lining for patients for whom surgery is contra-indicated.',
    keyPoints: [
      'Pain especially in lower anterior region',
      'Caused by irregular bony contour from abnormal healing',
      'Or irregular soft tissue from socketted immediate dentures',
      'Treat with surgery or resilient lining if surgery contra-indicated'
    ],
    keywords: ['pain', 'crest of ridge', 'resilient lining', 'irregular bony contour'],
    pageRef: 3
  },
  {
    id: 'c1-15',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Localised Denture Pain',
    text: 'Complaint: Localised pain. Causes: 1. Irregularities on fitting surface → spot grinding. 2. Premature contact between teeth → spot grinding. 3. Buried roots, unerupted teeth, cysts etc. → surgery. 4. Excess undercut utilised → relieve.',
    keyPoints: [
      'Fitting surface irregularities treated by spot grinding',
      'Premature contacts treated by spot grinding',
      'Buried roots/unerupted teeth/cysts need surgery',
      'Excess undercut utilised needs relieving'
    ],
    keywords: ['localised pain', 'spot grinding', 'premature contact', 'fitting surface'],
    pageRef: 3
  },
  {
    id: 'c1-16',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Pain in Sulcus and Pre-molar Region',
    text: 'Pain in sulcus: a) Ulcer → relieve; b) Granuloma → severe relief, may resolve, if not then surgery. Overextension causes pain in sulcus. Localised pain in lower pre-molar region: pressure on superficial mental nerve. Treatment: 1. Relieve denture. 2. Soft lining. 3. Surgery – difficult, only used in exceptional cases.',
    keyPoints: [
      'Sulcus pain from ulcer treated by relieving denture',
      'Granuloma needs severe relief or surgery',
      'Lower pre-molar pain from pressure on mental nerve',
      'Mental nerve pain treated by relieving, soft lining, or rarely surgery'
    ],
    keywords: ['sulcus pain', 'mental nerve', 'granuloma', 'overextension', 'ulcer'],
    pageRef: 3
  },
  {
    id: 'c1-17',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Pain on One Side and Cheek/Tongue Biting',
    text: 'Pain on one side: premature contact i.e. poor articulation → analyse occlusion and articulation then spot grind. Pain from cheek and tongue biting: teeth not set in neutral zone, especially if no horizontal overlap → reduce width of teeth and provide horizontal overlap.',
    keyPoints: [
      'Unilateral pain from premature contact/poor articulation',
      'Treat by analysing occlusion then spot grinding',
      'Cheek/tongue biting from teeth outside neutral zone',
      'Treat by reducing tooth width and providing horizontal overlap'
    ],
    keywords: ['premature contact', 'articulation', 'neutral zone', 'cheek biting', 'tongue biting'],
    pageRef: 3
  },
  {
    id: 'c1-18',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Denture Displaces on Opening/Speech',
    text: 'Denture displaces on opening or during speech. Causes: 1. Over-extension of border. 2. Under-extension of border. 3. Anterior teeth too far forward of ridge. 4. Upper: a) Inadequate post dam, b) Over-extension of post dam, c) Bulky flanges, d) Interference of coronoid process on opening. 5. Lower: a) Incorrect shape of polished surfaces, b) Excess thickness of flange in region of modiolus. 6. Posterior teeth outside neutral zone. 7. Insufficient room for tongue.',
    keyPoints: [
      'Over-extension: reduce border, trace new in acrylic resin',
      'Under-extension: trace new border and replace',
      'Anterior teeth too far forward: reposition, likely need remake',
      'Inadequate post dam: trace and reprocess or cold cure addition',
      'Over-extension of post dam: remove excess and replace',
      'Bulky flanges/coronoid interference: reduce flange thickness',
      'Lower: recontour polished surfaces, reduce flange at modiolus',
      'Posterior teeth outside neutral zone: reduce width or remake',
      'Insufficient tongue room: increase/remake'
    ],
    keywords: ['denture displacement', 'post dam', 'overextension', 'coronoid', 'modiolus', 'neutral zone'],
    pageRef: 4
  },
  {
    id: 'c1-19',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Speech Defect, Poor Mastication, Dry Mouth with Dentures',
    text: 'Speech defect with new F/F: encouragement and perseverance, reduce thickness of denture to provide more tongue space. Poor mastication from cuspless teeth: provide grooves in teeth (inverted cusps). Dry mouth: lack of tolerance → appropriate mouthwash, encouragement, medication.',
    keyPoints: [
      'Speech defect: encourage perseverance, reduce denture thickness for tongue space',
      'Poor mastication with cuspless teeth: add grooves (inverted cusps)',
      'Dry mouth: mouthwash, encouragement, consider medication'
    ],
    keywords: ['speech defect', 'mastication', 'cuspless teeth', 'dry mouth', 'tongue space'],
    pageRef: 4
  },
  {
    id: 'c1-20',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Inability to Accommodate, Nausea, Teeth Meet Too Soon',
    text: 'General inability to accommodate: menopausal, age changes, high oral awareness → meticulous attention to detail, maybe soft lining and encouragement. Nausea: 1. Denture extended onto soft palate → reduce. 2. Lack of retention → correct, check post dam. 3. Reduced tongue space → recontour polished surfaces. 4. Inability to accept large amount of acrylic → horseshoe design for upper. "Teeth meet too soon" / "can\'t open mouth far enough for food": increased occlusal face height → reduce or remake.',
    keyPoints: [
      'Inability to accommodate: menopausal/age/high oral awareness',
      'Nausea from extension onto soft palate: reduce',
      'Nausea from lack of retention: correct, check post dam',
      'Nausea from reduced tongue space: recontour polished surfaces',
      'Horseshoe design if patient cannot tolerate acrylic bulk',
      'Teeth meet too soon = increased OFH → reduce or remake'
    ],
    keywords: ['nausea', 'accommodation', 'horseshoe design', 'OFH', 'soft palate'],
    pageRef: 4
  },
  {
    id: 'c1-21',
    topic: 'dentures',
    subtopic: 'Common Denture Complaints',
    title: 'Appearance and Midline Fracture',
    text: 'Appearance problems: 1. Insufficient attention at try-in stage → correct. 2. Unwillingness of patient to put function before appearance → attempt to reach compromise. Midline fracture: 1. Poor fit of dentures → reline/remake. 2. Teeth set outside ridge → remake. 3. F/- set against natural teeth → metal palate with backings. 4. Stress fracture → rebase.',
    keyPoints: [
      'Appearance: correct at try-in stage or compromise with patient',
      'Midline fracture from poor fit: reline or remake',
      'Teeth outside ridge: remake needed',
      'F/- against natural teeth: metal palate with backings',
      'Stress fracture: rebase'
    ],
    keywords: ['midline fracture', 'appearance', 'rebase', 'reline', 'metal palate'],
    pageRef: 4
  },
  {
    id: 'c1-22',
    topic: 'articulators-occlusion',
    subtopic: 'Articulators',
    title: 'Types of Articulators',
    text: 'Simple Hinge: Opening and closing movement only. Fixed Average Value (FAV): Opening and closing, lateral excursions, protrusive excursion. Some have adjustable incisal tables, others have table set to 10 degrees. Condylar guidance angle 30 degrees. Semi-Adjustable: Vary condylar guidance angle, immediate side shift, progressive side shift, adjustable incisal guidance table. Work in conjunction with facebow. Fully Adjustable: All adjustments of semi-adjustable with additional intercondylar distance and adjustment of condylar plane. Relies on facebow and set of tracings.',
    keyPoints: [
      'Simple hinge: opening and closing only',
      'FAV: opening, closing, lateral excursions, protrusive excursion',
      'FAV condylar guidance angle is 30 degrees',
      'Semi-adjustable: vary condylar guidance, ISS, PSS, incisal guidance',
      'Semi-adjustable works with facebow',
      'Fully adjustable: adds intercondylar distance and condylar plane adjustment',
      'Fully adjustable relies on facebow and tracings'
    ],
    keywords: ['articulator', 'simple hinge', 'FAV', 'semi-adjustable', 'fully adjustable', 'facebow'],
    imageUrl: '/images/osce/page05_img01.webp',
    imageAlt: 'Simple hinge articulator (Type 1)',
    pageRef: 5
  },
  {
    id: 'c1-23',
    topic: 'articulators-occlusion',
    subtopic: 'Occlusion',
    title: 'Occlusion Key Concepts',
    text: 'Terminal Hinge Axis: most retruded position of mandible in relation to maxilla. Determined by TMJ. Mandible moves in purely rotational movement in this position. Can open 20-25mm without leaving this position. Mandibular TRANSLATION allows further opening to max 50mm. Working side: rotating condyle, side to which mandible moves during functional movement. Non-working side: orbiting condyle, the side opposite working side during lateral excursion. Immediate Side Shift (ISS): 0.3mm. Working condyle can move laterally – initial lateral movement (Bennett movement). Progressive Side Shift (PSS): Bennett angle, obtained after non-working side condyle has moved anteriorly and medially. 15 degrees on FAV.',
    keyPoints: [
      'Terminal hinge axis: most retruded mandibular position',
      'Purely rotational movement up to 20-25mm opening',
      'Translation allows further opening to 50mm',
      'Working side: rotating condyle, side mandible moves toward',
      'Non-working side: orbiting condyle, opposite to working side',
      'ISS = 0.3mm, initial lateral movement (Bennett movement)',
      'PSS = Bennett angle, 15 degrees on FAV'
    ],
    keywords: ['terminal hinge axis', 'working side', 'non-working side', 'ISS', 'PSS', 'Bennett', 'translation'],
    pageRef: 5
  },
  {
    id: 'c1-24',
    topic: 'articulators-occlusion',
    subtopic: 'Occlusion',
    title: 'FAV and Semi-Adjustable Articulator Settings',
    text: 'Condylar angle on FAV: 30 degrees. Intercondylar distance on FAV: 4 inches/110mm. ISS on semi-adjustable: 0.3mm. PSS on semi-adjustable: 6 degrees. Condylar guidance on semi-adjustable: 30 degrees.',
    keyPoints: [
      'FAV condylar angle: 30 degrees',
      'FAV intercondylar distance: 4 inches (110mm)',
      'Semi-adjustable ISS: 0.3mm',
      'Semi-adjustable PSS: 6 degrees',
      'Semi-adjustable condylar guidance: 30 degrees'
    ],
    keywords: ['condylar angle', 'intercondylar distance', 'ISS', 'PSS', 'condylar guidance', '30 degrees'],
    pageRef: 5
  },
  {
    id: 'c1-25',
    topic: 'crowns-restorations',
    subtopic: 'Crown Faults',
    title: 'Crown Faults Checklist',
    text: 'Crown faults to check: Perforation. Marginal deficit. Occlusion. Premature contacts. Margins – rough/chipped/bent/curled, overextended/underextended horizontally/vertically. Proximal contacts – open/tight. Morphology. Position and alignment and shade/shape/size.',
    keyPoints: [
      'Check for perforation',
      'Check marginal deficit',
      'Check occlusion and premature contacts',
      'Margins: rough, chipped, bent, curled, over/under-extended',
      'Proximal contacts: open or tight',
      'Check morphology',
      'Check position, alignment, shade, shape, size'
    ],
    keywords: ['crown faults', 'perforation', 'marginal deficit', 'proximal contacts', 'occlusion'],
    pageRef: 6
  },
  {
    id: 'c1-26',
    topic: 'crowns-restorations',
    subtopic: 'Reg Rim Faults',
    title: 'Registration Rim Dimensions and Faults',
    text: 'Maxillary rim should be 22mm high. Mandibular rim should be 18mm high. 4-6mm thickness anteriorly and 8-10mm thick posteriorly. Should be over ridge.',
    keyPoints: [
      'Maxillary rim height: 22mm',
      'Mandibular rim height: 18mm',
      'Anterior thickness: 4-6mm',
      'Posterior thickness: 8-10mm',
      'Rim should be positioned over the ridge'
    ],
    keywords: ['reg rim', 'registration rim', '22mm', '18mm', 'maxillary', 'mandibular'],
    pageRef: 6
  },
  {
    id: 'c1-27',
    topic: 'crowns-restorations',
    subtopic: 'Impression Faults',
    title: 'Impression Faults',
    text: 'Check margins. Folds between heavy bodied and wash. Tears and blows. Air bubbles/surface details. Drags. Check adjacent teeth – contact points, morphology. Impression material should be well mixed and fully set and still seated in tray. Bubbles – material set too quickly or bubbles introduced during mixing. Voids – irregular shaped voids from moisture/debris on surface. Rough/uneven – incomplete set due to premature removal, improper mixing or surface contaminants; a set that\'s too rapid will give poor surface reproduction. Other faults: lack of material, lack of wash, tray too small.',
    keyPoints: [
      'Check margins for accuracy',
      'Folds between heavy body and wash material',
      'Tears and blows indicate removal or material issues',
      'Air bubbles from fast setting or mixing errors',
      'Drags from movement during setting',
      'Voids from moisture or debris on surface',
      'Rough/uneven from premature removal or improper mixing',
      'Material must be well mixed, fully set, still in tray',
      'Common faults: lack of material, lack of wash, tray too small'
    ],
    keywords: ['impression faults', 'bubbles', 'voids', 'drags', 'tears', 'blows', 'wash'],
    imageUrl: '/images/osce/page06_img01.webp',
    imageAlt: 'Impression showing lingual and buccal drag',
    pageRef: 6
  },
  {
    id: 'c1-28',
    topic: 'splinting-trauma',
    subtopic: 'Avulsed Tooth Advice',
    title: 'Avulsed Upper Central: Advice and Management',
    text: 'Can be over phone or to actor – actor may not want to put tooth back in. Only re-implant permanent teeth. Ideally should be <60 minutes extra-oral time. Questions to ask: WHEN, WHERE, HOW did it occur? Head injury (concussion)? Previous medical/dental history (infection risk?) Disturbance in the bite – may indicate luxation injury with displacement, alveolar/jaw fracture. Reaction to cold/heat – exposure of pulp. Phone advice: hold tooth by crown not root (white fat bit not long bit), if dirty rinse gently in milk/tap water. Re-implant ASAP. Ask child to bite gently on folded handkerchief. Attend dentist immediately. If not comfortable re-implanting – store in MILK (best), labial sulcus or saline. Do not scrub or disinfect tooth, consider tetanus. In practice: re-implant with gentle finger pressure, check position clinically & radiographically, flexible splint for 2 weeks. OHI & soft food. Will need RCT in closed apex before splint removal. Dress with CaOH2. Warn about root resorption – ankylosis.',
    keyPoints: [
      'Only re-implant permanent teeth',
      'Ideally <60 minutes extra-oral time',
      'Ask WHEN, WHERE, HOW; check for head injury, bite disturbance',
      'Hold by crown, not root; rinse in milk/tap water if dirty',
      'Best storage medium is MILK, then labial sulcus, then saline',
      'Do not scrub or disinfect the tooth',
      'Flexible splint for 2 weeks',
      'Need RCT in closed apex before splint removal',
      'Dress with CaOH2',
      'Warn about root resorption and ankylosis',
      'Consider tetanus'
    ],
    keywords: ['avulsed tooth', 'reimplantation', 'milk', 'splint', 'RCT', 'CaOH2', 'ankylosis', 'root resorption'],
    pageRef: 8
  }
];

export const questions1: Question[] = [
  // === SPLINTING (c1-01) ===
  {
    id: 'q1-001', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'flashcard',
    question: 'How many teeth either side should a splint extend to when splinting an avulsed tooth?',
    answer: 'One tooth either side of the avulsed tooth.',
    keywords: ['splint', 'avulsed', 'one tooth'], difficulty: 'easy'
  },
  {
    id: 'q1-002', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'mcq',
    question: 'What is the wire thickness used for a composite and wire splint?',
    options: ['0.3mm', '0.4mm', '0.6mm', '0.8mm'],
    correctOptionIndex: 2,
    answer: '0.6mm',
    keywords: ['wire', 'splint', '0.6mm'], difficulty: 'medium'
  },
  {
    id: 'q1-003', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'fill-blank',
    question: 'Complete: Cut the wire and bend to fit the teeth – near the _____ third.',
    fullText: 'Cut the wire and bend to fit the teeth – near the incisal third.',
    blankWord: 'incisal',
    answer: 'incisal',
    keywords: ['wire', 'incisal third', 'splint'], difficulty: 'medium'
  },
  {
    id: 'q1-004', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'free-text',
    question: 'Why should you choose a darker shade of composite when placing a splint?',
    answer: 'To aid removal of the splint later.',
    acceptableAnswers: ['To aid removal', 'To make it easier to remove later', 'Easier to identify and remove'],
    keywords: ['darker shade', 'composite', 'removal'], difficulty: 'medium'
  },
  {
    id: 'q1-005', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'flashcard',
    question: 'What type of splint is the easiest and cheapest for an avulsed tooth?',
    answer: 'Composite and wire splint.',
    keywords: ['composite', 'wire', 'splint', 'cheapest'], difficulty: 'easy'
  },
  {
    id: 'q1-006', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'mcq',
    question: 'How many small balls of composite should be prepared before placing a splint?',
    options: ['3', '4', '6', '8'],
    correctOptionIndex: 2,
    answer: '6',
    keywords: ['composite', 'balls', 'preparation'], difficulty: 'medium'
  },
  {
    id: 'q1-007', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'fill-blank',
    question: 'Complete: Smooth away from _____ margin. Make sure all tips of wire are covered.',
    fullText: 'Smooth away from gingival margin. Make sure all tips of wire are covered.',
    blankWord: 'gingival',
    answer: 'gingival',
    keywords: ['gingival', 'margin', 'smooth'], difficulty: 'easy'
  },
  {
    id: 'q1-008', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'free-text',
    question: 'List the steps in order for bonding a splint wire to teeth.',
    answer: 'Acid etch, wash, bond, apply first composite layer with flat plastic, apply wire, cure, apply second composite layer, cure.',
    acceptableAnswers: ['Acid etch, wash, bond, composite, wire, cure, composite, cure', 'Etch wash bond then composite and wire in two layers with curing'],
    keywords: ['acid etch', 'wash', 'bond', 'composite', 'cure'], difficulty: 'hard'
  },
  {
    id: 'q1-009', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'flashcard',
    question: 'How should you stabilise the avulsed tooth before placing a splint?',
    answer: 'Get the patient to bite on gauze to stabilise the tooth.',
    keywords: ['stabilise', 'gauze', 'bite'], difficulty: 'easy'
  },

  // === BRIDGE TYPES (c1-02 to c1-05) ===
  {
    id: 'q1-010', contentId: 'c1-02', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'flashcard',
    question: 'What are the key features of a fixed-fixed bridge?',
    answer: 'Both abutments are crowned with rigid connectors at either end of the edentulous area. Preparations need to be parallel.',
    keywords: ['fixed-fixed', 'rigid connectors', 'parallel'], difficulty: 'easy'
  },
  {
    id: 'q1-011', contentId: 'c1-02', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'mcq',
    question: 'Which bridge type requires parallel preparations?',
    options: ['Fixed-moveable', 'Cantilever', 'Fixed-fixed', 'Resin-bonded'],
    correctOptionIndex: 2,
    answer: 'Fixed-fixed bridge requires parallel preparations.',
    keywords: ['fixed-fixed', 'parallel', 'preparations'], difficulty: 'medium'
  },
  {
    id: 'q1-012', contentId: 'c1-03', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'flashcard',
    question: 'What are the key features of a fixed-moveable bridge?',
    answer: 'Pontic anchored rigidly at one end and via a moveable joint at the minor retainer. Preps do not need to be parallel.',
    keywords: ['fixed-moveable', 'moveable joint', 'minor retainer'], difficulty: 'medium'
  },
  {
    id: 'q1-013', contentId: 'c1-03', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'fill-blank',
    question: 'Complete: In a fixed-moveable bridge, the pontic is anchored rigidly at one end and via a moveable joint at the _____ retainer.',
    fullText: 'In a fixed-moveable bridge, the pontic is anchored rigidly at one end and via a moveable joint at the minor retainer.',
    blankWord: 'minor',
    answer: 'minor',
    keywords: ['minor retainer', 'fixed-moveable'], difficulty: 'medium'
  },
  {
    id: 'q1-014', contentId: 'c1-04', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'flashcard',
    question: 'What is a cantilever bridge?',
    answer: 'A bridge where the pontic is anchored at one end of the edentulous area only (one abutment tooth).',
    keywords: ['cantilever', 'one end', 'pontic'], difficulty: 'easy'
  },
  {
    id: 'q1-015', contentId: 'c1-05', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'flashcard',
    question: 'What are the advantages of a resin-bonded bridge?',
    answer: 'Most minimal tooth preparation, easiest to rebond, used for short-span single tooth edentulous areas. Bonded with adhesive resin.',
    keywords: ['resin-bonded', 'minimal prep', 'rebond'], difficulty: 'easy'
  },
  {
    id: 'q1-016', contentId: 'c1-05', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'mcq',
    question: 'Which bridge type requires the least tooth preparation?',
    options: ['Fixed-fixed', 'Fixed-moveable', 'Cantilever', 'Resin-bonded'],
    correctOptionIndex: 3,
    answer: 'Resin-bonded bridge requires the most minimal preparation.',
    keywords: ['resin-bonded', 'minimal prep'], difficulty: 'easy'
  },
  {
    id: 'q1-017', contentId: 'c1-05', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'free-text',
    question: 'What type of bridge is most suitable for a short-span single tooth edentulous area in a young patient with intact adjacent teeth?',
    answer: 'Resin-bonded bridge.',
    acceptableAnswers: ['Resin bonded bridge', 'Resin-bonded', 'Maryland bridge', 'Adhesive bridge'],
    keywords: ['resin-bonded', 'young patient', 'short span'], difficulty: 'medium'
  },
  {
    id: 'q1-018', contentId: 'c1-02', topic: 'bridges', subtopic: 'Bridge Types',
    type: 'mcq',
    question: 'In which bridge type do preps NOT need to be parallel?',
    options: ['Fixed-fixed', 'Fixed-moveable', 'Both fixed-fixed and cantilever', 'None – all need parallel preps'],
    correctOptionIndex: 1,
    answer: 'Fixed-moveable bridge – preps do not need to be parallel because of the moveable joint.',
    keywords: ['fixed-moveable', 'parallel', 'preps'], difficulty: 'medium'
  },

  // === BRIDGE FAULTS (c1-06) ===
  {
    id: 'q1-019', contentId: 'c1-06', topic: 'bridges', subtopic: 'Bridge Faults',
    type: 'free-text',
    question: 'List at least 5 things to check when assessing a bridge for faults.',
    answer: 'Appearance/shade, margins, interproximal contacts, embrasures, occlusion, width of connector, correct prep, die spacer, parallel preps, gingival clearance on pontic.',
    acceptableAnswers: ['Appearance, margins, contacts, embrasures, occlusion', 'Shade, margins, interproximal contacts, embrasures, occlusion, connector width'],
    keywords: ['bridge faults', 'appearance', 'margins', 'contacts', 'occlusion'], difficulty: 'hard'
  },
  {
    id: 'q1-020', contentId: 'c1-06', topic: 'bridges', subtopic: 'Bridge Faults',
    type: 'flashcard',
    question: 'What is the purpose of a die spacer in bridge fabrication?',
    answer: 'Die spacer provides enough space for cement. If not applied, it will affect the fit of the bridge.',
    keywords: ['die spacer', 'cement', 'fit'], difficulty: 'medium'
  },
  {
    id: 'q1-021', contentId: 'c1-06', topic: 'bridges', subtopic: 'Bridge Faults',
    type: 'mcq',
    question: 'What does a missing die spacer lead to in bridge fabrication?',
    options: ['Increased porosity', 'Poor shade match', 'Affected fit due to no cement space', 'Weakened connector'],
    correctOptionIndex: 2,
    answer: 'Affected fit – die spacer provides enough space for cement.',
    keywords: ['die spacer', 'cement space', 'fit'], difficulty: 'medium'
  },
  {
    id: 'q1-022', contentId: 'c1-06', topic: 'bridges', subtopic: 'Bridge Faults',
    type: 'fill-blank',
    question: 'Complete: Embrasures should be checked – if too big or too small they can create a _____ trap.',
    fullText: 'Embrasures should be checked – if too big or too small they can create a plaque trap.',
    blankWord: 'plaque',
    answer: 'plaque',
    keywords: ['embrasures', 'plaque trap'], difficulty: 'easy'
  },

  // === BRIDGE DECISION TREE (c1-07) ===
  {
    id: 'q1-023', contentId: 'c1-07', topic: 'bridges', subtopic: 'Bridge Decision Tree',
    type: 'flashcard',
    question: 'When is a resin-bonded bridge indicated over a conventional bridge?',
    answer: 'Young patient, intact adjacent teeth, short span (1 pontic), simple saddle, good ridge form, moderate loading, long clinical crowns.',
    keywords: ['resin-bonded', 'indications', 'young patient'], difficulty: 'medium'
  },
  {
    id: 'q1-024', contentId: 'c1-07', topic: 'bridges', subtopic: 'Bridge Decision Tree',
    type: 'mcq',
    question: 'What is the maximum number of pontics generally recommended for a conventional bridge?',
    options: ['2 pontics', '3 pontics', '4 pontics', '6 pontics'],
    correctOptionIndex: 2,
    answer: '4 pontics maximum for a conventional bridge.',
    keywords: ['conventional bridge', 'pontics', 'maximum'], difficulty: 'medium'
  },
  {
    id: 'q1-025', contentId: 'c1-07', topic: 'bridges', subtopic: 'Bridge Decision Tree',
    type: 'free-text',
    question: 'When would a partial denture be indicated instead of a bridge to replace missing teeth?',
    answer: 'Long span, multiple saddles, resorbed ridge, parafunction/heavy function, participant in contact sports.',
    acceptableAnswers: ['Long span, multiple saddles, resorbed ridge, heavy function', 'Long span, resorbed ridge, parafunction, contact sports'],
    keywords: ['partial denture', 'long span', 'resorbed ridge', 'parafunction'], difficulty: 'medium'
  },
  {
    id: 'q1-026', contentId: 'c1-07', topic: 'bridges', subtopic: 'Bridge Decision Tree',
    type: 'fill-blank',
    question: 'Complete: Before considering bridgework, check there are no general contraindications and no active _____/periradicular/periodontal disease.',
    fullText: 'Before considering bridgework, check there are no general contraindications and no active pulpal/periradicular/periodontal disease.',
    blankWord: 'pulpal',
    answer: 'pulpal',
    keywords: ['contraindications', 'pulpal', 'bridgework'], difficulty: 'medium'
  },

  // === BRIDGE REPAIR (c1-08) ===
  {
    id: 'q1-027', contentId: 'c1-08', topic: 'bridges', subtopic: 'Bridge Repair',
    type: 'flashcard',
    question: 'How do you repair a porcelain fracture on a bridge?',
    answer: 'Use a silane coupling agent and composite to repair the porcelain.',
    keywords: ['porcelain', 'silane', 'composite', 'repair'], difficulty: 'medium'
  },
  {
    id: 'q1-028', contentId: 'c1-08', topic: 'bridges', subtopic: 'Bridge Repair',
    type: 'mcq',
    question: 'What material is used to repair small marginal defects on a bridge?',
    options: ['Amalgam', 'Composite', 'GIC', 'Silane coupling agent'],
    correctOptionIndex: 2,
    answer: 'GIC (Glass Ionomer Cement) if the marginal defect is small.',
    keywords: ['GIC', 'marginal defects', 'repair'], difficulty: 'medium'
  },
  {
    id: 'q1-029', contentId: 'c1-08', topic: 'bridges', subtopic: 'Bridge Repair',
    type: 'fill-blank',
    question: 'Complete: Occlusal defects on a bridge are repaired with _____.',
    fullText: 'Occlusal defects on a bridge are repaired with amalgam.',
    blankWord: 'amalgam',
    answer: 'amalgam',
    keywords: ['occlusal defects', 'amalgam', 'repair'], difficulty: 'medium'
  },
  {
    id: 'q1-030', contentId: 'c1-08', topic: 'bridges', subtopic: 'Bridge Repair',
    type: 'free-text',
    question: 'What are the options for a patient with terminal dentition whose bridge has failed?',
    answer: 'Extract and no replacement, or dentures/overdentures, or implants with or without bone graft.',
    acceptableAnswers: ['Dentures, overdentures, or implants with or without bone graft', 'Extract then dentures/overdentures or implants'],
    keywords: ['terminal dentition', 'dentures', 'overdentures', 'implants'], difficulty: 'hard'
  },

  // === BRIDGE FAILURE (c1-09) ===
  {
    id: 'q1-031', contentId: 'c1-09', topic: 'bridges', subtopic: 'Bridge Failure',
    type: 'flashcard',
    question: 'What are the main reasons for bridge failure?',
    answer: 'Not cemented properly, loss of retention, mechanical failure, abutment failure (caries/perio/pulp/trauma), distortion, occlusal wear/perforation, failure of soldered joint, design failure.',
    keywords: ['bridge failure', 'cementation', 'retention', 'mechanical'], difficulty: 'hard'
  },
  {
    id: 'q1-032', contentId: 'c1-09', topic: 'bridges', subtopic: 'Bridge Failure',
    type: 'mcq',
    question: 'What cement should be used for bridges instead of GIC?',
    options: ['Zinc phosphate', 'Polycarboxylate', 'Panavia', 'Zinc oxide eugenol'],
    correctOptionIndex: 2,
    answer: 'Panavia – using GIC instead of Panavia is given as an example of improper cementation.',
    keywords: ['Panavia', 'GIC', 'cementation'], difficulty: 'hard'
  },
  {
    id: 'q1-033', contentId: 'c1-09', topic: 'bridges', subtopic: 'Bridge Failure',
    type: 'fill-blank',
    question: 'Complete: To check bridge seal, try to rock the bridge on abutments – loss of seal is indicated by _____ bubbles.',
    fullText: 'Try to rock the bridge on abutments – loss of seal is indicated by saliva bubbles.',
    blankWord: 'saliva',
    answer: 'saliva',
    keywords: ['rock', 'seal', 'saliva bubbles'], difficulty: 'medium'
  },
  {
    id: 'q1-034', contentId: 'c1-09', topic: 'bridges', subtopic: 'Bridge Failure',
    type: 'free-text',
    question: 'What are the types of abutment failure in bridges?',
    answer: 'Caries (fixed-fixed: only one may loosen leading to caries), periodontal disease (mobility, migration, tooth loss), pulp involvement (difficult access), and trauma (crown/root fracture).',
    acceptableAnswers: ['Caries, perio, pulp, trauma', 'Caries, periodontal disease, pulp problems, trauma'],
    keywords: ['abutment failure', 'caries', 'perio', 'pulp', 'trauma'], difficulty: 'hard'
  },
  {
    id: 'q1-035', contentId: 'c1-09', topic: 'bridges', subtopic: 'Bridge Failure',
    type: 'mcq',
    question: 'What symptom may indicate loss of seal under a bridge?',
    options: ['Sensitivity to cold', 'Bad taste', 'Gingival bleeding', 'Tooth mobility'],
    correctOptionIndex: 1,
    answer: 'Bad taste can indicate loss of seal under a bridge.',
    keywords: ['bad taste', 'loss of seal', 'bridge'], difficulty: 'easy'
  },
  {
    id: 'q1-036', contentId: 'c1-09', topic: 'bridges', subtopic: 'Bridge Failure',
    type: 'flashcard',
    question: 'How can mechanical failure of a bridge be avoided?',
    answer: 'By having adequate rigidity of the framework, good bonding alloy, and suitably treated porcelain.',
    keywords: ['mechanical failure', 'rigidity', 'bonding alloy', 'porcelain'], difficulty: 'medium'
  },
  {
    id: 'q1-037', contentId: 'c1-09', topic: 'bridges', subtopic: 'Bridge Failure',
    type: 'fill-blank',
    question: 'Complete: Occlusal wear/perforation could happen if the crown is too _____.',
    fullText: 'Occlusal wear/perforation could happen if the crown is too high.',
    blankWord: 'high',
    answer: 'high',
    keywords: ['occlusal wear', 'perforation', 'crown too high'], difficulty: 'easy'
  },

  // === ACRYLIC / DENTURE FAULTS (c1-10) ===
  {
    id: 'q1-038', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'flashcard',
    question: 'What causes gaseous porosity in acrylic dentures?',
    answer: 'Monomer temperature too high (should not be over 103 degrees). Results in bubbles in the acrylic.',
    keywords: ['gaseous porosity', 'monomer', 'temperature', '103'], difficulty: 'medium'
  },
  {
    id: 'q1-039', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'mcq',
    question: 'What temperature should monomer not exceed to avoid gaseous porosity?',
    options: ['90 degrees', '100 degrees', '103 degrees', '110 degrees'],
    correctOptionIndex: 2,
    answer: '103 degrees – above this causes gaseous porosity (bubbles).',
    keywords: ['gaseous porosity', '103 degrees', 'monomer'], difficulty: 'medium'
  },
  {
    id: 'q1-040', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'flashcard',
    question: 'What causes contraction porosity in dentures and how does it look?',
    answer: 'Not enough acrylic dough in the mould. The denture looks bleached.',
    keywords: ['contraction porosity', 'bleached', 'acrylic dough'], difficulty: 'medium'
  },
  {
    id: 'q1-041', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'fill-blank',
    question: 'Complete: Granular porosity is caused by too much _____ (polymer) and not enough liquid (monomer).',
    fullText: 'Granular porosity is caused by too much powder (polymer) and not enough liquid (monomer).',
    blankWord: 'powder',
    answer: 'powder',
    keywords: ['granular porosity', 'powder', 'polymer', 'monomer'], difficulty: 'medium'
  },
  {
    id: 'q1-042', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'mcq',
    question: 'What does flash on a denture cause?',
    options: ['Decreased OVD', 'Increased OVD', 'Poor shade match', 'Porosity'],
    correctOptionIndex: 1,
    answer: 'Flash increases OVD – caused by not fully trimming acrylic flash or flask not fully closed.',
    keywords: ['flash', 'OVD', 'flask'], difficulty: 'medium'
  },
  {
    id: 'q1-043', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'flashcard',
    question: 'What causes rough surfaces on acrylic dentures?',
    answer: 'Insufficient separating medium (cold-mould-seal).',
    keywords: ['rough surfaces', 'separating medium', 'cold-mould-seal'], difficulty: 'medium'
  },
  {
    id: 'q1-044', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'free-text',
    question: 'Why might a denture fail to seat properly?',
    answer: 'Acrylic may have entered undercuts during processing.',
    acceptableAnswers: ['Acrylic entered undercuts', 'Acrylic in the undercuts', 'Undercut engagement by acrylic'],
    keywords: ['denture fails to seat', 'undercuts', 'acrylic'], difficulty: 'medium'
  },
  {
    id: 'q1-045', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'fill-blank',
    question: 'Complete: Pink acrylic covering teeth usually results from _____ being left on teeth.',
    fullText: 'Pink acrylic covering teeth usually results from wax being left on teeth.',
    blankWord: 'wax',
    answer: 'wax',
    keywords: ['pink acrylic', 'wax', 'teeth'], difficulty: 'easy'
  },
  {
    id: 'q1-046', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'mcq',
    question: 'What causes large voids in a denture?',
    options: ['Monomer temperature too high', 'Insufficient packing of acrylic', 'Too much separating medium', 'Flask opened too early'],
    correctOptionIndex: 1,
    answer: 'Large voids are usually from insufficiently packing acrylic.',
    keywords: ['voids', 'packing', 'acrylic'], difficulty: 'medium'
  },

  // === COMMON DENTURE COMPLAINTS (c1-11 to c1-21) ===
  {
    id: 'q1-047', contentId: 'c1-11', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'flashcard',
    question: 'What causes generalised discomfort over denture bearing areas?',
    answer: 'Increased occlusal face height, occlusal interference in lateral/protrusive movements, movement of denture bases over basal tissues, incorrect AP relationship of dentures, or increased free monomer.',
    keywords: ['generalised discomfort', 'OFH', 'occlusal interference'], difficulty: 'hard'
  },
  {
    id: 'q1-048', contentId: 'c1-11', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'How is increased free monomer in a denture treated?',
    options: ['Occlusal grinding', 'Soft reline', 'Remake with correct curing cycle', 'Add cold cure acrylic'],
    correctOptionIndex: 2,
    answer: 'Remake with correct curing cycle to reduce free monomer.',
    keywords: ['free monomer', 'curing cycle', 'remake'], difficulty: 'hard'
  },
  {
    id: 'q1-049', contentId: 'c1-12', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'flashcard',
    question: 'What denture problem causes a "collapsed face" appearance?',
    answer: 'Decreased occlusal face height. Treated by building up occlusal surfaces with cold cure or splint, then remaking one or both dentures.',
    keywords: ['collapsed face', 'decreased OFH'], difficulty: 'medium'
  },
  {
    id: 'q1-050', contentId: 'c1-13', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'What is the most likely denture-related cause of angular cheilitis?',
    options: ['Increased OVD', 'Lack of facial support', 'Over-extended flange', 'Poor occlusion'],
    correctOptionIndex: 1,
    answer: 'Lack of facial support (rarely occlusal face height).',
    keywords: ['angular cheilitis', 'facial support'], difficulty: 'medium'
  },
  {
    id: 'q1-051', contentId: 'c1-13', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'fill-blank',
    question: 'Complete: Angular cheilitis from dentures is treated by building up _____ prominence or moving anterior teeth forward.',
    fullText: 'Angular cheilitis from dentures is treated by building up canine prominence or moving anterior teeth forward.',
    blankWord: 'canine',
    answer: 'canine',
    keywords: ['angular cheilitis', 'canine prominence'], difficulty: 'medium'
  },
  {
    id: 'q1-052', contentId: 'c1-14', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'flashcard',
    question: 'What causes pain over the crest of the ridge with dentures?',
    answer: 'Irregular bony contour following abnormal healing pattern, or irregular soft tissue contour following socketted immediate dentures. Especially common in the lower anterior region.',
    keywords: ['crest of ridge', 'irregular bony contour', 'immediate dentures'], difficulty: 'medium'
  },
  {
    id: 'q1-053', contentId: 'c1-14', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'How is pain over the crest of the ridge treated when surgery is contra-indicated?',
    options: ['Occlusal grinding', 'Soft reline', 'Resilient lining', 'Rebase'],
    correctOptionIndex: 2,
    answer: 'Resilient lining for patients where surgery is contra-indicated.',
    keywords: ['resilient lining', 'crest of ridge', 'surgery contra-indicated'], difficulty: 'medium'
  },
  {
    id: 'q1-054', contentId: 'c1-15', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'free-text',
    question: 'What are the causes of localised pain with dentures?',
    answer: 'Irregularities on the fitting surface, premature contact between teeth, buried roots/unerupted teeth/cysts, and excess undercut utilised.',
    acceptableAnswers: ['Fitting surface irregularities, premature contacts, buried roots/cysts, excess undercut', 'Irregularities on fitting surface, premature contacts, buried roots, undercuts'],
    keywords: ['localised pain', 'fitting surface', 'premature contact', 'buried roots'], difficulty: 'medium'
  },
  {
    id: 'q1-055', contentId: 'c1-16', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'flashcard',
    question: 'What causes localised pain in the lower pre-molar region with dentures?',
    answer: 'Pressure on the superficial mental nerve. Treatment: relieve denture, soft lining, or surgery (rare, only in exceptional cases).',
    keywords: ['mental nerve', 'pre-molar', 'localised pain'], difficulty: 'medium'
  },
  {
    id: 'q1-056', contentId: 'c1-16', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'fill-blank',
    question: 'Complete: Localised pain in the lower pre-molar region is often caused by pressure on the superficial _____ nerve.',
    fullText: 'Localised pain in the lower pre-molar region is often caused by pressure on the superficial mental nerve.',
    blankWord: 'mental',
    answer: 'mental',
    keywords: ['mental nerve', 'pre-molar'], difficulty: 'medium'
  },
  {
    id: 'q1-057', contentId: 'c1-17', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'flashcard',
    question: 'What causes cheek and tongue biting with dentures?',
    answer: 'Teeth not set in the neutral zone, especially if no horizontal overlap. Treatment: reduce width of teeth and provide horizontal overlap.',
    keywords: ['cheek biting', 'tongue biting', 'neutral zone', 'horizontal overlap'], difficulty: 'medium'
  },
  {
    id: 'q1-058', contentId: 'c1-17', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'What is the treatment for pain on one side of the denture?',
    options: ['Reline', 'Spot grind after analysing occlusion and articulation', 'Remake', 'Add soft lining'],
    correctOptionIndex: 1,
    answer: 'Analyse occlusion and articulation, then spot grind the premature contact.',
    keywords: ['pain one side', 'premature contact', 'spot grind'], difficulty: 'medium'
  },
  {
    id: 'q1-059', contentId: 'c1-18', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'free-text',
    question: 'What upper denture causes can lead to the denture displacing on opening or during speech?',
    answer: 'Inadequate post dam, over-extension of post dam, bulky flanges, and interference of coronoid process on opening.',
    acceptableAnswers: ['Inadequate post dam, over-extended post dam, bulky flanges, coronoid interference', 'Post dam issues, bulky flanges, coronoid process interference'],
    keywords: ['denture displacement', 'post dam', 'coronoid', 'flanges'], difficulty: 'hard'
  },
  {
    id: 'q1-060', contentId: 'c1-18', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'What lower denture issue causes displacement during opening?',
    options: ['Inadequate post dam', 'Incorrect shape of polished surfaces', 'Too many teeth', 'Porosity in acrylic'],
    correctOptionIndex: 1,
    answer: 'Incorrect shape of polished surfaces or excess thickness of flange in region of modiolus.',
    keywords: ['lower denture', 'polished surfaces', 'modiolus'], difficulty: 'hard'
  },
  {
    id: 'q1-061', contentId: 'c1-19', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'flashcard',
    question: 'How do you manage a speech defect with new full/full dentures?',
    answer: 'Encouragement and perseverance. Reduce thickness of denture to provide more tongue space.',
    keywords: ['speech defect', 'tongue space', 'encouragement'], difficulty: 'easy'
  },
  {
    id: 'q1-062', contentId: 'c1-19', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'How is poor mastication with cuspless denture teeth managed?',
    options: ['Replace with cusped teeth', 'Provide grooves in teeth (inverted cusps)', 'Increase OVD', 'Reline denture'],
    correctOptionIndex: 1,
    answer: 'Provide grooves in the teeth (inverted cusps) to improve mastication.',
    keywords: ['poor mastication', 'cuspless teeth', 'inverted cusps', 'grooves'], difficulty: 'medium'
  },
  {
    id: 'q1-063', contentId: 'c1-20', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'flashcard',
    question: 'What are the causes of nausea with dentures?',
    answer: 'Denture extended onto soft palate, lack of retention, reduced tongue space, or inability to accept large amount of acrylic.',
    keywords: ['nausea', 'soft palate', 'retention', 'tongue space'], difficulty: 'medium'
  },
  {
    id: 'q1-064', contentId: 'c1-20', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'What denture design modification can help a patient who cannot tolerate the large amount of acrylic causing nausea?',
    options: ['Cu-sil design', 'Horseshoe design for upper', 'Skeletal design', 'Swing-lock design'],
    correctOptionIndex: 1,
    answer: 'Horseshoe design for the upper denture reduces the amount of palatal acrylic.',
    keywords: ['horseshoe design', 'nausea', 'acrylic'], difficulty: 'medium'
  },
  {
    id: 'q1-065', contentId: 'c1-20', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'fill-blank',
    question: 'Complete: "Teeth meet too soon" or "can\'t open mouth far enough for food" indicates increased _____ face height.',
    fullText: '"Teeth meet too soon" or "can\'t open mouth far enough for food" indicates increased occlusal face height.',
    blankWord: 'occlusal',
    answer: 'occlusal',
    keywords: ['teeth meet too soon', 'occlusal face height'], difficulty: 'easy'
  },
  {
    id: 'q1-066', contentId: 'c1-21', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'flashcard',
    question: 'What are the causes and treatments of midline denture fracture?',
    answer: 'Causes: poor fit of dentures (reline/remake), teeth set outside ridge (remake), F/- set against natural teeth (metal palate with backings), stress fracture (rebase).',
    keywords: ['midline fracture', 'rebase', 'reline', 'metal palate'], difficulty: 'hard'
  },
  {
    id: 'q1-067', contentId: 'c1-21', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'How is a midline fracture treated when denture is set against natural teeth (F/- case)?',
    options: ['Rebase', 'Reline', 'Metal palate with backings', 'Remake with horseshoe design'],
    correctOptionIndex: 2,
    answer: 'Metal palate with backings when F/- set against natural teeth.',
    keywords: ['midline fracture', 'metal palate', 'backings'], difficulty: 'hard'
  },

  // === ARTICULATORS (c1-22) ===
  {
    id: 'q1-068', contentId: 'c1-22', topic: 'articulators-occlusion', subtopic: 'Articulators',
    type: 'flashcard',
    question: 'What movements does a simple hinge articulator allow?',
    answer: 'Opening and closing movement only.',
    keywords: ['simple hinge', 'opening', 'closing'], difficulty: 'easy'
  },
  {
    id: 'q1-069', contentId: 'c1-22', topic: 'articulators-occlusion', subtopic: 'Articulators',
    type: 'mcq',
    question: 'What is the condylar guidance angle on a Fixed Average Value (FAV) articulator?',
    options: ['10 degrees', '20 degrees', '30 degrees', '45 degrees'],
    correctOptionIndex: 2,
    answer: '30 degrees.',
    keywords: ['FAV', 'condylar guidance', '30 degrees'], difficulty: 'medium'
  },
  {
    id: 'q1-070', contentId: 'c1-22', topic: 'articulators-occlusion', subtopic: 'Articulators',
    type: 'flashcard',
    question: 'What additional features does a fully adjustable articulator have over a semi-adjustable?',
    answer: 'Additional intercondylar distance adjustment and adjustment of the condylar plane. Relies on facebow and a set of tracings.',
    keywords: ['fully adjustable', 'intercondylar distance', 'condylar plane', 'tracings'], difficulty: 'medium'
  },
  {
    id: 'q1-071', contentId: 'c1-22', topic: 'articulators-occlusion', subtopic: 'Articulators',
    type: 'free-text',
    question: 'What adjustments can be made on a semi-adjustable articulator?',
    answer: 'Condylar guidance angle, immediate side shift, progressive side shift, and adjustable incisal guidance table. Works with a facebow.',
    acceptableAnswers: ['Condylar guidance angle, ISS, PSS, incisal guidance table', 'Vary condylar guidance, immediate side shift, progressive side shift, adjustable incisal guidance'],
    keywords: ['semi-adjustable', 'condylar guidance', 'ISS', 'PSS', 'facebow'], difficulty: 'hard'
  },
  {
    id: 'q1-072', contentId: 'c1-22', topic: 'articulators-occlusion', subtopic: 'Articulators',
    type: 'fill-blank',
    question: 'Complete: A semi-adjustable articulator works in conjunction with a _____.',
    fullText: 'A semi-adjustable articulator works in conjunction with a facebow.',
    blankWord: 'facebow',
    answer: 'facebow',
    keywords: ['semi-adjustable', 'facebow'], difficulty: 'easy'
  },
  {
    id: 'q1-073', contentId: 'c1-22', topic: 'articulators-occlusion', subtopic: 'Articulators',
    type: 'mcq',
    question: 'Which articulator type relies on a facebow and a set of tracings?',
    options: ['Simple hinge', 'Fixed average value', 'Semi-adjustable', 'Fully adjustable'],
    correctOptionIndex: 3,
    answer: 'Fully adjustable articulator relies on facebow and set of tracings.',
    keywords: ['fully adjustable', 'tracings', 'facebow'], difficulty: 'medium'
  },

  // === OCCLUSION (c1-23, c1-24) ===
  {
    id: 'q1-074', contentId: 'c1-23', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'flashcard',
    question: 'What is the terminal hinge axis?',
    answer: 'The most retruded position of the mandible in relation to the maxilla. Determined by the TMJ. Mandible moves in a purely rotational movement and can open 20-25mm without leaving this position.',
    keywords: ['terminal hinge axis', 'retruded', 'rotational', 'TMJ'], difficulty: 'medium'
  },
  {
    id: 'q1-075', contentId: 'c1-23', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'mcq',
    question: 'How far can the mandible open in purely rotational movement at the terminal hinge axis?',
    options: ['10-15mm', '20-25mm', '30-35mm', '40-50mm'],
    correctOptionIndex: 1,
    answer: '20-25mm opening in purely rotational movement. Translation allows further opening to 50mm.',
    keywords: ['terminal hinge axis', '20-25mm', 'rotational'], difficulty: 'medium'
  },
  {
    id: 'q1-076', contentId: 'c1-23', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'flashcard',
    question: 'What is the difference between working side and non-working side?',
    answer: 'Working side: rotating condyle, the side to which the mandible moves during a functional movement. Non-working side: orbiting condyle, the side opposite the working side during lateral excursion.',
    keywords: ['working side', 'non-working side', 'rotating', 'orbiting'], difficulty: 'medium'
  },
  {
    id: 'q1-077', contentId: 'c1-23', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'fill-blank',
    question: 'Complete: Immediate Side Shift is _____mm. Working condyle can move laterally – this is also known as Bennett movement.',
    fullText: 'Immediate Side Shift is 0.3mm. Working condyle can move laterally – this is also known as Bennett movement.',
    blankWord: '0.3',
    answer: '0.3',
    keywords: ['ISS', '0.3mm', 'Bennett movement'], difficulty: 'hard'
  },
  {
    id: 'q1-078', contentId: 'c1-23', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'mcq',
    question: 'What is the Progressive Side Shift (PSS) angle on a FAV articulator?',
    options: ['6 degrees', '10 degrees', '15 degrees', '30 degrees'],
    correctOptionIndex: 2,
    answer: '15 degrees on FAV. (Note: PSS on semi-adjustable is 6 degrees.)',
    keywords: ['PSS', '15 degrees', 'FAV', 'Bennett angle'], difficulty: 'hard'
  },
  {
    id: 'q1-079', contentId: 'c1-23', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'free-text',
    question: 'What is the maximum opening of the mandible and what allows it?',
    answer: 'Maximum opening is 50mm. Mandibular translation allows further opening beyond the 20-25mm purely rotational movement at the terminal hinge axis.',
    acceptableAnswers: ['50mm, allowed by mandibular translation', '50mm maximum opening via translation after rotational movement'],
    keywords: ['50mm', 'translation', 'maximum opening'], difficulty: 'medium'
  },
  {
    id: 'q1-080', contentId: 'c1-24', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'flashcard',
    question: 'What is the intercondylar distance on a FAV articulator?',
    answer: '4 inches or 110mm.',
    keywords: ['intercondylar distance', 'FAV', '110mm', '4 inches'], difficulty: 'medium'
  },
  {
    id: 'q1-081', contentId: 'c1-24', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'mcq',
    question: 'What is the PSS setting on a semi-adjustable articulator?',
    options: ['0.3mm', '6 degrees', '15 degrees', '30 degrees'],
    correctOptionIndex: 1,
    answer: '6 degrees. (Note: ISS on semi-adjustable is 0.3mm.)',
    keywords: ['PSS', 'semi-adjustable', '6 degrees'], difficulty: 'hard'
  },
  {
    id: 'q1-082', contentId: 'c1-24', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'fill-blank',
    question: 'Complete: Intercondylar distance on FAV is _____ inches (110mm).',
    fullText: 'Intercondylar distance on FAV is 4 inches (110mm).',
    blankWord: '4',
    answer: '4',
    keywords: ['intercondylar distance', '4 inches', 'FAV'], difficulty: 'medium'
  },
  {
    id: 'q1-083', contentId: 'c1-24', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'mcq',
    question: 'What is the condylar guidance on a semi-adjustable articulator?',
    options: ['6 degrees', '15 degrees', '30 degrees', '45 degrees'],
    correctOptionIndex: 2,
    answer: '30 degrees condylar guidance on semi-adjustable.',
    keywords: ['condylar guidance', 'semi-adjustable', '30 degrees'], difficulty: 'medium'
  },

  // === CROWN FAULTS (c1-25) ===
  {
    id: 'q1-084', contentId: 'c1-25', topic: 'crowns-restorations', subtopic: 'Crown Faults',
    type: 'free-text',
    question: 'List the things to check when assessing a crown for faults.',
    answer: 'Perforation, marginal deficit, occlusion, premature contacts, margins (rough/chipped/bent/curled, over/under-extended), proximal contacts (open/tight), morphology, position and alignment, shade/shape/size.',
    acceptableAnswers: ['Perforation, margins, occlusion, contacts, morphology, shade', 'Perforation, marginal deficit, occlusion, premature contacts, margins, proximal contacts, morphology, position, shade'],
    keywords: ['crown faults', 'perforation', 'margins', 'occlusion'], difficulty: 'hard'
  },
  {
    id: 'q1-085', contentId: 'c1-25', topic: 'crowns-restorations', subtopic: 'Crown Faults',
    type: 'flashcard',
    question: 'What margin faults can occur with crowns?',
    answer: 'Margins can be rough, chipped, bent, curled, overextended or underextended horizontally or vertically.',
    keywords: ['margins', 'rough', 'chipped', 'overextended', 'underextended'], difficulty: 'medium'
  },
  {
    id: 'q1-086', contentId: 'c1-25', topic: 'crowns-restorations', subtopic: 'Crown Faults',
    type: 'mcq',
    question: 'Which of the following is NOT a crown fault?',
    options: ['Perforation', 'Marginal deficit', 'Gaseous porosity', 'Premature contacts'],
    correctOptionIndex: 2,
    answer: 'Gaseous porosity is an acrylic denture fault, not a crown fault.',
    keywords: ['crown faults', 'gaseous porosity', 'denture fault'], difficulty: 'easy'
  },

  // === REG RIM FAULTS (c1-26) ===
  {
    id: 'q1-087', contentId: 'c1-26', topic: 'crowns-restorations', subtopic: 'Reg Rim Faults',
    type: 'flashcard',
    question: 'What are the correct dimensions for registration rims?',
    answer: 'Maxillary rim: 22mm high. Mandibular rim: 18mm high. 4-6mm thick anteriorly, 8-10mm thick posteriorly. Should be positioned over the ridge.',
    keywords: ['reg rim', '22mm', '18mm', 'dimensions'], difficulty: 'medium'
  },
  {
    id: 'q1-088', contentId: 'c1-26', topic: 'crowns-restorations', subtopic: 'Reg Rim Faults',
    type: 'mcq',
    question: 'What is the correct height for a maxillary registration rim?',
    options: ['15mm', '18mm', '22mm', '25mm'],
    correctOptionIndex: 2,
    answer: '22mm for maxillary rim (mandibular is 18mm).',
    keywords: ['maxillary rim', '22mm'], difficulty: 'medium'
  },
  {
    id: 'q1-089', contentId: 'c1-26', topic: 'crowns-restorations', subtopic: 'Reg Rim Faults',
    type: 'fill-blank',
    question: 'Complete: Mandibular registration rim should be _____mm high.',
    fullText: 'Mandibular registration rim should be 18mm high.',
    blankWord: '18',
    answer: '18',
    keywords: ['mandibular rim', '18mm'], difficulty: 'medium'
  },
  {
    id: 'q1-090', contentId: 'c1-26', topic: 'crowns-restorations', subtopic: 'Reg Rim Faults',
    type: 'mcq',
    question: 'What is the posterior thickness of a registration rim?',
    options: ['2-4mm', '4-6mm', '8-10mm', '12-14mm'],
    correctOptionIndex: 2,
    answer: '8-10mm posteriorly (4-6mm anteriorly).',
    keywords: ['reg rim', 'posterior thickness', '8-10mm'], difficulty: 'medium'
  },
  {
    id: 'q1-091', contentId: 'c1-26', topic: 'crowns-restorations', subtopic: 'Reg Rim Faults',
    type: 'free-text',
    question: 'Where should registration rims be positioned?',
    answer: 'Over the ridge.',
    acceptableAnswers: ['Over the ridge', 'Positioned over the ridge', 'On the ridge'],
    keywords: ['reg rim', 'over ridge', 'position'], difficulty: 'easy'
  },

  // === IMPRESSION FAULTS (c1-27) ===
  {
    id: 'q1-092', contentId: 'c1-27', topic: 'crowns-restorations', subtopic: 'Impression Faults',
    type: 'flashcard',
    question: 'What causes bubbles in dental impressions?',
    answer: 'Material allowed to set too quickly or bubbles introduced during the mixing process.',
    keywords: ['bubbles', 'impression', 'mixing', 'setting'], difficulty: 'medium'
  },
  {
    id: 'q1-093', contentId: 'c1-27', topic: 'crowns-restorations', subtopic: 'Impression Faults',
    type: 'mcq',
    question: 'What causes irregular shaped voids in an impression?',
    options: ['Air incorporation during mixing', 'Premature removal', 'Moisture or debris on the surface', 'Tray too large'],
    correctOptionIndex: 2,
    answer: 'Moisture or debris on the surface causes irregular shaped voids.',
    keywords: ['voids', 'moisture', 'debris', 'impression'], difficulty: 'medium'
  },
  {
    id: 'q1-094', contentId: 'c1-27', topic: 'crowns-restorations', subtopic: 'Impression Faults',
    type: 'fill-blank',
    question: 'Complete: Rough/uneven impression surface results from premature removal, improper mixing, or surface _____.',
    fullText: 'Rough/uneven impression surface results from premature removal, improper mixing, or surface contaminants.',
    blankWord: 'contaminants',
    answer: 'contaminants',
    keywords: ['rough', 'uneven', 'contaminants', 'impression'], difficulty: 'medium'
  },
  {
    id: 'q1-095', contentId: 'c1-27', topic: 'crowns-restorations', subtopic: 'Impression Faults',
    type: 'free-text',
    question: 'List at least 5 impression faults to check for.',
    answer: 'Margins, folds between heavy body and wash, tears and blows, air bubbles, drags, voids, rough/uneven surface, lack of material, lack of wash, tray too small.',
    acceptableAnswers: ['Margins, folds, tears, bubbles, drags, voids', 'Bubbles, voids, drags, tears, folds, margins, lack of material'],
    keywords: ['impression faults', 'bubbles', 'voids', 'drags', 'tears'], difficulty: 'hard'
  },
  {
    id: 'q1-096', contentId: 'c1-27', topic: 'crowns-restorations', subtopic: 'Impression Faults',
    type: 'flashcard',
    question: 'What causes drags in a dental impression?',
    answer: 'Movement of the tray or tissues during the setting of the impression material.',
    keywords: ['drags', 'movement', 'impression', 'setting'], difficulty: 'medium'
  },
  {
    id: 'q1-097', contentId: 'c1-27', topic: 'crowns-restorations', subtopic: 'Impression Faults',
    type: 'mcq',
    question: 'What can cause folds in a dental impression?',
    options: ['Tray too large', 'Folds between heavy bodied and wash material', 'Too much adhesive', 'Incorrect water temperature'],
    correctOptionIndex: 1,
    answer: 'Folds between heavy bodied and wash material.',
    keywords: ['folds', 'heavy body', 'wash', 'impression'], difficulty: 'medium'
  },

  // === AVULSED TOOTH ADVICE (c1-28) ===
  {
    id: 'q1-098', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'flashcard',
    question: 'What is the ideal extra-oral time for an avulsed tooth before reimplantation?',
    answer: 'Less than 60 minutes. Only permanent teeth should be reimplanted.',
    keywords: ['avulsed', '60 minutes', 'extra-oral', 'permanent'], difficulty: 'easy'
  },
  {
    id: 'q1-099', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'mcq',
    question: 'What is the best storage medium for an avulsed tooth that cannot be immediately reimplanted?',
    options: ['Tap water', 'Saline', 'Milk', 'Saliva'],
    correctOptionIndex: 2,
    answer: 'Milk is the best storage medium. Alternatives: labial sulcus or saline.',
    keywords: ['milk', 'storage', 'avulsed tooth'], difficulty: 'easy'
  },
  {
    id: 'q1-100', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'fill-blank',
    question: 'Complete: Hold the avulsed tooth by the _____, not the root.',
    fullText: 'Hold the avulsed tooth by the crown, not the root.',
    blankWord: 'crown',
    answer: 'crown',
    keywords: ['crown', 'root', 'handling', 'avulsed'], difficulty: 'easy'
  },
  {
    id: 'q1-101', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'free-text',
    question: 'What questions should you ask when a patient presents with an avulsed tooth?',
    answer: 'WHEN did it occur, WHERE did it occur, HOW did it occur. Also ask about head injury/concussion, previous medical/dental history (infection risk), disturbance in bite (luxation/fracture), reaction to cold/heat (pulp exposure), and whether the tooth or fragments were found.',
    acceptableAnswers: ['When, where, how it occurred, head injury, medical history, bite disturbance', 'When where how, concussion, PMH, bite disturbance, cold/heat sensitivity'],
    keywords: ['when', 'where', 'how', 'head injury', 'medical history'], difficulty: 'hard'
  },
  {
    id: 'q1-102', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'flashcard',
    question: 'What treatment is needed for a reimplanted avulsed tooth with a closed apex?',
    answer: 'Will need RCT (root canal treatment) in the closed apex before splint removal. Dress with CaOH2 (calcium hydroxide).',
    keywords: ['RCT', 'closed apex', 'CaOH2', 'calcium hydroxide'], difficulty: 'medium'
  },
  {
    id: 'q1-103', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'mcq',
    question: 'How long should a flexible splint be left on a reimplanted avulsed tooth?',
    options: ['1 week', '2 weeks', '4 weeks', '6 weeks'],
    correctOptionIndex: 1,
    answer: '2 weeks. Also give OHI and advise soft food.',
    keywords: ['splint', '2 weeks', 'avulsed', 'reimplanted'], difficulty: 'medium'
  },
  {
    id: 'q1-104', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'fill-blank',
    question: 'Complete: Warn the patient that reimplantation can lead to root _____ or ankylosis.',
    fullText: 'Warn the patient that reimplantation can lead to root resorption or ankylosis.',
    blankWord: 'resorption',
    answer: 'resorption',
    keywords: ['root resorption', 'ankylosis', 'reimplantation'], difficulty: 'medium'
  },
  {
    id: 'q1-105', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'mcq',
    question: 'Should deciduous (primary) avulsed teeth be reimplanted?',
    options: ['Yes, always', 'Yes, if within 30 minutes', 'No, only reimplant permanent teeth', 'Only if the child is over 6'],
    correctOptionIndex: 2,
    answer: 'No – only reimplant permanent teeth.',
    keywords: ['deciduous', 'permanent', 'reimplant'], difficulty: 'easy'
  },
  {
    id: 'q1-106', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'free-text',
    question: 'What phone advice would you give to a parent whose child has avulsed a permanent tooth?',
    answer: 'Hold tooth by crown not root. If dirty, rinse gently in milk or tap water. Reimplant ASAP. Ask child to bite gently on folded handkerchief to stabilise. Attend dentist immediately. If not comfortable reimplanting, store in milk (best), labial sulcus, or saline. Do not scrub or disinfect the tooth. Consider tetanus.',
    acceptableAnswers: ['Hold by crown, rinse in milk/water, reimplant or store in milk, attend dentist immediately, do not scrub', 'Crown not root, rinse gently, reimplant ASAP or store in milk, attend dentist, no scrubbing, consider tetanus'],
    keywords: ['phone advice', 'crown', 'milk', 'reimplant', 'do not scrub'], difficulty: 'hard'
  },

  // === Additional cross-topic questions ===
  {
    id: 'q1-107', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'free-text',
    question: 'Name the three types of porosity in acrylic dentures and their causes.',
    answer: 'Gaseous porosity (monomer temperature >103 degrees), contraction porosity (not enough acrylic dough in mould), granular porosity (too much powder/polymer, not enough liquid/monomer).',
    acceptableAnswers: ['Gaseous (high monomer temp), contraction (insufficient dough), granular (too much powder)', 'Gaseous porosity from high temperature, contraction porosity from insufficient dough, granular porosity from excess polymer'],
    keywords: ['gaseous', 'contraction', 'granular', 'porosity'], difficulty: 'hard'
  },
  {
    id: 'q1-108', contentId: 'c1-22', topic: 'articulators-occlusion', subtopic: 'Articulators',
    type: 'mcq',
    question: 'What movements does a Fixed Average Value articulator allow?',
    options: [
      'Opening and closing only',
      'Opening, closing, lateral excursions, and protrusive excursion',
      'All movements plus condylar plane adjustment',
      'Only lateral excursions'
    ],
    correctOptionIndex: 1,
    answer: 'Opening and closing, lateral excursions, and protrusive excursion. Some have adjustable incisal tables.',
    keywords: ['FAV', 'lateral excursion', 'protrusive'], difficulty: 'medium'
  },
  {
    id: 'q1-109', contentId: 'c1-23', topic: 'articulators-occlusion', subtopic: 'Occlusion',
    type: 'flashcard',
    question: 'What is progressive side shift (PSS)?',
    answer: 'Also known as the Bennett angle. Obtained after the non-working side condyle has moved anteriorly and medially. 15 degrees on FAV, 6 degrees on semi-adjustable.',
    keywords: ['PSS', 'Bennett angle', 'non-working side', '15 degrees'], difficulty: 'hard'
  },
  {
    id: 'q1-110', contentId: 'c1-11', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'fill-blank',
    question: 'Complete: Movement of denture bases over basal tissues is treated by soft or hard _____.',
    fullText: 'Movement of denture bases over basal tissues is treated by soft or hard reline.',
    blankWord: 'reline',
    answer: 'reline',
    keywords: ['reline', 'denture base', 'movement'], difficulty: 'easy'
  },
  {
    id: 'q1-111', contentId: 'c1-09', topic: 'bridges', subtopic: 'Bridge Failure',
    type: 'flashcard',
    question: 'What is the unique risk of a fixed-fixed bridge regarding abutment caries?',
    answer: 'In a fixed-fixed bridge, only one abutment may loosen while the other stays bonded, leading to undetected caries under the loosened retainer.',
    keywords: ['fixed-fixed', 'abutment', 'caries', 'loosen'], difficulty: 'hard'
  },
  {
    id: 'q1-112', contentId: 'c1-20', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'What causes "general inability to accommodate" new dentures?',
    options: [
      'Poor fit only',
      'Menopausal changes, age changes, high oral awareness',
      'Incorrect occlusion only',
      'Allergy to acrylic'
    ],
    correctOptionIndex: 1,
    answer: 'Menopausal changes, age changes, and high oral awareness. Treat with meticulous attention to detail, soft lining, and encouragement.',
    keywords: ['inability to accommodate', 'menopausal', 'age changes', 'oral awareness'], difficulty: 'medium'
  },
  {
    id: 'q1-113', contentId: 'c1-06', topic: 'bridges', subtopic: 'Bridge Faults',
    type: 'flashcard',
    question: 'What occlusal checks should be performed when assessing a bridge?',
    answer: 'Check for high contact in ICP (intercuspal position), non-working side interference, working-side interference, and protrusive interference.',
    keywords: ['occlusion', 'ICP', 'non-working side', 'working side', 'protrusion'], difficulty: 'hard'
  },
  {
    id: 'q1-114', contentId: 'c1-18', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'fill-blank',
    question: 'Complete: In the lower denture, excess thickness of flange in the region of the _____ can cause displacement.',
    fullText: 'In the lower denture, excess thickness of flange in the region of the modiolus can cause displacement.',
    blankWord: 'modiolus',
    answer: 'modiolus',
    keywords: ['modiolus', 'flange', 'lower denture', 'displacement'], difficulty: 'hard'
  },
  {
    id: 'q1-115', contentId: 'c1-27', topic: 'crowns-restorations', subtopic: 'Impression Faults',
    type: 'flashcard',
    question: 'What three common impression faults relate to material quantity and tray selection?',
    answer: 'Lack of material, lack of wash, and tray too small.',
    imageUrl: '/images/osce/page06_img01.webp',
    imageAlt: 'Impression fault examples',
    keywords: ['lack of material', 'lack of wash', 'tray too small'], difficulty: 'easy'
  },
  {
    id: 'q1-116', contentId: 'c1-07', topic: 'bridges', subtopic: 'Bridge Decision Tree',
    type: 'flashcard',
    question: 'What must be confirmed before planning any bridge?',
    answer: 'No general contraindications to bridgework and no active pulpal, periradicular, or periodontal disease.',
    keywords: ['contraindications', 'bridgework', 'pulpal', 'periodontal'], difficulty: 'medium'
  },
  {
    id: 'q1-117', contentId: 'c1-10', topic: 'dentures', subtopic: 'Acrylic Faults',
    type: 'flashcard',
    question: 'What causes over-extended flanges on dentures and what is the result?',
    answer: 'Over-extended flanges can cause soreness. Need to assess extension, stability, and appearance.',
    keywords: ['over-extended flange', 'soreness', 'extension'], difficulty: 'easy'
  },
  {
    id: 'q1-118', contentId: 'c1-15', topic: 'dentures', subtopic: 'Common Denture Complaints',
    type: 'mcq',
    question: 'What is the treatment for localised pain caused by irregularities on the fitting surface of a denture?',
    options: ['Reline', 'Spot grinding', 'Rebase', 'Remake'],
    correctOptionIndex: 1,
    answer: 'Spot grinding to remove the irregularities.',
    keywords: ['spot grinding', 'fitting surface', 'localised pain'], difficulty: 'easy'
  },
  {
    id: 'q1-119', contentId: 'c1-28', topic: 'splinting-trauma', subtopic: 'Avulsed Tooth Advice',
    type: 'flashcard',
    question: 'What should you NOT do when handling an avulsed tooth?',
    answer: 'Do not scrub or disinfect the tooth. Do not hold it by the root. Do not reimplant deciduous teeth.',
    keywords: ['do not scrub', 'do not disinfect', 'root', 'deciduous'], difficulty: 'easy'
  },
  {
    id: 'q1-120', contentId: 'c1-01', topic: 'splinting-trauma', subtopic: 'Placing a Splint',
    type: 'mcq',
    question: 'What PPE must you put on BEFORE sitting down to place a splint in an OSCE?',
    options: ['Just gloves', 'Just glasses', 'Glasses and gloves', 'Glasses, gloves, and mask'],
    correctOptionIndex: 2,
    answer: 'Glasses on model and gloves on. Sit down without touching chair with gloves.',
    keywords: ['glasses', 'gloves', 'PPE', 'OSCE'], difficulty: 'easy'
  }
];
