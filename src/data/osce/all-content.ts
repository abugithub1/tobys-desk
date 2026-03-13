// This file merges all content chunks extracted from the OSCE Bible PDF.
// chunk1 covers pages 1-10, chunk_p* files cover pages 11-58 in 2-page segments.
import { ContentItem, Question } from './types';

import { content1, questions1 } from './chunk1';
import { content_p11, questions_p11 } from './chunk_p11';
import { content_p13, questions_p13 } from './chunk_p13';
import { content_p15, questions_p15 } from './chunk_p15';
import { content_p17, questions_p17 } from './chunk_p17';
import { content_p19, questions_p19 } from './chunk_p19';
import { content_p21, questions_p21 } from './chunk_p21';
import { content_p23, questions_p23 } from './chunk_p23';
import { content_p25, questions_p25 } from './chunk_p25';
import { content_p27, questions_p27 } from './chunk_p27';
import { content_p29, questions_p29 } from './chunk_p29';
import { content_p31, questions_p31 } from './chunk_p31';
import { content_p33, questions_p33 } from './chunk_p33';
import { content_p35, questions_p35 } from './chunk_p35';
import { content_p37, questions_p37 } from './chunk_p37';
import { content_p39, questions_p39 } from './chunk_p39';
import { content_p41, questions_p41 } from './chunk_p41';
import { content_p43, questions_p43 } from './chunk_p43';
import { content_p45, questions_p45 } from './chunk_p45';
import { content_p47, questions_p47 } from './chunk_p47';
import { content_p49, questions_p49 } from './chunk_p49';
import { content_p51, questions_p51 } from './chunk_p51';
import { content_p53, questions_p53 } from './chunk_p53';
import { content_p55, questions_p55 } from './chunk_p55';
import { content_p57, questions_p57 } from './chunk_p57';
import { jawCystsContent, jawCystsQuestions } from './jaw-cysts';

export const allContent: ContentItem[] = [
  ...content1,
  ...content_p11,
  ...content_p13,
  ...content_p15,
  ...content_p17,
  ...content_p19,
  ...content_p21,
  ...content_p23,
  ...content_p25,
  ...content_p27,
  ...content_p29,
  ...content_p31,
  ...content_p33,
  ...content_p35,
  ...content_p37,
  ...content_p39,
  ...content_p41,
  ...content_p43,
  ...content_p45,
  ...content_p47,
  ...content_p49,
  ...content_p51,
  ...content_p53,
  ...content_p55,
  ...content_p57,
  ...jawCystsContent,
];

export const allQuestions: Question[] = [
  ...questions1,
  ...questions_p11,
  ...questions_p13,
  ...questions_p15,
  ...questions_p17,
  ...questions_p19,
  ...questions_p21,
  ...questions_p23,
  ...questions_p25,
  ...questions_p27,
  ...questions_p29,
  ...questions_p31,
  ...questions_p33,
  ...questions_p35,
  ...questions_p37,
  ...questions_p39,
  ...questions_p41,
  ...questions_p43,
  ...questions_p45,
  ...questions_p47,
  ...questions_p49,
  ...questions_p51,
  ...questions_p53,
  ...questions_p55,
  ...questions_p57,
  ...jawCystsQuestions,
];
