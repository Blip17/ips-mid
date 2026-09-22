export type TopicCategory = 
  | 'Migrasi Ras & Pre-Aksara'
  | 'Kebudayaan & Hasil Seni Aksara'
  | 'Sosiologi Kemajemukan'
  | 'Integrasi, Hukum & Nilai Kebangsaan';

export interface ActiveRecallItem {
  question: string;
  answer: string;
  hint?: string;
}

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
  mnemonic?: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestionItem {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswerId: string;
  explanation: string;
}

export interface TableRowData {
  col1: string;
  col2: string;
  col3?: string;
  col4?: string;
  col5?: string;
  col6?: string;
  col7?: string;
}

export interface TableStructure {
  headers: string[];
  rows: TableRowData[];
}

export interface TopicData {
  id: string; // 'A' through 'Z', '1' through '4'
  code: string; // e.g. "A", "1"
  title: string;
  category: TopicCategory;
  
  // Source provenance
  pdfStatus: 'Lengkap di PDF' | 'Parsial di PDF (Ditambah Sources Kemendikbud)' | 'Diperkaya dari Sumber Resmi Kemendikbud';
  sourceLabels: {
    fromPdf: string[];
    fromSupplemental: string[];
  };

  // Content Sections
  masteryObjectives: string[];
  fullContent: string;
  corePoints: string[];
  keywords: string[];
  causeProcessEffect: {
    cause: string;
    process: string;
    effect: string;
  };
  threeSentences: [string, string, string];
  dontConfuse: Array<{
    term: string;
    description: string;
    distinction: string;
  }>;
  tableOrDiagram?: TableStructure;
  mnemonic: {
    phrase: string;
    explanation: string;
  };
  likelyExamQuestions: string[];
  activeRecall: ActiveRecallItem[];
  flashcards: FlashcardItem[];
  quizQuestions: QuizQuestionItem[];
}

export interface UserTopicProgress {
  topicId: string;
  masteryScore: number; // 0 to 100
  status: 'Unstudied' | 'Needs Review' | 'Mastered';
  flashcardsMastered: string[]; // flashcard IDs
  quizBestScore?: number;
  lastStudiedAt?: string;
}

export interface CustomNoteSnippet {
  id: string;
  title: string;
  content: string;
  dateAdded: string;
}
