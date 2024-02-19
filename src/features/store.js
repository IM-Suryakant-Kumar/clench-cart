import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import { sidebarReducer } from "./reducers";

const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
});

export default store;
