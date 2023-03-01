import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrips = createAsyncThunk('trips/fetchTrips', async () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get('http://localhost:4000/api/v1/trips', config);
  return response.data;
});

export const addTrip = createAsyncThunk('trips/addTrip', async (trip) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post('http://localhost:4000/api/v1/trips', trip, config);
  return response.data;
});

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [],
    status: null,
  },
  reducers: {
    tripAdded(state, action) {
      state.trips.push(action.payload);
    },
  },
  extraReducers: {
    [fetchTrips.pending]: (state) => {
      state.status = 'loading';
    },

    [fetchTrips.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.trips = action.payload;
    },

    [fetchTrips.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { tripAdded } = tripSlice.actions;

export default tripSlice.reducer;
