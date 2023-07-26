import axios from "../axios"

export const addToCartThunk = async (cart, thunkAPI) => {
    console.log(cart)
    try {
        const res = await axios.post("/carts/", cart)
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