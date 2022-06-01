import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'fav',
  initialState: { items: [] },
  reducers: {
    addAndRemove(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        state.items.filter(item => item.id !== action.payload.id);
      }
    },
  },
});

export const favActions = favSlice.actions;

export default favSlice;
