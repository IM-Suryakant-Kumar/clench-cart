import { 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
} from "react-router-dom";
import Layout, { loader as layoutLoader } from "./components/Layout"
import Home, { loader as homeLoader } from "./pages/Home";
import ProductList, { loader as productListLoader } from "./pages/ProductList";
import Product, {loader as productLoader} from "./pages/Product";
import Register, { loader as registerLoader, action as registerAction } from "./pages/Register";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import Cart, { loader as cartLoader } from "./pages/Cart";
import Success from "./pages/Success";
import Profile, { loader as profileLoader } from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";

const router = createBrowserRouter(createRoutesFromElements(
    <Route 
        path="/" element={<Layout /> } 
        loader={layoutLoader}
    >
        <Route 
            index 
            element={<Home />} 
            loader={homeLoader}
        />
        <Route 
            path="products" 
            element={<ProductList />}
            loader={productListLoader}
        />
        <Route 
            path="product/:id" 
            element={<Product />}
            loader={productLoader}
        />
        <Route 
            path="profile"
            element={<Profile />}
            loader={profileLoader}
        />
        <Route 
            path="cart" 
            element={<Cart />}
            loader={cartLoader}
            errorElement={<Error />}
        />
        <Route 
            path="success" 
            element={<Success />} 
        />
        <Route 
            path="login" 
            element={<Login />}
            loader={loginLoader} 
            action={loginAction}
        />
        <Route 
            path="register" 
            element={<Register />}
            loader={registerLoader}
            action ={registerAction}
        />
        <Route 
            path="*" 
            element={<NotFound />} 
        />
    </Route>
))

const App = () => <RouterProvider router={router} />

export default App;
