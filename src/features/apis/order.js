import { toast } from "react-toastify";
import { getTokenFromLocalStorage } from "../../utils/handleToken";
import api from "../api";

const order = api.injectEndpoints({
	endpoints: build => ({
		getOrders: build.query({
			query: () => ({
				url: "/order",
				method: "GET",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}),
			providesTags: result =>
				result ? [{ type: "order", id: "LIST" }] : ["ordre"],
		}),
		createOrder: build.mutation({
			query: body => ({
				url: "/order",
				method: "POST",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
				body,
			}),
			invalidatesTags: (result, error) => {
				if (result) {
					toast.success(result.message);
				} else {
					toast.error(error.data?.message);
				}
				return result ? ["order"] : [{ type: "order", id: "ERROR" }];
			},
		}),
	}),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = order;
