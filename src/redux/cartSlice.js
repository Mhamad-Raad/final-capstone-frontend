import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTripItem: (state) => {
      state.cart.push(state.payload);
    },

    setTripItems: (state) => {
      state.cart = state.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const { addTripItem, setTripItems } = tripsSlice.actions;

export default tripsSlice.reducer;
