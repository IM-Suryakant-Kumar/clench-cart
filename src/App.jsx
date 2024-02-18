import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { AuthLayout, HostLayout, Layout } from "./components";
import {
	Cart,
	Home,
	Login,
	NotFound,
	Orders,
	Product,
	ProductList,
	Profile,
	Register,
	Success,
	Wishlist,
} from "./pages";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="products" element={<ProductList />} />
				<Route path="product/:id" element={<Product />} />
				<Route element={<HostLayout />}>
					<Route path="cart" element={<Cart />} />
					<Route path="wishlist" element={<Wishlist />} />
					<Route path="orders" element={<Orders />} />
					<Route path="success" element={<Success />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
