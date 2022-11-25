import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const Wrapper = styled(Grid)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.text.primary + '16'};
  margin-bottom: 16px;
`;

export const CardIcon = memo(({ icon }: { icon: string }) => {
  return (
    <Wrapper container justifyContent="center" alignItems="center">
      <img src={icon} alt="icon" />
    </Wrapper>
  );
});
