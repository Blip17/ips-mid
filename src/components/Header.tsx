import React from 'react';
import { BookOpen, Target, Brain, HelpCircle, Zap, ShieldAlert, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentTab: 'topics' | 'target' | 'flashcards' | 'quiz';
  setCurrentTab: (tab: 'topics' | 'target' | 'flashcards' | 'quiz') => void;
  onStartFromA: () => void;
  onStartWeakest: () => void;
  onReviewAll: () => void;
  masteredCount: number;
  totalTopics: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onStartFromA,
  onStartWeakest,
  onReviewAll,
  masteredCount,
  totalTopics
}) => {
  const percentage = Math.round((masteredCount / totalTopics) * 100);

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top Bar: Branding & Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <BookOpen className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                  MasterIPS
                </h1>
                <span className="text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">
                  30 Kisi-Kisi IPS
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                GURU IPS • PENELITI MATERI • PEMBUAT SOAL • TUTOR HAFALAN
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onStartFromA}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shadow-md shadow-amber-500/10 flex items-center space-x-1.5 active:scale-95"
              title="Mulai belajar dari Topik A berurutan"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Mulai dari A</span>
            </button>

            <button
              onClick={onStartWeakest}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/30 transition-all flex items-center space-x-1.5 active:scale-95"
              title="Belajar topik dengan skor terendah"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>Belajar Paling Lemah</span>
            </button>

            <button
              onClick={onReviewAll}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 transition-all flex items-center space-x-1.5 active:scale-95"
              title="Buka semua 30 topik"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Review Semua</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setCurrentTab('topics')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 whitespace-nowrap ${
                currentTab === 'topics'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Daftar 30 Topik</span>
            </button>

            <button
              onClick={() => setCurrentTab('target')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 whitespace-nowrap ${
                currentTab === 'target'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Target & Progres</span>
            </button>

            <button
              onClick={() => setCurrentTab('flashcards')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 whitespace-nowrap ${
                currentTab === 'flashcards'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>Flashcard Hub</span>
            </button>

            <button
              onClick={() => setCurrentTab('quiz')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 whitespace-nowrap ${
                currentTab === 'quiz'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Simulasi Kuis</span>
            </button>
          </div>

          {/* Mini Mastery Badge */}
          <div className="hidden lg:flex items-center space-x-3 bg-slate-950/60 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 font-medium">Penguasaan Topik:</span>
            <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="font-bold text-amber-400">{masteredCount}/{totalTopics}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
