import { combineReducers, configureStore } from "@reduxjs/toolkit";
import count from "./count";
import modal from "./modal";

const reducer = combineReducers({ count, modal });
const store = configureStore({ reducer });
export default store;
