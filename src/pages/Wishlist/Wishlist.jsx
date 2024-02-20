import {
	Bottom,
	Container,
	Image,
	InfoCont,
	NoItemMsg,
	Price,
	ProductCont,
	RemoveIcon,
	SButton,
	Title,
	Top,
	Wrapper,
} from "./wishlist.css";
import { Loader } from "../../components";
import {
	useAddToCartMutation,
	useGetWishlistsQuery,
	useRemoveFromWishlistMutation,
} from "../../features/apis";

const Wishlist = () => {
	const { data, isLoading } = useGetWishlistsQuery();
	const [addToCart, { isLoading: isAddToCartLoading }] = useAddToCartMutation();
	const [removeFromWishlist, { isLoading: isRemoveFromWishlistLoading }] =
		useRemoveFromWishlistMutation();

	return isLoading ? (
		<Loader />
	) : (
		<Container>
			<NoItemMsg length={data?.products.length}>No items in wishlist</NoItemMsg>
			<Wrapper>
				{data?.products.map(prod => (
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
								disabled={isAddToCartLoading}
								onClick={() => addToCart({ productId: prod.productId })}>
								Add To Cart
							</SButton>
							<RemoveIcon
								aria-disabled={isRemoveFromWishlistLoading}
								onClick={() => removeFromWishlist({ _id: prod._id })}
							/>
						</Bottom>
					</ProductCont>
				))}
			</Wrapper>
		</Container>
	);
};

export default Wishlist;
