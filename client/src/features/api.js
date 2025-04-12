import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BASEURL,
		credentials: "include",
	}),
	tagTypes: ["auth", "product", "cart", "wishlist", "order"],
	endpoints: () => ({}),
});

export default api;
