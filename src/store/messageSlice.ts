import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Message } from 'models/message';

type SliceState = { value: Message };

const selectSelf = (state: { message: SliceState }) => state.message;

const initialState: SliceState = {
  value: {
    type: 'success',
    message: '',
  },
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      const payload = action.payload;
      state.value = { ...state.value, ...payload };
    },
  },
});

export const { setMessage } = messageSlice.actions;

export const getMessage = createSelector(selectSelf, (state) => state.value);

export const messageReducer = messageSlice.reducer;
