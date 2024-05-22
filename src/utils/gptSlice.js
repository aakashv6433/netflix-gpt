import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { gptSearchBtn: false },
  reducers: {
    toggleGptSearchBtn: (state) => {
      state.gptSearchBtn = !state.gptSearchBtn;
    },
  },
});

export const { toggleGptSearchBtn } = gptSlice.actions;

export default gptSlice.reducer;
