import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../auth/operations";

export const fetchWords = createAsyncThunk(
  "words/all",
  async ({ page, search, category, verb }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `words/all?keyword=${search}&category=${category}&isIrregular=${verb}&page=${page}`
      );

      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsCategories = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/categories");
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsCreate = createAsyncThunk(
  "words/create",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post(`words/create`, body);
      return response.data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsAdd = createAsyncThunk(
  "words/add",
  async (wordId, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`words/add/${wordId}`);
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const deleteWords = createAsyncThunk(
  "words/delete",
  async (wordsId, { rejectWithValue }) => {
    try {
      await instance.delete(`words/delete/${wordsId}`);
      return wordsId;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsEdit = createAsyncThunk(
  "words/edit",

  async ({ wordsId, values }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`words/edit/${wordsId}`, {
        ...values,
      });
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsAll = createAsyncThunk(
  "words/all",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`words/all`);

      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsOwn = createAsyncThunk(
  "words/own",
  async ({ page, search, category, verb }, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        `words/own?keyword=${search}&category=${category}&isIrregular=${verb}&page=${page}`
      );
      return response.data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsStatistics = createAsyncThunk(
  "words/statistics",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`words/statistics`);
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsTasks = createAsyncThunk(
  "words/tasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`words/tasks`);
      return response.data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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

export const wordsAnswers = createAsyncThunk(
  "words/answers",
  async (answers, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/words/answers", answers);
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error(
            "Unauthorized. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Not found. The requested resource could not be found.");
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
