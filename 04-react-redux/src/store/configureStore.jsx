import { combineReducers, configureStore } from "@reduxjs/toolkit";
import count from "./count";
import modal from "./modal";
import logger from "./middleware/logger";

const reducer = combineReducers({ count, modal });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      process.env.NODE_ENV === "development" ? logger : []
    ),
});

export default store;
