import axios from "../axios";
import store from "../store"
import { emptyCart } from "../cart/cartSlice"
import { getTokenFromLocalStorage } from "../../util"

export const createOrderThunk = async (order, thunkAPI) => {
    try {
        const res = await axios.post("/api/v1/orders", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})
        store.dispatch(emptyCart())
        return res.data.msg
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}

export const getOrdersThunk = async (order, thunkAPI) => {
    try {
        const res = await axios.get("/api/v1/orders", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})
        return res.data
    } catch (err) {
        // console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}