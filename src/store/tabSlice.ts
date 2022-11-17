import { createSlice } from '@reduxjs/toolkit';

export const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    value: 0,
  },
  reducers: {
    setTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTab } = tabSlice.actions;

export const tabReducer = tabSlice.reducer;
