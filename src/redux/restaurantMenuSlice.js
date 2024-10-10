import { createSlice } from "@reduxjs/toolkit";

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
      state.itemCards = action.payload;
    },
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
});

export const { setRestaurantInfo, setItemCards, setOffers } =
  restaurantMenuSlice.actions;
export default restaurantMenuSlice.reducer;
