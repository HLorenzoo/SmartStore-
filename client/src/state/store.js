import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import loginReducer from "./login";
import productsReducer from "./products";
import { oneProductsReducer } from "./products";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: loginReducer,
    products: productsReducer,
    oneProduct: oneProductsReducer,
  },
});

export default store;
