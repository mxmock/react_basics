import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    color: "red",
  },
  reducers: {
    changeColor: (counterState) => {
      return { ...counterState, color: "green" };
    },
    increment: (counterState) => {
      return { ...counterState, value: counterState.value + 1 };
    },
    decrement: (state) => {
      return { ...state, value: state.value - 1 };
    },
    incrementByAmount: (state, action) => {
      console.log("action : ", action);
      return { ...state, value: state.value + action.payload.amount };
    },
  },
});

// counterSlice.actions = {
//   increment,
//   decrement,
// }

export const { increment, decrement, incrementByAmount, changeColor } = counterSlice.actions;
export default counterSlice.reducer;
