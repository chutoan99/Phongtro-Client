import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Province } from "../types/provice.type";

interface ProvinceState {
  data: Province[];
  error: boolean;
  success: boolean;
}
const initialState: ProvinceState = {
  data: [] as Province[],
  error: false,
  success: false,
};

const provinceSlice = createSlice({
  name: "province",
  initialState,
  reducers: {
    // province
    fetchProvinceStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = [];
    },
    fetchProvinceSuccess: (state, action: PayloadAction<any>) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchProvinceFailed: (state, action: PayloadAction<any>) => {
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const provinceActions = provinceSlice.actions;
export default provinceSlice.reducer;
