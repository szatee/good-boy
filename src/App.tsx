import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { setLocale } from 'yup';
import { yupLocale } from 'utils/yupLocale';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from 'store';
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { theme } from './theme';
import { Layout } from 'components/Layout';
import { Tabs } from 'components/Tabs';

const queryClient = new QueryClient();

export const App = memo(() => {
  const { t } = useTranslation();
  setLocale(yupLocale(t));
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Tabs />
            </Layout>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </StyledEngineProvider>
  );
});
