import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:[],
  },
  reducers: {
    addtocart: (state, action) => {
      const { _id, title, price, image } = action.payload;
      const existingItem = state.items.find(item => item._id === _id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ _id, title, price, image, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const { _id } = action.payload;
      state.items = state.items.filter(item => item._id !== _id);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtocart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
