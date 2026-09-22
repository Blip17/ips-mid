import React from 'react';
import { allTopics } from '../data/allTopics';
import { TopicData, UserTopicProgress } from '../types/topics';
import { Target, CheckCircle2, AlertTriangle, BookOpen, ArrowRight, ShieldAlert, Zap, Award } from 'lucide-react';

interface TargetProgressViewProps {
  userProgress: Record<string, UserTopicProgress>;
  onSelectTopic: (topic: TopicData) => void;
}

export const TargetProgressView: React.FC<TargetProgressViewProps> = ({ userProgress, onSelectTopic }) => {
  const totalTopics = allTopics.length; // 30

  let masteredCount = 0;
  let reviewCount = 0;
  let unstudiedCount = 0;

  allTopics.forEach(t => {
    const p = userProgress[t.id];
    const score = p?.masteryScore || 0;
    if (score >= 80) masteredCount++;
    else if (score >= 40) reviewCount++;
    else unstudiedCount++;
  });

  const overallPercentage = Math.round((masteredCount / totalTopics) * 100);

  // Weakest topics list sorted by lowest mastery score
  const weakestTopics = [...allTopics].sort((a, b) => {
    const scoreA = userProgress[a.id]?.masteryScore || 0;
    const scoreB = userProgress[b.id]?.masteryScore || 0;
    return scoreA - scoreB;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white">Target Belajar & Progres 30 Topik</h1>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
              Pantau tingkat penguasaan materi 30 kisi-kisi IPS secara real-time. Target utama adalah menguasai 100% topik sebelum hari ujian!
            </p>
          </div>

          <div className="flex items-center space-x-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 shrink-0">
            <div className="text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Total Penguasaan</span>
              <span className="text-3xl font-black font-mono text-amber-400">{overallPercentage}%</span>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Topik Tuntas</span>
              <span className="text-3xl font-black font-mono text-emerald-400">{masteredCount}/{totalTopics}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Cards Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase block mb-1">Sudah Paham (≥80%)</span>
            <span className="text-2xl font-black text-white">{masteredCount} Topik</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-amber-400 uppercase block mb-1">Perlu Diulangi (40-79%)</span>
            <span className="text-2xl font-black text-white">{reviewCount} Topik</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-rose-400 uppercase block mb-1">Belum Dipelajari (&lt;40%)</span>
            <span className="text-2xl font-black text-white">{unstudiedCount} Topik</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Weakest Topics Focus Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-bold text-white">Prioritas Belajar: Topik Paling Lemah</h2>
          </div>
          <span className="text-xs text-slate-400">Diurutkan dari skor terendah</span>
        </div>

        <div className="space-y-3">
          {weakestTopics.slice(0, 5).map(topic => {
            const score = userProgress[topic.id]?.masteryScore || 0;
            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="p-4 bg-slate-950 hover:bg-slate-800/80 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-black text-xs flex items-center justify-center shrink-0">
                    {topic.code}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-200 line-clamp-1">{topic.title}</h3>
                    <span className="text-[10px] text-slate-400">{topic.category}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <span className="font-mono text-xs font-bold text-amber-400">{score}%</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
