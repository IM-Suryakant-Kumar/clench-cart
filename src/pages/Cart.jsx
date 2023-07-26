import PayButton from "../components/PayButton";
import { requireAuth } from "../util"
import {
	Container,
	Summary,
	Item,
	Title,
	SButton as Button,
    ProductsCont,
    ItemText,
    ItemPrice
} from "../styles/cart.css";
import CartItem from "../components/CartItem";
import { getAllCart } from "../api";
import { Await, defer, useLoaderData } from "react-router-dom";
import React from "react";
import Loader from "../components/Loader";

export const loader = async ({ request }) => {
    await requireAuth(request)
    return defer({ cart: getAllCart() })
}

const Cart = () => {
    const loaderData = useLoaderData()

    const renderCart = ({products, totalQuantity, totalPrice}) => {
        console.log({products, totalQuantity, totalPrice})

        return (
            <>
            <ProductsCont>
                {products.map(prod => (
                    <CartItem product={prod} key={prod._id} />
                ))}
            </ProductsCont>
            <Summary elevation={1}>
                <Title variant="body1" component="h2" className="summary">ORDER SUMMARY</Title>
                <Item>
                    <ItemText>Subtotal</ItemText>
                    <ItemPrice>₹ {totalPrice}</ItemPrice>
                </Item>
                <Item>
                    <ItemText>Estimated Shipping</ItemText>
                    <ItemPrice>₹ 5.90</ItemPrice>
                </Item>
                <Item>
                    <ItemText>Shipping Discount</ItemText>
                    <ItemPrice>₹ -5.90</ItemPrice>
                </Item>
                <Item type="total">
                    <ItemText>Total </ItemText>
                    <ItemPrice>₹ {totalPrice}</ItemPrice>
                </Item>
                <PayButton products={products} />
            </Summary>
            </>
        )
    }

	return (
		<Container>
            <Title variant="subtitle1" component="h1">YOUR BAG</Title>
            <Button>CONTINUE SHOPPING</Button>
            <React.Suspense fallback={<Loader />}>
                <Await resolve={loaderData.cart}>{renderCart}</Await>
            </React.Suspense>
		</Container>
	);
};

export default Cart;
