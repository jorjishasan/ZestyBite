import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./restaurantsSlice";
import restaurantMenuReducer from "./restaurantMenuSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    restaurantMenu: restaurantMenuReducer,
  },
});
