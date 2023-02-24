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

    setCartItems: (state) => {
      state.cart = state.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
