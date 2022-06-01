import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import favSlice from './fav-slice';



const store = configureStore({
  reducer: { auth: authSlice.reducer, cart: favSlice.reducer },
});

export default store;