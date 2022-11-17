import { memo, Fragment } from 'react';
import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Divider as MDivider } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';

import dog from 'assets/dog.png';

const Wrapper = styled(Grid)`
  max-width: 1140px;
  margin: 0 auto;
  padding: 80px 0;
`;
const Divider = styled(MDivider)`
  padding-top: 80px;
`;

export const Layout = memo(({ children }: { children?: ReactNode }) => (
  <Fragment>
    <Header />
    <Wrapper>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          {children}
        </Grid>
        <Grid item xs={4}>
          <img src={dog} alt="goodboy_dog" />
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
    </Wrapper>
    <Footer />
  </Fragment>
));
