import { createSlice } from "@reduxjs/toolkit";
import mockData from "../mocks/mockdata.json";

const initialState = {
  foodCategory: mockData?.data?.cards[0],
  topRestaurants: mockData?.data?.cards[1],
  restaurantChains: mockData?.data?.cards[2],
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurantsData: (state, action) => {
      state.foodCategory = action.payload.cards[0];
      state.topRestaurants = action.payload.cards[1];
      state.restaurantChains = action.payload.cards[4];
    },
  },
});

export const { setRestaurantsData } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
