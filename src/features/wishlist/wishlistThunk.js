import axios from "../axios"

export const createWishlistThunk = async(wishlist, thunkAPI) => {
    try {
        const res = await axios.post("/wishlists", wishlist)
        return res.data.msg
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}

export const getWishlistsThunk = async(wishlist, thunkAPI) => {
    try {
        const res = await axios.get("/wishlists")
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}

export const removeWishlistThunk = async(wishlist, thunkAPI) => {
    try {
        const res = await axios.delete("/wishlists", wishlist)
        return res.data.msg
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}