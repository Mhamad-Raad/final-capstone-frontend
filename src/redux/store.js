import { configureStore } from '@reduxjs/toolkit';
// import cartItems from './cartSlice';
import tripSlice from './tripSlice';
import registrationSlice from './reducers/registrationSlice';

const store = configureStore({
  reducer: {
    trips: tripSlice,
    // cartItems,
    registration: registrationSlice,
  },
});

export default store;
