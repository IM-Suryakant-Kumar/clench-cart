import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartRedux";

const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})

export default store