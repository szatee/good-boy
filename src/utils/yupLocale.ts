import type { TFunction } from 'i18next';

export const yupLocale = (t: TFunction<string>) => ({
  mixed: {
    required: t('errors.mixed.required'),
  },
  string: {
    email: t('errors.string.email'),
    min: t('errors.string.min'),
    max: t('errors.string.max'),
  },
});
