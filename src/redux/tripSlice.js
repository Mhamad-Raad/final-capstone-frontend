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

export const addTrip = async (tripData) => {
  const token = localStorage.getItem('token');

  const formData = new FormData();
  formData.append('trip[price]', tripData.get('price'));
  formData.append('trip[rating]', tripData.get('rating'));
  formData.append('trip[destination_city]', tripData.get('destination_city'));
  formData.append('trip[description]', tripData.get('description'));
  formData.append('trip[user_id]', tripData.get('user_id'));

  formData.append('image', tripData.get('image'));

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post('http://localhost:4000/api/v1/trips', formData, config);
  return response.data;
};

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

    [addTrip.pending]: (state) => {
      state.status = 'loading';
    },

    [addTrip.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.trips.push(action.payload);
    },

    [addTrip.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { tripAdded } = tripSlice.actions;

export default tripSlice.reducer;
