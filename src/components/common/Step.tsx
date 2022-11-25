import { memo } from 'react';
import { styled } from '@mui/material/styles';

const InActive = styled('div')`
  width: 20px;
  height: 6px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.text.secondary};
  opacity: 0.36;
`;

const Active = styled('div')`
  width: 44px;
  height: 6px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  background-image: ${({ theme }) => theme.palette.primary.dark};
`;

export const Step = memo(({ active }: { active?: boolean }) => {
  return active ? <Active /> : <InActive />;
});
