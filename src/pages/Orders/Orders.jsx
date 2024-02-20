import { Loader } from "../../components";
import {
	Container,
	Wrapper,
	Image,
	Top,
	Title,
	Bottom,
	Color,
	Quantity,
	Price,
	NoItemMsg,
} from "./orders.css";
import { useGetOrdersQuery } from "../../features/apis";

const Orders = () => {
	const { data, isLoading } = useGetOrdersQuery();

	return isLoading ? (
		<Loader />
	) : (
		<>
			<NoItemMsg length={data?.products.length}>No items in order</NoItemMsg>
			<Container>
				{data?.products.map(({ _id, img, title, price, color, quantity }) => (
					<Wrapper key={_id}>
						<Top>
							<Image src={img} alt="img" />
							<Title variant="subtitle1" component="h2">
								{title}
							</Title>
						</Top>
						<Bottom>
							<Color color={color}></Color>
							<Quantity>Quantity: {quantity}</Quantity>
							<Price>Price: ₹ {price}</Price>
						</Bottom>
					</Wrapper>
				))}
			</Container>
		</>
	);
};

export default Orders;
