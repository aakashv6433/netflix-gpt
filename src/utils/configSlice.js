import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: { langKey: "en" },
  reducers: {
    changeLangauage: (state, action) => {
      state.langKey = action.payload;
    },
  },
});

export const { changeLangauage } = configSlice.actions;

export default configSlice.reducer;
