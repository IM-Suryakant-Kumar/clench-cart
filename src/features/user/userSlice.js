import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
	registerUserThunk,
	loginUserThunk,
	logoutUserThunk,
	getUserThunk,
	updateUserThunk
} from "./userThunk";

const initialState = {
	user: null,
	isLoading: false,
    error: null
};

export const registerUser = createAsyncThunk(
	"user/registerUser",
	registerUserThunk
);
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const logoutUser = createAsyncThunk("user/logoutUser", logoutUserThunk);
export const getUser = createAsyncThunk("user/getUser", getUserThunk);
export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				const { user } = action.payload;
				state.isLoading = false;
				state.user = user;
				toast.success(`Hello There ${user.username}`);
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				toast.error(action.payload);
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				const { user } = action.payload;
				state.isLoading = false;
				state.user = user;
				toast.success(`Welcome Back ${user.username}`);
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				toast.error(action.payload);
			})
			.addCase(logoutUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(logoutUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = null;
				toast.success(action.payload);
			})
			.addCase(logoutUser.rejected, (state, action) => {
				state.isLoading = false;
				toast.error(action.payload);
			})
			.addCase(getUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				const user = action.payload;
				state.isLoading = false;
				state.user = user;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.isLoading = false;
                state.error = action.payload
			})
			.addCase(updateUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				const { user } = action.payload;
				state.isLoading = false;
				state.user = user;
				toast.success("Profile updated!");
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.isLoading = false;
				toast.error(action.payload);
			});
	}
});

// export {} = userSlice.actions;
export default userSlice.reducer;
