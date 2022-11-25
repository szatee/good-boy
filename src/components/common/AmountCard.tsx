import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { FormFieldWrapper as MFormFieldWrapper } from './FormFieldWrapper';

const FormFieldWrapper = styled(MFormFieldWrapper)<{ active: boolean }>`
  padding: 16px;
  background-image: ${({ theme, active }) =>
    active ? theme.palette.primary.light : theme.palette.background.default};
  color: ${({ theme, active }) =>
    active ? theme.palette.background.default : theme.palette.text.primary};
`;

export const AmountCard = memo(
  ({
    amount,
    active,
    onClick,
  }: {
    amount: number;
    active: boolean;
    onClick: () => void;
  }) => {
    return (
      <FormFieldWrapper active={active} onClick={onClick}>
        <Typography variant="h2">{amount} €</Typography>
      </FormFieldWrapper>
    );
  },
);
