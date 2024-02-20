import { toast } from "react-toastify";
import { getTokenFromLocalStorage } from "../../utils/handleToken";
import api from "../api";

const wishlist = api.injectEndpoints({
	endpoints: build => ({
		getWishlists: build.query({
			query: () => ({
				url: "/wishlist",
				method: "GET",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}),
			providesTags: result =>
				result ? [{ type: "wishlist", id: "LIST" }] : ["wishlist"],
		}),
		addToWishlist: build.mutation({
			query: body => ({
				url: "/wishlist",
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
				return result ? ["wishlist"] : [{ type: "wishlist", id: "ERROR" }];
			},
		}),
		removeFromWishlist: build.mutation({
			query: body => ({
				url: `/wishlist/${body._id}`,
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
					? [{ type: "wishlist", id: "LIST" }]
					: [{ type: "wishlist", id: "ERROR" }];
			},
		}),
	}),
});

export const {
	useGetWishlistsQuery,
	useAddToWishlistMutation,
	useRemoveFromWishlistMutation,
} = wishlist;
