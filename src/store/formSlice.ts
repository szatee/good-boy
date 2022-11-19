import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Form } from 'models/form';

type SliceState = { value: Form };

const selectSelf = (state: { form: SliceState }) => state.form;

const initialState: SliceState = {
  value: {
    type: '',
    firstName: '',
    lastName: '',
    email: '',
    value: 5,
    phone: '',
    shelterID: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,

  reducers: {
    setForm: (state, action) => {
      const payload = action.payload;
      state.value = { ...state.value, ...payload };
    },
  },
});

export const { setForm } = formSlice.actions;

export const getForm = createSelector(selectSelf, (state) => state.value);

export const formReducer = formSlice.reducer;
