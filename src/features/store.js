import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import { navbarReducer, sidebarReducer } from "./reducers";

const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		navbar: navbarReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
});

export default store;
