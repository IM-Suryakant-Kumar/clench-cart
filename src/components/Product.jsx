import { Link } from "react-router-dom";
import { 
    Info, 
    Container, Circle, 
    Image, 
    Icon, 
    FavoriteBorderIcon,
    LocalMallIcon,
    SearchOutlinedIcon
 } from "../styles/product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../features/cart/cartSlice";
import { createWishlist, removeWishlist } from "../features/wishlist/wishlistSlice";

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products)
    const wishlistProducts = useSelector(state => state.wishlist.products)

    // extracting product
    const cartProduct = cartProducts.find(prod => prod.productId === product._id)
    const wishlistProduct = wishlistProducts.find(prod => prod.productId === product._id)

    const isInWishList = Boolean(wishlistProduct)
    const isInCart = Boolean(cartProduct)

    const handleAddToCart = () => {
        isInCart && dispatch(removeCart(cartProduct._id))
        !isInCart && dispatch(addToCart({productId: product._id}))
    }

    const handleAddToWishlist = () => {
        isInWishList && dispatch(removeWishlist(wishlistProduct._id))
        !isInWishList && dispatch(createWishlist({productId: product._id}))
    }

	return (
		<Container cat={product.categories}>
			<Circle cat={product.categories} />
			<Image src={product.img} />
			<Info className="info">
				<Icon onClick={handleAddToCart}>
					<LocalMallIcon isincart={`${isInCart}`} />
				</Icon>
				<Icon>
					<Link to={`/product/${product._id}`} className="link">
						<SearchOutlinedIcon />
					</Link>
				</Icon>
				<Icon onClick={handleAddToWishlist}>
					<FavoriteBorderIcon isinwislhist={`${isInWishList}`} />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
