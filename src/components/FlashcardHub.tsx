import React, { useState } from 'react';
import { allTopics } from '../data/allTopics';
import { FlashcardItem, TopicData, UserTopicProgress } from '../types/topics';
import { saveUserProgress, loadUserProgress } from '../utils/storage';
import { RotateCw, CheckCircle2, Brain, Filter, Shuffle, ArrowRight, ArrowLeft } from 'lucide-react';

interface FlashcardHubProps {
  userProgress: Record<string, UserTopicProgress>;
  onProgressUpdate: () => void;
}

export const FlashcardHub: React.FC<FlashcardHubProps> = ({ userProgress, onProgressUpdate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Extract all cards according to category
  const categories = [
    'All',
    'Migrasi Ras & Pre-Aksara',
    'Kebudayaan & Hasil Seni Aksara',
    'Sosiologi Kemajemukan',
    'Integrasi, Hukum & Nilai Kebangsaan'
  ];

  const filteredTopics = selectedCategory === 'All'
    ? allTopics
    : allTopics.filter(t => t.category === selectedCategory);

  const allCardsList: { card: FlashcardItem; topic: TopicData }[] = [];
  filteredTopics.forEach(topic => {
    topic.flashcards.forEach(card => {
      allCardsList.push({ card, topic });
    });
  });

  const [cards, setCards] = useState(allCardsList);

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const newFiltered = cat === 'All' ? allTopics : allTopics.filter(t => t.category === cat);
    const newList: { card: FlashcardItem; topic: TopicData }[] = [];
    newFiltered.forEach(t => {
      t.flashcards.forEach(c => {
        newList.push({ card: c, topic: t });
      });
    });
    setCards(newList);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  if (cards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-slate-400">
        Tidak ada flashcard tersedia untuk kategori ini.
      </div>
    );
  }

  const currentItem = cards[currentIndex];
  const topicProg = userProgress[currentItem.topic.id] || {
    topicId: currentItem.topic.id,
    masteryScore: 0,
    status: 'Unstudied',
    flashcardsMastered: []
  };

  const isMastered = topicProg.flashcardsMastered.includes(currentItem.card.id);

  const handleToggleMastery = () => {
    const currentMastered = topicProg.flashcardsMastered;
    let updated: string[];
    if (currentMastered.includes(currentItem.card.id)) {
      updated = currentMastered.filter(id => id !== currentItem.card.id);
    } else {
      updated = [...currentMastered, currentItem.card.id];
    }

    const flashcardScore = Math.round((updated.length / currentItem.topic.flashcards.length) * 50);
    const quizScorePart = topicProg.quizBestScore ? Math.round((topicProg.quizBestScore / 100) * 50) : 0;
    const totalScore = Math.min(100, flashcardScore + quizScorePart);

    saveUserProgress(currentItem.topic.id, {
      flashcardsMastered: updated,
      masteryScore: totalScore,
      status: totalScore >= 80 ? 'Mastered' : totalScore >= 40 ? 'Needs Review' : 'Unstudied'
    });
    onProgressUpdate();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-white flex items-center space-x-2">
            <Brain className="w-6 h-6 text-amber-400" />
            <span>Flashcard Hub (Hafalan Cepat)</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Latih ingatan cepatmu menggunakan teknik membalik kartu.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleShuffle}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-semibold border border-slate-800 transition-all flex items-center space-x-1.5"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Acak Kartu</span>
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-3 mb-6">
        <Filter className="w-4 h-4 text-slate-500 shrink-0" />
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Card Info Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2 mb-3">
        <div className="flex items-center space-x-2">
          <span className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 font-bold text-xs flex items-center justify-center">
            {currentItem.topic.code}
          </span>
          <span className="font-bold text-slate-200 truncate max-w-[200px] sm:max-w-none">
            {currentItem.topic.title}
          </span>
        </div>
        <span className="font-mono">
          Kartu {currentIndex + 1} / {cards.length}
        </span>
      </div>

      {/* Flip Card Box */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`min-h-[280px] sm:min-h-[320px] bg-slate-900 border-2 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 select-none shadow-2xl relative ${
          isFlipped
            ? 'border-emerald-500/50 bg-slate-800/90 text-slate-100'
            : 'border-amber-500/30 hover:border-amber-500/60 text-slate-100'
        }`}
      >
        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase absolute top-4 left-6">
          {isFlipped ? 'SISI BELAKANG (PENJELASAN)' : 'SISI DEPAN (PERTANYAAN)'}
        </span>

        <div className="my-auto px-4">
          <p className="text-base sm:text-xl font-bold leading-relaxed">
            {isFlipped ? currentItem.card.back : currentItem.card.front}
          </p>

          {isFlipped && currentItem.card.mnemonic && (
            <div className="mt-4 text-xs font-mono font-semibold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 inline-block">
              💡 {currentItem.card.mnemonic}
            </div>
          )}
        </div>

        <span className="text-[11px] text-slate-400 flex items-center space-x-1 absolute bottom-4">
          <RotateCw className="w-3.5 h-3.5" />
          <span>Klik untuk membalik kartu</span>
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4 mt-6">
        <button
          onClick={() => {
            setIsFlipped(false);
            setCurrentIndex(prev => (prev > 0 ? prev - 1 : cards.length - 1));
          }}
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 transition-all flex items-center space-x-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={handleToggleMastery}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center space-x-2 ${
            isMastered
              ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isMastered ? 'Sudah Terhafal' : 'Tandai Terhafal'}</span>
        </button>

        <button
          onClick={() => {
            setIsFlipped(false);
            setCurrentIndex(prev => (prev < cards.length - 1 ? prev + 1 : 0));
          }}
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 transition-all flex items-center space-x-1"
        >
          <span>Berikutnya</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
