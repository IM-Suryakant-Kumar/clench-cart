import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
	AddContainer,
	AddIcon,
	SButton as Button,
	Container,
	Desc,
	Filter,
	FilterColor,
	FilterContainer,
	FilterSize,
	FilterSizeOption,
	FilterTitle,
	Image,
	ImageContainer,
	InfoContainer,
	Price,
	Quantity,
	QuantityContainer,
	RemoveIcon,
	Title,
	Wrapper,
} from "./product.css";
import {
	useAddToCartMutation,
	useGetCartsQuery,
	useGetProductsQuery,
} from "../../features/apis";
import { Loader } from "../../components";

const Product = () => {
	const { data: cartData } = useGetCartsQuery();
	const { data, isLoading } = useGetProductsQuery();
	const [addToCart, { isLoading: isAddToCartLoading }] = useAddToCartMutation();
	const { id } = useParams();
	const navigate = useNavigate();

	const product = data?.products.find(p => p._id === id);
	const isInCart = cartData?.products.find(p => p.productId === id);

	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");

	const handleQuantity = type => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	const handleAddToCart = () => {
		addToCart({
			productId: product?._id,
			quantity,
			color: color || product?.color[0],
			size: size || product?.size[0],
		});
	};

	return isLoading ? (
		<Loader />
	) : (
		<Container>
			<Wrapper>
				<ImageContainer>
					<Image src={product?.img} />
				</ImageContainer>
				<InfoContainer>
					<Title variant="subtitle1" component="h3">
						{product?.title}
					</Title>
					<Desc variant="body1" component="p">
						{product?.desc}
					</Desc>
					<Price variant="subtitle1" component="p">
						₹ {product?.price}
					</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle variant="subtitle1">Color</FilterTitle>
							{product?.color?.map(c => (
								<FilterColor color={c} key={c} onClick={() => setColor(c)} />
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={e => setSize(e.target.value)}>
								{product?.size?.map(s => (
									<FilterSizeOption key={s}>{s}</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<QuantityContainer>
							<RemoveIcon onClick={() => handleQuantity("dec")} />
							<Quantity component="span">{quantity}</Quantity>
							<AddIcon onClick={() => handleQuantity("inc")} />
						</QuantityContainer>
						<Button
							disabled={isAddToCartLoading}
							onClick={() => {
								isInCart ? navigate("/cart") : handleAddToCart();
							}}>
							{isInCart ? "Go to Cart" : "ADD TO CART"}
						</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Product;
