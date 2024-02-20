import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	Info,
	Container,
	Circle,
	Image,
	Icon,
	FavoriteBorderIcon,
	LocalMallIcon,
	SearchOutlinedIcon,
} from "../styles/product.css";
import {
	useAddToCartMutation,
	useAddToWishlistMutation,
	useGetCartsQuery,
	useGetWishlistsQuery,
	useRemoveFromCartMutation,
	useRemoveFromWishlistMutation,
} from "../features/apis";

const Product = ({ product }) => {
	const { data: cartData, isLoading: isCartDataLoading } = useGetCartsQuery();
	const { data: wishlistData, isLoading: iswishlistDataLoading } =
		useGetWishlistsQuery();
	const [addToCart, { isSuccess: isAddTocartSuccess }] = useAddToCartMutation();
	const [removeFromCart] = useRemoveFromCartMutation();
	const [addToWishlist, { isSuccess: isAddToWishlistSuccess }] =
		useAddToWishlistMutation();
	const [removeFromWishlist] = useRemoveFromWishlistMutation();
	const navigate = useNavigate();
	let pathname = useLocation().pathname;
  pathname === "/products" && (pathname = "/products?page=1")

	let cartProducts, wishlistProducts;
	cartData && (cartProducts = cartData.products);
	wishlistData && (wishlistProducts = wishlistData.products);

	// extracting product
	const cartProduct = cartProducts?.find(
		prod => prod.productId === product._id
	);
	const wishlistProduct = wishlistProducts?.find(
		prod => prod.productId === product._id
	);

	const isInWishList = Boolean(wishlistProduct);
	const isInCart = Boolean(cartProduct);

	const handleAddToCart = () => {
		isInCart && removeFromCart({ _id: cartProduct._id });
		!isInCart && addToCart({ productId: product._id });
		!isAddTocartSuccess &&
			navigate("/login", {
				state: { message: "You have to login first", redirectTo: pathname },
			});
	};

	const handleAddToWishlist = () => {
		isInWishList && removeFromWishlist({ _id: wishlistProduct._id });
		!isInWishList && addToWishlist({ productId: product._id });
		!isAddToWishlistSuccess &&
			navigate("/login", {
				state: { message: "You have to login first", redirectTo: pathname },
			});
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
