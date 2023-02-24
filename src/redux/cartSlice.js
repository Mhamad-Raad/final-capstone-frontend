import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCartItem: (state) => {
      state.cart.push(state.payload);
    },
    removeCartItem: (state) => {
      state.cart = state.cart.filter((item) => item.id !== state.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrremoveCartItem, addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
