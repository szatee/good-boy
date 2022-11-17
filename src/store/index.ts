import { configureStore } from '@reduxjs/toolkit';

import { tabReducer } from './tabSlice';
import { sheltersReducer } from './sheltersSlice';
import { formReducer } from './formSlice';

export default configureStore({
  reducer: {
    tab: tabReducer,
    shelters: sheltersReducer,
    form: formReducer,
  },
});
