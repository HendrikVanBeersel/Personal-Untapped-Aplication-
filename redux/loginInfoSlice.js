import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const loginInfoSlice = createSlice({
  name: "logginInfo",
  initialState,
  reducers: {
    loggingIn(state, action) {
      state.value = action.payload;
    },
    loggingOut(state) {
      state.value = null;
    },
  },
});

export const { loggingIn, loggingOut } = loginInfoSlice.actions;
export default loginInfoSlice.reducer;
