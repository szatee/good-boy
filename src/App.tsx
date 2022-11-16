import { memo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { theme } from './theme';
import { Layout } from 'components/Layout';

const queryClient = new QueryClient();

export const App = memo(() => {
  return (
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </QueryClientProvider>
    </StyledEngineProvider>
  );
});
