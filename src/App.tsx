import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { setLocale } from 'yup';
import { yupLocale } from 'utils/yupLocale';
import { store } from 'store';
import { sheltersSlice } from 'store/sheltersSlice';
import { Provider } from 'react-redux';
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { theme } from './theme';
import { Layout } from 'components/Layout';
import { Tabs } from 'components/Tabs';
import { Alert } from 'components/Alert';

store.dispatch(sheltersSlice.endpoints.getShelters.initiate('shelters'));

export const App = memo(() => {
  const { t } = useTranslation();
  setLocale(yupLocale(t));
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Tabs />
          </Layout>
          <Alert />
        </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
});
