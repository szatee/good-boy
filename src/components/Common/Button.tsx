import { memo } from 'react';
import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Button as MButton } from '@mui/material';

// const Wrapper = styled(Grid)`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   background: ${({ theme }) => theme.palette.text.primary + '16'};
// `;

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
