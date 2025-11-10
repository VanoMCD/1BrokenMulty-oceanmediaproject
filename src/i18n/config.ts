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
  en: { name: 'English', flag: '🇬🇧' },
  'pt-br': { name: 'Português (Brasil)', flag: '🇧🇷' },
  es: { name: 'Español', flag: '🇪🇸' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'Français', flag: '🇫🇷' },
  sr: { name: 'Српски', flag: '🇷🇸' }
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
      caches: ['localStorage']
    }
  });

export default i18n;
