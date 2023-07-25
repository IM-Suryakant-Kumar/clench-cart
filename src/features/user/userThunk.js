import axios, { claudinary } from "../axios";

export const registerUserThunk = async (user, thunkAPI) => {
	try {
		const res = await axios.post("/auth/register", user);
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
		const res = await axios.post("/auth/login", user);
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
		const res = await axios.get("/auth/logout");
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
		const res = await axios.get("/users/me");
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
        const preset_key = process.env.REACT_APP_UPLOAD_PRESET
        const file = user.avatar
        if(file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
            const formData = new FormData()
            formData.append("file", file)
            formData.append("upload_preset", preset_key)
            
            const cres = await claudinary.post("/image/upload", formData)
            user.avatar = cres.data.secure_url
        }

		const res = await axios.patch("/users/me", user);
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
            msg: error.response.data.msg,
            status: error.response.request.status,
            statusText: error.response.request.statusText
        });
	}
};
