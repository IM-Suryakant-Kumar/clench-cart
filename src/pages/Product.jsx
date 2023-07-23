import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import { addProduct } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
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
	Wrapper
} from "../styles/productP.css";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const dispatch = useDispatch();

	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	const handleClickAddToCart = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
		toast.success("Item added to cart");
	};

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await axios.get(`/products/${id}`);
				setProduct(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		getProduct();
	}, [id]);

	return (
		<Container>
			<Wrapper>
				<ImageContainer>
					<Image src={product?.img} />
				</ImageContainer>
				<InfoContainer>
					<Title variant="subtitle1" component="h3">{product?.title}</Title>
					<Desc variant="body1" component="p">{product?.desc}</Desc>
					<Price variant="subtitle1" component="p">₹ {product?.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle variant="subtitle1">Color</FilterTitle>
							{product.color?.map((c) => (
								<FilterColor
									color={c}
									key={c}
									onClick={() => setColor(c)}
								/>
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize
								onChange={(e) => setSize(e.target.value)}
							>
								{product.size?.map((s) => (
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
						<Button onClick={handleClickAddToCart}>
							ADD TO CART
						</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Product;
