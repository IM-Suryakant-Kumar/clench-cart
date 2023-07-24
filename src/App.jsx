import { 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList, { loader as productListLoader } from "./pages/ProductList";
import Product from "./pages/Product";
import Register, { loader as registerLoader, action as registerAction } from "./pages/Register";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import Cart, { loader as cartLoader } from "./pages/Cart";
import Success from "./pages/Success";
import Layout from "./components/Layout"
import Profile, { loader as profileLoader } from "./pages/Profile";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route 
            path="products" 
            element={<ProductList />}
            loader={productListLoader}
        />
        <Route 
            path="product/:id" 
            element={<Product />} 
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
            path="profile"
            element={<Profile />}
            loader={profileLoader}
        />
        <Route 
            path="cart" 
            element={<Cart />}
            loader={cartLoader}
        />
        <Route 
            path="success" 
            element={<Success />} 
        />
        <Route 
            path="*" 
            element={<h1>Route does not exist</h1>} 
        />
    </Route>
))

const App = () => <RouterProvider router={router} />

export default App;
