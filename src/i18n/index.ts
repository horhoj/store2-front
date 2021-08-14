import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ru } from './ru';
import { en } from './en';

export const LANG_EN = 'en';
export const LANG_RU = 'ru';

// the translations
const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  ru: {
    translation: {
      ...ru,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: LANG_RU,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

//убираем для больших проектов
// declare module 'react-i18next' {
//   type CustomResources = typeof resources['en'];
//   interface Resources extends CustomResources {}
// }

export default i18n;
