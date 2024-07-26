import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux/userSlice";
import categoryReducer from "./category/categorySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});

export default store;
