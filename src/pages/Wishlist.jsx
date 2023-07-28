import { Await, defer, useLoaderData } from "react-router-dom"
import { Container, NoItemMsg } from "../styles/wishlist.css"
import { requireAuth } from "../util"
import { getAllwishlist } from "../api"
import { Suspense } from "react"
import Loader from "../components/Loader"
import { useDispatch, useSelector } from "react-redux"

export const loader = async ({ request }) => {
    await requireAuth(request)
    return defer({ products: getAllwishlist() })
}

const Wishlist = () => {
    const loaderData = useLoaderData()
    const dispatch = useDispatch()
    const { products }  = useSelector(state => state.wishlist)

    console.log(products)

    const renderProducts = () => {
        return (
            <Container>
                <NoItemMsg length={products.length}>No items in wishlist</NoItemMsg>

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