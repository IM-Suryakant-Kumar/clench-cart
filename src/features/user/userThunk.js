import { publicRequest } from "../../requestMethods"


export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const res = await publicRequest(url, user)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}