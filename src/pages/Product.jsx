import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense, useState } from "react";
import {  addToCart } from "../features/cart/cartSlice";
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
import { getProduct } from "../api";
import Loader from "../components/Loader";

export const loader = ({ params }) => {
    return defer({product: getProduct(params.id)})
}

const Product = () => {
    const loaderData = useLoaderData()

	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const dispatch = useDispatch();

    const renderProduct = (product) => {
        const handleQuantity = (type) => {
            if (type === "dec") {
                quantity > 1 && setQuantity(quantity - 1);
            } else {
                setQuantity(quantity + 1);
            }
        };
    
        const handleAddToCart = () => {

            dispatch(addToCart({
                productId: product._id, 
                quantity, 
                color: color || product.color[0], 
                size: size || product.size[0]
            }));
        };

        return (
            <Wrapper>
				<ImageContainer>
					<Image src={product.img} />
				</ImageContainer>
				<InfoContainer>
					<Title variant="subtitle1" component="h3">{product.title}</Title>
					<Desc variant="body1" component="p">{product.desc}</Desc>
					<Price variant="subtitle1" component="p">₹ {product.price}</Price>
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
						<Button onClick={handleAddToCart}>
							ADD TO CART
						</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
        )
    }

	return (
		<Container>
            <Suspense fallback={<Loader />}>
                <Await resolve={loaderData.product}>{renderProduct}</Await>
            </Suspense>
		</Container>
	);
};

export default Product;
