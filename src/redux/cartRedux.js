import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCartItem: (state) => {
      state.cart.push(action.payload);
    },
    removeCartItem: (state) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrremoveCartItem, addCartItem } = counterSlice.actions;

export default counterSlice.reducer;
