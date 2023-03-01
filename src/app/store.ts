import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../redux/auth.slice";
import postReducer from "../redux/post.slice";
import areaReducer from "../redux/area.slice";
import priceReducer from "../redux/price.slice";
import provinceReducer from "../redux/province.slice";
import categoryReducer from "../redux/category.slice";
import userReducer from "../redux/user.slice";
export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      post: postReducer,
      price: priceReducer,
      area: areaReducer,
      province: provinceReducer,
      category: categoryReducer,
      user: userReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
