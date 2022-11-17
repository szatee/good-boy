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
    onClick,
    className,
  }: {
    label?: string;
    error?: boolean;
    helperText?: string;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
  }) => (
    <Fragment>
      <Wrapper error={error} onClick={onClick} className={className}>
        <Typography variant="h2">{label}</Typography>
        {children}
      </Wrapper>
      <Typography>{helperText}</Typography>
    </Fragment>
  ),
);
