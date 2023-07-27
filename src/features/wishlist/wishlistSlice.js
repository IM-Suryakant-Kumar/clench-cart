import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createWishlistThunk, getWishlistsThunk } from "./wishlistThunk"

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

export const createWishlist = createAsyncThunk("wishlist/createWishlist", createWishlistThunk)
export const getWishlists = createAsyncThunk("wishlist/createWishlist", getWishlistsThunk)

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createWishlist.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createWishlist.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(createWishlist.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(getWishlists.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWishlists.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(getWishlists.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default wishlistSlice.reducer