import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    debug: true,
    backend: {
      loadPath: './locales/{{ns}}.json', // Đường dẫn để tải các file bản dịch
    },
    react: {
      wait: true,
    },
  });

export default i18n;