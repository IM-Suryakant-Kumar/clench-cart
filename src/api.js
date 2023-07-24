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
    sortProducts
} from "./util"

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

export const loginUser = async (data) => {
    await store.dispatch(login(data))
    const { user: { user, error } } = store.getState()

    if(error) {
        const { msg, status, statusText } = error
        throw { msg, status, statusText }
    }

    return user
}

export const loggedInUser = async () => {
    !store.getState().user.user && await store.dispatch(getUser())
    // console.log(store.getState().user.user)
    return store.getState().user.user
}

const getProducts = async () => {
    await store.dispatch(getAllProducts())
    return store.getState().product.products
}

// export const 

export const getFinalProductsData = async ( category, color, size, sort ) => {
    let products = await getProducts()
    // console.log(category, color, size, sort)

    // Fetching all categories, colors, and size
    const filtersData = getFiltersData(products)
    
    // filter
    category && ( products = filterByCategory(products, category) )
    color && ( products = filterByColor(products, color) )
    size && ( products = filterBySize(products, size) )
    // sort 
    sort && ( products = sortProducts(products, sort) )


    return [products, filtersData]
}