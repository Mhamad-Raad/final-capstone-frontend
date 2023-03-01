import { configureStore } from '@reduxjs/toolkit';
// import cartItems from './cartSlice';
import tripItems from './tripSlice';
import registrationSlice from './reducers/registrationSlice';

const store = configureStore({
  reducer: {
    tripItems,
    // cartItems,
    registration: registrationSlice,
  },
});

export default store;
