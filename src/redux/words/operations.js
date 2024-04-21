import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../auth/operations";

const showToast = (error, errorCode) => {
  let errorMessage = `Error: ${error}`;
  if (errorCode === 400) {
    errorMessage = "Bad request. Please check your input.";
  } else if (errorCode === 401) {
    errorMessage =
      "Unauthorized. You don't have permission to access this resource.";
  } else if (errorCode === 404) {
    errorMessage = "Not found. The requested resource could not be found.";
  } else if (errorCode === 500) {
    errorMessage =
      "Server error. Something went wrong on our end. Please try again later.";
  }

  toast.error(errorMessage, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const fetchWords = createAsyncThunk(
  "words/all",
  async ({ page, search, category, verb }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `words/all?keyword=${search}&category=${category}&isIrregular=${verb}&page=${page}`
      );
      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsCategories = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/categories");
      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsCreate = createAsyncThunk(
  "words/create",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post(`words/create`, body);
      return response.data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAdd = createAsyncThunk(
  "words/add",
  async (wordId, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`words/add/${wordId}`);
      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWords = createAsyncThunk(
  "words/delete",
  async (wordsId, { rejectWithValue }) => {
    try {
      await instance.delete(`words/delete/${wordsId}`);
      return wordsId;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsEdit = createAsyncThunk(
  "words/edit",

  async ({ wordsId, values }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`words/edit/${wordsId}`, {
        ...values,
      });
      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAll = createAsyncThunk(
  "words/all",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`words/all`);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsOwn = createAsyncThunk(
  "words/own",
  async ({ page, search, category, verb }, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        `words/own?keyword=${search}&category=${category}&isIrregular=${verb}&page=${page}`
      );
      return response.data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsStatistics = createAsyncThunk(
  "words/statistics",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`words/statistics`);
      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsTasks = createAsyncThunk(
  "words/tasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`words/tasks`);
      return response.data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAnswers = createAsyncThunk(
  "words/answers",
  async (answers, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/words/answers", answers);
      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);
