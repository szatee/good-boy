import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { api } from 'services/api';
import { formReducer } from './formSlice';
import { messageReducer } from './messageSlice';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  form: formReducer,
  message: messageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(api.middleware),
  });

export const store = createStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
