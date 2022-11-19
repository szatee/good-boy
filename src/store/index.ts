import { configureStore } from '@reduxjs/toolkit';
import { api } from 'services/api';
import { tabReducer } from './tabSlice';
import { formReducer } from './formSlice';

const createStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      tab: tabReducer,
      form: formReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
