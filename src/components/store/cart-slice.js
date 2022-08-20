import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    totalItem: 0,
    showCart: false,
  },
  reducers: {
    addtoCart(state, action) {
      const itemId = state.cartItem.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const existingItem = state.cartItem[itemId];

      if (existingItem) {
        let newCart = state.cartItem;
        newCart[itemId] = {
          ...existingItem,
          quantity: state.cartItem[itemId].quantity + 1,
          total: state.cartItem[itemId].total + state.cartItem[itemId].price,
        };
        state.cartItem = newCart;
        state.totalItem = state.totalItem + 1;
      } else {
        state.cartItem = state.cartItem.concat({
          ...action.payload.item,
          total: action.payload.item.price,
        });
        state.totalItem = state.totalItem + 1;
      }
    },
    removeFromCart(state, action) {
      const itemId = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.cartItem[itemId];
      if (existingItem.quantity === 1) {
        let newCart = state.cartItem.filter(item => item.id !== action.payload)
      } else {
        let newCart = state.cartItem;
        newCart[itemId] = {
          ...existingItem,
          quantity: state.cartItem[itemId].quantity - 1,
          total: state.cartItem[itemId].total - state.cartItem[itemId].price,
        };
        state.cartItem = newCart;
        state.totalItem = state.totalItem - 1;
      }
    },
    cartToggle(state) {
      state.showCart = !state.showCart;
    },
    initiateCart(state, action) {
      state.totalItem = action.payload.totalItem;
      state.cartItem = action.payload.cartItem;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
