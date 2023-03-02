import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// 0785110988 tấn
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      isLogin: false,
      error: false,
      success: false,
      token: null,
      response: {},
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
      token: null,
    },
  },
  reducers: {
    // login
    loginStart: (state) => {
      state.login.isLogin = false;
      state.login.error = false;
      state.login.success = false;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.login.isLogin = true;
      state.login.token = action.payload.token;
      state.login.success = true;
      state.login.response = action.payload.response;
    },
    loginFailed: (state, action: PayloadAction<any>) => {
      state.login.isLogin = false;
      state.login.error = action.payload;
    },

    // register
    registerStart: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = false;
      state.register.token = null;
    },
    registerSuccess: (state, action: PayloadAction<any>) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = action.payload.msg;
      state.register.token = action.payload.token;
    },
    registerFailed: (state, action: PayloadAction<any>) => {
      state.register.isFetching = true;
      state.register.error = action.payload.msg;
      state.register.success = false;
      state.register.token = null;
    },
    // update
    updateIdUser: (state) => {
      state.login.isLogin = true;
    },
    // logout
    logoutSuccess: (state) => {
      state.login.isLogin = false;
      state.login.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
