import { createSlice } from "@reduxjs/toolkit";
import {
  deleteWords,
  fetchWords,
  wordsAdd,
  wordsAnswers,
  wordsCategories,
  wordsCreate,
  wordsEdit,
  wordsOwn,
  wordsStatistics,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  words: [],
  ownWords: [],
  categories: [],
  result: [],
  statistics: null,
  page: null,
  totalPages: null,
  perPage: null,
  isRefreshing: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const wordsSlice = createSlice({
  name: "words",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(wordsOwn.pending, handlePending)
      .addCase(wordsOwn.rejected, handleRejected)
      .addCase(wordsOwn.fulfilled, (state, action) => {
        state.ownWords = action.payload.results;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.perPage = action.payload.perPage;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchWords.pending, handlePending)
      .addCase(fetchWords.rejected, handleRejected)
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.words = action.payload.results;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.perPage = action.payload.perPage;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(wordsStatistics.pending, handlePending)
      .addCase(wordsStatistics.rejected, handleRejected)
      .addCase(wordsStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload.totalCount;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(wordsAdd.pending, handlePending)
      .addCase(wordsAdd.rejected, handleRejected)
      .addCase(wordsAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(wordsAnswers.pending, handlePending)
      .addCase(wordsAnswers.rejected, handleRejected)
      .addCase(wordsAnswers.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(wordsCategories.pending, handlePending)
      .addCase(wordsCategories.rejected, handleRejected)
      .addCase(wordsCategories.fulfilled, (state, action) => {
        state.categories = ["all", ...action.payload];
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(deleteWords.fulfilled, (state, action) => {
        state.ownWords = state.ownWords.filter(
          (word) => word._id !== action.payload
        );
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(wordsEdit.fulfilled, (state, action) => {
        const updatedWord = action.payload;
        const index = state.ownWords.findIndex(
          (word) => word._id === updatedWord._id
        );
        state.isLoading = false;
        state.isLoggedIn = true;

        if (index !== -1) {
          state.ownWords[index] = updatedWord;
        }
        const indexW = state.words.findIndex(
          (word) => word._id === updatedWord._id
        );

        if (indexW !== -1) {
          state.words[indexW] = updatedWord;
        }
      })
      .addCase(wordsCreate.pending, handlePending)
      .addCase(wordsCreate.rejected, handleRejected)
      .addCase(wordsCreate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownWords = [action.payload, ...state.ownWords];
        state.words = [action.payload, ...state.words];

        state.isLoggedIn = true;
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
