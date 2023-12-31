import axios from "../axios";

export const getAllProductsThunk = async (product, thunkAPI) => {
    try {
        const res = await axios.get("/api/v1/products")
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}