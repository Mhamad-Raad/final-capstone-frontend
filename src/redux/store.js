import { configureStore } from '@reduxjs/toolkit';
import tripItems from './tripSlice';
import reserveItems from './reserveSlice';
import registrationSlice from './reducers/registrationSlice';

const store = configureStore({
  reducer: {
    tripItems,
    reserveItems,
    registration: registrationSlice,
  },
});

export default store;
