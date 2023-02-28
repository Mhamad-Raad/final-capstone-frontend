import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const defaultSlice = {
  reserved: [],
};

const getAllReversedTrips = createAsyncThunk(
  'user/myreservations',
  async () => {
    const response = await fetch('http://localhost:3001/reservations');
  }
);

const reserveSlice = createSlice({
  name: 'reservations',
  initialState: defaultSlice,
  reducers: {
    addReserveItem: (state, action) => {
      state.reserved.push(action.payload);
    },
  },
  extraReducers: {
    [getAllReversedTrips.fulfilled]: (state, action) => {
      state.reserved = action.payload;
    }
  }

});
