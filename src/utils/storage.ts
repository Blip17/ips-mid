import { UserTopicProgress, CustomNoteSnippet } from '../types/topics';

const PROGRESS_KEY = 'masterips_user_progress_v1';
const NOTES_KEY = 'masterips_user_notes_v1';

export interface StorageData {
  progressMap: Record<string, UserTopicProgress>;
  notesMap: Record<string, CustomNoteSnippet[]>;
}

export const loadUserProgress = (): Record<string, UserTopicProgress> => {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load user progress:', e);
    return {};
  }
};

export const saveUserProgress = (topicId: string, update: Partial<UserTopicProgress>) => {
  try {
    const currentMap = loadUserProgress();
    const existing = currentMap[topicId] || {
      topicId,
      masteryScore: 0,
      status: 'Unstudied',
      flashcardsMastered: [],
      quizBestScore: 0
    };

    const updated: UserTopicProgress = {
      ...existing,
      ...update,
      lastStudiedAt: new Date().toISOString()
    };

    currentMap[topicId] = updated;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(currentMap));
    return currentMap;
  } catch (e) {
    console.error('Failed to save user progress:', e);
    return {};
  }
};

export const loadNotes = (topicId: string): CustomNoteSnippet[] => {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    if (!raw) return [];
    const allNotes = JSON.parse(raw);
    return allNotes[topicId] || [];
  } catch (e) {
    return [];
  }
};

export const saveNote = (topicId: string, title: string, content: string): CustomNoteSnippet[] => {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    const allNotes = raw ? JSON.parse(raw) : {};
    const existing = allNotes[topicId] || [];
    
    const newNote: CustomNoteSnippet = {
      id: 'note_' + Date.now(),
      title: title.trim() || 'Catatan Tanpa Judul',
      content,
      dateAdded: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newNote, ...existing];
    allNotes[topicId] = updated;
    localStorage.setItem(NOTES_KEY, JSON.stringify(allNotes));
    return updated;
  } catch (e) {
    console.error('Failed to save note:', e);
    return [];
  }
};

export const deleteNote = (topicId: string, noteId: string): CustomNoteSnippet[] => {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    if (!raw) return [];
    const allNotes = JSON.parse(raw);
    const existing: CustomNoteSnippet[] = allNotes[topicId] || [];
    const updated = existing.filter(n => n.id !== noteId);
    allNotes[topicId] = updated;
    localStorage.setItem(NOTES_KEY, JSON.stringify(allNotes));
    return updated;
  } catch (e) {
    return [];
  }
};
