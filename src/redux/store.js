import { configureStore } from '@reduxjs/toolkit';
import reserveItems from './reserveSlice';
// import cartItems from './cartSlice';
import tripSlice from './tripSlice';
import sessionSlice from './reducers/sessionSlice';

const store = configureStore({
  reducer: {
    reserveItems,
    trips: tripSlice,
    // cartItems,
    session: sessionSlice,
  },
});

export default store;
