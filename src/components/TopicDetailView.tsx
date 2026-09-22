import React, { useState } from 'react';
import { TopicData, UserTopicProgress } from '../types/topics';
import { saveUserProgress, loadNotes, saveNote, deleteNote } from '../utils/storage';
import {
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Brain,
  HelpCircle,
  FileText,
  Globe,
  Eye,
  EyeOff,
  RotateCw,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  PlusCircle,
  Trash2,
  Award,
  ChevronRight,
  Zap,
  StickyNote
} from 'lucide-react';

interface TopicDetailViewProps {
  topic: TopicData;
  progress?: UserTopicProgress;
  onBack: () => void;
  onNextTopic?: () => void;
  onPrevTopic?: () => void;
  onProgressUpdate: () => void;
}

export const TopicDetailView: React.FC<TopicDetailViewProps> = ({
  topic,
  progress,
  onBack,
  onNextTopic,
  onPrevTopic,
  onProgressUpdate
}) => {
  const [activeTab, setActiveTab] = useState<'materi' | 'recall' | 'flashcards' | 'quiz' | 'notes'>('materi');

  // Active Recall States
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  // Flashcards States
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<string[]>(progress?.flashcardsMastered || []);

  // Quiz States
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(progress?.quizBestScore || null);

  // Notes States
  const [notes, setNotes] = useState(loadNotes(topic.id));
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  // Toggle Active Recall Answer
  const toggleRecall = (idx: number) => {
    setRevealedAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Toggle Flashcard Flip
  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Mark Flashcard as Mastered
  const toggleCardMastery = (cardId: string) => {
    let updated: string[];
    if (masteredCards.includes(cardId)) {
      updated = masteredCards.filter(id => id !== cardId);
    } else {
      updated = [...masteredCards, cardId];
    }
    setMasteredCards(updated);

    // Calculate score
    const flashcardScore = Math.round((updated.length / topic.flashcards.length) * 50);
    const quizScorePart = quizScore ? Math.round((quizScore / 100) * 50) : 0;
    const totalScore = Math.min(100, flashcardScore + quizScorePart);

    saveUserProgress(topic.id, {
      flashcardsMastered: updated,
      masteryScore: totalScore,
      status: totalScore >= 80 ? 'Mastered' : totalScore >= 40 ? 'Needs Review' : 'Unstudied'
    });
    onProgressUpdate();
  };

  // Handle Quiz Submission
  const handleQuizSubmit = () => {
    let correct = 0;
    topic.quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerId) {
        correct++;
      }
    });

    const score = Math.round((correct / topic.quizQuestions.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);

    const flashcardScore = Math.round((masteredCards.length / topic.flashcards.length) * 50);
    const quizScorePart = Math.round((score / 100) * 50);
    const totalScore = Math.min(100, flashcardScore + quizScorePart);

    saveUserProgress(topic.id, {
      quizBestScore: Math.max(score, progress?.quizBestScore || 0),
      masteryScore: totalScore,
      status: totalScore >= 80 ? 'Mastered' : totalScore >= 40 ? 'Needs Review' : 'Unstudied'
    });
    onProgressUpdate();
  };

  // Add Personal Note
  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteContent.trim()) return;
    const updated = saveNote(topic.id, noteTitle, noteContent);
    setNotes(updated);
    setNoteTitle('');
    setNoteContent('');
  };

  // Delete Note
  const handleDeleteNote = (noteId: string) => {
    const updated = deleteNote(topic.id, noteId);
    setNotes(updated);
  };

  const currentFlashcard = topic.flashcards[flashcardIndex];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-20">
      {/* Top Controls & Navigation */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-400 bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-800 transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar</span>
        </button>

        <div className="flex items-center space-x-2">
          {onPrevTopic && (
            <button
              onClick={onPrevTopic}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-all"
            >
              ← Topik SBLM
            </button>
          )}
          {onNextTopic && (
            <button
              onClick={onNextTopic}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-sm flex items-center space-x-1"
            >
              <span>Topik BRKT</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-6 relative overflow-hidden shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 font-black text-lg flex items-center justify-center shrink-0">
              {topic.code}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
              {topic.category}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-400">Penguasaan Topik:</span>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono font-bold text-xs border border-amber-500/20">
              {progress?.masteryScore || 0}%
            </span>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug mb-4">
          {topic.title}
        </h1>

        {/* Provenance Labels */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 text-xs space-y-2">
          <div className="flex items-start space-x-2">
            <FileText className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-300">📄 Sumber Utama PDF:</span>
              <ul className="list-disc list-inside text-slate-300 mt-0.5 space-y-0.5">
                {topic.sourceLabels.fromPdf.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {topic.sourceLabels.fromSupplemental.length > 0 && (
            <div className="flex items-start space-x-2 pt-2 border-t border-slate-800/80">
              <Globe className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-sky-300">🌐 Rujukan Tambahan Kredibel:</span>
                <ul className="list-disc list-inside text-slate-300 mt-0.5 space-y-0.5">
                  {topic.sourceLabels.fromSupplemental.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar border-b border-slate-800 pb-3 mb-6">
        <button
          onClick={() => setActiveTab('materi')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'materi'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Materi & Logika</span>
        </button>

        <button
          onClick={() => setActiveTab('recall')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'recall'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Uji Ingatan ({topic.activeRecall.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('flashcards')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'flashcards'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Flashcards ({topic.flashcards.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'quiz'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Kuis Topik ({topic.quizQuestions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'notes'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <StickyNote className="w-4 h-4" />
          <span>Catatan ({notes.length})</span>
        </button>
      </div>

      {/* TAB 1: MATERI & LOGIKA */}
      {activeTab === 'materi' && (
        <div className="space-y-6">
          {/* Target Penguasaan Materi */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h2 className="text-sm font-bold tracking-wider text-amber-400 uppercase mb-3 flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Target Penguasaan Materi</span>
            </h2>
            <ul className="space-y-2">
              {topic.masteryObjectives.map((obj, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Detailed Content */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h2 className="text-sm font-bold tracking-wider text-amber-400 uppercase mb-3 flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Materi Belajar Lengkap</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-normal">
              {topic.fullContent}
            </div>
          </div>

          {/* Table / Diagram if present */}
          {topic.tableOrDiagram && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm overflow-x-auto">
              <h2 className="text-sm font-bold tracking-wider text-amber-400 uppercase mb-3 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Tabel Perbandingan & Sintesis Kebudayaan</span>
              </h2>
              <table className="w-full text-left text-xs border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-950 text-amber-300 border-b border-slate-800">
                    {topic.tableOrDiagram.headers.map((h, idx) => (
                      <th key={idx} className="p-3 font-bold border-r border-slate-800/60 last:border-r-0">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {topic.tableOrDiagram.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-800/50 transition-colors">
                      <td className="p-3 font-semibold text-slate-200 border-r border-slate-800/60">{row.col1}</td>
                      <td className="p-3 text-slate-300 border-r border-slate-800/60">{row.col2}</td>
                      {row.col3 && <td className="p-3 text-slate-300 border-r border-slate-800/60">{row.col3}</td>}
                      {row.col4 && <td className="p-3 text-slate-300 border-r border-slate-800/60">{row.col4}</td>}
                      {row.col5 && <td className="p-3 text-slate-300 border-r border-slate-800/60">{row.col5}</td>}
                      {row.col6 && <td className="p-3 text-slate-300 border-r border-slate-800/60">{row.col6}</td>}
                      {row.col7 && <td className="p-3 text-slate-300">{row.col7}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Core Points */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h2 className="text-sm font-bold tracking-wider text-amber-400 uppercase mb-3 flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Poin-Poin Inti Wajib Hafal</span>
            </h2>
            <ul className="space-y-2">
              {topic.corePoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <span className="w-5 h-5 rounded bg-amber-500/10 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cause Process Effect */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h2 className="text-sm font-bold tracking-wider text-amber-400 uppercase mb-3 flex items-center space-x-2">
              <RotateCw className="w-4 h-4" />
              <span>Logika Rantai Kausalitas (Sebab → Proses → Akibat)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-bold text-rose-400 uppercase block mb-1">1. Sebab / Faktor Utama</span>
                <p className="text-xs text-slate-300 leading-relaxed">{topic.causeProcessEffect.cause}</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-bold text-amber-400 uppercase block mb-1">2. Dinamika Proses</span>
                <p className="text-xs text-slate-300 leading-relaxed">{topic.causeProcessEffect.process}</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-bold text-emerald-400 uppercase block mb-1">3. Dampak / Akibat</span>
                <p className="text-xs text-slate-300 leading-relaxed">{topic.causeProcessEffect.effect}</p>
              </div>
            </div>
          </div>

          {/* 3 Sentences Summary */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 sm:p-6">
            <h2 className="text-sm font-bold tracking-wider text-amber-400 uppercase mb-3 flex items-center space-x-2">
              <Lightbulb className="w-4 h-4" />
              <span>3 Kalimat Ringkasan Cepat</span>
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-amber-200">
              {topic.threeSentences.map((sentence, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="font-semibold">{sentence}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Don't Confuse! (Common Pitfalls) */}
          <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-5 sm:p-6">
            <h2 className="text-sm font-bold tracking-wider text-rose-400 uppercase mb-3 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Jangan Tertukar! (Penting untuk Menjawab Soal)</span>
            </h2>
            <div className="space-y-3">
              {topic.dontConfuse.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                  <span className="text-xs font-bold text-rose-300 block mb-1">{item.term}</span>
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">{item.description}</p>
                  <div className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 inline-block">
                    Kunci Pembeda: {item.distinction}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mnemonic */}
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/30 rounded-2xl p-5 sm:p-6">
            <h2 className="text-sm font-bold tracking-wider text-amber-400 uppercase mb-2 flex items-center space-x-2">
              <Brain className="w-4 h-4 text-amber-400" />
              <span>Jembatan Keledai (Mnemonic)</span>
            </h2>
            <div className="text-sm sm:text-base font-black text-amber-300 tracking-wide mb-1 font-mono">
              "{topic.mnemonic.phrase}"
            </div>
            <p className="text-xs text-slate-300">{topic.mnemonic.explanation}</p>
          </div>

          {/* Likely Exam Questions */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6">
            <h2 className="text-sm font-bold tracking-wider text-amber-400 uppercase mb-3 flex items-center space-x-2">
              <HelpCircle className="w-4 h-4" />
              <span>Prediksi Model Soal Ujian</span>
            </h2>
            <ul className="space-y-2">
              {topic.likelyExamQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: ACTIVE RECALL */}
      {activeTab === 'recall' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 flex items-center justify-between">
            <span>Uji daya ingatmu secara mandiri. Coba jawab di dalam hati sebelum membuka jawaban!</span>
            <span className="font-bold text-amber-400">{topic.activeRecall.length} Pertanyaan</span>
          </div>

          {topic.activeRecall.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
                    Q{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-slate-100">{item.question}</h3>
                </div>

                <button
                  onClick={() => toggleRecall(idx)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold border border-slate-700 transition-all shrink-0 flex items-center space-x-1"
                >
                  {revealedAnswers[idx] ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Sembunyikan</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Jawaban</span>
                    </>
                  )}
                </button>
              </div>

              {revealedAnswers[idx] && (
                <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-emerald-300 font-medium bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                  <span className="font-bold text-emerald-400 block mb-1">Jawaban Tepat:</span>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 px-2">
            <span>
              Kartu {flashcardIndex + 1} dari {topic.flashcards.length}
            </span>
            <span className="text-emerald-400 font-semibold">
              Terhafal: {masteredCards.length}/{topic.flashcards.length}
            </span>
          </div>

          {/* Flashcard Box */}
          <div
            onClick={handleFlipCard}
            className={`min-h-[240px] sm:min-h-[280px] bg-slate-900 border-2 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 relative select-none shadow-2xl ${
              isFlipped
                ? 'border-emerald-500/50 bg-slate-800/90 text-slate-100'
                : 'border-amber-500/30 hover:border-amber-500/60 text-slate-100'
            }`}
          >
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase absolute top-4 left-6">
              {isFlipped ? 'JAWABAN / PENJELASAN (SISI BELAKANG)' : 'PERTANYAAN / KONSEP (SISI DEPAN)'}
            </span>

            <div className="my-auto px-4">
              <p className="text-base sm:text-xl font-bold leading-relaxed">
                {isFlipped ? currentFlashcard.back : currentFlashcard.front}
              </p>
              {isFlipped && currentFlashcard.mnemonic && (
                <div className="mt-4 text-xs font-mono font-semibold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 inline-block">
                  💡 {currentFlashcard.mnemonic}
                </div>
              )}
            </div>

            <span className="text-[11px] text-slate-400 flex items-center space-x-1 absolute bottom-4">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Klik untuk membalik kartu</span>
            </span>
          </div>

          {/* Flashcard Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex(prev => (prev > 0 ? prev - 1 : topic.flashcards.length - 1));
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 transition-all"
            >
              ← Kartu Sebelum
            </button>

            <button
              onClick={() => toggleCardMastery(currentFlashcard.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center space-x-2 ${
                masteredCards.includes(currentFlashcard.id)
                  ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{masteredCards.includes(currentFlashcard.id) ? 'Sudah Hafal' : 'Tandai Hafal'}</span>
            </button>

            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex(prev => (prev < topic.flashcards.length - 1 ? prev + 1 : 0));
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 transition-all"
            >
              Kartu Berikut →
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: KUIS TOPIK */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {quizSubmitted && quizScore !== null && (
            <div
              className={`p-6 rounded-2xl border ${
                quizScore >= 80
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Hasil Evaluasi Kuis</h3>
                  <p className="text-xs text-slate-300">
                    {quizScore >= 80
                      ? 'Luar biasa! Kamu telah menguasai konsep topik ini dengan sangat baik.'
                      : 'Bagus! Ulangi materi yang belum dipahami untuk mencapai skor 100%.'}
                  </p>
                </div>
                <div className="text-3xl font-black font-mono px-4 py-2 rounded-xl bg-slate-950 border border-slate-800">
                  {quizScore}%
                </div>
              </div>
            </div>
          )}

          {/* Quiz Questions List */}
          <div className="space-y-6">
            {topic.quizQuestions.map((q, qIdx) => (
              <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-start space-x-2.5 mb-4">
                  <span className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {qIdx + 1}
                  </span>
                  <p className="text-sm font-bold text-slate-100">{q.question}</p>
                </div>

                {/* Multiple Choice Options */}
                <div className="space-y-2 mb-4">
                  {q.options.map(opt => {
                    const isSelected = selectedAnswers[q.id] === opt.id;
                    const isCorrect = opt.id === q.correctAnswerId;

                    let btnStyle = 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800/80';
                    if (quizSubmitted) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-200';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-amber-500/20 border-amber-500 text-amber-200 font-bold';
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={quizSubmitted}
                        onClick={() => setSelectedAnswers(prev => ({ ...prev, [q.id]: opt.id }))}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt.text}</span>
                        {quizSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation after submit */}
                {quizSubmitted && (
                  <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    <span className="font-bold text-amber-400 block mb-1">Penjelasan Guru:</span>
                    {q.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Submit / Retake Button */}
          <div className="pt-4 flex justify-end">
            {!quizSubmitted ? (
              <button
                disabled={Object.keys(selectedAnswers).length < topic.quizQuestions.length}
                onClick={handleQuizSubmit}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-amber-500 text-slate-950 hover:bg-amber-400 disabled:opacity-50 disabled:hover:bg-amber-500 transition-all shadow-lg shadow-amber-500/10 active:scale-95"
              >
                Kirim Jawaban Kuis
              </button>
            ) : (
              <button
                onClick={() => {
                  setQuizSubmitted(false);
                  setSelectedAnswers({});
                }}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-all active:scale-95"
              >
                Ulangi Kuis Topik Ini
              </button>
            )}
          </div>
        </div>
      )}

      {/* TAB 5: CATATAN TAMBAHAN */}
      {activeTab === 'notes' && (
        <div className="space-y-6">
          <form onSubmit={handleAddNote} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-bold text-amber-400 flex items-center space-x-2">
              <PlusCircle className="w-4 h-4" />
              <span>Tambah Catatan Belajar Pribadi</span>
            </h3>
            <input
              type="text"
              placeholder="Judul Catatan (contoh: Poin Penting Ulangan)"
              value={noteTitle}
              onChange={e => setNoteTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <textarea
              rows={3}
              placeholder="Tulis ringkasan atau catatan tambahanmu sendiri di sini..."
              value={noteContent}
              onChange={e => setNoteContent(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-sm"
              >
                Simpan Catatan
              </button>
            </div>
          </form>

          {/* Notes List */}
          <div className="space-y-3">
            {notes.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500">
                Belum ada catatan pribadi untuk topik ini.
              </div>
            ) : (
              notes.map(note => (
                <div key={note.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm relative">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-amber-300">{note.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] text-slate-500">{note.dateAdded}</span>
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                        title="Hapus Catatan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">{note.content}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
