import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
  },
});
