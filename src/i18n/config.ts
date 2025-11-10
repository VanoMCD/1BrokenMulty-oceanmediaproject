import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ptBr from './locales/pt-br.json';
import es from './locales/es.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import sr from './locales/sr.json';

export const languages = {
  'pt-br': { name: 'Português (Brasil)', flag: '🇧🇷', order: 1 },
  en: { name: 'English', flag: '🇬🇧', order: 2 },
  de: { name: 'Deutsch', flag: '🇩🇪', order: 3 },
  es: { name: 'Español', flag: '🇪🇸', order: 4 },
  fr: { name: 'Français', flag: '🇫🇷', order: 5 },
  sr: { name: 'Srpski', flag: '🇷🇸', order: 6 }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      'pt-br': { translation: ptBr },
      es: { translation: es },
      de: { translation: de },
      fr: { translation: fr },
      sr: { translation: sr }
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
      lookupQuerystring: 'lng'
    },
    load: 'currentOnly',
    supportedLngs: ['en', 'pt-br', 'es', 'de', 'fr', 'sr']
  });

export default i18n;
