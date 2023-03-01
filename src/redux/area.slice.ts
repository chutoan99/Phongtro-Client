import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Area } from "../types/area.type";

interface AreaState {
  data: Area[];
  error: boolean;
  success: boolean;
}
const initialState: AreaState = {
  data: [] as Area[],
  error: false,
  success: false,
};

const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    fetchAreaStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchAreaSuccess: (state, action: PayloadAction<any>) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchAreaFailed: (state, action: PayloadAction<any>) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const areaActions = areaSlice.actions;
export default areaSlice.reducer;
