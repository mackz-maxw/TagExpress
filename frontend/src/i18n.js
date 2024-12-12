import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en_us.json';
import zhTranslation from './locales/zh_cn.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      zh: { translation: zhTranslation },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;