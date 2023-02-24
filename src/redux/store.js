import { configureStore } from '@reduxjs/toolkit';

import cartItems from '../features/counter/cartSlice';
export const store = configureStore({
  reducer: {
    cartItems: cartItems
  },
});
