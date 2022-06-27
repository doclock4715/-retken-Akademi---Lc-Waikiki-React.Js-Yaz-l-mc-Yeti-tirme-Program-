import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProducts: (state, {payload})=>{
            state.products = payload
        }
    }
})

export const {addProducts} = productSlice.actions
export const getAllProducts = (state) => state.products.products
/* export const getProduct = (state) => state.products.products[1] */
export default productSlice.reducer