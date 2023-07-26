import store from "./features/store"
import { redirect } from "react-router-dom"
import { getUser } from "./features/user/userSlice"
import { getLoggedInUser } from "./api"

export const requireAuth = async (request) => {
    const pathname = new URL(request.url).pathname
    // Performance optimization
    !store.getState().user.user && await store.dispatch(getUser())
    const user = await getLoggedInUser()
    
    if(!user) {
        throw redirect(
            `/login?message=You must log in first.&redirectTo=${pathname}`
        )
    }

    return user
}

// filter
export const filterByCategory = (products, category) => {
    return products?.filter(prod => prod.categories.includes(category))
}
export const filterByColor = (products, color) => {
    return products.filter(prod => prod.color.includes(color))
}
export const filterBySize = (products, size) => {
    return products.filter(prod => prod.size.includes(size))
}
// sort
export const sortProducts = (products, sort) => {

    sort === "asc" 
        ? products.sort((a, b) => a.price - b.price) 
        : products.sort((a, b) => b.price - a.price)

    return products
}
// filtersData
export const getFiltersData = (products) => {
    const colors = []
    const categories = []
    const sizes = []
    
    products.forEach(prod => {
        const prodColors = prod.color
        const prodcategories = prod.categories
        const prodSizes = prod.size
        
        // colors
        for(let color of prodColors) {
            !colors.includes(color) && colors.push(color)
        }
        // categories
        for(let category of prodcategories) {
            !categories.includes(category) && categories.push(category)
        }
        // sizes
        for(let size of prodSizes) {
            !sizes.includes(size) && sizes.push(size)
        }
    })

    return { colors, categories, sizes }
}
// page
export const getProductsByPage = (products, page = 1) => {
    const pageSize = 6
    let lastProductIdx = page * pageSize - 1
    let firstProductIdx = lastProductIdx - pageSize + 1
    products = products.slice(firstProductIdx, lastProductIdx + 1)
    
    return products
}