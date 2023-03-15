import { createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
  name: "size",
  initialState: {
    width: 1000,
    height: 500,
    value: 300,
  },
  reducers: {
    setSize: (state) => {
      return { ...state };
    },
  },
});

export const { setSize } = sizeSlice.actions;
export default sizeSlice.reducer;
