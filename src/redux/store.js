import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from "./EcommerceSlice";

const store = configureStore({
  reducer: {
    ecommerce: ecommerceReducer,
  },
});

export default store;