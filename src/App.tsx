import { memo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useTranslation } from 'react-i18next';
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
  Typography,
} from '@mui/material';
import { theme } from './theme';

const queryClient = new QueryClient();

export const App = memo(() => {
  const { t } = useTranslation();
  return (
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Typography variant="h3">{t('common.test')}</Typography>
        </ThemeProvider>
      </QueryClientProvider>
    </StyledEngineProvider>
  );
});
