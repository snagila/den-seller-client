import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
