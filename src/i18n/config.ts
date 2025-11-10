import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pt from './locales/pt.json';
import ptBr from './locales/pt-br.json';
import es from './locales/es.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import sr from './locales/sr.json';

export const languages = {
  'pt-br': { name: 'Português (Brasil)', flag: '🇧🇷', order: 1 },
  pt: { name: 'Português', flag: '🇵🇹', order: 2 },
  en: { name: 'English', flag: '🇬🇧', order: 3 },
  de: { name: 'Deutsch', flag: '🇩🇪', order: 4 },
  es: { name: 'Español', flag: '🇪🇸', order: 5 },
  fr: { name: 'Français', flag: '🇫🇷', order: 6 },
  sr: { name: 'Srpski', flag: '🇷🇸', order: 7 }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      'pt-br': { translation: ptBr },
      es: { translation: es },
      de: { translation: de },
      fr: { translation: fr },
      sr: { translation: sr }
    },
    lng: 'pt-br',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ['en', 'pt', 'pt-br', 'es', 'de', 'fr', 'sr'],
    nonExplicitSupportedLngs: false,
    react: {
      useSuspense: false
    }
  });

export default i18n;
