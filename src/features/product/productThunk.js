import axios from "../axios"

export const getAllProductsThunk = async (product, thunkAPI) => {
    try {
        const res = await axios.get("/products")
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}