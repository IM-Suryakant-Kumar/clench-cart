import axios from "../../axios";

export const registerUserThunk = async(user, thunkAPI) => {
    try {
        const res = await axios.post("/auth/register", user)
        return  res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.msg)
    }
}

export const loginUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.post("/auth/login", user);
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const logoutUserThunk = async (user, thunkAPI) => {
    try {
        const res = await axios.get("/auth/logout")
        return res.data.msg
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}

export const getUserThunk = async (user, thunkAPI) => {
    try {
        const res = await axios.get("users/me");
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}

export const updateUserThunk = async (user, thunkAPI) => {
    try {
        const res = await axios.patch("/users/me", user)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}