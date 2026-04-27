import React, { createContext, useContext, useEffect, useState } from 'react';
import { INITIAL_CONTENT, ContentSchema } from '../constants';

interface ContentContextType {
  content: ContentSchema;
  updateContent: (newContent: ContentSchema) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentSchema>(() => {
    try {
      const saved = localStorage.getItem('fontaneria-content');
      return saved ? JSON.parse(saved) : INITIAL_CONTENT;
    } catch {
      return INITIAL_CONTENT;
    }
  });

  useEffect(() => {
    localStorage.setItem('fontaneria-content', JSON.stringify(content));
  }, [content]);

  const updateContent = (newContent: ContentSchema) => {
    setContent(newContent);
  };

  const resetContent = () => {
    setContent(INITIAL_CONTENT);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
