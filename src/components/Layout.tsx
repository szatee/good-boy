import { memo } from 'react';
import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Divider as MDivider } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';
import { useBreakpoints } from 'utils/hooks/useBreakpoints';

import dog from 'assets/dog.png';

const Wrapper = styled('div')<{ isLaptop: boolean }>`
  max-width: 1140px;
  margin: 0 auto;
  padding: ${({ isLaptop }) => (isLaptop ? '80px 40px' : '80px 0')};
`;

const Image = styled('img')`
  width: 100%;
`;

const Divider = styled(MDivider)`
  padding-top: 80px;
`;

export const Layout = memo(({ children }: { children?: ReactNode }) => {
  const { isLaptop, isTablet } = useBreakpoints();
  return (
    <>
      <Header />
      <Wrapper isLaptop={isLaptop}>
        <Grid container justifyContent="space-between">
          <Grid item xs={isTablet ? 12 : 7}>
            {children}
          </Grid>
          {!isTablet && (
            <Grid item xs={4}>
              <Image src={dog} alt="goodboy_dog" />
            </Grid>
          )}
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
      </Wrapper>
      <Footer />
    </>
  );
});
