import { createSlice } from "@reduxjs/toolkit";

const orderBookSlice = createSlice({
  name: "orderBook",
  initialState: {
    bids: [],
    asks: [],
  },
  reducers: {
    setBids: (state, action) => {
      state.bids = { ...state.bids, ...action.payload };
    },
    setAsks: (state, action) => {
      state.asks = { ...state.asks, ...action.payload };
    },
  },
});

export const { setBids, setAsks } = orderBookSlice.actions;

export default orderBookSlice.reducer;
