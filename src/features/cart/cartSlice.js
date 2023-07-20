import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { addToCartThunk } from "./cartThunk"

const initialState = {
	products: [],
	quantity: 0,
	total: 0,
    isLoading: false
};

export const addToCart = createAsyncThunk("cart/addToCart", addToCartThunk)

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
            })
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
