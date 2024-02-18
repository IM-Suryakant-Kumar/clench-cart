import api from "../api";

const product = api.injectEndpoints({
	endpoints: build => ({
		getProducts: build.query({
			query: () => "/product",
			providesTags: result =>
				result ? [{ type: "product", id: "LIST" }] : ["product"],
		}),
	}),
});

export const { useGetProductsQuery } = product;
