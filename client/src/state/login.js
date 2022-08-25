import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//actions
export const signUp = createAsyncThunk("SIGN_UP", async (user) => {
  const res = await axios.post("/api/auth/signup", user);
  return res.data;
});
export const logIn = createAsyncThunk("LOG_IN", async (user) => {
  const res = await axios.post("/api/auth/login", user);
  return res.data;
});

//reducer
const loginReducer = createReducer([], {
  [signUp.fulfilled]: (state, action) => action.payload,
  [logIn.fulfilled]: (state, action) => action.payload,
});
export default loginReducer;
