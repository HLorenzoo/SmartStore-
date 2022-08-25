import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//actions
export const signUp = createAsyncThunk("SIGN_UP", async (user) => {
  const res = await axios.post("/api/auth/signup", user);
  console.log("singup", res);
  return res.data;
});
export const logIn = createAsyncThunk("LOG_IN", async (user) => {
  const res = await axios.post("/api/auth/login", user);
  return res.data;
});
export const sendMe = createAsyncThunk("ME_TOKENJWT", async () => {
  const { data } = await axios.get("/api/auth/me");

  const res = await axios.get(`/api/users/${data._id}`);

  return res.data[0];
});
//reducer
const loginReducer = createReducer([], {
  [signUp.fulfilled]: (state, action) => action.payload,
  [logIn.fulfilled]: (state, action) => action.payload,
  [sendMe.fulfilled]: (state, action) => action.payload,
});
export default loginReducer;
