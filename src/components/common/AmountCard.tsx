import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { FormFieldWrapper as MFormFieldWrapper } from './FormFieldWrapper';
import { useEvent } from 'utils/formik';

const FormFieldWrapper = styled(MFormFieldWrapper)<{ active: boolean }>`
  padding: 16px;
  background-image: ${({ theme, active }) =>
    active ? theme.palette.primary.light : theme.palette.background.default};
  color: ${({ theme, active }) =>
    active ? theme.palette.background.default : theme.palette.text.primary};
`;

export const AmountCard = memo(
  ({
    name,
    amount,
    active,
    onClick,
  }: {
    name: string;
    amount: number;
    active: boolean;
    onClick: (e: any) => void | any;
  }) => {
    const onChange = useEvent(onClick, name);

    return (
      <FormFieldWrapper active={active} onClick={() => onChange(amount)}>
        <Typography variant="h2">{amount} €</Typography>
      </FormFieldWrapper>
    );
  },
);
