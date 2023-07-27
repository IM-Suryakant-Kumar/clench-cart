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
    ItemPrice,
    NoItemMsg
} from "../styles/cart.css";
import CartItem from "../components/CartItem";
import { getAllCart } from "../api";
import React from "react";
import { useSelector } from "react-redux";

export const loader = async ({ request }) => {
    await requireAuth(request)
    return await getAllCart()
}

const Cart = () => {
    const { products, totalPrice } = useSelector(state => state.cart)

	return (
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
	);
};

export default Cart;
