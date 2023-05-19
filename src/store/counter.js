import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showCounter: true, logged: false };

const counterSlice = createSlice({
  name: "Counter",
  initialState: counterInitialState,
  reducers: {
    increment: state => {
      ++state.counter;
    },
    decrement: state => {
      --state.counter;
    },
    customIncrement: (state, action) => {
      state.counter = +action.payload;
    },
    toggle: state => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
