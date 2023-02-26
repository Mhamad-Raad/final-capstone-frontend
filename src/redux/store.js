import { configureStore } from '@reduxjs/toolkit';
import cartItems from './cartSlice';
import signupSlice from './sign_up/signupSlice';

const store = configureStore({
  reducer: {
    cartItems,
    registration: signupSlice,
  },
});

export default store;
