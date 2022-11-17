import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    value: {
      firstName: '',
      lastName: '',
      email: '',
      value: '',
      phone: '',
      shelterID: null,
    },
  },
  reducers: {
    setForm: (state, action) => {
      const payload = action.payload;
      state.value = { ...state.value, ...payload };
    },
  },
});

export const { setForm } = formSlice.actions;

export const formReducer = formSlice.reducer;
