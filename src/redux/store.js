import { configureStore } from '@reduxjs/toolkit';
import tripItems from './tripSlice';
import reserveItems from './reserveSlice';
// import cartItems from './cartSlice';
import tripSlice from './tripSlice';
import registrationSlice from './reducers/registrationSlice';

const store = configureStore({
  reducer: {
    tripItems,
    reserveItems,
    trips: tripSlice,
    // cartItems,
    registration: registrationSlice,
  },
});

export default store;
