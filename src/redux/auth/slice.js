import { createSlice } from "@reduxjs/toolkit";
import { logOutThunk, loginThunk, registerThunk } from "./operations";
import {
  handlerLoginFulfilled,
  handlerLogoutFulfilled,
  handlerPending,
  handlerRegisterFulfilled,
  handlerRejected,
} from "./handlers";

const initialState = {
  name: null,
  email: null,
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.pending, handlerPending)
      .addCase(registerThunk.fulfilled, handlerRegisterFulfilled)
      .addCase(registerThunk.rejected, handlerRejected)
      .addCase(loginThunk.pending, handlerPending)
      .addCase(loginThunk.fulfilled, handlerLoginFulfilled)
      .addCase(loginThunk.rejected, handlerRejected)
      .addCase(logOutThunk.pending, handlerPending)
      .addCase(logOutThunk.fulfilled, handlerLogoutFulfilled)
      .addCase(logOutThunk.rejected, handlerRejected),
});

export const authReducer = authSlice.reducer;
