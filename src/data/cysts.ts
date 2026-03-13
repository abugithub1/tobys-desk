export interface Cyst {
  id: string;
  name: string;
  removal: string;
  imageUrl: string;
  slideDescription: string;
}

export const defaultCysts: Cyst[] = [
  {
    id: "mucocele",
    name: "Mucocele (Mucous Retention/Extravasation Cyst)",
    removal: "Surgical excision of the gland with careful dissection. Ensure initial incision is big enough, do not penetrate the gland. Remove gland intact, close with interrupted resorbable sutures. Will not recur if gland fully removed.",
    imageUrl: "/images/mucocele-lip.webp",
    slideDescription: "Clinical appearance on lip - translucent bluish swelling"
  },
  {
    id: "ranula",
    name: "Ranula",
    removal: "Surgical excision through the floor of the mouth under G.A. Sublingual gland must also be removed otherwise recurrence is likely. Requires in-patient admission due to risk of post-op swelling.",
    imageUrl: "/images/ranula.webp",
    slideDescription: "Large tense bluish swelling in anterior floor of mouth - literally means 'frog's belly'"
  },
  {
    id: "parotid-gland-cyst",
    name: "Parotid Gland Cyst",
    removal: "Excision. Investigations include ultrasound, FNA, and MRI scans. Differential diagnosis includes benign and malignant tumours of salivary tissues. Recurrence unlikely after excision.",
    imageUrl: "/images/parotid-gland-cyst.webp",
    slideDescription: "Surgical exposure of parotid gland cyst - slowly enlarging lump near ear"
  },
  {
    id: "antral-mucous-retention-cyst",
    name: "Antral Mucous Retention Cyst",
    removal: "Can be monitored with no intervention if asymptomatic. If unsure of diagnosis or symptomatic, enucleation via Caldwell-Luc approach under G.A. Buccal mucoperiosteal flap, bur/chisel to open antral wall at canine fossa, enucleate cyst, pack antrum for 24 hours.",
    imageUrl: "/images/antral-mucous-retention-cyst.webp",
    slideDescription: "Dome-shaped radiopacity in maxillary antrum on occipitmental radiograph"
  },
  {
    id: "sebaceous-cyst",
    name: "Sebaceous Cyst",
    removal: "Elliptical excision and primary closure. Incision must include the punctum. Dissect out the cyst completely - if capsule ruptures, recurrence is likely. Associated with hair-bearing areas.",
    imageUrl: "/images/sebaceous-cyst-scalp.webp",
    slideDescription: "Smooth, round lump on scalp with visible punctum - in hair-bearing area"
  },
  {
    id: "dermoid-cyst",
    name: "Dermoid Cyst",
    removal: "Surgical enucleation under G.A. via extra-oral approach. Hospital in-patient procedure. Found on skin, floor of mouth, palate or tongue. Technically teratomas - may contain hair, nails, teeth.",
    imageUrl: "/images/dermoid-cyst.webp",
    slideDescription: "Firm swelling below chin/mandible - arise from inclusion of ectoderm at lines of fusion"
  },
  {
    id: "thyroglossal-cyst",
    name: "Thyroglossal Cyst",
    removal: "Surgical excision via extra-oral approach. Classic sign: cyst moves on swallowing. Occurs anywhere on migration track of the thyroid. Differential diagnosis includes dermoid cyst and plunging ranula.",
    imageUrl: "/images/thyroglossal-cyst.webp",
    slideDescription: "CT scan showing midline cyst near hyoid bone - moves on swallowing"
  },
  {
    id: "branchial-cyst",
    name: "Branchial Cyst",
    removal: "Surgical excision, but removal is difficult as they lie between the external and internal carotid arteries. MRI essential for surgical planning. Remnants of the 2nd or 3rd branchial arches, usually on lateral aspect of neck.",
    imageUrl: "/images/branchial-cyst.webp",
    slideDescription: "Smooth swelling on lateral aspect of neck in young patient"
  },
  {
    id: "nasopalatine-duct-cyst",
    name: "Nasopalatine Duct Cyst (Incisive Canal Cyst)",
    removal: "Observe if asymptomatic, or surgical enucleation if symptomatic. Developmental cyst from residues of nasopalatine ducts. Peak incidence in males aged 50-60. Radiolucency in midline anterior palate >10mm. May be misdiagnosed as periapical pathology.",
    imageUrl: "/images/nasopalatine-duct-cyst.webp",
    slideDescription: "Heart-shaped radiolucency between upper central incisors on periapical radiograph"
  },
  {
    id: "globulomaxillary-cyst",
    name: "Globulomaxillary Cyst",
    removal: "Enucleation. Pear-shaped radiolucency between upper lateral incisor and canine. Traditionally thought to be a fissural cyst, but most are actually odontogenic cysts or tumours. Only acceptable as a radiographic description, not a histological diagnosis.",
    imageUrl: "/images/globulomaxillary-cyst.webp",
    slideDescription: "Pear-shaped radiolucency between upper lateral incisor and canine on periapical radiograph"
  },
  {
    id: "nasolabial-cyst",
    name: "Nasolabial (Nasoalveolar) Cyst",
    removal: "Surgical excision biopsy. Developmental cyst, possibly fissural or from nasolacrimal duct. Peak incidence in females aged 40-60. Presents as swelling of nasolabial fold/buccal sulcus. May cause resorption of underlying bone.",
    imageUrl: "/images/nasolabial-cyst.webp",
    slideDescription: "No clinical image in lecture slides - soft tissue cyst of nasolabial fold"
  },
  {
    id: "solitary-bone-cyst",
    name: "Solitary (Simple/Traumatic) Bone Cyst",
    removal: "Curettage of cavity is all that is required. Common in mandible, presents in first two decades. Can spontaneously fill in. Often no lining present. Characteristic scalloping around tooth roots on radiograph.",
    imageUrl: "/images/solitary-bone-cyst.webp",
    slideDescription: "Scalloped radiolucency in mandible body - characteristic scalloping between tooth roots on OPG"
  },
  {
    id: "aneurysmal-bone-cyst",
    name: "Aneurysmal Bone Cyst",
    removal: "Curettage. Painless swelling of posterior mandible. Multilocular ballooning radiolucency. Peak incidence in young adults. Exploration reveals blood welling up. May arise within a pre-existing bone lesion such as central giant cell granuloma.",
    imageUrl: "/images/aneurysmal-bone-cyst-ct.webp",
    slideDescription: "CT scan showing multilocular expansile lesion of mandible with blood-filled spaces"
  },
  {
    id: "eruption-cyst",
    name: "Eruption Cyst",
    removal: "Usually rupture spontaneously. Can be incised to allow eruption of tooth if needed. Bluish coloured swelling over erupting tooth. Self-limiting condition in most cases.",
    imageUrl: "/images/eruption-cyst.webp",
    slideDescription: "Bluish swelling on alveolar ridge over erupting tooth in child"
  },
  {
    id: "radicular-cyst",
    name: "Radicular Cyst",
    removal: "Enucleation during surgical endodontics (apicoectomy) or at extraction of the associated non-vital tooth. If not removed, may become a residual cyst. Most common odontogenic cyst of inflammatory origin.",
    imageUrl: "/images/radicular-cyst.webp",
    slideDescription: "Well-defined radiolucency at apex of non-vital tooth on OPG"
  },
  {
    id: "residual-cyst",
    name: "Residual Cyst",
    removal: "Formal enucleation required. Represents a radicular cyst that remains after the causative tooth has been extracted. Obvious 'missing tooth' with persistent radiolucency at the extraction site.",
    imageUrl: "/images/residual-cyst.webp",
    slideDescription: "Well-defined radiolucency at site of missing tooth on periapical radiograph"
  },
  {
    id: "dentigerous-cyst",
    name: "Dentigerous Cyst",
    removal: "Enucleation with removal of the associated unerupted tooth. Alternatively, marsupialisation if wishing to retain the tooth. Associated with the crown of an unerupted tooth. Can be very large and can mimic radicular cysts.",
    imageUrl: "/images/dentigerous-cyst.webp",
    slideDescription: "Large radiolucency associated with crown of unerupted tooth on OPG"
  },
  {
    id: "odontogenic-keratocyst",
    name: "Odontogenic Keratocyst (Keratocystic Odontogenic Tumour)",
    removal: "Enucleation or marsupialisation, often with additional treatments: Carnoy's solution (6:3:1 ethanol:chloroform:glacial acetic acid, max 3 mins to avoid nerve damage) or cryotherapy with liquid nitrogen. High tendency to recur due to daughter cysts and bone infiltration. Aspiration of contents needed to confirm diagnosis. Differential diagnosis with ameloblastoma is vital. Associated with Gorlin-Goltz syndrome (multiple keratocysts + basal cell carcinomas).",
    imageUrl: "/images/odontogenic-keratocyst.webp",
    slideDescription: "Multilocular radiolucency in posterior mandible - 'the nasty one' with high recurrence rate"
  }
];
