import { useGetProfileQuery } from "../../features/apis";
import { Loader } from "..";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
	const { isLoading, isError } = useGetProfileQuery();
	const state = useLocation().state;
	const pathname = state?.redirectTo || "/";

	return isLoading ? (
		<Loader />
	) : isError ? (
		<Outlet />
	) : (
		<Navigate to={pathname} replace />
	);
};

export default AuthLayout;
