import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { authReducer } from "./auth/authSlice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";
import { wordsReducer } from "./words/wordSlice";

// const isDevelopment = process.env.NODE_ENV === "development";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};
const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  words: wordsReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  // devTools: isDevelopment,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
