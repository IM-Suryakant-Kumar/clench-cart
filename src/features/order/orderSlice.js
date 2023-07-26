import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createOrdersThunk, getOrdersThunk } from "./orderThunk"

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

export const createOrders = createAsyncThunk("order/createOrders", createOrdersThunk)
export const getOrders = createAsyncThunk("order/getOrders", getOrdersThunk)

const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createOrders.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createOrders.fulfilled, (state, action) => {
                state.isLoading = false
                state.products  = action.payload
            })
            .addCase(createOrders.pending, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false
                state.products  = action.payload
            })
            .addCase(getOrders.pending, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default orderSlice.reducer