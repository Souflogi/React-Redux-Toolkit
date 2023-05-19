import { createSlice } from "@reduxjs/toolkit";

const loginInitialState = { logged: false };

const authSlice = createSlice({
  name: "Auth",
  initialState: loginInitialState,
  reducers: {
    login: state => ({ logged: true }),
    logout: state => ({ logged: false }),
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
