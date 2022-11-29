import { configureStore } from "@reduxjs/toolkit";
import pathSlice from "./pathSlice";
export const store = configureStore({
  reducer: {
    path: pathSlice,
  },
});
