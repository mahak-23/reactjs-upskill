import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { totalItems: 0, cartItems: {} },
  reducers: {
    addItemToCart: (state, action) => {
      // 🛒 Add Item to Cart

      // ❌ WRONG WAY - Vanilla (older) Redux:
      // - Mutation is NOT allowed.
      // - We must return a new state object manually.
      //
      // Example (not allowed here):
      // const newState = { ...state };
      // newState.totalItems += 1;
      // return newState;

      // ✅ RIGHT WAY - Redux Toolkit (RTK):
      // - Thanks to Immer under the hood, direct mutation is allowed.
      // - Returning new state is optional if you're mutating directly.

      const { id } = action.payload;
      state.totalItems += 1;

      if (state.cartItems[id]) {
        state.cartItems[id].quantity += 1;
      } else {
        state.cartItems[id] = { item: action.payload, quantity: 1 };
      }
    },
    removeItemFromCart: (state, action) => {
      // Remove item from cart - Mutating the state here

      const { id } = action.payload;
      state.totalItems = state.totalItems === 1 ? 0 : state.totalItems - 1;

      if (state.cartItems[id].quantity > 1) {
        state.cartItems[id].quantity -= 1;
      } else {
        delete state.cartItems[id];
      }
    },
    clearCart: (state, action) => {
      // ❌ Wrong way - reassigning the whole state (won't work):
      // state = []
      // console.log(current(state));

      // ✅ RTK Rule: Either *mutate* the existing state or *return* a brand new state.
      state.cartItems = {};
      state.totalItems = 0;

      // ✅ Alternative way (replace full state, less preferred):
      // return { cartItems: {}, totalItems: 0 };
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
