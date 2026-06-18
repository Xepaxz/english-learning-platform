import { useLanguage } from '@/i18n/LanguageContext';
import { createPortal } from 'react-dom';
import { languages } from '@/i18n/translations';

export function getLanguageFlag(code: string): string {
  return languages.find(l => l.code === code)?.flag || '🌐';
}

export function LanguageSelector({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { setLanguage, setFirstVisitDone, t } = useLanguage();

  const handleSelect = (code: string) => {
    setLanguage(code);
    setFirstVisitDone();
    onClose();
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6 md:mb-8">
          <div className="text-4xl mb-3">🌍</div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2">
            {t('lang.chooseLanguage')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {t('lang.selectPreferred')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex items-center gap-3 p-3 md:p-4 rounded-xl border border-border/50 bg-secondary/20 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 text-left group"
            >
              <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">{lang.flag}</span>
              <span className="text-sm md:text-base font-medium text-foreground/80 group-hover:text-foreground">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
