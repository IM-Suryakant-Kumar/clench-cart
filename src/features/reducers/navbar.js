import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	cartsLength: 0,
	wishlistsLength: 0,
};

const navbarSlice = createSlice({
	name: "navbar",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setCartsLength: (state, action) => {
			state.cartsLength = action.payload;
		},
		setWishlistsLength: (state, action) => {
			state.wishlistsLength = action.payload;
		},
		resetNavbar: state => {
			state.user = null;
			state.cartsLength = 0;
			state.wishlistsLength = 0;
		},
	},
});

export const { setUser, setCartsLength, setWishlistsLength, resetNavbar } =
	navbarSlice.actions;
export default navbarSlice.reducer;
