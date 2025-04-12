import { toast } from "react-toastify";
import { getTokenFromLocalStorage } from "../../utils/handleToken";
import api from "../api";

const cart = api.injectEndpoints({
	endpoints: build => ({
		getCarts: build.query({
			query: () => ({
				url: "cart",
				method: "GET",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}),
			providesTags: result =>
				result ? [{ type: "cart", id: "LIST" }] : ["cart"],
		}),
		addToCart: build.mutation({
			query: body => ({
				url: "/cart",
				method: "POST",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
				body,
			}),
			invalidatesTags: (result, error) => {
				if (result) {
					toast.success(result.message);
				} else {
					toast.error("Must Login first");
				}
				return result ? ["cart"] : [{ type: "cart", id: "ERROR" }];
			},
		}),
		updateCart: build.mutation({
			query: body => ({
				url: `/cart/${body._id}`,
				method: "PATCH",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
				body,
			}),
			invalidatesTags: (result, error) => {
				if (result) {
					toast.success(result.message);
				} else {
					toast.error(error.data?.message);
				}
				return result
					? [{ type: "cart", id: "LIST" }]
					: [{ type: "cart", id: "ERROR" }];
			},
		}),
		removeFromCart: build.mutation({
			query: body => ({
				url: `/cart/${body._id}`,
				method: "DELETE",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}),
			invalidatesTags: (result, error) => {
				if (result) {
					toast.success(result.message);
				} else {
					toast.error("Must Login first");
				}
				return result
					? [{ type: "cart", id: "LIST" }]
					: [{ type: "cart", id: "ERROR" }];
			},
		}),
	}),
});

export const {
	useGetCartsQuery,
	useAddToCartMutation,
	useUpdateCartMutation,
	useRemoveFromCartMutation,
} = cart;
