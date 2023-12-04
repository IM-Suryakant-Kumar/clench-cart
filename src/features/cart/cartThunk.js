import axios from "../axios";
import store from "../store";
import { getCarts } from "./cartSlice";
import { getTokenFromLocalStorage } from "../../util";

export const addToCartThunk = async (cart, thunkAPI) => {
	// console.log(cart)
	try {
		const res = await axios.post("/api/v1/carts", cart, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		await store.dispatch(getCarts());
		return res.data.msg;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err.response.data.msg);
	}
};

export const getCartsThunk = async (cart, thunkAPI) => {
	try {
		const res = await axios.get("/api/v1/carts", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err.response.data.msg);
	}
};

export const removeCartThunk = async (cart, thunkAPI) => {
	try {
		const res = await axios.delete(`/api/v1/carts/${cart}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		await store.dispatch(getCarts());
		return res.data.msg;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err.response.data.msg);
	}
};
