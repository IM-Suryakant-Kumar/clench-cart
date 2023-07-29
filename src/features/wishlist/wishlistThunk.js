import axios from "axios"
import store from "../store"
import { getWishlists } from "./wishlistSlice"

export const createWishlistThunk = async(wishlist, thunkAPI) => {
    try {
        const res = await axios.post("/api/v1/wishlists", wishlist)
        await store.dispatch(getWishlists())
        return res.data.msg
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}

export const getWishlistsThunk = async(wishlist, thunkAPI) => {
    try {
        const res = await axios.get("/api/v1/wishlists")
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}

export const removeWishlistThunk = async(wishlist, thunkAPI) => {
    try {
        const res = await axios.delete(`/api/v1/wishlists/${wishlist}`)
        await store.dispatch(getWishlists())
        return res.data.msg
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.data.msg)        
    }
}