import React, { useState } from 'react';
import { allTopics } from '../data/allTopics';
import { QuizQuestionItem, TopicData } from '../types/topics';
import { saveUserProgress } from '../utils/storage';
import { HelpCircle, CheckCircle2, RotateCw, ArrowRight, ArrowLeft, Trophy, AlertCircle } from 'lucide-react';

interface QuizHubProps {
  onProgressUpdate: () => void;
}

export const QuizHub: React.FC<QuizHubProps> = ({ onProgressUpdate }) => {
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [quizState, setQuizState] = useState<'setup' | 'active' | 'finished'>('setup');

  const [questions, setQuestions] = useState<{ question: QuizQuestionItem; topic: TopicData }[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const categories = [
    'All',
    'Migrasi Ras & Pre-Aksara',
    'Kebudayaan & Hasil Seni Aksara',
    'Sosiologi Kemajemukan',
    'Integrasi, Hukum & Nilai Kebangsaan'
  ];

  const handleStartQuiz = () => {
    const filteredTopics = selectedCategory === 'All'
      ? allTopics
      : allTopics.filter(t => t.category === selectedCategory);

    const pool: { question: QuizQuestionItem; topic: TopicData }[] = [];
    filteredTopics.forEach(t => {
      t.quizQuestions.forEach(q => {
        pool.push({ question: q, topic: t });
      });
    });

    // Shuffle pool
    const shuffled = pool.sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setQuestions(selectedQuestions);
    setCurrentIdx(0);
    setAnswers({});
    setQuizState('active');
  };

  const handleSelectOption = (qId: string, optId: string) => {
    setAnswers(prev => ({ ...prev, [qId]: optId }));
  };

  const handleFinishQuiz = () => {
    setQuizState('finished');

    // Update progress per topic based on correct answers
    const topicScoreMap: Record<string, { total: number; correct: number }> = {};
    questions.forEach(({ question, topic }) => {
      if (!topicScoreMap[topic.id]) {
        topicScoreMap[topic.id] = { total: 0, correct: 0 };
      }
      topicScoreMap[topic.id].total++;
      if (answers[question.id] === question.correctAnswerId) {
        topicScoreMap[topic.id].correct++;
      }
    });

    Object.entries(topicScoreMap).forEach(([tId, stat]) => {
      const quizPercentage = Math.round((stat.correct / stat.total) * 100);
      saveUserProgress(tId, {
        quizBestScore: quizPercentage
      });
    });

    onProgressUpdate();
  };

  if (quizState === 'setup') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white">Simulasi Kuis IPS</h1>
              <p className="text-xs text-slate-400">
                Uji pemahamanmu dengan paket soal acak berstandar ujian nasional.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <label className="text-xs font-bold text-amber-400 uppercase block mb-2">
                Pilih Kategori Topik
              </label>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-amber-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Question Count */}
            <div>
              <label className="text-xs font-bold text-amber-400 uppercase block mb-2">
                Jumlah Soal Simulasi
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[10, 20, 30].map(count => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setQuestionCount(count)}
                    className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                      questionCount === count
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {count} Soal
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleStartQuiz}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/10 active:scale-95"
            >
              Mulai Simulasi Kuis
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizState === 'active') {
    const currentQ = questions[currentIdx];
    const isSelected = !!answers[currentQ.question.id];

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 px-1">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 font-bold text-xs flex items-center justify-center">
              {currentQ.topic.code}
            </span>
            <span className="font-bold text-slate-200 truncate max-w-[200px]">
              {currentQ.topic.title}
            </span>
          </div>
          <span className="font-mono">
            Soal {currentIdx + 1} / {questions.length}
          </span>
        </div>

        {/* Question Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl mb-6">
          <h2 className="text-sm sm:text-base font-bold text-slate-100 leading-relaxed mb-6">
            {currentQ.question.question}
          </h2>

          <div className="space-y-3">
            {currentQ.question.options.map(opt => {
              const selected = answers[currentQ.question.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(currentQ.question.id, opt.id)}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-bold shadow-sm'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <span>{opt.text}</span>
                  {selected && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            disabled={currentIdx === 0}
            onClick={() => setCurrentIdx(prev => prev - 1)}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 disabled:opacity-40 transition-all flex items-center space-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Sebelumnya</span>
          </button>

          {currentIdx === questions.length - 1 ? (
            <button
              disabled={Object.keys(answers).length < questions.length}
              onClick={handleFinishQuiz}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold disabled:opacity-50 transition-all shadow-md active:scale-95"
            >
              Selesaikan Kuis
            </button>
          ) : (
            <button
              onClick={() => setCurrentIdx(prev => prev + 1)}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-sm flex items-center space-x-1"
            >
              <span>Berikutnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // FINISHED STATE
  let totalCorrect = 0;
  questions.forEach(({ question }) => {
    if (answers[question.id] === question.correctAnswerId) {
      totalCorrect++;
    }
  });

  const finalPercentage = Math.round((totalCorrect / questions.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* Result Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto mb-4 flex items-center justify-center">
          <Trophy className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-white mb-1">Hasil Simulasi Kuis</h2>
        <p className="text-xs text-slate-400 mb-6">
          Kamu menjawab benar {totalCorrect} dari {questions.length} soal!
        </p>

        <div className="text-5xl font-black font-mono text-amber-400 mb-6">
          {finalPercentage}%
        </div>

        <button
          onClick={() => setQuizState('setup')}
          className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
        >
          Coba Simulasi Lagi
        </button>
      </div>

      {/* Review Questions Breakdown */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
          Pembahasan & Review Soal
        </h3>

        {questions.map(({ question, topic }, idx) => {
          const userAns = answers[question.id];
          const isCorrect = userAns === question.correctAnswerId;

          return (
            <div
              key={question.id}
              className={`p-5 rounded-2xl border ${
                isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-xs font-bold text-slate-300">
                  {idx + 1}. [{topic.code}] {question.question}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                  }`}
                >
                  {isCorrect ? 'BENAR' : 'SALAH'}
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-2">
                <span className="font-bold text-slate-300">Penjelasan Guru:</span> {question.explanation}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
