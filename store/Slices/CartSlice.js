import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:[],
  },
  reducers: {
addtocart:(state,action)=>{
    const { id, title, price,image } = action.payload;
    const existingItem = state.items.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, title, price,image, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
})
// console.log(JSON.parse(localStorage.getItem('cartItems')))

// Action creators are generated for each case reducer function
export const { addtocart} = CartSlice.actions;

export default CartSlice.reducer;