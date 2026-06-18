import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageCode = string;

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
  isFirstVisit: boolean;
  setFirstVisitDone: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      return localStorage.getItem('preferred-language') || '';
    } catch {
      return '';
    }
  });

  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    try {
      return !localStorage.getItem('preferred-language');
    } catch {
      return true;
    }
  });

  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({});

  // Dynamically load translations
  useEffect(() => {
    import('./translations').then((mod) => {
      setTranslations(mod.translations);
    });
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    try {
      localStorage.setItem('preferred-language', code);
    } catch {}
  };

  const setFirstVisitDone = () => {
    setIsFirstVisit(false);
  };

  const t = (key: string): string => {
    const lang = language || 'en';
    const langTranslations = translations[lang] || translations['en'] || {};
    return langTranslations[key] || (translations['en'] || {})[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isFirstVisit, setFirstVisitDone }}>
      {children}
    </LanguageContext.Provider>
  );
}
