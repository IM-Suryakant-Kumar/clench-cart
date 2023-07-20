import { toast } from "react-toastify";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import { addProduct } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import {
	AddContainer,
	Button,
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
	Title,
	Wrapper
} from "../styles/productP";

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
					<Title>{product?.title}</Title>
					<Desc>{product?.desc}</Desc>
					<Price>₹ {product?.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
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
									<FilterSizeOption>{s}</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<QuantityContainer>
							<Remove onClick={() => handleQuantity("dec")} />
							<Quantity>{quantity}</Quantity>
							<Add onClick={() => handleQuantity("inc")} />
						</QuantityContainer>
						<Button onClick={handleClickAddToCart}>
							ADD TO CART
						</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
