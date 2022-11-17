import { memo } from 'react';
import { styled } from '@mui/material/styles';

const Icon = styled('img')`
  width: 25px;
  border-radius: 4px;
  margin-top: 2px;
  cursor: pointer;
`;

export const Flag = memo(
  ({ icon, onClick }: { icon: string; onClick?: (e: any) => void }) => (
    <Icon src={icon} alt="flag" onClick={onClick} />
  ),
);
