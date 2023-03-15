import size from "./reducers/size.slice";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counter.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice, // counterSlice.reducer
    size,
  },
});
