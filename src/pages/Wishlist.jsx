import { Await, defer, useLoaderData } from "react-router-dom"
import { Container } from "../styles/wishlist.css"
import { requireAuth } from "../util"
import { getAllwishlist } from "../api"
import { Suspense } from "react"
import Loader from "../components/Loader"

export const loader = async ({ request }) => {
    await requireAuth(request)
    return defer({ products: getAllwishlist() })
}

const Wishlist = () => {
    const loaderData = useLoaderData()

    const renderProducts = (products) => {
        console.log(products)

        return (
            <Container>
                wishlists
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