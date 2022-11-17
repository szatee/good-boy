import { createSlice } from '@reduxjs/toolkit';

export const sheltersSlice = createSlice({
  name: 'shelters',
  initialState: { value: [] },
  reducers: {
    setShelters: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setShelters } = sheltersSlice.actions;

export const sheltersReducer = sheltersSlice.reducer;
