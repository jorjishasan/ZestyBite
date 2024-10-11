import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./restaurantsSlice";
import restaurantMenuReducer from "./restaurantMenuSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    restaurantMenu: restaurantMenuReducer,
    cart: cartReducer,
  },
});
