import { configureStore } from '@reduxjs/toolkit';
import tripItems from './tripSlice';

const store = configureStore({
  reducer: {
    tripItems,
  },
});

export default store;
