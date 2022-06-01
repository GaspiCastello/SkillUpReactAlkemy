import { createSlice } from '@reduxjs/toolkit';
    
const authSlice = createSlice({
  name: 'auth',
  initialState: { isLogged: false, token: '' },
  reducers: {
    login(state) {
      state.isLogged = !state.isLogged;
    },
    logout(state) {
      state.isLogged = !state.isLogged;
    },
    saveToken(state, action) {
      state.token = `${action.payload}`;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
