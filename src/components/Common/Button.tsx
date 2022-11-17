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
    ...rest
  }: {
    children: ReactNode;
    color?: 'primary' | 'secondary';
  }) => {
    return (
      <StyledButton variant="contained" {...rest}>
        {children}
      </StyledButton>
    );
  },
);
