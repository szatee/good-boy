import { memo, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { CardIcon } from './CardIcon';

import wallet_grey from 'assets/svg/wallet_grey.svg';
import wallet_white from 'assets/svg/wallet_white.svg';
import paw_grey from 'assets/svg/paw_grey.svg';
import paw_white from 'assets/svg/paw_white.svg';

export enum CARD_SIDE {
  LEFT = 'left',
  RIGHT = 'right',
}

const Wrapper = styled('div')<{
  active: boolean;
  side: CARD_SIDE;
  onClick: () => void;
}>`
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
    name,
    text,
    side,
    icon,
    value,
    onClick,
  }: {
    name: string;
    text: string;
    side: CARD_SIDE;
    icon: string;
    value: CARD_SIDE;
    onClick: () => void;
  }) => {
    const renderIcon = useMemo(() => {
      const active = side === value;
      switch (icon) {
        case 'paw':
          return active ? paw_white : paw_grey;
        case 'wallet':
          return active ? wallet_white : wallet_grey;
        default:
          return '';
      }
    }, [icon, side, value]);

    return (
      <Wrapper active={side === value} side={side} onClick={onClick}>
        <CardIcon icon={renderIcon} />
        <br />
        <Typography variant="h3">{text}</Typography>
      </Wrapper>
    );
  },
);
