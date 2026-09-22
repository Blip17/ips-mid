import React from 'react';
import { TopicData, UserTopicProgress } from '../types/topics';
import { CheckCircle2, Clock, BookOpen, Brain, HelpCircle, FileText, Globe } from 'lucide-react';

interface TopicCardProps {
  topic: TopicData;
  progress?: UserTopicProgress;
  onSelect: (topic: TopicData) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, progress, onSelect }) => {
  const masteryScore = progress?.masteryScore || 0;
  const status = progress?.status || 'Unstudied';

  return (
    <div
      onClick={() => onSelect(topic)}
      className="group bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top Section */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 font-black text-sm flex items-center justify-center shrink-0">
              {topic.code}
            </span>
            <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 truncate max-w-[170px]">
              {topic.category}
            </span>
          </div>

          {/* Status Badge */}
          {status === 'Mastered' ? (
            <span className="inline-flex items-center space-x-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-3 h-3" />
              <span>Paham</span>
            </span>
          ) : status === 'Needs Review' ? (
            <span className="inline-flex items-center space-x-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Clock className="w-3 h-3" />
              <span>Ulangi</span>
            </span>
          ) : (
            <span className="inline-flex items-center space-x-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
              <span>Belum</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug mb-3">
          {topic.title}
        </h3>

        {/* Source Provenance Label */}
        <div className="flex items-center space-x-1.5 mb-4 text-[11px] text-slate-400">
          {topic.pdfStatus.includes('PDF') ? (
            <span className="inline-flex items-center space-x-1 text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
              <FileText className="w-3 h-3 text-emerald-400" />
              <span>📄 Dari PDF</span>
            </span>
          ) : null}
          {topic.sourceLabels.fromSupplemental.length > 0 && (
            <span className="inline-flex items-center space-x-1 text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
              <Globe className="w-3 h-3 text-sky-400" />
              <span>🌐 Rujukan Resmi</span>
            </span>
          )}
        </div>
      </div>

      {/* Bottom Section: Features Stats & Progress Bar */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80 mb-3">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1" title="Pertanyaan Active Recall">
              <BookOpen className="w-3.5 h-3.5 text-amber-400/80" />
              <span>{topic.activeRecall.length}</span>
            </span>
            <span className="flex items-center space-x-1" title="Flashcards">
              <Brain className="w-3.5 h-3.5 text-sky-400/80" />
              <span>{topic.flashcards.length}</span>
            </span>
            <span className="flex items-center space-x-1" title="Soal Kuis Evaluasi">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400/80" />
              <span>{topic.quizQuestions.length}</span>
            </span>
          </div>
          <span className="font-mono text-[11px] font-semibold text-slate-400">
            {masteryScore}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              masteryScore >= 80
                ? 'bg-emerald-500'
                : masteryScore >= 40
                ? 'bg-amber-500'
                : 'bg-slate-700'
            }`}
            style={{ width: `${masteryScore}%` }}
          />
        </div>
      </div>
    </div>
  );
};
