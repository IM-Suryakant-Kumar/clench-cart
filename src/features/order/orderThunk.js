import axios from "../axios"

export const createOrderThunk = async (order, thunkAPI) => {
    try {
        const res = axios.post("/orders", order)
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}

export const getOrdersThunk = async (order, thunkAPI) => {
    try {
        const res = axios.get("/orders")
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}