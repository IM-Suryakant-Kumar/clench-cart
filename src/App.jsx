import { 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    Navigate 
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Layout from "./components/Layout"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={"user" ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={"user" ? <Navigate to="/" /> : <Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<h1>Route does not exist</h1>} />
    </Route>
))

const App = () => <RouterProvider router={router} />

export default App;
