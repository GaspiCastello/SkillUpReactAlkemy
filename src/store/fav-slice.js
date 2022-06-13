import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'fav',
  initialState: { items: [] },
  reducers: {
    addAndRemove(state, action) {
      const existingItem = state.items.find(_id => _id == action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload.id);
      } else {
        state.items=state.items.filter(id => id !== action.payload.id);
      }
    },
  },
});

export const favActions = favSlice.actions;

export default favSlice;
