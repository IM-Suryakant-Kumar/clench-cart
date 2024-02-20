import { useGetProfileQuery } from "../../features/apis";
import { Loader } from "..";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const HostLayout = () => {
	const { isLoading, isError } = useGetProfileQuery();
	const pathname = useLocation().pathname;

	return isLoading ? (
		<Loader />
	) : isError ? (
		<Navigate
			to="/login"
			state={{ message: "You have to login first", redirectTo: pathname }}
			replace
		/>
	) : (
		<Outlet />
	);
};

export default HostLayout;
