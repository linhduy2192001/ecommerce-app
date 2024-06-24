import { errors } from "./../../node_modules/immer/src/utils/errors";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer, getUserAction } from "./auth";
import { cartReducer } from "./cart";
import { ENV } from "../config/api";

const userFromLocalStorage = localStorage.getItem("user");

const initialState = {
  auth: {
    user: userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null,
    loading: false,
    error: null,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: initialState,
  devTools: ENV === "development",
});

store.subscribe(() => {
  const state = store.getState();
  const user = state.auth.user;
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user");
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
