import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import { sidebarReducer } from "./reducers";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
export default store;
