import { object, string } from 'yup';

export const useStepOneSchema = (required: boolean) => {
  return (
    required &&
    object({
      shelterID: string().required(),
    })
  );
};
