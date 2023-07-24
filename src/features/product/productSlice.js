import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllProductsThunk } from "./productThunk"

const initialState = {
    products: [],
    isLoading: false
}

export const getAllProducts = createAsyncThunk("product/getProducts", getAllProductsThunk)

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => { 
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(getAllProducts.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export default productSlice.reducer