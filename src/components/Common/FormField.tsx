import { memo, Fragment } from 'react';
import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Wrapper = styled('div')<{ error?: boolean }>`
  border-radius: 8px;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.palette.error.main : theme.palette.secondary.light};
  padding: 16px 24px;
  cursor: pointer;
  :hover {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
`;

export const FormField = memo(
  ({
    label,
    children,
    error,
    helperText,
  }: {
    label?: string;
    error?: boolean;
    helperText?: string;
    children: ReactNode;
  }) => (
    <Fragment>
      <Wrapper error={error}>
        <Typography variant="h2">{label}</Typography>
        {children}
      </Wrapper>
      <Typography>{helperText}</Typography>
    </Fragment>
  ),
);
