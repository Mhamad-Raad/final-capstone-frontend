import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trips: [],
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTripItem: (state) => {
      state.trips.push(state.payload);
    },

    setTripItems: (state) => {
      state.trips = state.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTripItem, setTripItems } = tripsSlice.actions;

export default tripsSlice.reducer;
