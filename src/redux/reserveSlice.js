import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const defaultSlice = {
  reserved: [],
};

export const getAllReversedTrips = createAsyncThunk(
  'user/myreservations',
  async () => {
    const data = await fetch('http://localhost:4000/api/v1/reservations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const response = data.json();

    return response;
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
    },
  },
});

export const { addReserveItem } = reserveSlice.actions;
export default reserveSlice.reducer;
