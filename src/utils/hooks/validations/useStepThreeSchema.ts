import { object, bool } from 'yup';

export const useStepThreeSchema = () => {
  return object({
    gdpr: bool().oneOf([true]),
  });
};
