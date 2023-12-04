import axios from "../axios";
import { AddTokenToLocalStorage, getTokenFromLocalStorage, removeTokenFromLocalStorage } from "../../util";

export const registerUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.post("/api/v1/auth/register", user);
        AddTokenToLocalStorage(res.data.token)
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
			msg: error.response.data.msg,
			status: error.response.request.status,
			statusText: error.response.request.statusText,
		});
	}
};

export const loginUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.post("/api/v1/auth/login", user);
        AddTokenToLocalStorage(res.data.token)
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
			msg: error.response.data.msg,
			status: error.response.request.status,
			statusText: error.response.request.statusText,
		});
	}
};

export const logoutUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.get("/api/v1/auth/logout", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
        removeTokenFromLocalStorage()
		return res.data.msg;
	} catch (error) {
		return thunkAPI.rejectWithValue({
			msg: error.response.data.msg,
			status: error.response.request.status,
			statusText: error.response.request.statusText,
		});
	}
};

export const getUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.get("/api/v1/users/me",{
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		} );
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
			msg: error.response.data.msg,
			status: error.response.request.status,
			statusText: error.response.request.statusText,
		});
	}
};

export const updateUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.patch("/api/v1/users/me", user, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
			msg: error.response.data.msg,
			status: error.response.request.status,
			statusText: error.response.request.statusText,
		});
	}
};
