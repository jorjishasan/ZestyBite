import { createSlice } from "@reduxjs/toolkit";
import findNestedProp from "../utils/findNestedProps";
import hasProperty from "../utils/hasProperty";

const initialState = {
  info: null,
  itemCards: null,
  offers: null,
};

const restaurantMenuSlice = createSlice({
  name: "restaurantMenu",
  initialState,
  reducers: {
    setRestaurantInfo: (state, action) => {
      state.info = action.payload;
    },
    setItemCards: (state, action) => {
      const nestedCards = findNestedProp(action.payload || {}, "cards") || [];
      state.itemCards = nestedCards.filter((item) =>
        hasProperty(item, "itemCards"),
      );
    },
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
});

export const { setRestaurantInfo, setItemCards, setOffers } =
  restaurantMenuSlice.actions;
export default restaurantMenuSlice.reducer;
