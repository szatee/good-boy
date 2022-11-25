import { memo } from 'react';
import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const StyledWrapper = styled(Grid)`
  padding-top: 40px;
`;

export const Wrapper = memo(({ children }: { children: ReactNode }) => {
  return (
    <StyledWrapper container spacing={8}>
      {children}
    </StyledWrapper>
  );
});
