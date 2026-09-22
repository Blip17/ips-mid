import React, { useState, useEffect } from 'react';
import { allTopics, getTopicById } from './data/allTopics';
import { TopicData, UserTopicProgress } from './types/topics';
import { loadUserProgress } from './utils/storage';
import { Header } from './components/Header';
import { TopicCard } from './components/TopicCard';
import { TopicDetailView } from './components/TopicDetailView';
import { FlashcardHub } from './components/FlashcardHub';
import { QuizHub } from './components/QuizHub';
import { TargetProgressView } from './components/TargetProgressView';
import { Search, Filter, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'topics' | 'target' | 'flashcards' | 'quiz'>('topics');
  const [selectedTopic, setSelectedTopic] = useState<TopicData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [userProgress, setUserProgress] = useState<Record<string, UserTopicProgress>>({});

  useEffect(() => {
    setUserProgress(loadUserProgress());
  }, []);

  const refreshProgress = () => {
    setUserProgress(loadUserProgress());
  };

  // Categories list
  const categories = [
    'All',
    'Migrasi Ras & Pre-Aksara',
    'Kebudayaan & Hasil Seni Aksara',
    'Sosiologi Kemajemukan',
    'Integrasi, Hukum & Nilai Kebangsaan'
  ];

  // Filter topics
  const filteredTopics = allTopics.filter(t => {
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      t.title.toLowerCase().includes(q) ||
      t.code.toLowerCase().includes(q) ||
      t.keywords.some(k => k.toLowerCase().includes(q)) ||
      t.fullContent.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  // Calculate Mastered Count
  const masteredCount = Object.values(userProgress).filter(p => p.masteryScore >= 80).length;

  // Quick Action Handlers
  const handleStartFromA = () => {
    const topicA = getTopicById('A');
    if (topicA) {
      setSelectedTopic(topicA);
    }
  };

  const handleStartWeakest = () => {
    const sortedByScore = [...allTopics].sort((a, b) => {
      const scoreA = userProgress[a.id]?.masteryScore || 0;
      const scoreB = userProgress[b.id]?.masteryScore || 0;
      return scoreA - scoreB;
    });
    if (sortedByScore.length > 0) {
      setSelectedTopic(sortedByScore[0]);
    }
  };

  const handleReviewAll = () => {
    setSelectedTopic(null);
    setCurrentTab('topics');
    setSearchQuery('');
    setSelectedCategory('All');
  };

  // Navigation between topics in TopicDetailView
  const handleNextTopic = () => {
    if (!selectedTopic) return;
    const idx = allTopics.findIndex(t => t.id === selectedTopic.id);
    if (idx !== -1 && idx < allTopics.length - 1) {
      setSelectedTopic(allTopics[idx + 1]);
    }
  };

  const handlePrevTopic = () => {
    if (!selectedTopic) return;
    const idx = allTopics.findIndex(t => t.id === selectedTopic.id);
    if (idx > 0) {
      setSelectedTopic(allTopics[idx - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Header Bar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setSelectedTopic(null);
          setCurrentTab(tab);
        }}
        onStartFromA={handleStartFromA}
        onStartWeakest={handleStartWeakest}
        onReviewAll={handleReviewAll}
        masteredCount={masteredCount}
        totalTopics={allTopics.length}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {selectedTopic ? (
          <TopicDetailView
            topic={selectedTopic}
            progress={userProgress[selectedTopic.id]}
            onBack={() => setSelectedTopic(null)}
            onNextTopic={
              allTopics.findIndex(t => t.id === selectedTopic.id) < allTopics.length - 1
                ? handleNextTopic
                : undefined
            }
            onPrevTopic={
              allTopics.findIndex(t => t.id === selectedTopic.id) > 0
                ? handlePrevTopic
                : undefined
            }
            onProgressUpdate={refreshProgress}
          />
        ) : (
          <>
            {/* TAB: DAFTAR TOPIK */}
            {currentTab === 'topics' && (
              <div className="space-y-6">
                {/* Search & Category Filter */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Cari kata kunci, judul, atau konsep IPS..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all"
                    />
                  </div>

                  {/* Category Pills */}
                  <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
                    <Filter className="w-4 h-4 text-slate-500 shrink-0 mr-1" />
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                          selectedCategory === cat
                            ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                            : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                      >
                        {cat === 'All' ? 'Semua 30 Topik' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topics Count Info */}
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span className="font-semibold text-slate-300">
                    Menampilkan {filteredTopics.length} dari {allTopics.length} Topik
                  </span>
                  <span className="text-amber-400 font-mono">
                    30/30 Topik Lengkap Diberdayakan
                  </span>
                </div>

                {/* Topics Grid */}
                {filteredTopics.length === 0 ? (
                  <div className="text-center py-16 text-slate-400">
                    <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                    <p className="text-sm">Tidak ditemukan topik yang cocok dengan pencarian "{searchQuery}".</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredTopics.map(topic => (
                      <TopicCard
                        key={topic.id}
                        topic={topic}
                        progress={userProgress[topic.id]}
                        onSelect={setSelectedTopic}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB: TARGET & PROGRES */}
            {currentTab === 'target' && (
              <TargetProgressView
                userProgress={userProgress}
                onSelectTopic={setSelectedTopic}
              />
            )}

            {/* TAB: FLASHCARD HUB */}
            {currentTab === 'flashcards' && (
              <FlashcardHub
                userProgress={userProgress}
                onProgressUpdate={refreshProgress}
              />
            )}

            {/* TAB: SIMULASI KUIS */}
            {currentTab === 'quiz' && (
              <QuizHub onProgressUpdate={refreshProgress} />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-center text-xs text-slate-500 mt-12">
        <p>MasterIPS Platform • Guru IPS, Peneliti Materi, Pembuat Soal, & Tutor Hafalan</p>
        <p className="mt-1 text-[10px] text-slate-600">
          Materi disusun dari PDF Kisi-Kisi Utama dan Rujukan Pendidikan Kredibel Kemendikbudristek RI.
        </p>
      </footer>
    </div>
  );
}
