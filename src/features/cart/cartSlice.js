import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { addToCartThunk, getCartsThunk, removeCartThunk } from "./cartThunk"
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
export const removeCart = createAsyncThunk("cart/removeCart", removeCartThunk)

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.price * action.payload.quantity;
		},
        emptyCart: (state, action) => {
            state.products = []
        }
	},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false
                console.log(action.payload)
                // state.products = action.payload
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
            .addCase(getCarts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(removeCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(removeCart.fulfilled, (state, action) => {
                state.isLoading = false
                toast.success(action.payload)
            })
            .addCase(removeCart.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
});

export const { addProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
