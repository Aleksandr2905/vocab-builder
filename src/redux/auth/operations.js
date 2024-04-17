import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setToken(data.token);
      toast.success("Successful operation");
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Email or password invalid");
          break;
        case 404:
          toast.error("Service not found");
          break;
        case 409:
          toast.error("Such email already exists");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          return rejectWithValue(error);
      }
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signin", credentials);
      setToken(data.token);
      toast.success("Successful operation");
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request (invalid request body)");
          break;
        case 401:
          toast.error("Email or password invalid");
          break;
        case 404:
          toast.error("Service not found");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          return rejectWithValue(error);
      }
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/signout");
      clearToken();
      toast.success("Successful operation");
      return;
    } catch (error) {
      switch (error.response?.status) {
        case 401:
          toast.error("Unauthorized");
          break;
        case 404:
          toast.error("Service not found");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          return rejectWithValue(error);
      }
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().token;
    if (token === null) {
      throw new Error("Token is missing");
    }
    try {
      setToken(token);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
