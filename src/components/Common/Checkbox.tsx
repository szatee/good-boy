import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Check } from '@mui/icons-material';

const StyledCheckbox = styled(Grid)`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #f3e2d9;
  margin-right: 16px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Checkbox = memo(({ checked }: { checked: boolean }) => (
  <StyledCheckbox container alignItems="center" justifyContent="center">
    {checked && <Check />}
  </StyledCheckbox>
));
