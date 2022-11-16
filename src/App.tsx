import { memo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { theme } from './theme';

import { Layout } from 'components/Layout';
import { StepOne } from 'screens/StepOne';

const queryClient = new QueryClient();

export const App = memo(() => {
  return (
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <StepOne />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </StyledEngineProvider>
  );
});
