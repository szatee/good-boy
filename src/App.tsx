import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { setLocale } from 'yup';
import { yupLocale } from 'utils/yupLocale';
import { store, persistor } from 'store';
import { sheltersSlice } from 'store/sheltersSlice';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { theme } from './theme';
import { Router } from './Router';
import { Layout } from 'components/Layout';
import { Alert } from 'components/common/Alert';

store.dispatch(sheltersSlice.endpoints.getShelters.initiate('shelters'));

export const App = memo(() => {
  const { t } = useTranslation();
  setLocale(yupLocale(t));
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout>
                <Router />
              </Layout>
              <Alert />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  );
});
