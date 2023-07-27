import { Await, defer, useLoaderData } from "react-router-dom"
import { requireAuth } from "../util"
import { getAllOrders } from "../api"
import { Suspense } from "react"
import Loader from "../components/Loader"
import { 
    Container, 
    Wrapper,
    Image,
    Top,
    Title,
    Bottom,
    Color,
    Quantity,
    Price
} from "../styles/orders.css"

export const loader = async ({ request }) => {
    await requireAuth(request)
    return defer({ products: getAllOrders() })
}

const Orders = () => {
    const loaderData = useLoaderData()

    const renderProducts = (products) => {
        console.log(products)

        return (
            <Container>
                {products.map(({_id, img, title, price, color, quantity}) => (
                    <Wrapper key={_id}>
                        <Top>
                            <Image src={img} alt="img" />
                            <Title variant="subtitle1" component="h2">{title}</Title>
                        </Top>
                        <Bottom>
                            <Color color={color}></Color>
                            <Quantity>Quantity: {quantity}</Quantity>
                            <Price>Price: ₹ {price}</Price>
                        </Bottom>
                    </Wrapper>
                ))}
            </Container>
        )
    }

    return (
        <Suspense fallback={<Loader />}>
            <Await resolve={loaderData.products}>{renderProducts}</Await>
        </Suspense>
    )
}

export default Orders