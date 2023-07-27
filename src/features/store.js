import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";
import productReducer from "./product/productSlice"
import orderReducer from "./order/orderSlice"
import wishlistReducer from "./wishlist/wishlistSlice"

const store = configureStore({
	reducer: {
        user: userReducer,
		cart: cartReducer,
        product: productReducer,
        order: orderReducer,
        wishlist: wishlistReducer
	}
});

export default store;
