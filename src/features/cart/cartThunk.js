import axios from "../../axios"

export const addToCartThunk = async (cart, thunkAPI) => {
    try {
        const res = await axios.post("/carts/", cart)
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue({
            msg: err.response.data.msg, 
            status: err.response.request.status,
            statusText: err.response.request.statusText
        })
    }
}