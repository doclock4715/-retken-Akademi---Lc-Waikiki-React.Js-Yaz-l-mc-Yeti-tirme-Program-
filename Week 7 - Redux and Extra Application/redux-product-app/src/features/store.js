import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})