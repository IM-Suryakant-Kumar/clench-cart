import axios from "axios"

export const createOrderThunk = async (order, thunkAPI) => {
    try {
        const res = await axios.post("/api/v1/orders", order)
        return res.data.msg
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}

export const getOrdersThunk = async (order, thunkAPI) => {
    try {
        const res = await axios.get("/api/v1/orders")
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}