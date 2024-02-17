import {
	AddTokenToLocalStorage,
	getTokenFromLocalStorage,
	removeTokenFromLocalStorage,
} from "../../utils/handleToken";
import api from "../api";
import { toast } from "react-toastify";

const auth = api.injectEndpoints({
	endpoints: build => ({
		getProfile: build.query({
			query: () => ({
				url: "/auth/me",
				method: "GET",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}),
			invalidatesTags: result =>
				result ? [{ type: "auth", id: "LIST" }] : ["auth"],
		}),
		register: build.mutation({
			query: body => ({
				url: "/auth/register",
				method: "POST",
				body,
			}),
			invalidatesTags: result => {
				if (result) {
					AddTokenToLocalStorage(result.token);
					toast.success(result.message);
				}
				return result ? ["auth"] : [{ type: "auth", id: "ERROR" }];
			},
		}),
		login: build.mutation({
			query: body => ({
				url: "/auth/login",
				method: "POST",
				body,
			}),
			invalidatesTags: result => {
				if (result) {
					AddTokenToLocalStorage(result.token);
					toast.success(result.message);
				}
				return result ? ["auth"] : [{ type: "auth", id: "ERROR" }];
			},
		}),
		guestLogin: build.mutation({
			query: () => ({
				url: "/auth/login",
				method: "GET",
			}),
			invalidatesTags: result => {
				if (result) {
					AddTokenToLocalStorage(result.token);
					toast.success(result.message);
				}
				return result ? ["auth"] : [{ type: "auth", id: "ERROR" }];
			},
		}),
		logout: build.mutation({
			query: () => ({
				url: "/auth/login",
				method: "GET",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}),
			invalidatesTags: (result, error) => {
				if (result) {
					removeTokenFromLocalStorage();
					toast.success(result.message);
				} else {
					toast.error(error.data?.message);
				}
				return result ? ["auth"] : [{ type: "auth", id: "ERROR" }];
			},
		}),
		updateProfile: build.mutation({
			query: body => ({
				url: "/auth/me",
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
				return result ? ["auth"] : [{ type: "auth", id: "ERROR" }];
			},
		}),
		deleteProfile: build.mutation({
			query: () => ({
				url: "/auth/me",
				method: "PATCH",
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}),
			invalidatesTags: (result, error) => {
				if (result) {
					toast.success(result.message);
				} else {
					toast.error(error.data?.message);
				}
				return result ? ["auth"] : [{ type: "auth", id: "ERROR" }];
			},
		}),
	}),
});

export const {
	useGetProfileQuery,
	useRegisterMutation,
	useLoginMutation,
	useGuestLoginMutation,
	useLogoutMutation,
	useUpdateProfileMutation,
	useDeleteProfileMutation,
} = auth;
