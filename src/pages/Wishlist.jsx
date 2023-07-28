import { Await, defer, useLoaderData } from "react-router-dom"
import { Bottom, Container, Image, InfoCont, NoItemMsg, Price, ProductCont, RemoveIcon, SButton, Title, Top, Wrapper } from "../styles/wishlist.css"
import { requireAuth } from "../util"
import { getAllwishlist } from "../api"
import { Suspense } from "react"
import Loader from "../components/Loader"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"
import { removeWishlist } from "../features/wishlist/wishlistSlice"

export const loader = async ({ request }) => {
    await requireAuth(request)
    return defer({ products: getAllwishlist() })
}

const Wishlist = () => {
    const loaderData = useLoaderData()
    const dispatch = useDispatch()
    const { products }  = useSelector(state => state.wishlist)

    // console.log(products)

    const renderProducts = () => {
        return (
            <Container>
                <NoItemMsg length={products.length}>No items in wishlist</NoItemMsg>
                <Wrapper>
                    {products.map(prod => (
                        <ProductCont key={prod._id}>
                            <Top>
                                <Image src={prod.img} />
                                <InfoCont>
                                    <Title>{prod.title}</Title>
                                    <Price>Price: ₹ {prod.price}</Price>
                                </InfoCont>
                            </Top>
                            <Bottom>
                                <SButton 
                                    variant="contained"
                                    onClick={() => dispatch(
                                        addToCart({productId: prod.productId})
                                    )}
                                >Add To Cart</SButton>
                                <RemoveIcon onClick={() => dispatch(
                                    removeWishlist(prod._id)
                                )} />
                            </Bottom>
                        </ProductCont>
                    ))}
                </Wrapper>
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