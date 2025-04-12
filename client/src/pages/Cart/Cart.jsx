import {
	Container,
	Summary,
	Item,
	Title,
	ProductsCont,
	ItemText,
	ItemPrice,
	NoItemMsg,
} from "./cart.css";
import { Loader, CartItem, PayButton } from "../../components";
import { useGetCartsQuery } from "../../features/apis";

const Cart = () => {
	const { data, isLoading } = useGetCartsQuery();

	return isLoading ? (
		<Loader />
	) : (
		<Container>
			<ProductsCont>
				{data?.products.map(prod => (
					<CartItem product={prod} key={prod._id} />
				))}
			</ProductsCont>
			{/* No items msg */}
			<NoItemMsg length={data?.products.length}>No items in cart</NoItemMsg>
			<Summary length={data?.products.length} elevation={1}>
				<Title variant="body1" component="h2" className="summary">
					ORDER SUMMARY
				</Title>
				<Item>
					<ItemText>Subtotal</ItemText>
					<ItemPrice>₹ {data?.totalPrice}</ItemPrice>
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
					<ItemPrice>₹ {data?.totalPrice}</ItemPrice>
				</Item>
				<PayButton products={data?.products} />
			</Summary>
		</Container>
	);
};

export default Cart;
