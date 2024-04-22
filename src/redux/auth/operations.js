import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const instance = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const signup = createAsyncThunk(
  "auth/signup",

  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post("/users/signup", body);
      setToken(user.data.token);
      toast.success("Successful operation");
      localStorage.setItem("refreshToken", user.data.token);
      localStorage.setItem("accessToken", user.data.token);
      return user.data;
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

export const signin = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post("/users/signin", body);
      setToken(user.data.token);
      toast.success("Successful operation");
      localStorage.setItem("refreshToken", user.data.token);
      localStorage.setItem("accessToken", user.data.token);
      return user.data;
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

export const signOut = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/users/signout");
      toast.success("Successful operation");
      localStorage.clear("refreshToken");
      localStorage.clear("accessToken");
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

export const currentUser = createAsyncThunk(
  "auth/user",
  async (_, thunkAPI) => {
    const accessToken = thunkAPI.getState.auth.token;
    console.log(accessToken);
    if (!accessToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setToken(accessToken);
      const { data } = await instance.get("/users/current");

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

export default instance;
