import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { FormField as MFormField } from './FormField';

const FormField = styled(MFormField)<{ active: boolean }>`
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
      <FormField active={active} onClick={onClick}>
        <Typography variant="h2">{amount} €</Typography>
      </FormField>
    );
  },
);
