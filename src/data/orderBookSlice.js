import { createSlice } from "@reduxjs/toolkit";

const orderBookSlice = createSlice({
  name: "orderBook",
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = {
        orders: action.payload,
      };
    },
  },
});

export const { setOrders } = orderBookSlice.actions;

export default orderBookSlice.reducer;
