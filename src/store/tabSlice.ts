import { createSelector, createSlice } from '@reduxjs/toolkit';

type SliceState = { value: number };

const selectSelf = (state: { tab: SliceState }) => state.tab;

const initialState: SliceState = { value: 0 };

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTab } = tabSlice.actions;

export const getTab = createSelector(selectSelf, (state) => state.value);

export const tabReducer = tabSlice.reducer;
