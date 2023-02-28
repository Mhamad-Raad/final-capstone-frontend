import { configureStore } from '@reduxjs/toolkit';
import tripItems from './tripSlice';
import reserveItems from './reserveSlice';

const store = configureStore({
  reducer: {
    tripItems,
    reserveItems,
  },
});

export default store;
