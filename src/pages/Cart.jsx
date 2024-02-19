import {
	Container,
	Summary,
	Item,
	Title,
	ProductsCont,
	ItemText,
	ItemPrice,
	NoItemMsg,
} from "../styles/cart.css";
import { Loader, CartItem, PayButton } from "../components";
import { useGetCartsQuery } from "../features/apis";

const Cart = () => {
	const { data, isLoading } = useGetCartsQuery();
	let products, totalPrice;
	if (data) {
		products = data.products;
		totalPrice = data.totalPrice;
	}

	return isLoading ? (
		<Loader />
	) : (
		<Container>
			<ProductsCont>
				{products?.map(prod => (
					<CartItem product={prod} key={prod._id} />
				))}
			</ProductsCont>
			{/* No items msg */}
			<NoItemMsg length={products?.length}>No items in cart</NoItemMsg>
			<Summary length={products?.length} elevation={1}>
				<Title variant="body1" component="h2" className="summary">
					ORDER SUMMARY
				</Title>
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
