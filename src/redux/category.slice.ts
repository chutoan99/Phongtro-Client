import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../types/category.type";

interface CategoryState {
  data: Category[];
  error: boolean;
  success: boolean;
}
const initialState: CategoryState = {
  data: [] as Category[],
  error: false,
  success: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // category
    fetchCategoryStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchCategorySuccess: (state, action: PayloadAction<any>) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchCategoryFailed: (state, action: PayloadAction<any>) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const categorySliceActions = categorySlice.actions;
export default categorySlice.reducer;
