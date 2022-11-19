import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

export const useStepOneSchema = (required: boolean) => {
  const { t } = useTranslation();
  return (
    required &&
    object({
      shelterID: string().required(t('step_one.select.validation_text') ?? ''),
    })
  );
};
