import api from "../api";

const product = api.injectEndpoints({
	endpoints: build => ({
		getProducts: build.query({
			query: () => "/product",
			invalidatesTags: result =>
				result ? [{ type: "product", id: "LIST" }] : ["product"],
		}),
	}),
});

export const {} = product;
