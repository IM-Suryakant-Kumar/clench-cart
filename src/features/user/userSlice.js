import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserThunk } from "./userThunk";

const initialState = {
	user: null,
	isLoading: false,
	error: false
};

export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI)
}) 

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				const { user } = payload;
				state.isLoading = false;
				state.user = user;
			})
			.addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                // toast.error(payload)
            })
	}
});

// export {} = userSlice.actions;
export default userSlice.reducer;
