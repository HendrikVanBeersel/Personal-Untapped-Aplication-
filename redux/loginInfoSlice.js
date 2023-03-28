import { createSlice } from "@reduxjs/toolkit";
import data from "../back-end/database/data.json";

const initialState = { value: null };

const loginInfoSlice = createSlice({
  name: "logginInfo",
  initialState,
  reducers: {
    loggingIn(state, action) {
      data.forEach((person, index) => {
        if (person.name === action.payload) {
          state.value = index;
        }
      });
    },
    loggingOut(state) {
      state.value = null;
    },
  },
});

export const { loggingIn, loggingOut } = loginInfoSlice.actions;
export default loginInfoSlice.reducer;
