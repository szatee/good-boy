import { memo } from 'react';
import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)`
  :hover {
    box-shadow: ${({ theme }) => theme.shadows[1]};
  }
`;

export const Button = memo(
  ({
    children,
    type,
    ...rest
  }: {
    children: ReactNode;
    type?: 'submit';
    color?: 'primary' | 'secondary';
    onClick?: () => void;
  }) => {
    return (
      <StyledButton variant="contained" type={type} {...rest}>
        {children}
      </StyledButton>
    );
  },
);
