import {
	Container,
	Desc,
	Image,
	InfoCont,
	Title,
	Color,
	Spec,
	Size,
	Price,
	C,
	DeleteIcon,
} from "./cartItem.css";
import { useRemoveFromCartMutation } from "../../features/apis";

const CartItem = ({ product }) => {
	const [removeFromCart, { isRemoveFromCartLoading }] =
		useRemoveFromCartMutation();

	return (
		<Container>
			<Image src={product.img} />
			<InfoCont>
				<Title variant="h6" component="h1">
					{product.title}
				</Title>
				<Desc variant="subtitle1">{product.desc}</Desc>
				<Spec>
					<Color>
						Color: <C bg={product.color} />
					</Color>
					<Size>Size: {product.size}</Size>
				</Spec>
				<Spec>
					<Price>Price: ₹ {product.price * product.quantity}</Price>
					<Price>Quantity: {product.quantity}</Price>
				</Spec>
				<DeleteIcon
					aria-disabled={isRemoveFromCartLoading}
					onClick={() => removeFromCart({ _id: product._id })}
				/>
			</InfoCont>
		</Container>
	);
};

export default CartItem;
