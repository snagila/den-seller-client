import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
