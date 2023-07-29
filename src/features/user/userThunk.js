import axios from "axios";

export const registerUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.post("/api/v1/auth/register", user);
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
            msg: error.response.data.msg,
            status: error.response.request.status,
            statusText: error.response.request.statusText
        });
	}
};

export const loginUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.post("/api/v1/auth/login", user);
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
            msg: error.response.data.msg,
            status: error.response.request.status,
            statusText: error.response.request.statusText
        });
	}
};

export const logoutUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.get("/api/v1/auth/logout");
		return res.data.msg;
	} catch (error) {
		return thunkAPI.rejectWithValue({
            msg: error.response.data.msg,
            status: error.response.request.status,
            statusText: error.response.request.statusText
        });
	}
};

export const getUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.get("/api/v1/users/me");
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
            msg: error.response.data.msg,
            status: error.response.request.status,
            statusText: error.response.request.statusText
        });
	}
};

export const updateUserThunk = async (user, thunkAPI) => {
    try {
		const res = await axios.patch("/api/v1/users/me", user);
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
            msg: error.response.data.msg,
            status: error.response.request.status,
            statusText: error.response.request.statusText
        });
	}
};
