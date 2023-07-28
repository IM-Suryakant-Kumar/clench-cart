import PayButton from "../components/PayButton";
import { requireAuth } from "../util"
import {
	Container,
	Summary,
	Item,
	Title,
    ProductsCont,
    ItemText,
    ItemPrice,
    NoItemMsg
} from "../styles/cart.css";
import CartItem from "../components/CartItem";
import { getAllCart } from "../api";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Await, defer, useLoaderData } from "react-router-dom";
import Loader from "../components/Loader";

export const loader = async ({ request }) => {
    await requireAuth(request)
    return  defer({products: getAllCart()})
}

const Cart = () => {
    const { products, totalPrice } = useSelector(state => state.cart)
    const loaderData = useLoaderData()

    const renderCartProducts = () => (
        <Container>
            <ProductsCont>
                {products.map(prod => (
                    <CartItem product={prod} key={prod._id} />
                ))}
            </ProductsCont>
            {/* No items msg */}
            <NoItemMsg length={products.length}>No items in cart</NoItemMsg>
            <Summary length={products.length} elevation={1}>
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
		</Container>
    )

	return (
        <Suspense fallback={<Loader />}>
            <Await resolve={loaderData.products}>{renderCartProducts}</Await>
        </Suspense>
	);
};

export default Cart;
