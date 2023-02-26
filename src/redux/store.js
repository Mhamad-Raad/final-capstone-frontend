import { configureStore } from '@reduxjs/toolkit';
import cartItems from './cartSlice';
import registrationSlice from './reducers/registrationSlice';

const store = configureStore({
  reducer: {
    cartItems,
    registration: registrationSlice,
  },
});

export default store;
