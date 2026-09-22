import { TopicData } from '../types/topics';
import { topicsAtoG } from './topics/topicsAtoG';
import { topicsHtoN } from './topics/topicsHtoN';
import { topicsOtoU } from './topics/topicsOtoU';
import { topicsVtoZ1to4 } from './topics/topicsVtoZ1to4';

export const allTopics: TopicData[] = [
  ...topicsAtoG,
  ...topicsHtoN,
  ...topicsOtoU,
  ...topicsVtoZ1to4
];

export const getTopicById = (id: string): TopicData | undefined => {
  return allTopics.find(t => t.id === id || t.code === id);
};

export const getTopicsByCategory = (category: string): TopicData[] => {
  return allTopics.filter(t => t.category === category);
};

export const searchTopics = (query: string): TopicData[] => {
  const q = query.toLowerCase().trim();
  if (!q) return allTopics;
  return allTopics.filter(t => 
    t.title.toLowerCase().includes(q) ||
    t.code.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.keywords.some(k => k.toLowerCase().includes(q)) ||
    t.fullContent.toLowerCase().includes(q)
  );
};
