import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types/post.type";

interface PostState {
  data: Post[];
  error: boolean;
  success: boolean;
}
const initialState: PostState = {
  data: [] as Post[],
  error: false,
  success: false,
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    // price
    fetchPriceStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = [];
    },
    fetchPriceSuccess: (state, action: PayloadAction<any>) => {
      state.success = true;
      state.data = action.payload.sort((a, b) => {
        return a.order - b.order;
      });
    },
    fetchPriceFailed: (state, action: PayloadAction<any>) => {
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const priceActions = priceSlice.actions;
export default priceSlice.reducer;
