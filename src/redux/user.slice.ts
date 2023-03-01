import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/post.type";

interface UserState {
  data: User;
  error: boolean;
  success: boolean;
}
const initialState: UserState = {
  data: {} as User,
  error: false,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUserStart: (state) => {
      state.data = {} as User;
      state.error = false;
      state.success = false;
    },
    currentUserSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.success = true;
    },
    currentUserFailed: (state, action: PayloadAction<any>) => {
      state.data = {} as User;
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
