import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { FormControlLabel, Grid } from '@mui/material';
import { Check } from '@mui/icons-material';

const StyledCheckbox = styled(Grid)<{ error?: string }>`
  box-sizing: border-box;
  width: 34px;
  height: 34px;
  padding: 0 6px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, error }) =>
      error === 'true' ? theme.palette.error.main : '#f3e2d9'};
  margin: 0 10px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

const StyledFormControlLabel = styled(FormControlLabel)<{ error?: string }>`
  color: ${({ theme, error }) =>
    error === 'true' ? theme.palette.error.main : theme.palette.text.primary};
`;

const Empty = styled('div')`
  width: 24px;
  height: 24px;
`;

export const Checkbox = memo(
  ({
    label,
    checked,
    onClick,
    error,
  }: {
    label: string;
    checked: boolean;
    onClick: (e: boolean) => any;
    error?: boolean;
  }) => (
    <StyledFormControlLabel
      error={error?.toString()}
      onClick={onClick(!checked)}
      control={
        <StyledCheckbox
          container
          alignItems="center"
          justifyContent="center"
          error={error?.toString()}
        >
          {checked ? <Check /> : <Empty />}
        </StyledCheckbox>
      }
      label={label}
    />
  ),
);
