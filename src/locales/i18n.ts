import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import sk from './sk.json';

const translationsJson = {
  sk: {
    translation: sk,
  },
};

export const i18n = i18next.use(initReactI18next).init({
  resources: translationsJson,
  fallbackLng: 'sk',
  debug:
    process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
});
