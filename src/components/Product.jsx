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

const Product = ({ product }) => {
	return (
		<Container cat={product.categories}>
			<Circle cat={product.categories} />
			<Image src={product.img} />
			<Info className="info">
				<Icon>
					<LocalMallIcon />
				</Icon>
				<Icon>
					<Link to={`/product/${product._id}`} className="link">
						<SearchOutlinedIcon />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
