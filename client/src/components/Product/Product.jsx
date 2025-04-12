import { Link } from "react-router-dom";
import {
	Info,
	Container,
	Circle,
	Image,
	Icon,
	FavoriteBorderIcon,
	LocalMallIcon,
	SearchOutlinedIcon,
} from "./product.css";
import {
	useAddToCartMutation,
	useAddToWishlistMutation,
	useGetCartsQuery,
	useGetWishlistsQuery,
	useRemoveFromCartMutation,
	useRemoveFromWishlistMutation,
} from "../../features/apis";

const Product = ({ product }) => {
	const {
		data: cartData,
		isLoading: isCartDataLoading,
		isError: isCartError,
	} = useGetCartsQuery();
	const {
		data: wishlistData,
		isLoading: iswishlistDataLoading,
		isError: isWishlistError,
	} = useGetWishlistsQuery();
	const [addToCart] = useAddToCartMutation();
	const [removeFromCart] = useRemoveFromCartMutation();
	const [addToWishlist] = useAddToWishlistMutation();
	const [removeFromWishlist] = useRemoveFromWishlistMutation();

	let cartProducts, wishlistProducts;
	cartData && (cartProducts = cartData.products);
	wishlistData && (wishlistProducts = wishlistData.products);

	// extracting product
	const cartProduct =
		!isCartError && cartProducts?.find(prod => prod.productId === product._id);
	const wishlistProduct =
		!isWishlistError &&
		wishlistProducts?.find(prod => prod.productId === product._id);

	const isInWishList = Boolean(wishlistProduct);
	const isInCart = Boolean(cartProduct);

	const handleAddToCart = () => {
		isInCart && removeFromCart({ _id: cartProduct._id });
		!isInCart && addToCart({ productId: product._id });
	};

	const handleAddToWishlist = () => {
		isInWishList && removeFromWishlist({ _id: wishlistProduct._id });
		!isInWishList && addToWishlist({ productId: product._id });
	};

	return (
		<Container cat={product.categories}>
			<Circle cat={product.categories} />
			<Image src={product.img} />
			<Info className="info">
				<Icon aria-disabled={isCartDataLoading} onClick={handleAddToCart}>
					<LocalMallIcon isincart={`${isInCart}`} />
				</Icon>
				<Icon>
					<Link to={`/product/${product._id}`} className="link">
						<SearchOutlinedIcon />
					</Link>
				</Icon>
				<Icon
					aria-disabled={iswishlistDataLoading}
					onClick={handleAddToWishlist}>
					<FavoriteBorderIcon isinwislhist={`${isInWishList}`} />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
