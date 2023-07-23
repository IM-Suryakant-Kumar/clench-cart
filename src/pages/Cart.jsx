import { useSelector } from "react-redux";
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
// import { defer } from "react-router-dom";

export const loader = async ({ request }) => {
    await requireAuth(request)

    // return defer({ carts: getCart() })
    return null 
}

const Cart = () => {
	const { products, total } = useSelector((state) => state.cart);

	// console.log(products);
	return (
		<Container>
            <Title variant="subtitle1" component="h1">YOUR BAG</Title>
            <Button>CONTINUE SHOPPING</Button>
            <ProductsCont>
                {products.map(prod => (
                    <CartItem product={prod} key={prod._id} />
                ))}
            </ProductsCont>
            <Summary elevation={1}>
                <Title variant="body1" component="h2" className="summary">ORDER SUMMARY</Title>
                <Item>
                    <ItemText>Subtotal</ItemText>
                    <ItemPrice>₹ {total}</ItemPrice>
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
                    <ItemPrice>₹ {total}</ItemPrice>
                </Item>
                <PayButton products={products} />
            </Summary>
		</Container>
	);
};

export default Cart;
