import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (errorCode) => {
  let errorMessage = "An unexpected error occurred. Please try again.";

  if (errorCode === 400) {
    errorMessage = "Bad request. Please check your input.";
  } else if (errorCode === 401) {
    errorMessage = "Email or password invalid. Please check your credentials.";
  } else if (errorCode === 404) {
    errorMessage =
      "Service not found. The requested resource could not be located.";
  } else if (errorCode === 409) {
    errorMessage = "Such email already exists. Please use a different email.";
  } else if (errorCode === 500) {
    errorMessage =
      "Server error. Something went wrong on our end. Please try again later.";
  }

  toast.error(errorMessage, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  });
};

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
      localStorage.setItem("refreshToken", user.data.token);
      localStorage.setItem("accessToken", user.data.token);
      return user.data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post("/users/signin", body);
      setToken(user.data.token);
      localStorage.setItem("refreshToken", user.data.token);
      localStorage.setItem("accessToken", user.data.token);
      return user.data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/users/signout");
      localStorage.clear("refreshToken");
      localStorage.clear("accessToken");
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/user",
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setToken(accessToken);
      const { data } = await instance.get("/users/current");

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default instance;
