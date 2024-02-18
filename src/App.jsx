import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { AuthLayout, HostLayout, Layout } from "./components";
import { Home, Login, NotFound, Product, ProductList, Register } from "./pages";
// import Layout, { loader as layoutLoader } from "./components/Layout";
// import Home, { loader as homeLoader } from "./pages/Home";
// import ProductList, { loader as productListLoader } from "./pages/ProductList";
// import Product, { loader as productLoader } from "./pages/Product";
// import Register, {
// 	loader as registerLoader,
// 	action as registerAction,
// } from "./pages/Register";
// import Login, {
// 	loader as loginLoader,
// 	action as loginAction,
// } from "./pages/Login";
// import Cart, { loader as cartLoader } from "./pages/Cart";
// import Success, { loader as successLoader } from "./pages/Success";
// import Profile, { loader as profileLoader } from "./pages/Profile";
// import NotFound from "./pages/NotFound";
// import Orders, { loader as ordersLoader } from "./pages/Orders";
// import Wishlist, { loader as WishlistLoader } from "./pages/Wishlist";
// import Error from "./components/Error";

const App = () => {
	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route path="/" element={<Layout />} loader={layoutLoader}>
	// 			<Route index element={<Home />} loader={homeLoader} />
	// 			<Route
	// 				path="products"
	// 				element={<ProductList />}
	// 				loader={productListLoader}
	// 			/>
	// 			<Route
	// 				path="product/:id"
	// 				element={<Product />}
	// 				loader={productLoader}
	// 			/>
	// 			<Route
	// 				path="cart"
	// 				element={<Cart />}
	// 				loader={cartLoader}
	// 				// errorElement={<Error />}
	// 			/>
	// 			<Route path="success" element={<Success />} loader={successLoader} />
	// 			<Route path="orders" element={<Orders />} loader={ordersLoader} />
	// 			<Route path="wishlist" element={<Wishlist />} loader={WishlistLoader} />
	// 			<Route
	// 				path="login"
	// 				element={<Login />}
	// 				loader={loginLoader}
	// 				action={loginAction}
	// 			/>
	// 			<Route
	// 				path="register"
	// 				element={<Register />}
	// 				loader={registerLoader}
	// 				action={registerAction}
	// 			/>
	// 			<Route path="profile" element={<Profile />} loader={profileLoader} />
	// 		</Route>
	// 	)
	// );

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="products" element={<ProductList />} />
				<Route path="product/:id" element={<Product />} />
				<Route element={<HostLayout />}></Route>
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
