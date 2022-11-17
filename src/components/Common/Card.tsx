import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { CardIcon } from './CardIcon';

export enum CARD_SIDE {
  LEFT = 'left',
  RIGHT = 'right',
}

const Wrapper = styled('div')<{ active: boolean; side: CARD_SIDE }>`
  width: 100%;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  background-image: ${({ theme, active }) =>
    active ? theme.palette.primary.light : theme.palette.background.default};
  box-shadow: ${({ theme, active }) => theme.shadows[active ? 1 : 0]};
  border-radius: ${({ side }) =>
    side === CARD_SIDE.LEFT ? '24px 0 0 24px' : '0 24px 24px 0'};
  color: ${({ theme, active }) =>
    active ? theme.palette.background.default : theme.palette.secondary.dark};
  cursor: pointer;
`;

export const Card = memo(
  ({
    text,
    active,
    side,
    icon,
    onClick,
  }: {
    text: string;
    active: boolean;
    side: CARD_SIDE;
    icon: string;
    onClick?: any;
  }) => {
    return (
      <Wrapper active={active} side={side} onClick={onClick}>
        <CardIcon icon={icon} />
        <br />
        <Typography variant="h3">{text}</Typography>
      </Wrapper>
    );
  },
);
