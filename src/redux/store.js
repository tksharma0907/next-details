import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import counterReducer from "@redux/slice/counterSlice";
import themeReducer from "@redux/slice/theme";

export const store = configureStore({
  reducer: {
    counterReducer,
    themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
