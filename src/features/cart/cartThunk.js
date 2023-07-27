import axios from "../axios"
import store from "../store"
import { getCarts } from "./cartSlice"

export const addToCartThunk = async (cart, thunkAPI) => {
    // console.log(cart)
    try {
        const res = await axios.post("/carts", cart)
        await store.dispatch(getCarts())
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}

export const getCartsThunk = async (cart, thunkAPI) => {
    try {
        const res = await axios.get("/carts")
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}

export const removeCartThunk = async (cart, thunkAPI) => {
    try {
        const res = await axios.delete(`/carts/${cart}`)
        return res.data.msg
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}