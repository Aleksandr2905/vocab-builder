import { createSlice } from "@reduxjs/toolkit";
import {
  currentUserThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

export const handlerPending = (state) => {
  state.isLoading = true;
};

export const handlerRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.pending, handlerPending)
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, handlerRejected)
      .addCase(loginThunk.pending, handlerPending)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, handlerRejected)
      .addCase(logOutThunk.pending, handlerPending)
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(logOutThunk.rejected, handlerRejected)
      .addCase(currentUserThunk.pending, handlerPending)
      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(currentUserThunk.rejected, handlerRejected),
});

export const authReducer = authSlice.reducer;
