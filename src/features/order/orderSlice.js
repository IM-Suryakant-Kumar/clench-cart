import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createOrderThunk, getOrdersThunk } from "./orderThunk"
import { toast } from "react-toastify"

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

export const createOrder = createAsyncThunk("order/createOrder", createOrderThunk)
export const getOrders = createAsyncThunk("order/getOrders", getOrdersThunk)

const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.isLoading = false
                toast.success(action.payload)
            })
            .addCase(createOrder.rejected, (state, action) => {
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
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default orderSlice.reducer