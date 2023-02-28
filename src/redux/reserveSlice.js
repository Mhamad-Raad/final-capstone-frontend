import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const defaultSlice = {
  reserve: [],
};

const getAllReversedTrips = createAsyncThunk(
  'user/myreservations',
  async () => {
    const response = await fetch('http://localhost:3001/reservations');
  }
);

const reserveSlice = createSlice({
  name: 'reserve',
  initialState: defaultSlice,
  reducers: {
    addReserveItem: (state, action) => {
      state.reserve.push(action.payload);
    },
  },
});
