import { object, string } from 'yup';
import 'yup-phone';
import { useTranslation } from 'react-i18next';

export const useStepTwoSchema = () => {
  const { t } = useTranslation();
  return object({
    firstName: string()
      .min(2)
      .max(20)
      .label(t('step_two.form.label.first_name')),
    lastName: string()
      .required()
      .min(2)
      .max(30)
      .label(t('step_two.form.label.last_name')),
    email: string().email().label(t('step_two.form.label.email')),
    phone: string().matches(
      /([+]?\d{1,3}[. \s]?)?(\d{12}?)/g,
      t('errors.string.phone') ?? '',
    ),
  });
};
