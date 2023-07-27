import { Await, defer, useLoaderData } from "react-router-dom"
import { Container } from "../styles/wishlist.css"
import { requireAuth } from "../util"
import { getAllOrders } from "../api"
import { Suspense } from "react"
import Loader from "../components/Loader"

export const loader = async ({ request }) => {
    await requireAuth(request)
    return defer({ products: getAllOrders() })
}

const Wishlist = () => {
    const loaderData = useLoaderData()

    const renderProducts = (products) => {
        console.log(products)

        return (
            <Container>
                
            </Container>
        )
    }

    return (
        <Suspense fallback={<Loader />}>
            <Await resolve={loaderData.products}>{renderProducts}</Await>
        </Suspense>
    )
}

export default Wishlist