import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./restaurantsSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
});
