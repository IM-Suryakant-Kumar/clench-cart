import axios from "../axios"

export const createWishlistThunk = async(wishlist, thunkAPI) => {
    try {
        const res = await axios.post("/wishlists", wishlist)
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}

export const getWishlistsThunk = async(wishlist, thunkAPI) => {
    try {
        const res = await axios.get("/wishlists", wishlist)
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}