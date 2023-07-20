import { 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart, { loader as cartLoader } from "./pages/Cart";
import Success from "./pages/Success";
import Layout from "./components/Layout"
import Profile, { loader as profileLoader } from "./pages/Profile";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route 
            path="products/:category" 
            element={<ProductList />} 
        />
        <Route 
            path="product/:id" 
            element={<Product />} 
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
            path="login" 
            element={<Login />} 
        />
        <Route 
            path="register" 
            element={<Register />}
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
