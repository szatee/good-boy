import { CARD_SIDE } from 'components/common/Card';
import { useTranslation } from 'react-i18next';
import { number, object, string } from 'yup';

export const useStepOneSchema = () => {
  const { t } = useTranslation();
  return object({
    type: string().required(),
    shelterID: string().when('type', {
      is: (type: CARD_SIDE) => type === CARD_SIDE.LEFT,
      then: string().required(t('step_one.select.validation_text') ?? ''),
      otherwise: string(),
    }),

    customValue: number().when('value', {
      is: (value: any) => value === null,
      then: number().required(t('step_one.amount.validation_text') ?? ''),
    }),
  });
};
