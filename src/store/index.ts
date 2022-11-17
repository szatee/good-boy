import { configureStore } from '@reduxjs/toolkit';

import { tabReducer } from './tabSlice';
import { sheltersReducer } from './sheltersSlice';

export default configureStore({
  reducer: {
    tab: tabReducer,
    shelters: sheltersReducer,
  },
});
