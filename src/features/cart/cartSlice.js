import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { addToCartThunk, getCartsThunk } from "./cartThunk"
import { toast } from "react-toastify";

const initialState = {
	products: [],
	totalQuantity: 0,
	totalPrice: 0,
    isLoading: false,
    error: null
};

export const addToCart = createAsyncThunk("cart/addToCart", addToCartThunk)
export const getCarts = createAsyncThunk("cart/getCarts", getCartsThunk)

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.price * action.payload.quantity;
		}
	},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false
                toast.success("Item added to cart");
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(getCarts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.isLoading = false
                const { products, totalQuantity, totalPrice } = action.payload
                
                state.products = products
                state.totalQuantity = totalQuantity
                state.totalPrice = totalPrice
            })
            .addCase(getCarts, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
