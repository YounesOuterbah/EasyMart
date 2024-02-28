import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLocationAllowed: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationAllowed: (state, action) => {
      state.isLocationAllowed = action.payload;
    },
  },
});

export const { setLocationAllowed } = locationSlice.actions;
export default locationSlice.reducer;
