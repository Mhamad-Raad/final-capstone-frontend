import { configureStore } from '@reduxjs/toolkit';
import cartItems from './cartSlice';

const store = configureStore({
  reducer: {
    cartItems,
  },
});

export default store;
