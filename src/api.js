/* eslint-disable no-throw-literal */
import store from "./features/store"
import { getAllProducts } from "./features/product/productSlice"
import { 
    getUser, 
    loginUser as login, 
    registerUser
} from "./features/user/userSlice"
import { 
    getFiltersData,
    filterByCategory, 
    filterByColor, 
    filterBySize,
    sortProducts,
    getProductsByPage,
    searchedProducts
} from "./util"
import { emptyCart, getCarts } from "./features/cart/cartSlice"
import { createOrder as executeCreateOrder, getOrders } from "./features/order/orderSlice"
import { createWishlist as executeCreateWishlist, getWishlists } from "./features/wishlist/wishlistSlice"

// register
export const register = async (data) => {
    if(data.password !== data.confPassword) {
        throw {
            msg: "Password do not match",
            staus: 500,
            statusText: "Bad Request"
        }
    }
    await store.dispatch(registerUser({username: data.username, email: data.email, password: data.password}))

    const {user: { error }} = store.getState()
    if(error) {
        throw {
            msg: error.msg,
            status: error.status,
            statusText: error.statusText
        }
    }

    return null
} 

// login 
export const loginUser = async (data) => {
    await store.dispatch(login(data))
    const { user: { user, error } } = store.getState()

    if(error) {
        const { msg, status, statusText } = error
        throw { msg, status, statusText }
    }

    return user
}

// log out
export const getLoggedInUser = async () => {
    !store.getState().user.user && await store.dispatch(getUser())
    // console.log(store.getState().user.user)
    return store.getState().user.user
}

// get all products
const getProducts = async () => {
    const products = store.getState().product.products
    products.length === 0 && await store.dispatch(getAllProducts())
    return store.getState().product.products
}

// latest products
export const getLatestProducts = async () => {
    const products = await getProducts()

    return products.slice(products.length - 8)
} 

// All products with filtering and sorting
export const getFinalProductsData = async ( category, color, size, sort, page, search ) => {
    let products = await getProducts()
    // console.log(category, color, size, sort)

    // Fetching all categories, colors, and size
    const filtersData = getFiltersData(products)
    // search
    search && ( products = searchedProducts(products, search) )
    // filter
    category && ( products = filterByCategory(products, category) )
    color && ( products = filterByColor(products, color) )
    size && ( products = filterBySize(products, size) )
    // sort 
    sort && ( products = sortProducts(products, sort) )
    // products length
    let length = products.length
    // Page 
    products = getProductsByPage(products, page)

    return [products, filtersData, length]
}

// get single product by id
export const getProduct = async (id) => {
    const products = await getProducts()
    
    const product = products.find(prod => prod._id === id)
    return product
}

// get all carts
export const getAllCart = async () => {
    store.getState().cart.products.length === 0 && await store.dispatch(getCarts())
    // console.log(store.getState().cart)
    return store.getState().cart
}

// Create Order
export const createOrder = async (request) => {
    const pathname = new URL(request.url).pathname
    console.log(pathname)
    await store.dispatch(executeCreateOrder())

    return store.dispatch(emptyCart())
}
// Get all orders
export const getAllOrders = async () => { 
    store.getState().order.products.length === 0 && await store.dispatch(getOrders())
    
    return store.getState().order.products
} 

// Create wishlist
export const createWishlist = async (id) => {
    return await store.dispatch(executeCreateWishlist(id))
}
// Get all wishlists
export const getAllwishlist = async () => {
    store.getState().wishlist.products.length === 0 && await store.dispatch(getWishlists())

    return store.getState().wishlist.products
} 